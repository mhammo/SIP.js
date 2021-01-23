(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./emitter", "./subscription-state"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Subscription = void 0;
    const emitter_1 = require("./emitter");
    const subscription_state_1 = require("./subscription-state");
    /**
     * A subscription provides {@link Notification} of events.
     *
     * @remarks
     * See {@link Subscriber} for details on establishing a subscription.
     *
     * @public
     */
    class Subscription {
        /**
         * Constructor.
         * @param userAgent - User agent. See {@link UserAgent} for details.
         * @internal
         */
        constructor(userAgent, options = {}) {
            this._disposed = false;
            this._state = subscription_state_1.SubscriptionState.Initial;
            this._logger = userAgent.getLogger("sip.Subscription");
            this._stateEventEmitter = new emitter_1.EmitterImpl();
            this._userAgent = userAgent;
            this.delegate = options.delegate;
        }
        /**
         * Destructor.
         */
        dispose() {
            if (this._disposed) {
                return Promise.resolve();
            }
            this._disposed = true;
            this._stateEventEmitter.removeAllListeners();
            return Promise.resolve();
        }
        /**
         * The subscribed subscription dialog.
         */
        get dialog() {
            return this._dialog;
        }
        /**
         * True if disposed.
         * @internal
         */
        get disposed() {
            return this._disposed;
        }
        /**
         * Subscription state. See {@link SubscriptionState} for details.
         */
        get state() {
            return this._state;
        }
        /**
         * Emits when the subscription `state` property changes.
         */
        get stateChange() {
            return this._stateEventEmitter;
        }
        /** @internal */
        stateTransition(newState) {
            const invalidTransition = () => {
                throw new Error(`Invalid state transition from ${this._state} to ${newState}`);
            };
            // Validate transition
            switch (this._state) {
                case subscription_state_1.SubscriptionState.Initial:
                    if (newState !== subscription_state_1.SubscriptionState.NotifyWait && newState !== subscription_state_1.SubscriptionState.Terminated) {
                        invalidTransition();
                    }
                    break;
                case subscription_state_1.SubscriptionState.NotifyWait:
                    if (newState !== subscription_state_1.SubscriptionState.Subscribed && newState !== subscription_state_1.SubscriptionState.Terminated) {
                        invalidTransition();
                    }
                    break;
                case subscription_state_1.SubscriptionState.Subscribed:
                    if (newState !== subscription_state_1.SubscriptionState.Terminated) {
                        invalidTransition();
                    }
                    break;
                case subscription_state_1.SubscriptionState.Terminated:
                    invalidTransition();
                    break;
                default:
                    throw new Error("Unrecognized state.");
            }
            // Guard against duplicate transition
            if (this._state === newState) {
                return;
            }
            // Transition
            this._state = newState;
            this._logger.log(`Subscription ${this._dialog ? this._dialog.id : undefined} transitioned to ${this._state}`);
            this._stateEventEmitter.emit(this._state);
            // Dispose
            if (newState === subscription_state_1.SubscriptionState.Terminated) {
                this.dispose();
            }
        }
    }
    exports.Subscription = Subscription;
});
