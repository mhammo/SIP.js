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
/******/ 	return __webpack_require__(__webpack_require__.s = 316);
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

/***/ 21:
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
    exports.ClientTransaction = void 0;
    const transaction_1 = require("./transaction");
    /**
     * Client Transaction.
     * @remarks
     * The client transaction provides its functionality through the
     * maintenance of a state machine.
     *
     * The TU communicates with the client transaction through a simple
     * interface.  When the TU wishes to initiate a new transaction, it
     * creates a client transaction and passes it the SIP request to send
     * and an IP address, port, and transport to which to send it.  The
     * client transaction begins execution of its state machine.  Valid
     * responses are passed up to the TU from the client transaction.
     * https://tools.ietf.org/html/rfc3261#section-17.1
     * @public
     */
    class ClientTransaction extends transaction_1.Transaction {
        constructor(_request, transport, user, state, loggerCategory) {
            super(transport, user, ClientTransaction.makeId(_request), state, loggerCategory);
            this._request = _request;
            this.user = user;
            // The Via header field indicates the transport used for the transaction
            // and identifies the location where the response is to be sent.  A Via
            // header field value is added only after the transport that will be
            // used to reach the next hop has been selected (which may involve the
            // usage of the procedures in [4]).
            // https://tools.ietf.org/html/rfc3261#section-8.1.1.7
            _request.setViaHeader(this.id, transport.protocol);
        }
        static makeId(request) {
            if (request.method === "CANCEL") {
                if (!request.branch) {
                    throw new Error("Outgoing CANCEL request without a branch.");
                }
                return request.branch;
            }
            else {
                return "z9hG4bK" + Math.floor(Math.random() * 10000000);
            }
        }
        /** The outgoing request the transaction handling. */
        get request() {
            return this._request;
        }
        /**
         * A 408 to non-INVITE will always arrive too late to be useful ([3]),
         * The client already has full knowledge of the timeout. The only
         * information this message would convey is whether or not the server
         * believed the transaction timed out. However, with the current design
         * of the NIT, a client cannot do anything with this knowledge. Thus,
         * the 408 is simply wasting network resources and contributes to the
         * response bombardment illustrated in [3].
         * https://tools.ietf.org/html/rfc4320#section-4.1
         */
        onRequestTimeout() {
            if (this.user.onRequestTimeout) {
                this.user.onRequestTimeout();
            }
        }
    }
    exports.ClientTransaction = ClientTransaction;
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

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(4), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9), __webpack_require__(21), __webpack_require__(12)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NonInviteClientTransaction = void 0;
    const timers_1 = require("../timers");
    const client_transaction_1 = require("./client-transaction");
    const transaction_state_1 = require("./transaction-state");
    /**
     * Non-INVITE Client Transaction.
     * @remarks
     * Non-INVITE transactions do not make use of ACK.
     * They are simple request-response interactions.
     * https://tools.ietf.org/html/rfc3261#section-17.1.2
     * @public
     */
    class NonInviteClientTransaction extends client_transaction_1.ClientTransaction {
        /**
         * Constructor
         * Upon construction, the outgoing request's Via header is updated by calling `setViaHeader`.
         * Then `toString` is called on the outgoing request and the message is sent via the transport.
         * After construction the transaction will be in the "calling" state and the transaction id
         * will equal the branch parameter set in the Via header of the outgoing request.
         * https://tools.ietf.org/html/rfc3261#section-17.1.2
         * @param request - The outgoing Non-INVITE request.
         * @param transport - The transport.
         * @param user - The transaction user.
         */
        constructor(request, transport, user) {
            super(request, transport, user, transaction_state_1.TransactionState.Trying, "sip.transaction.nict");
            // FIXME: Timer E for unreliable transports not implemented.
            //
            // The "Trying" state is entered when the TU initiates a new client
            // transaction with a request.  When entering this state, the client
            // transaction SHOULD set timer F to fire in 64*T1 seconds. The request
            // MUST be passed to the transport layer for transmission.
            // https://tools.ietf.org/html/rfc3261#section-17.1.2.2
            this.F = setTimeout(() => this.timerF(), timers_1.Timers.TIMER_F);
            this.send(request.toString()).catch((error) => {
                this.logTransportError(error, "Failed to send initial outgoing request.");
            });
        }
        /**
         * Destructor.
         */
        dispose() {
            if (this.F) {
                clearTimeout(this.F);
                this.F = undefined;
            }
            if (this.K) {
                clearTimeout(this.K);
                this.K = undefined;
            }
            super.dispose();
        }
        /** Transaction kind. Deprecated. */
        get kind() {
            return "nict";
        }
        /**
         * Handler for incoming responses from the transport which match this transaction.
         * @param response - The incoming response.
         */
        receiveResponse(response) {
            const statusCode = response.statusCode;
            if (!statusCode || statusCode < 100 || statusCode > 699) {
                throw new Error(`Invalid status code ${statusCode}`);
            }
            switch (this.state) {
                case transaction_state_1.TransactionState.Trying:
                    // If a provisional response is received while in the "Trying" state, the
                    // response MUST be passed to the TU, and then the client transaction
                    // SHOULD move to the "Proceeding" state.
                    // https://tools.ietf.org/html/rfc3261#section-17.1.2.2
                    if (statusCode >= 100 && statusCode <= 199) {
                        this.stateTransition(transaction_state_1.TransactionState.Proceeding);
                        if (this.user.receiveResponse) {
                            this.user.receiveResponse(response);
                        }
                        return;
                    }
                    // If a final response (status codes 200-699) is received while in the
                    // "Trying" state, the response MUST be passed to the TU, and the
                    // client transaction MUST transition to the "Completed" state.
                    // https://tools.ietf.org/html/rfc3261#section-17.1.2.2
                    if (statusCode >= 200 && statusCode <= 699) {
                        this.stateTransition(transaction_state_1.TransactionState.Completed);
                        if (statusCode === 408) {
                            this.onRequestTimeout();
                            return;
                        }
                        if (this.user.receiveResponse) {
                            this.user.receiveResponse(response);
                        }
                        return;
                    }
                    break;
                case transaction_state_1.TransactionState.Proceeding:
                    // If a provisional response is received while in the "Proceeding" state,
                    // the response MUST be passed to the TU. (From Figure 6)
                    // https://tools.ietf.org/html/rfc3261#section-17.1.2.2
                    if (statusCode >= 100 && statusCode <= 199) {
                        if (this.user.receiveResponse) {
                            return this.user.receiveResponse(response);
                        }
                    }
                    // If a final response (status codes 200-699) is received while in the
                    // "Proceeding" state, the response MUST be passed to the TU, and the
                    // client transaction MUST transition to the "Completed" state.
                    // https://tools.ietf.org/html/rfc3261#section-17.1.2.2
                    if (statusCode >= 200 && statusCode <= 699) {
                        this.stateTransition(transaction_state_1.TransactionState.Completed);
                        if (statusCode === 408) {
                            this.onRequestTimeout();
                            return;
                        }
                        if (this.user.receiveResponse) {
                            this.user.receiveResponse(response);
                        }
                        return;
                    }
                    break;
                case transaction_state_1.TransactionState.Completed:
                    // The "Completed" state exists to buffer any additional response
                    // retransmissions that may be received (which is why the client
                    // transaction remains there only for unreliable transports).
                    // https://tools.ietf.org/html/rfc3261#section-17.1.2.2
                    return;
                case transaction_state_1.TransactionState.Terminated:
                    // For good measure just absorb additional response retransmissions.
                    return;
                default:
                    throw new Error(`Invalid state ${this.state}`);
            }
            const message = `Non-INVITE client transaction received unexpected ${statusCode} response while in state ${this.state}.`;
            this.logger.warn(message);
            return;
        }
        /**
         * The client transaction SHOULD inform the TU that a transport failure has occurred,
         * and the client transaction SHOULD transition directly to the "Terminated" state.
         * The TU will handle the fail over mechanisms described in [4].
         * https://tools.ietf.org/html/rfc3261#section-17.1.4
         * @param error - Transport error
         */
        onTransportError(error) {
            if (this.user.onTransportError) {
                this.user.onTransportError(error);
            }
            this.stateTransition(transaction_state_1.TransactionState.Terminated, true);
        }
        /** For logging. */
        typeToString() {
            return "non-INVITE client transaction";
        }
        /**
         * Execute a state transition.
         * @param newState - New state.
         */
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
                    if (this.state !== transaction_state_1.TransactionState.Trying &&
                        this.state !== transaction_state_1.TransactionState.Proceeding &&
                        this.state !== transaction_state_1.TransactionState.Completed) {
                        if (!dueToTransportError) {
                            invalidStateTransition();
                        }
                    }
                    break;
                default:
                    invalidStateTransition();
            }
            // Once the client transaction enters the "Completed" state, it MUST set
            // Timer K to fire in T4 seconds for unreliable transports, and zero
            // seconds for reliable transports  The "Completed" state exists to
            // buffer any additional response retransmissions that may be received
            // (which is why the client transaction remains there only for unreliable transports).
            // https://tools.ietf.org/html/rfc3261#section-17.1.2.2
            if (newState === transaction_state_1.TransactionState.Completed) {
                if (this.F) {
                    clearTimeout(this.F);
                    this.F = undefined;
                }
                this.K = setTimeout(() => this.timerK(), timers_1.Timers.TIMER_K);
            }
            // Once the transaction is in the terminated state, it MUST be destroyed immediately.
            // https://tools.ietf.org/html/rfc3261#section-17.1.2.2
            if (newState === transaction_state_1.TransactionState.Terminated) {
                this.dispose();
            }
            // Update state.
            this.setState(newState);
        }
        /**
         * If Timer F fires while the client transaction is still in the
         * "Trying" state, the client transaction SHOULD inform the TU about the
         * timeout, and then it SHOULD enter the "Terminated" state.
         * If timer F fires while in the "Proceeding" state, the TU MUST be informed of
         * a timeout, and the client transaction MUST transition to the terminated state.
         * https://tools.ietf.org/html/rfc3261#section-17.1.2.2
         */
        timerF() {
            this.logger.debug(`Timer F expired for non-INVITE client transaction ${this.id}.`);
            if (this.state === transaction_state_1.TransactionState.Trying || this.state === transaction_state_1.TransactionState.Proceeding) {
                this.onRequestTimeout();
                this.stateTransition(transaction_state_1.TransactionState.Terminated);
            }
        }
        /**
         * If Timer K fires while in this (COMPLETED) state, the client transaction
         * MUST transition to the "Terminated" state.
         * https://tools.ietf.org/html/rfc3261#section-17.1.2.2
         */
        timerK() {
            if (this.state === transaction_state_1.TransactionState.Completed) {
                this.stateTransition(transaction_state_1.TransactionState.Terminated);
            }
        }
    }
    exports.NonInviteClientTransaction = NonInviteClientTransaction;
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