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
/******/ 	return __webpack_require__(__webpack_require__.s = 318);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 13;

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(13), exports);
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
    exports.Exception = void 0;
    /**
     * An Exception is considered a condition that a reasonable application may wish to catch.
     * An Error indicates serious problems that a reasonable application should not try to catch.
     * @public
     */
    class Exception extends Error {
        constructor(message) {
            super(message); // 'Error' breaks prototype chain here
            Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
        }
    }
    exports.Exception = Exception;
});


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(4), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(23)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Transaction = void 0;
    const exceptions_1 = require("../exceptions");
    /**
     * Transaction.
     * @remarks
     * SIP is a transactional protocol: interactions between components take
     * place in a series of independent message exchanges.  Specifically, a
     * SIP transaction consists of a single request and any responses to
     * that request, which include zero or more provisional responses and
     * one or more final responses.  In the case of a transaction where the
     * request was an INVITE (known as an INVITE transaction), the
     * transaction also includes the ACK only if the final response was not
     * a 2xx response.  If the response was a 2xx, the ACK is not considered
     * part of the transaction.
     * https://tools.ietf.org/html/rfc3261#section-17
     * @public
     */
    class Transaction {
        constructor(_transport, _user, _id, _state, loggerCategory) {
            this._transport = _transport;
            this._user = _user;
            this._id = _id;
            this._state = _state;
            this.listeners = new Array();
            this.logger = _user.loggerFactory.getLogger(loggerCategory, _id);
            this.logger.debug(`Constructing ${this.typeToString()} with id ${this.id}.`);
        }
        /**
         * Destructor.
         * Once the transaction is in the "terminated" state, it is destroyed
         * immediately and there is no need to call `dispose`. However, if a
         * transaction needs to be ended prematurely, the transaction user may
         * do so by calling this method (for example, perhaps the UA is shutting down).
         * No state transition will occur upon calling this method, all outstanding
         * transmission timers will be cancelled, and use of the transaction after
         * calling `dispose` is undefined.
         */
        dispose() {
            this.logger.debug(`Destroyed ${this.typeToString()} with id ${this.id}.`);
        }
        /** Transaction id. */
        get id() {
            return this._id;
        }
        /** Transaction kind. Deprecated. */
        get kind() {
            throw new Error("Invalid kind.");
        }
        /** Transaction state. */
        get state() {
            return this._state;
        }
        /** Transaction transport. */
        get transport() {
            return this._transport;
        }
        /**
         * Sets up a function that will be called whenever the transaction state changes.
         * @param listener - Callback function.
         * @param options - An options object that specifies characteristics about the listener.
         *                  If once true, indicates that the listener should be invoked at most once after being added.
         *                  If once true, the listener would be automatically removed when invoked.
         */
        addStateChangeListener(listener, options) {
            const onceWrapper = () => {
                this.removeStateChangeListener(onceWrapper);
                listener();
            };
            (options === null || options === void 0 ? void 0 : options.once) === true ? this.listeners.push(onceWrapper) : this.listeners.push(listener);
        }
        /**
         * This is currently public so tests may spy on it.
         * @internal
         */
        notifyStateChangeListeners() {
            this.listeners.slice().forEach((listener) => listener());
        }
        /**
         * Removes a listener previously registered with addStateListener.
         * @param listener - Callback function.
         */
        removeStateChangeListener(listener) {
            this.listeners = this.listeners.filter((l) => l !== listener);
        }
        logTransportError(error, message) {
            this.logger.error(error.message);
            this.logger.error(`Transport error occurred in ${this.typeToString()} with id ${this.id}.`);
            this.logger.error(message);
        }
        /**
         * Pass message to transport for transmission. If transport fails,
         * the transaction user is notified by callback to onTransportError().
         * @returns
         * Rejects with `TransportError` if transport fails.
         */
        send(message) {
            return this.transport.send(message).catch((error) => {
                // If the transport rejects, it SHOULD reject with a TransportError.
                // But the transport may be external code, so we are careful
                // make sure we convert it to a TransportError if need be.
                if (error instanceof exceptions_1.TransportError) {
                    this.onTransportError(error);
                    throw error;
                }
                let transportError;
                if (error && typeof error.message === "string") {
                    transportError = new exceptions_1.TransportError(error.message);
                }
                else {
                    transportError = new exceptions_1.TransportError();
                }
                this.onTransportError(transportError);
                throw transportError;
            });
        }
        setState(state) {
            this.logger.debug(`State change to "${state}" on ${this.typeToString()} with id ${this.id}.`);
            this._state = state;
            if (this._user.onStateChange) {
                this._user.onStateChange(state);
            }
            this.notifyStateChangeListeners();
        }
        typeToString() {
            return "UnknownType";
        }
    }
    exports.Transaction = Transaction;
});


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(13), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(16), __webpack_require__(38), __webpack_require__(39)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require("./exception"), exports);
    __exportStar(require("./transaction-state-error"), exports);
    __exportStar(require("./transport-error"), exports);
});


/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(4), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(20)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServerTransaction = void 0;
    const transaction_1 = require("./transaction");
    /**
     * Server Transaction.
     * @remarks
     * The server transaction is responsible for the delivery of requests to
     * the TU and the reliable transmission of responses.  It accomplishes
     * this through a state machine.  Server transactions are created by the
     * core when a request is received, and transaction handling is desired
     * for that request (this is not always the case).
     * https://tools.ietf.org/html/rfc3261#section-17.2
     * @public
     */
    class ServerTransaction extends transaction_1.Transaction {
        constructor(_request, transport, user, state, loggerCategory) {
            super(transport, user, _request.viaBranch, state, loggerCategory);
            this._request = _request;
            this.user = user;
        }
        /** The incoming request the transaction handling. */
        get request() {
            return this._request;
        }
    }
    exports.ServerTransaction = ServerTransaction;
});


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(13), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(16)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TransactionStateError = void 0;
    const exception_1 = require("./exception");
    /**
     * Indicates that the operation could not be completed given the current transaction state.
     * @public
     */
    class TransactionStateError extends exception_1.Exception {
        constructor(message) {
            super(message ? message : "Transaction state error.");
        }
    }
    exports.TransactionStateError = TransactionStateError;
});


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(13), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(16)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TransportError = void 0;
    const exception_1 = require("./exception");
    /**
     * Transport error.
     * @public
     */
    class TransportError extends exception_1.Exception {
        constructor(message) {
            super(message ? message : "Unspecified transport error.");
        }
    }
    exports.TransportError = TransportError;
});


/***/ }),

/***/ 4:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 4;

/***/ })

/******/ })));