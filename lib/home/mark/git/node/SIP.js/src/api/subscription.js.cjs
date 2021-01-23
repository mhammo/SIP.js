(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 256);
/******/ })
/************************************************************************/
/******/ ({

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(7), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SubscriptionState = void 0;
    /**
     * {@link Subscription} state.
     * @remarks
     * The {@link Subscription} behaves in a deterministic manner according to the following
     * Finite State Machine (FSM).
     * ```txt
     *                    _______________________________________
     * Subscription      |                                       v
     * Constructed -> Initial -> NotifyWait -> Subscribed -> Terminated
     *                              |____________________________^
     * ```
     * @public
     */
    var SubscriptionState;
    (function (SubscriptionState) {
        SubscriptionState["Initial"] = "Initial";
        SubscriptionState["NotifyWait"] = "NotifyWait";
        SubscriptionState["Subscribed"] = "Subscribed";
        SubscriptionState["Terminated"] = "Terminated";
    })(SubscriptionState = exports.SubscriptionState || (exports.SubscriptionState = {}));
});


/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(7), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(94), __webpack_require__(127)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
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


/***/ }),

/***/ 7:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 7;

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(7), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EmitterImpl = void 0;
    /**
     * An {@link Emitter} implementation.
     * @internal
     */
    class EmitterImpl {
        constructor() {
            this.listeners = new Array();
        }
        /**
         * Sets up a function that will be called whenever the target changes.
         * @param listener - Callback function.
         * @param options - An options object that specifies characteristics about the listener.
         *                  If once true, indicates that the listener should be invoked at most once after being added.
         *                  If once true, the listener would be automatically removed when invoked.
         */
        addListener(listener, options) {
            const onceWrapper = (data) => {
                this.removeListener(onceWrapper);
                listener(data);
            };
            (options === null || options === void 0 ? void 0 : options.once) === true ? this.listeners.push(onceWrapper) : this.listeners.push(listener);
        }
        /**
         * Emit change.
         * @param data - Data to emit.
         */
        emit(data) {
            this.listeners.slice().forEach((listener) => listener(data));
        }
        /**
         * Removes all listeners previously registered with addListener.
         */
        removeAllListeners() {
            this.listeners = [];
        }
        /**
         * Removes a listener previously registered with addListener.
         * @param listener - Callback function.
         */
        removeListener(listener) {
            this.listeners = this.listeners.filter((l) => l !== listener);
        }
        /**
         * Registers a listener.
         * @param listener - Callback function.
         * @deprecated Use addListener.
         */
        on(listener) {
            return this.addListener(listener);
        }
        /**
         * Unregisters a listener.
         * @param listener - Callback function.
         * @deprecated Use removeListener.
         */
        off(listener) {
            return this.removeListener(listener);
        }
        /**
         * Registers a listener then unregisters the listener after one event emission.
         * @param listener - Callback function.
         * @deprecated Use addListener.
         */
        once(listener) {
            return this.addListener(listener, { once: true });
        }
    }
    exports.EmitterImpl = EmitterImpl;
});


/***/ })

/******/ })));