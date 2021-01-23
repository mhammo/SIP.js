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
/******/ 	return __webpack_require__(__webpack_require__.s = 317);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(4), exports);
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
    exports.TransactionState = void 0;
    /**
     * Transaction state.
     * @public
     */
    var TransactionState;
    (function (TransactionState) {
        TransactionState["Accepted"] = "Accepted";
        TransactionState["Calling"] = "Calling";
        TransactionState["Completed"] = "Completed";
        TransactionState["Confirmed"] = "Confirmed";
        TransactionState["Proceeding"] = "Proceeding";
        TransactionState["Terminated"] = "Terminated";
        TransactionState["Trying"] = "Trying";
    })(TransactionState = exports.TransactionState || (exports.TransactionState = {}));
});


/***/ }),

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

/***/ 22:
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

/***/ 28:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 28;

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(4), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9), __webpack_require__(22), __webpack_require__(12)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NonInviteServerTransaction = void 0;
    const timers_1 = require("../timers");
    const server_transaction_1 = require("./server-transaction");
    const transaction_state_1 = require("./transaction-state");
    /**
     * Non-INVITE Server Transaction.
     * @remarks
     * https://tools.ietf.org/html/rfc3261#section-17.2.2
     * @public
     */
    class NonInviteServerTransaction extends server_transaction_1.ServerTransaction {
        /**
         * Constructor.
         * After construction the transaction will be in the "trying": state and the transaction
         * `id` will equal the branch parameter set in the Via header of the incoming request.
         * https://tools.ietf.org/html/rfc3261#section-17.2.2
         * @param request - Incoming Non-INVITE request from the transport.
         * @param transport - The transport.
         * @param user - The transaction user.
         */
        constructor(request, transport, user) {
            super(request, transport, user, transaction_state_1.TransactionState.Trying, "sip.transaction.nist");
        }
        /**
         * Destructor.
         */
        dispose() {
            if (this.J) {
                clearTimeout(this.J);
                this.J = undefined;
            }
            super.dispose();
        }
        /** Transaction kind. Deprecated. */
        get kind() {
            return "nist";
        }
        /**
         * Receive requests from transport matching this transaction.
         * @param request - Request matching this transaction.
         */
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        receiveRequest(request) {
            switch (this.state) {
                case transaction_state_1.TransactionState.Trying:
                    // Once in the "Trying" state, any further request retransmissions are discarded.
                    // https://tools.ietf.org/html/rfc3261#section-17.2.2
                    break;
                case transaction_state_1.TransactionState.Proceeding:
                    // If a retransmission of the request is received while in the "Proceeding" state,
                    // the most recently sent provisional response MUST be passed to the transport layer for retransmission.
                    // https://tools.ietf.org/html/rfc3261#section-17.2.2
                    if (!this.lastResponse) {
                        throw new Error("Last response undefined.");
                    }
                    this.send(this.lastResponse).catch((error) => {
                        this.logTransportError(error, "Failed to send retransmission of provisional response.");
                    });
                    break;
                case transaction_state_1.TransactionState.Completed:
                    // While in the "Completed" state, the server transaction MUST pass the final response to the transport
                    // layer for retransmission whenever a retransmission of the request is received. Any other final responses
                    // passed by the TU to the server transaction MUST be discarded while in the "Completed" state.
                    // https://tools.ietf.org/html/rfc3261#section-17.2.2
                    if (!this.lastResponse) {
                        throw new Error("Last response undefined.");
                    }
                    this.send(this.lastResponse).catch((error) => {
                        this.logTransportError(error, "Failed to send retransmission of final response.");
                    });
                    break;
                case transaction_state_1.TransactionState.Terminated:
                    break;
                default:
                    throw new Error(`Invalid state ${this.state}`);
            }
        }
        /**
         * Receive responses from TU for this transaction.
         * @param statusCode - Status code of response. 101-199 not allowed per RFC 4320.
         * @param response - Response to send.
         */
        receiveResponse(statusCode, response) {
            if (statusCode < 100 || statusCode > 699) {
                throw new Error(`Invalid status code ${statusCode}`);
            }
            // An SIP element MUST NOT send any provisional response with a
            // Status-Code other than 100 to a non-INVITE request.
            // An SIP element MUST NOT respond to a non-INVITE request with a
            // Status-Code of 100 over any unreliable transport, such as UDP,
            // before the amount of time it takes a client transaction's Timer E to be reset to T2.
            // An SIP element MAY respond to a non-INVITE request with a
            // Status-Code of 100 over a reliable transport at any time.
            // https://tools.ietf.org/html/rfc4320#section-4.1
            if (statusCode > 100 && statusCode <= 199) {
                throw new Error("Provisional response other than 100 not allowed.");
            }
            switch (this.state) {
                case transaction_state_1.TransactionState.Trying:
                    // While in the "Trying" state, if the TU passes a provisional response
                    // to the server transaction, the server transaction MUST enter the "Proceeding" state.
                    // The response MUST be passed to the transport layer for transmission.
                    // https://tools.ietf.org/html/rfc3261#section-17.2.2
                    this.lastResponse = response;
                    if (statusCode >= 100 && statusCode < 200) {
                        this.stateTransition(transaction_state_1.TransactionState.Proceeding);
                        this.send(response).catch((error) => {
                            this.logTransportError(error, "Failed to send provisional response.");
                        });
                        return;
                    }
                    if (statusCode >= 200 && statusCode <= 699) {
                        this.stateTransition(transaction_state_1.TransactionState.Completed);
                        this.send(response).catch((error) => {
                            this.logTransportError(error, "Failed to send final response.");
                        });
                        return;
                    }
                    break;
                case transaction_state_1.TransactionState.Proceeding:
                    // Any further provisional responses that are received from the TU while
                    // in the "Proceeding" state MUST be passed to the transport layer for transmission.
                    // If the TU passes a final response (status codes 200-699) to the server while in
                    // the "Proceeding" state, the transaction MUST enter the "Completed" state, and
                    // the response MUST be passed to the transport layer for transmission.
                    // https://tools.ietf.org/html/rfc3261#section-17.2.2
                    this.lastResponse = response;
                    if (statusCode >= 200 && statusCode <= 699) {
                        this.stateTransition(transaction_state_1.TransactionState.Completed);
                        this.send(response).catch((error) => {
                            this.logTransportError(error, "Failed to send final response.");
                        });
                        return;
                    }
                    break;
                case transaction_state_1.TransactionState.Completed:
                    // Any other final responses passed by the TU to the server
                    // transaction MUST be discarded while in the "Completed" state.
                    // https://tools.ietf.org/html/rfc3261#section-17.2.2
                    return;
                case transaction_state_1.TransactionState.Terminated:
                    break;
                default:
                    throw new Error(`Invalid state ${this.state}`);
            }
            const message = `Non-INVITE server transaction received unexpected ${statusCode} response from TU while in state ${this.state}.`;
            this.logger.error(message);
            throw new Error(message);
        }
        /**
         * First, the procedures in [4] are followed, which attempt to deliver the response to a backup.
         * If those should all fail, based on the definition of failure in [4], the server transaction SHOULD
         * inform the TU that a failure has occurred, and SHOULD transition to the terminated state.
         * https://tools.ietf.org/html/rfc3261#section-17.2.4
         */
        onTransportError(error) {
            if (this.user.onTransportError) {
                this.user.onTransportError(error);
            }
            this.stateTransition(transaction_state_1.TransactionState.Terminated, true);
        }
        /** For logging. */
        typeToString() {
            return "non-INVITE server transaction";
        }
        stateTransition(newState, dueToTransportError = false) {
            // Assert valid state transitions.
            const invalidStateTransition = () => {
                throw new Error(`Invalid state transition from ${this.state} to ${newState}`);
            };
            switch (newState) {
                case transaction_state_1.TransactionState.Trying:
                    invalidStateTransition();
                    break;
                case transaction_state_1.TransactionState.Proceeding:
                    if (this.state !== transaction_state_1.TransactionState.Trying) {
                        invalidStateTransition();
                    }
                    break;
                case transaction_state_1.TransactionState.Completed:
                    if (this.state !== transaction_state_1.TransactionState.Trying && this.state !== transaction_state_1.TransactionState.Proceeding) {
                        invalidStateTransition();
                    }
                    break;
                case transaction_state_1.TransactionState.Terminated:
                    if (this.state !== transaction_state_1.TransactionState.Proceeding && this.state !== transaction_state_1.TransactionState.Completed) {
                        if (!dueToTransportError) {
                            invalidStateTransition();
                        }
                    }
                    break;
                default:
                    invalidStateTransition();
            }
            // When the server transaction enters the "Completed" state, it MUST set Timer J to fire
            // in 64*T1 seconds for unreliable transports, and zero seconds for reliable transports.
            // https://tools.ietf.org/html/rfc3261#section-17.2.2
            if (newState === transaction_state_1.TransactionState.Completed) {
                this.J = setTimeout(() => this.timerJ(), timers_1.Timers.TIMER_J);
            }
            // The server transaction MUST be destroyed the instant it enters the "Terminated" state.
            // https://tools.ietf.org/html/rfc3261#section-17.2.2
            if (newState === transaction_state_1.TransactionState.Terminated) {
                this.dispose();
            }
            this.setState(newState);
        }
        /**
         * The server transaction remains in this state until Timer J fires,
         * at which point it MUST transition to the "Terminated" state.
         * https://tools.ietf.org/html/rfc3261#section-17.2.2
         */
        timerJ() {
            this.logger.debug(`Timer J expired for NON-INVITE server transaction ${this.id}.`);
            if (this.state === transaction_state_1.TransactionState.Completed) {
                this.stateTransition(transaction_state_1.TransactionState.Terminated);
            }
        }
    }
    exports.NonInviteServerTransaction = NonInviteServerTransaction;
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

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(28), exports);
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
    exports.Timers = void 0;
    const T1 = 500;
    const T2 = 4000;
    const T4 = 5000;
    /**
     * Timers.
     * @public
     */
    exports.Timers = {
        T1,
        T2,
        T4,
        TIMER_B: 64 * T1,
        TIMER_D: 0 * T1,
        TIMER_F: 64 * T1,
        TIMER_H: 64 * T1,
        TIMER_I: 0 * T4,
        TIMER_J: 0 * T1,
        TIMER_K: 0 * T4,
        TIMER_L: 64 * T1,
        TIMER_M: 64 * T1,
        TIMER_N: 64 * T1,
        PROVISIONAL_RESPONSE_INTERVAL: 60000 // See RFC 3261 Section 13.3.1.1
    };
});


/***/ })

/******/ })));