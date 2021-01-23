(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Notification = void 0;
    /**
     * A notification of an event (incoming NOTIFY).
     * @public
     */
    class Notification {
        /** @internal */
        constructor(incomingNotifyRequest) {
            this.incomingNotifyRequest = incomingNotifyRequest;
        }
        /** Incoming NOTIFY request message. */
        get request() {
            return this.incomingNotifyRequest.message;
        }
        /** Accept the request. */
        accept(options) {
            this.incomingNotifyRequest.accept(options);
            return Promise.resolve();
        }
        /** Reject the request. */
        reject(options) {
            this.incomingNotifyRequest.reject(options);
            return Promise.resolve();
        }
    }
    exports.Notification = Notification;
});
