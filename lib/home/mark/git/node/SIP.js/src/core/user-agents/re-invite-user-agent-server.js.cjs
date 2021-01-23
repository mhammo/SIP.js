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
/******/ 	return __webpack_require__(__webpack_require__.s = 344);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 0;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 1;

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(3), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(23), __webpack_require__(5), __webpack_require__(11), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UserAgentServer = void 0;
    const exceptions_1 = require("../exceptions");
    const messages_1 = require("../messages");
    const utils_1 = require("../messages/utils");
    const transactions_1 = require("../transactions");
    /**
     * User Agent Server (UAS).
     * @remarks
     * A user agent server is a logical entity
     * that generates a response to a SIP request.  The response
     * accepts, rejects, or redirects the request.  This role lasts
     * only for the duration of that transaction.  In other words, if
     * a piece of software responds to a request, it acts as a UAS for
     * the duration of that transaction.  If it generates a request
     * later, it assumes the role of a user agent client for the
     * processing of that transaction.
     * https://tools.ietf.org/html/rfc3261#section-6
     * @public
     */
    class UserAgentServer {
        constructor(transactionConstructor, core, message, delegate) {
            this.transactionConstructor = transactionConstructor;
            this.core = core;
            this.message = message;
            this.delegate = delegate;
            this.logger = this.loggerFactory.getLogger("sip.user-agent-server");
            this.toTag = message.toTag ? message.toTag : utils_1.newTag();
            this.init();
        }
        dispose() {
            this.transaction.dispose();
        }
        get loggerFactory() {
            return this.core.loggerFactory;
        }
        /** The transaction associated with this request. */
        get transaction() {
            if (!this._transaction) {
                throw new Error("Transaction undefined.");
            }
            return this._transaction;
        }
        accept(options = { statusCode: 200 }) {
            if (!this.acceptable) {
                throw new exceptions_1.TransactionStateError(`${this.message.method} not acceptable in state ${this.transaction.state}.`);
            }
            const statusCode = options.statusCode;
            if (statusCode < 200 || statusCode > 299) {
                throw new TypeError(`Invalid statusCode: ${statusCode}`);
            }
            const response = this.reply(options);
            return response;
        }
        progress(options = { statusCode: 180 }) {
            if (!this.progressable) {
                throw new exceptions_1.TransactionStateError(`${this.message.method} not progressable in state ${this.transaction.state}.`);
            }
            const statusCode = options.statusCode;
            if (statusCode < 101 || statusCode > 199) {
                throw new TypeError(`Invalid statusCode: ${statusCode}`);
            }
            const response = this.reply(options);
            return response;
        }
        redirect(contacts, options = { statusCode: 302 }) {
            if (!this.redirectable) {
                throw new exceptions_1.TransactionStateError(`${this.message.method} not redirectable in state ${this.transaction.state}.`);
            }
            const statusCode = options.statusCode;
            if (statusCode < 300 || statusCode > 399) {
                throw new TypeError(`Invalid statusCode: ${statusCode}`);
            }
            const contactHeaders = new Array();
            contacts.forEach((contact) => contactHeaders.push(`Contact: ${contact.toString()}`));
            options.extraHeaders = (options.extraHeaders || []).concat(contactHeaders);
            const response = this.reply(options);
            return response;
        }
        reject(options = { statusCode: 480 }) {
            if (!this.rejectable) {
                throw new exceptions_1.TransactionStateError(`${this.message.method} not rejectable in state ${this.transaction.state}.`);
            }
            const statusCode = options.statusCode;
            if (statusCode < 400 || statusCode > 699) {
                throw new TypeError(`Invalid statusCode: ${statusCode}`);
            }
            const response = this.reply(options);
            return response;
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        trying(options) {
            if (!this.tryingable) {
                throw new exceptions_1.TransactionStateError(`${this.message.method} not tryingable in state ${this.transaction.state}.`);
            }
            const response = this.reply({ statusCode: 100 });
            return response;
        }
        /**
         * If the UAS did not find a matching transaction for the CANCEL
         * according to the procedure above, it SHOULD respond to the CANCEL
         * with a 481 (Call Leg/Transaction Does Not Exist).  If the transaction
         * for the original request still exists, the behavior of the UAS on
         * receiving a CANCEL request depends on whether it has already sent a
         * final response for the original request.  If it has, the CANCEL
         * request has no effect on the processing of the original request, no
         * effect on any session state, and no effect on the responses generated
         * for the original request.  If the UAS has not issued a final response
         * for the original request, its behavior depends on the method of the
         * original request.  If the original request was an INVITE, the UAS
         * SHOULD immediately respond to the INVITE with a 487 (Request
         * Terminated).  A CANCEL request has no impact on the processing of
         * transactions with any other method defined in this specification.
         * https://tools.ietf.org/html/rfc3261#section-9.2
         * @param request - Incoming CANCEL request.
         */
        receiveCancel(message) {
            // Note: Currently CANCEL is being handled as a special case.
            // No UAS is created to handle the CANCEL and the response to
            // it CANCEL is being handled statelessly by the user agent core.
            // As such, there is currently no way to externally impact the
            // response to the a CANCEL request.
            if (this.delegate && this.delegate.onCancel) {
                this.delegate.onCancel(message);
            }
        }
        get acceptable() {
            if (this.transaction instanceof transactions_1.InviteServerTransaction) {
                return (this.transaction.state === transactions_1.TransactionState.Proceeding || this.transaction.state === transactions_1.TransactionState.Accepted);
            }
            if (this.transaction instanceof transactions_1.NonInviteServerTransaction) {
                return (this.transaction.state === transactions_1.TransactionState.Trying || this.transaction.state === transactions_1.TransactionState.Proceeding);
            }
            throw new Error("Unknown transaction type.");
        }
        get progressable() {
            if (this.transaction instanceof transactions_1.InviteServerTransaction) {
                return this.transaction.state === transactions_1.TransactionState.Proceeding;
            }
            if (this.transaction instanceof transactions_1.NonInviteServerTransaction) {
                return false; // https://tools.ietf.org/html/rfc4320#section-4.1
            }
            throw new Error("Unknown transaction type.");
        }
        get redirectable() {
            if (this.transaction instanceof transactions_1.InviteServerTransaction) {
                return this.transaction.state === transactions_1.TransactionState.Proceeding;
            }
            if (this.transaction instanceof transactions_1.NonInviteServerTransaction) {
                return (this.transaction.state === transactions_1.TransactionState.Trying || this.transaction.state === transactions_1.TransactionState.Proceeding);
            }
            throw new Error("Unknown transaction type.");
        }
        get rejectable() {
            if (this.transaction instanceof transactions_1.InviteServerTransaction) {
                return this.transaction.state === transactions_1.TransactionState.Proceeding;
            }
            if (this.transaction instanceof transactions_1.NonInviteServerTransaction) {
                return (this.transaction.state === transactions_1.TransactionState.Trying || this.transaction.state === transactions_1.TransactionState.Proceeding);
            }
            throw new Error("Unknown transaction type.");
        }
        get tryingable() {
            if (this.transaction instanceof transactions_1.InviteServerTransaction) {
                return this.transaction.state === transactions_1.TransactionState.Proceeding;
            }
            if (this.transaction instanceof transactions_1.NonInviteServerTransaction) {
                return this.transaction.state === transactions_1.TransactionState.Trying;
            }
            throw new Error("Unknown transaction type.");
        }
        /**
         * When a UAS wishes to construct a response to a request, it follows
         * the general procedures detailed in the following subsections.
         * Additional behaviors specific to the response code in question, which
         * are not detailed in this section, may also be required.
         *
         * Once all procedures associated with the creation of a response have
         * been completed, the UAS hands the response back to the server
         * transaction from which it received the request.
         * https://tools.ietf.org/html/rfc3261#section-8.2.6
         * @param statusCode - Status code to reply with.
         * @param options - Reply options bucket.
         */
        reply(options) {
            if (!options.toTag && options.statusCode !== 100) {
                options.toTag = this.toTag;
            }
            options.userAgent = options.userAgent || this.core.configuration.userAgentHeaderFieldValue;
            options.supported = options.supported || this.core.configuration.supportedOptionTagsResponse;
            const response = messages_1.constructOutgoingResponse(this.message, options);
            this.transaction.receiveResponse(options.statusCode, response.message);
            return response;
        }
        init() {
            // We are the transaction user.
            const user = {
                loggerFactory: this.loggerFactory,
                onStateChange: (newState) => {
                    if (newState === transactions_1.TransactionState.Terminated) {
                        // Remove the terminated transaction from the core.
                        // eslint-disable-next-line @typescript-eslint/no-use-before-define
                        this.core.userAgentServers.delete(userAgentServerId);
                        this.dispose();
                    }
                },
                onTransportError: (error) => {
                    this.logger.error(error.message);
                    if (this.delegate && this.delegate.onTransportError) {
                        this.delegate.onTransportError(error);
                    }
                    else {
                        this.logger.error("User agent server response transport error.");
                    }
                }
            };
            // Create a new transaction with us as the user.
            const transaction = new this.transactionConstructor(this.message, this.core.transport, user);
            this._transaction = transaction;
            // Add the new transaction to the core.
            const userAgentServerId = transaction.id;
            this.core.userAgentServers.set(transaction.id, this);
        }
    }
    exports.UserAgentServer = UserAgentServer;
});


/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(0), exports);
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
    exports.utf8Length = exports.headerize = exports.newTag = exports.getReasonPhrase = exports.createRandomToken = void 0;
    /**
     * SIP Response Reasons
     * DOC: http://www.iana.org/assignments/sip-parameters
     * @internal
     */
    const REASON_PHRASE = {
        100: "Trying",
        180: "Ringing",
        181: "Call Is Being Forwarded",
        182: "Queued",
        183: "Session Progress",
        199: "Early Dialog Terminated",
        200: "OK",
        202: "Accepted",
        204: "No Notification",
        300: "Multiple Choices",
        301: "Moved Permanently",
        302: "Moved Temporarily",
        305: "Use Proxy",
        380: "Alternative Service",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        410: "Gone",
        412: "Conditional Request Failed",
        413: "Request Entity Too Large",
        414: "Request-URI Too Long",
        415: "Unsupported Media Type",
        416: "Unsupported URI Scheme",
        417: "Unknown Resource-Priority",
        420: "Bad Extension",
        421: "Extension Required",
        422: "Session Interval Too Small",
        423: "Interval Too Brief",
        428: "Use Identity Header",
        429: "Provide Referrer Identity",
        430: "Flow Failed",
        433: "Anonymity Disallowed",
        436: "Bad Identity-Info",
        437: "Unsupported Certificate",
        438: "Invalid Identity Header",
        439: "First Hop Lacks Outbound Support",
        440: "Max-Breadth Exceeded",
        469: "Bad Info Package",
        470: "Consent Needed",
        478: "Unresolvable Destination",
        480: "Temporarily Unavailable",
        481: "Call/Transaction Does Not Exist",
        482: "Loop Detected",
        483: "Too Many Hops",
        484: "Address Incomplete",
        485: "Ambiguous",
        486: "Busy Here",
        487: "Request Terminated",
        488: "Not Acceptable Here",
        489: "Bad Event",
        491: "Request Pending",
        493: "Undecipherable",
        494: "Security Agreement Required",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Server Time-out",
        505: "Version Not Supported",
        513: "Message Too Large",
        580: "Precondition Failure",
        600: "Busy Everywhere",
        603: "Decline",
        604: "Does Not Exist Anywhere",
        606: "Not Acceptable"
    };
    /**
     * @param size -
     * @param base -
     * @internal
     */
    function createRandomToken(size, base = 32) {
        let token = "";
        for (let i = 0; i < size; i++) {
            const r = Math.floor(Math.random() * base);
            token += r.toString(base);
        }
        return token;
    }
    exports.createRandomToken = createRandomToken;
    /**
     * @internal
     */
    function getReasonPhrase(code) {
        return REASON_PHRASE[code] || "";
    }
    exports.getReasonPhrase = getReasonPhrase;
    /**
     * @internal
     */
    function newTag() {
        return createRandomToken(10);
    }
    exports.newTag = newTag;
    /**
     * @param str -
     * @internal
     */
    function headerize(str) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const exceptions = {
            "Call-Id": "Call-ID",
            Cseq: "CSeq",
            "Min-Se": "Min-SE",
            Rack: "RAck",
            Rseq: "RSeq",
            "Www-Authenticate": "WWW-Authenticate"
        };
        const name = str.toLowerCase().replace(/_/g, "-").split("-");
        const parts = name.length;
        let hname = "";
        for (let part = 0; part < parts; part++) {
            if (part !== 0) {
                hname += "-";
            }
            hname += name[part].charAt(0).toUpperCase() + name[part].substring(1);
        }
        if (exceptions[hname]) {
            hname = exceptions[hname];
        }
        return hname;
    }
    exports.headerize = headerize;
    /**
     * @param str -
     * @internal
     */
    function utf8Length(str) {
        return encodeURIComponent(str).replace(/%[A-F\d]{2}/g, "U").length;
    }
    exports.utf8Length = utf8Length;
});


/***/ }),

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

/***/ 14:
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
        var v = factory(__webpack_require__(8), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(35), __webpack_require__(24), __webpack_require__(15), __webpack_require__(25)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require("./grammar"), exports);
    __exportStar(require("./name-addr-header"), exports);
    __exportStar(require("./parameters"), exports);
    __exportStar(require("./uri"), exports);
});


/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(8), exports);
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
    exports.Parameters = void 0;
    /**
     * @internal
     */
    class Parameters {
        constructor(parameters) {
            this.parameters = {};
            // for in is required here as the Grammar parser is adding to the prototype chain
            for (const param in parameters) {
                // eslint-disable-next-line no-prototype-builtins
                if (parameters.hasOwnProperty(param)) {
                    this.setParam(param, parameters[param]);
                }
            }
        }
        setParam(key, value) {
            if (key) {
                this.parameters[key.toLowerCase()] = (typeof value === "undefined" || value === null) ? null : value.toString();
            }
        }
        getParam(key) {
            if (key) {
                return this.parameters[key.toLowerCase()];
            }
        }
        hasParam(key) {
            return !!(key && this.parameters[key.toLowerCase()] !== undefined);
        }
        deleteParam(key) {
            key = key.toLowerCase();
            if (this.hasParam(key)) {
                const value = this.parameters[key];
                delete this.parameters[key];
                return value;
            }
        }
        clearParams() {
            this.parameters = {};
        }
    }
    exports.Parameters = Parameters;
});


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

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(0), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(14), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IncomingMessage = void 0;
    const grammar_1 = require("../../grammar");
    const utils_1 = require("./utils");
    /**
     * Incoming message.
     * @public
     */
    class IncomingMessage {
        constructor() {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.headers = {};
        }
        /**
         * Insert a header of the given name and value into the last position of the
         * header array.
         * @param name - header name
         * @param value - header value
         */
        addHeader(name, value) {
            const header = { raw: value };
            name = utils_1.headerize(name);
            if (this.headers[name]) {
                this.headers[name].push(header);
            }
            else {
                this.headers[name] = [header];
            }
        }
        /**
         * Get the value of the given header name at the given position.
         * @param name - header name
         * @returns Returns the specified header, undefined if header doesn't exist.
         */
        getHeader(name) {
            const header = this.headers[utils_1.headerize(name)];
            if (header) {
                if (header[0]) {
                    return header[0].raw;
                }
            }
            else {
                return;
            }
        }
        /**
         * Get the header/s of the given name.
         * @param name - header name
         * @returns Array - with all the headers of the specified name.
         */
        getHeaders(name) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const header = this.headers[utils_1.headerize(name)];
            const result = [];
            if (!header) {
                return [];
            }
            for (const headerPart of header) {
                result.push(headerPart.raw);
            }
            return result;
        }
        /**
         * Verify the existence of the given header.
         * @param name - header name
         * @returns true if header with given name exists, false otherwise
         */
        hasHeader(name) {
            return !!this.headers[utils_1.headerize(name)];
        }
        /**
         * Parse the given header on the given index.
         * @param name - header name
         * @param idx - header index
         * @returns Parsed header object, undefined if the
         *   header is not present or in case of a parsing error.
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        parseHeader(name, idx = 0) {
            name = utils_1.headerize(name);
            if (!this.headers[name]) {
                // this.logger.log("header '" + name + "' not present");
                return;
            }
            else if (idx >= this.headers[name].length) {
                // this.logger.log("not so many '" + name + "' headers present");
                return;
            }
            const header = this.headers[name][idx];
            const value = header.raw;
            if (header.parsed) {
                return header.parsed;
            }
            // substitute '-' by '_' for grammar rule matching.
            const parsed = grammar_1.Grammar.parse(value, name.replace(/-/g, "_"));
            if (parsed === -1) {
                this.headers[name].splice(idx, 1); // delete from headers
                // this.logger.warn('error parsing "' + name + '" header field with value "' + value + '"');
                return;
            }
            else {
                header.parsed = parsed;
                return parsed;
            }
        }
        /**
         * Message Header attribute selector. Alias of parseHeader.
         * @param name - header name
         * @param idx - header index
         * @returns Parsed header object, undefined if the
         *   header is not present or in case of a parsing error.
         *
         * @example
         * message.s('via',3).port
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        s(name, idx = 0) {
            return this.parseHeader(name, idx);
        }
        /**
         * Replace the value of the given header by the value.
         * @param name - header name
         * @param value - header value
         */
        setHeader(name, value) {
            this.headers[utils_1.headerize(name)] = [{ raw: value }];
        }
        toString() {
            return this.data;
        }
    }
    exports.IncomingMessage = IncomingMessage;
});


/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(0), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(17)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IncomingRequestMessage = void 0;
    const incoming_message_1 = require("./incoming-message");
    /**
     * Incoming request message.
     * @public
     */
    class IncomingRequestMessage extends incoming_message_1.IncomingMessage {
        constructor() {
            super();
        }
    }
    exports.IncomingRequestMessage = IncomingRequestMessage;
});


/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(0), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(17)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IncomingResponseMessage = void 0;
    const incoming_message_1 = require("./incoming-message");
    /**
     * Incoming response message.
     * @public
     */
    class IncomingResponseMessage extends incoming_message_1.IncomingMessage {
        constructor() {
            super();
        }
    }
    exports.IncomingResponseMessage = IncomingResponseMessage;
});


/***/ }),

/***/ 2:
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
        var v = factory(__webpack_require__(4), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(21), __webpack_require__(29), __webpack_require__(66), __webpack_require__(67), __webpack_require__(68), __webpack_require__(29), __webpack_require__(22), __webpack_require__(12), __webpack_require__(69), __webpack_require__(20)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require("./client-transaction"), exports);
    __exportStar(require("./invite-client-transaction"), exports);
    __exportStar(require("./invite-server-transaction"), exports);
    __exportStar(require("./non-invite-client-transaction"), exports);
    __exportStar(require("./non-invite-server-transaction"), exports);
    __exportStar(require("./invite-client-transaction"), exports);
    __exportStar(require("./server-transaction"), exports);
    __exportStar(require("./transaction-state"), exports);
    __exportStar(require("./transaction-user"), exports);
    __exportStar(require("./transaction"), exports);
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

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(8), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(15)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NameAddrHeader = void 0;
    const parameters_1 = require("./parameters");
    /**
     * Name Address SIP header.
     * @public
     */
    class NameAddrHeader extends parameters_1.Parameters {
        /**
         * Constructor
         * @param uri -
         * @param displayName -
         * @param parameters -
         */
        constructor(uri, displayName, parameters) {
            super(parameters);
            this.uri = uri;
            this._displayName = displayName;
        }
        get friendlyName() {
            return this.displayName || this.uri.aor;
        }
        get displayName() { return this._displayName; }
        set displayName(value) {
            this._displayName = value;
        }
        clone() {
            return new NameAddrHeader(this.uri.clone(), this._displayName, JSON.parse(JSON.stringify(this.parameters)));
        }
        toString() {
            let body = (this.displayName || this.displayName === "0") ? '"' + this.displayName + '" ' : "";
            body += "<" + this.uri.toString() + ">";
            for (const parameter in this.parameters) {
                // eslint-disable-next-line no-prototype-builtins
                if (this.parameters.hasOwnProperty(parameter)) {
                    body += ";" + parameter;
                    if (this.parameters[parameter] !== null) {
                        body += "=" + this.parameters[parameter];
                    }
                }
            }
            return body;
        }
    }
    exports.NameAddrHeader = NameAddrHeader;
});


/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(8), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(15)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.URI = void 0;
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const parameters_1 = require("./parameters");
    /**
     * URI.
     * @public
     */
    class URI extends parameters_1.Parameters {
        /**
         * Constructor
         * @param scheme -
         * @param user -
         * @param host -
         * @param port -
         * @param parameters -
         * @param headers -
         */
        constructor(scheme = "sip", user, host, port, parameters, headers) {
            super(parameters || {});
            this.headers = {};
            // Checks
            if (!host) {
                throw new TypeError('missing or invalid "host" parameter');
            }
            for (const header in headers) {
                // eslint-disable-next-line no-prototype-builtins
                if (headers.hasOwnProperty(header)) {
                    this.setHeader(header, headers[header]);
                }
            }
            // Raw URI
            this.raw = {
                scheme,
                user,
                host,
                port
            };
            // Normalized URI
            this.normal = {
                scheme: scheme.toLowerCase(),
                user,
                host: host.toLowerCase(),
                port
            };
        }
        get scheme() { return this.normal.scheme; }
        set scheme(value) {
            this.raw.scheme = value;
            this.normal.scheme = value.toLowerCase();
        }
        get user() { return this.normal.user; }
        set user(value) {
            this.normal.user = this.raw.user = value;
        }
        get host() { return this.normal.host; }
        set host(value) {
            this.raw.host = value;
            this.normal.host = value.toLowerCase();
        }
        get aor() { return this.normal.user + "@" + this.normal.host; }
        get port() { return this.normal.port; }
        set port(value) {
            this.normal.port = this.raw.port = value === 0 ? value : value;
        }
        setHeader(name, value) {
            this.headers[this.headerize(name)] = (value instanceof Array) ? value : [value];
        }
        getHeader(name) {
            if (name) {
                return this.headers[this.headerize(name)];
            }
        }
        hasHeader(name) {
            // eslint-disable-next-line no-prototype-builtins
            return !!name && !!this.headers.hasOwnProperty(this.headerize(name));
        }
        deleteHeader(header) {
            header = this.headerize(header);
            // eslint-disable-next-line no-prototype-builtins
            if (this.headers.hasOwnProperty(header)) {
                const value = this.headers[header];
                delete this.headers[header];
                return value;
            }
        }
        clearHeaders() {
            this.headers = {};
        }
        clone() {
            return new URI(this._raw.scheme, this._raw.user || "", this._raw.host, this._raw.port, JSON.parse(JSON.stringify(this.parameters)), JSON.parse(JSON.stringify(this.headers)));
        }
        toRaw() {
            return this._toString(this._raw);
        }
        toString() {
            return this._toString(this._normal);
        }
        get _normal() { return this.normal; }
        get _raw() { return this.raw; }
        _toString(uri) {
            let uriString = uri.scheme + ":";
            // add slashes if it's not a sip(s) URI
            if (!uri.scheme.toLowerCase().match("^sips?$")) {
                uriString += "//";
            }
            if (uri.user) {
                uriString += this.escapeUser(uri.user) + "@";
            }
            uriString += uri.host;
            if (uri.port || uri.port === 0) {
                uriString += ":" + uri.port;
            }
            for (const parameter in this.parameters) {
                // eslint-disable-next-line no-prototype-builtins
                if (this.parameters.hasOwnProperty(parameter)) {
                    uriString += ";" + parameter;
                    if (this.parameters[parameter] !== null) {
                        uriString += "=" + this.parameters[parameter];
                    }
                }
            }
            const headers = [];
            for (const header in this.headers) {
                // eslint-disable-next-line no-prototype-builtins
                if (this.headers.hasOwnProperty(header)) {
                    for (const idx in this.headers[header]) {
                        // eslint-disable-next-line no-prototype-builtins
                        if (this.headers[header].hasOwnProperty(idx)) {
                            headers.push(header + "=" + this.headers[header][idx]);
                        }
                    }
                }
            }
            if (headers.length > 0) {
                uriString += "?" + headers.join("&");
            }
            return uriString;
        }
        /*
         * Hex-escape a SIP URI user.
         * @private
         * @param {String} user
         */
        escapeUser(user) {
            let decodedUser;
            // FIXME: This is called by toString above which should never throw, but
            // decodeURIComponent can throw and I've seen one case in production where
            // it did throw resulting in a cascading failure. This class should be
            // fixed so that decodeURIComponent is not called at this point (in toString).
            // The user should be decoded when the URI is constructor or some other
            // place where we can catch the error before the URI is created or somesuch.
            // eslint-disable-next-line no-useless-catch
            try {
                decodedUser = decodeURIComponent(user);
            }
            catch (error) {
                throw error;
            }
            // Don't hex-escape ':' (%3A), '+' (%2B), '?' (%3F"), '/' (%2F).
            return encodeURIComponent(decodedUser)
                .replace(/%3A/ig, ":")
                .replace(/%2B/ig, "+")
                .replace(/%3F/ig, "?")
                .replace(/%2F/ig, "/");
        }
        headerize(str) {
            const exceptions = {
                "Call-Id": "Call-ID",
                "Cseq": "CSeq",
                "Min-Se": "Min-SE",
                "Rack": "RAck",
                "Rseq": "RSeq",
                "Www-Authenticate": "WWW-Authenticate",
            };
            const name = str.toLowerCase().replace(/_/g, "-").split("-");
            const parts = name.length;
            let hname = "";
            for (let part = 0; part < parts; part++) {
                if (part !== 0) {
                    hname += "-";
                }
                hname += name[part].charAt(0).toUpperCase() + name[part].substring(1);
            }
            if (exceptions[hname]) {
                hname = exceptions[hname];
            }
            return hname;
        }
    }
    exports.URI = URI;
});


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(0), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(14), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OutgoingRequestMessage = void 0;
    const grammar_1 = require("../../grammar");
    const utils_1 = require("./utils");
    /**
     * Outgoing SIP request message.
     * @public
     */
    class OutgoingRequestMessage {
        constructor(method, ruri, fromURI, toURI, options, extraHeaders, body) {
            this.headers = {};
            this.extraHeaders = [];
            // Initialize default options
            this.options = OutgoingRequestMessage.getDefaultOptions();
            // Options - merge a deep copy
            if (options) {
                this.options = Object.assign(Object.assign({}, this.options), options);
                if (this.options.optionTags && this.options.optionTags.length) {
                    this.options.optionTags = this.options.optionTags.slice();
                }
                if (this.options.routeSet && this.options.routeSet.length) {
                    this.options.routeSet = this.options.routeSet.slice();
                }
            }
            // Extra headers - deep copy
            if (extraHeaders && extraHeaders.length) {
                this.extraHeaders = extraHeaders.slice();
            }
            // Body - deep copy
            if (body) {
                // TODO: internal representation should be Body
                // this.body = { ...body };
                this.body = {
                    body: body.content,
                    contentType: body.contentType
                };
            }
            // Method
            this.method = method;
            // RURI
            this.ruri = ruri.clone();
            // From
            this.fromURI = fromURI.clone();
            this.fromTag = this.options.fromTag ? this.options.fromTag : utils_1.newTag();
            this.from = OutgoingRequestMessage.makeNameAddrHeader(this.fromURI, this.options.fromDisplayName, this.fromTag);
            // To
            this.toURI = toURI.clone();
            this.toTag = this.options.toTag;
            this.to = OutgoingRequestMessage.makeNameAddrHeader(this.toURI, this.options.toDisplayName, this.toTag);
            // Call-ID
            this.callId = this.options.callId ? this.options.callId : this.options.callIdPrefix + utils_1.createRandomToken(15);
            // CSeq
            this.cseq = this.options.cseq;
            // The relative order of header fields with different field names is not
            // significant.  However, it is RECOMMENDED that header fields which are
            // needed for proxy processing (Via, Route, Record-Route, Proxy-Require,
            // Max-Forwards, and Proxy-Authorization, for example) appear towards
            // the top of the message to facilitate rapid parsing.
            // https://tools.ietf.org/html/rfc3261#section-7.3.1
            this.setHeader("route", this.options.routeSet);
            this.setHeader("via", "");
            this.setHeader("to", this.to.toString());
            this.setHeader("from", this.from.toString());
            this.setHeader("cseq", this.cseq + " " + this.method);
            this.setHeader("call-id", this.callId);
            this.setHeader("max-forwards", "70");
        }
        /** Get a copy of the default options. */
        static getDefaultOptions() {
            return {
                callId: "",
                callIdPrefix: "",
                cseq: 1,
                toDisplayName: "",
                toTag: "",
                fromDisplayName: "",
                fromTag: "",
                forceRport: false,
                hackViaTcp: false,
                optionTags: ["outbound"],
                routeSet: [],
                userAgentString: "sip.js",
                viaHost: ""
            };
        }
        static makeNameAddrHeader(uri, displayName, tag) {
            const parameters = {};
            if (tag) {
                parameters.tag = tag;
            }
            return new grammar_1.NameAddrHeader(uri, displayName, parameters);
        }
        /**
         * Get the value of the given header name at the given position.
         * @param name - header name
         * @returns Returns the specified header, undefined if header doesn't exist.
         */
        getHeader(name) {
            const header = this.headers[utils_1.headerize(name)];
            if (header) {
                if (header[0]) {
                    return header[0];
                }
            }
            else {
                const regexp = new RegExp("^\\s*" + name + "\\s*:", "i");
                for (const exHeader of this.extraHeaders) {
                    if (regexp.test(exHeader)) {
                        return exHeader.substring(exHeader.indexOf(":") + 1).trim();
                    }
                }
            }
            return;
        }
        /**
         * Get the header/s of the given name.
         * @param name - header name
         * @returns Array with all the headers of the specified name.
         */
        getHeaders(name) {
            const result = [];
            const headerArray = this.headers[utils_1.headerize(name)];
            if (headerArray) {
                for (const headerPart of headerArray) {
                    result.push(headerPart);
                }
            }
            else {
                const regexp = new RegExp("^\\s*" + name + "\\s*:", "i");
                for (const exHeader of this.extraHeaders) {
                    if (regexp.test(exHeader)) {
                        result.push(exHeader.substring(exHeader.indexOf(":") + 1).trim());
                    }
                }
            }
            return result;
        }
        /**
         * Verify the existence of the given header.
         * @param name - header name
         * @returns true if header with given name exists, false otherwise
         */
        hasHeader(name) {
            if (this.headers[utils_1.headerize(name)]) {
                return true;
            }
            else {
                const regexp = new RegExp("^\\s*" + name + "\\s*:", "i");
                for (const extraHeader of this.extraHeaders) {
                    if (regexp.test(extraHeader)) {
                        return true;
                    }
                }
            }
            return false;
        }
        /**
         * Replace the the given header by the given value.
         * @param name - header name
         * @param value - header value
         */
        setHeader(name, value) {
            this.headers[utils_1.headerize(name)] = value instanceof Array ? value : [value];
        }
        /**
         * The Via header field indicates the transport used for the transaction
         * and identifies the location where the response is to be sent.  A Via
         * header field value is added only after the transport that will be
         * used to reach the next hop has been selected (which may involve the
         * usage of the procedures in [4]).
         *
         * When the UAC creates a request, it MUST insert a Via into that
         * request.  The protocol name and protocol version in the header field
         * MUST be SIP and 2.0, respectively.  The Via header field value MUST
         * contain a branch parameter.  This parameter is used to identify the
         * transaction created by that request.  This parameter is used by both
         * the client and the server.
         * https://tools.ietf.org/html/rfc3261#section-8.1.1.7
         * @param branchParameter - The branch parameter.
         * @param transport - The sent protocol transport.
         */
        setViaHeader(branch, transport) {
            // FIXME: Hack
            if (this.options.hackViaTcp) {
                transport = "TCP";
            }
            let via = "SIP/2.0/" + transport;
            via += " " + this.options.viaHost + ";branch=" + branch;
            if (this.options.forceRport) {
                via += ";rport";
            }
            this.setHeader("via", via);
            this.branch = branch;
        }
        toString() {
            let msg = "";
            msg += this.method + " " + this.ruri.toRaw() + " SIP/2.0\r\n";
            for (const header in this.headers) {
                if (this.headers[header]) {
                    for (const headerPart of this.headers[header]) {
                        msg += header + ": " + headerPart + "\r\n";
                    }
                }
            }
            for (const header of this.extraHeaders) {
                msg += header.trim() + "\r\n";
            }
            msg += "Supported: " + this.options.optionTags.join(", ") + "\r\n";
            msg += "User-Agent: " + this.options.userAgentString + "\r\n";
            if (this.body) {
                if (typeof this.body === "string") {
                    msg += "Content-Length: " + utils_1.utf8Length(this.body) + "\r\n\r\n";
                    msg += this.body;
                }
                else {
                    if (this.body.body && this.body.contentType) {
                        msg += "Content-Type: " + this.body.contentType + "\r\n";
                        msg += "Content-Length: " + utils_1.utf8Length(this.body.body) + "\r\n\r\n";
                        msg += this.body.body;
                    }
                    else {
                        msg += "Content-Length: " + 0 + "\r\n\r\n";
                    }
                }
            }
            else {
                msg += "Content-Length: " + 0 + "\r\n\r\n";
            }
            return msg;
        }
    }
    exports.OutgoingRequestMessage = OutgoingRequestMessage;
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

/***/ 29:
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
    exports.InviteClientTransaction = void 0;
    const timers_1 = require("../timers");
    const client_transaction_1 = require("./client-transaction");
    const transaction_state_1 = require("./transaction-state");
    /**
     * INVITE Client Transaction.
     * @remarks
     * The INVITE transaction consists of a three-way handshake.  The client
     * transaction sends an INVITE, the server transaction sends responses,
     * and the client transaction sends an ACK.
     * https://tools.ietf.org/html/rfc3261#section-17.1.1
     * @public
     */
    class InviteClientTransaction extends client_transaction_1.ClientTransaction {
        /**
         * Constructor.
         * Upon construction, the outgoing request's Via header is updated by calling `setViaHeader`.
         * Then `toString` is called on the outgoing request and the message is sent via the transport.
         * After construction the transaction will be in the "calling" state and the transaction id
         * will equal the branch parameter set in the Via header of the outgoing request.
         * https://tools.ietf.org/html/rfc3261#section-17.1.1
         * @param request - The outgoing INVITE request.
         * @param transport - The transport.
         * @param user - The transaction user.
         */
        constructor(request, transport, user) {
            super(request, transport, user, transaction_state_1.TransactionState.Calling, "sip.transaction.ict");
            /**
             * Map of 2xx to-tag to ACK.
             * If value is not undefined, value is the ACK which was sent.
             * If key exists but value is undefined, a 2xx was received but the ACK not yet sent.
             * Otherwise, a 2xx was not (yet) received for this transaction.
             */
            this.ackRetransmissionCache = new Map();
            // FIXME: Timer A for unreliable transport not implemented
            //
            // If an unreliable transport is being used, the client transaction
            // MUST start timer A with a value of T1. If a reliable transport is being used,
            // the client transaction SHOULD NOT start timer A (Timer A controls request retransmissions).
            // For any transport, the client transaction MUST start timer B with a value
            // of 64*T1 seconds (Timer B controls transaction timeouts).
            // https://tools.ietf.org/html/rfc3261#section-17.1.1.2
            //
            // While not spelled out in the RFC, Timer B is the maximum amount of time that a sender
            // will wait for an INVITE message to be acknowledged (a SIP response message is received).
            // So Timer B should be cleared when the transaction state proceeds from "Calling".
            this.B = setTimeout(() => this.timerB(), timers_1.Timers.TIMER_B);
            this.send(request.toString()).catch((error) => {
                this.logTransportError(error, "Failed to send initial outgoing request.");
            });
        }
        /**
         * Destructor.
         */
        dispose() {
            if (this.B) {
                clearTimeout(this.B);
                this.B = undefined;
            }
            if (this.D) {
                clearTimeout(this.D);
                this.D = undefined;
            }
            if (this.M) {
                clearTimeout(this.M);
                this.M = undefined;
            }
            super.dispose();
        }
        /** Transaction kind. Deprecated. */
        get kind() {
            return "ict";
        }
        /**
         * ACK a 2xx final response.
         *
         * The transaction includes the ACK only if the final response was not a 2xx response (the
         * transaction will generate and send the ACK to the transport automagically). If the
         * final response was a 2xx, the ACK is not considered part of the transaction (the
         * transaction user needs to generate and send the ACK).
         *
         * This library is not strictly RFC compliant with regard to ACK handling for 2xx final
         * responses. Specifically, retransmissions of ACKs to a 2xx final responses is handled
         * by the transaction layer (instead of the UAC core). The "standard" approach is for
         * the UAC core to receive all 2xx responses and manage sending ACK retransmissions to
         * the transport directly. Herein the transaction layer manages sending ACKs to 2xx responses
         * and any retransmissions of those ACKs as needed.
         *
         * @param ack - The outgoing ACK request.
         */
        ackResponse(ack) {
            const toTag = ack.toTag;
            if (!toTag) {
                throw new Error("To tag undefined.");
            }
            const id = "z9hG4bK" + Math.floor(Math.random() * 10000000);
            ack.setViaHeader(id, this.transport.protocol);
            this.ackRetransmissionCache.set(toTag, ack); // Add to ACK retransmission cache
            this.send(ack.toString()).catch((error) => {
                this.logTransportError(error, "Failed to send ACK to 2xx response.");
            });
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
                case transaction_state_1.TransactionState.Calling:
                    // If the client transaction receives a provisional response while in
                    // the "Calling" state, it transitions to the "Proceeding" state. In the
                    // "Proceeding" state, the client transaction SHOULD NOT retransmit the
                    // request any longer. Furthermore, the provisional response MUST be
                    // passed to the TU.  Any further provisional responses MUST be passed
                    // up to the TU while in the "Proceeding" state.
                    // https://tools.ietf.org/html/rfc3261#section-17.1.1.2
                    if (statusCode >= 100 && statusCode <= 199) {
                        this.stateTransition(transaction_state_1.TransactionState.Proceeding);
                        if (this.user.receiveResponse) {
                            this.user.receiveResponse(response);
                        }
                        return;
                    }
                    // When a 2xx response is received while in either the "Calling" or
                    // "Proceeding" states, the client transaction MUST transition to
                    // the "Accepted" state... The 2xx response MUST be passed up to the TU.
                    // The client transaction MUST NOT generate an ACK to the 2xx response -- its
                    // handling is delegated to the TU. A UAC core will send an ACK to
                    // the 2xx response using a new transaction.
                    // https://tools.ietf.org/html/rfc6026#section-8.4
                    if (statusCode >= 200 && statusCode <= 299) {
                        this.ackRetransmissionCache.set(response.toTag, undefined); // Prime the ACK cache
                        this.stateTransition(transaction_state_1.TransactionState.Accepted);
                        if (this.user.receiveResponse) {
                            this.user.receiveResponse(response);
                        }
                        return;
                    }
                    // When in either the "Calling" or "Proceeding" states, reception of
                    // a response with status code from 300-699 MUST cause the client
                    // transaction to transition to "Completed". The client transaction
                    // MUST pass the received response up to the TU, and the client
                    // transaction MUST generate an ACK request, even if the transport is
                    // reliable (guidelines for constructing the ACK from the response
                    // are given in Section 17.1.1.3), and then pass the ACK to the
                    // transport layer for transmission. The ACK MUST be sent to the
                    // same address, port, and transport to which the original request was sent.
                    // https://tools.ietf.org/html/rfc6026#section-8.4
                    if (statusCode >= 300 && statusCode <= 699) {
                        this.stateTransition(transaction_state_1.TransactionState.Completed);
                        this.ack(response);
                        if (this.user.receiveResponse) {
                            this.user.receiveResponse(response);
                        }
                        return;
                    }
                    break;
                case transaction_state_1.TransactionState.Proceeding:
                    // In the "Proceeding" state, the client transaction SHOULD NOT retransmit the
                    // request any longer. Furthermore, the provisional response MUST be
                    // passed to the TU.  Any further provisional responses MUST be passed
                    // up to the TU while in the "Proceeding" state.
                    // https://tools.ietf.org/html/rfc3261#section-17.1.1.2
                    if (statusCode >= 100 && statusCode <= 199) {
                        if (this.user.receiveResponse) {
                            this.user.receiveResponse(response);
                        }
                        return;
                    }
                    // When a 2xx response is received while in either the "Calling" or "Proceeding" states,
                    // the client transaction MUST transition to the "Accepted" state...
                    // The 2xx response MUST be passed up to the TU. The client
                    // transaction MUST NOT generate an ACK to the 2xx response -- its
                    // handling is delegated to the TU. A UAC core will send an ACK to
                    // the 2xx response using a new transaction.
                    // https://tools.ietf.org/html/rfc6026#section-8.4
                    if (statusCode >= 200 && statusCode <= 299) {
                        this.ackRetransmissionCache.set(response.toTag, undefined); // Prime the ACK cache
                        this.stateTransition(transaction_state_1.TransactionState.Accepted);
                        if (this.user.receiveResponse) {
                            this.user.receiveResponse(response);
                        }
                        return;
                    }
                    // When in either the "Calling" or "Proceeding" states, reception of
                    // a response with status code from 300-699 MUST cause the client
                    // transaction to transition to "Completed". The client transaction
                    // MUST pass the received response up to the TU, and the client
                    // transaction MUST generate an ACK request, even if the transport is
                    // reliable (guidelines for constructing the ACK from the response
                    // are given in Section 17.1.1.3), and then pass the ACK to the
                    // transport layer for transmission. The ACK MUST be sent to the
                    // same address, port, and transport to which the original request was sent.
                    // https://tools.ietf.org/html/rfc6026#section-8.4
                    if (statusCode >= 300 && statusCode <= 699) {
                        this.stateTransition(transaction_state_1.TransactionState.Completed);
                        this.ack(response);
                        if (this.user.receiveResponse) {
                            this.user.receiveResponse(response);
                        }
                        return;
                    }
                    break;
                case transaction_state_1.TransactionState.Accepted:
                    // The purpose of the "Accepted" state is to allow the client
                    // transaction to continue to exist to receive, and pass to the TU,
                    // any retransmissions of the 2xx response and any additional 2xx
                    // responses from other branches of the INVITE if it forked
                    // downstream. Timer M reflects the amount of time that the
                    // transaction user will wait for such messages.
                    //
                    // Any 2xx responses that match this client transaction and that are
                    // received while in the "Accepted" state MUST be passed up to the
                    // TU. The client transaction MUST NOT generate an ACK to the 2xx
                    // response. The client transaction takes no further action.
                    // https://tools.ietf.org/html/rfc6026#section-8.4
                    if (statusCode >= 200 && statusCode <= 299) {
                        // NOTE: This implementation herein is intentionally not RFC compliant.
                        // While the first 2xx response for a given branch is passed up to the TU,
                        // retransmissions of 2xx responses are absorbed and the ACK associated
                        // with the original response is resent. This approach is taken because
                        // our current transaction users are not currently in a good position to
                        // deal with 2xx retransmission. This SHOULD NOT cause any compliance issues - ;)
                        //
                        // If we don't have a cache hit, pass the response to the TU.
                        if (!this.ackRetransmissionCache.has(response.toTag)) {
                            this.ackRetransmissionCache.set(response.toTag, undefined); // Prime the ACK cache
                            if (this.user.receiveResponse) {
                                this.user.receiveResponse(response);
                            }
                            return;
                        }
                        // If we have a cache hit, try pulling the ACK from cache and retransmitting it.
                        const ack = this.ackRetransmissionCache.get(response.toTag);
                        if (ack) {
                            this.send(ack.toString()).catch((error) => {
                                this.logTransportError(error, "Failed to send retransmission of ACK to 2xx response.");
                            });
                            return;
                        }
                        // If an ACK was not found in cache then we have received a retransmitted 2xx
                        // response before the TU responded to the original response (we don't have an ACK yet).
                        // So discard this response under the assumption that the TU will eventually
                        // get us a ACK for the original response.
                        return;
                    }
                    break;
                case transaction_state_1.TransactionState.Completed:
                    // Any retransmissions of a response with status code 300-699 that
                    // are received while in the "Completed" state MUST cause the ACK to
                    // be re-passed to the transport layer for retransmission, but the
                    // newly received response MUST NOT be passed up to the TU.
                    // https://tools.ietf.org/html/rfc6026#section-8.4
                    if (statusCode >= 300 && statusCode <= 699) {
                        this.ack(response);
                        return;
                    }
                    break;
                case transaction_state_1.TransactionState.Terminated:
                    break;
                default:
                    throw new Error(`Invalid state ${this.state}`);
            }
            // Any response received that does not match an existing client
            // transaction state machine is simply dropped. (Implementations are,
            // of course, free to log or do other implementation-specific things
            // with such responses, but the implementer should be sure to consider
            // the impact of large numbers of malicious stray responses.)
            // https://tools.ietf.org/html/rfc6026#section-7.2
            const message = `Received unexpected ${statusCode} response while in state ${this.state}.`;
            this.logger.warn(message);
            return;
        }
        /**
         * The client transaction SHOULD inform the TU that a transport failure
         * has occurred, and the client transaction SHOULD transition directly
         * to the "Terminated" state.  The TU will handle the failover
         * mechanisms described in [4].
         * https://tools.ietf.org/html/rfc3261#section-17.1.4
         * @param error - The error.
         */
        onTransportError(error) {
            if (this.user.onTransportError) {
                this.user.onTransportError(error);
            }
            this.stateTransition(transaction_state_1.TransactionState.Terminated, true);
        }
        /** For logging. */
        typeToString() {
            return "INVITE client transaction";
        }
        ack(response) {
            // The ACK request constructed by the client transaction MUST contain
            // values for the Call-ID, From, and Request-URI that are equal to the
            // values of those header fields in the request passed to the transport
            // by the client transaction (call this the "original request"). The To
            // header field in the ACK MUST equal the To header field in the
            // response being acknowledged, and therefore will usually differ from
            // the To header field in the original request by the addition of the
            // tag parameter. The ACK MUST contain a single Via header field, and
            // this MUST be equal to the top Via header field of the original
            // request. The CSeq header field in the ACK MUST contain the same
            // value for the sequence number as was present in the original request,
            // but the method parameter MUST be equal to "ACK".
            //
            // If the INVITE request whose response is being acknowledged had Route
            // header fields, those header fields MUST appear in the ACK. This is
            // to ensure that the ACK can be routed properly through any downstream
            // stateless proxies.
            // https://tools.ietf.org/html/rfc3261#section-17.1.1.3
            const ruri = this.request.ruri;
            const callId = this.request.callId;
            const cseq = this.request.cseq;
            const from = this.request.getHeader("from");
            const to = response.getHeader("to");
            const via = this.request.getHeader("via");
            const route = this.request.getHeader("route");
            if (!from) {
                throw new Error("From undefined.");
            }
            if (!to) {
                throw new Error("To undefined.");
            }
            if (!via) {
                throw new Error("Via undefined.");
            }
            let ack = `ACK ${ruri} SIP/2.0\r\n`;
            if (route) {
                ack += `Route: ${route}\r\n`;
            }
            ack += `Via: ${via}\r\n`;
            ack += `To: ${to}\r\n`;
            ack += `From: ${from}\r\n`;
            ack += `Call-ID: ${callId}\r\n`;
            ack += `CSeq: ${cseq} ACK\r\n`;
            ack += `Max-Forwards: 70\r\n`;
            ack += `Content-Length: 0\r\n\r\n`;
            // TOOO: "User-Agent" header
            this.send(ack).catch((error) => {
                this.logTransportError(error, "Failed to send ACK to non-2xx response.");
            });
            return;
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
                case transaction_state_1.TransactionState.Calling:
                    invalidStateTransition();
                    break;
                case transaction_state_1.TransactionState.Proceeding:
                    if (this.state !== transaction_state_1.TransactionState.Calling) {
                        invalidStateTransition();
                    }
                    break;
                case transaction_state_1.TransactionState.Accepted:
                case transaction_state_1.TransactionState.Completed:
                    if (this.state !== transaction_state_1.TransactionState.Calling && this.state !== transaction_state_1.TransactionState.Proceeding) {
                        invalidStateTransition();
                    }
                    break;
                case transaction_state_1.TransactionState.Terminated:
                    if (this.state !== transaction_state_1.TransactionState.Calling &&
                        this.state !== transaction_state_1.TransactionState.Accepted &&
                        this.state !== transaction_state_1.TransactionState.Completed) {
                        if (!dueToTransportError) {
                            invalidStateTransition();
                        }
                    }
                    break;
                default:
                    invalidStateTransition();
            }
            // While not spelled out in the RFC, Timer B is the maximum amount of time that a sender
            // will wait for an INVITE message to be acknowledged (a SIP response message is received).
            // So Timer B should be cleared when the transaction state proceeds from "Calling".
            if (this.B) {
                clearTimeout(this.B);
                this.B = undefined;
            }
            if (newState === transaction_state_1.TransactionState.Proceeding) {
                // Timers have no effect on "Proceeding" state.
                // In the "Proceeding" state, the client transaction
                // SHOULD NOT retransmit the request any longer.
                // https://tools.ietf.org/html/rfc3261#section-17.1.1.2
            }
            // The client transaction MUST start Timer D when it enters the "Completed" state
            // for any reason, with a value of at least 32 seconds for unreliable transports,
            // and a value of zero seconds for reliable transports.
            // https://tools.ietf.org/html/rfc6026#section-8.4
            if (newState === transaction_state_1.TransactionState.Completed) {
                this.D = setTimeout(() => this.timerD(), timers_1.Timers.TIMER_D);
            }
            // The client transaction MUST transition to the "Accepted" state,
            // and Timer M MUST be started with a value of 64*T1.
            // https://tools.ietf.org/html/rfc6026#section-8.4
            if (newState === transaction_state_1.TransactionState.Accepted) {
                this.M = setTimeout(() => this.timerM(), timers_1.Timers.TIMER_M);
            }
            // Once the transaction is in the "Terminated" state, it MUST be destroyed immediately.
            // https://tools.ietf.org/html/rfc6026#section-8.7
            if (newState === transaction_state_1.TransactionState.Terminated) {
                this.dispose();
            }
            // Update state.
            this.setState(newState);
        }
        /**
         * When timer A fires, the client transaction MUST retransmit the
         * request by passing it to the transport layer, and MUST reset the
         * timer with a value of 2*T1.
         * When timer A fires 2*T1 seconds later, the request MUST be
         * retransmitted again (assuming the client transaction is still in this
         * state). This process MUST continue so that the request is
         * retransmitted with intervals that double after each transmission.
         * These retransmissions SHOULD only be done while the client
         * transaction is in the "Calling" state.
         * https://tools.ietf.org/html/rfc3261#section-17.1.1.2
         */
        timerA() {
            // TODO
        }
        /**
         * If the client transaction is still in the "Calling" state when timer
         * B fires, the client transaction SHOULD inform the TU that a timeout
         * has occurred.  The client transaction MUST NOT generate an ACK.
         * https://tools.ietf.org/html/rfc3261#section-17.1.1.2
         */
        timerB() {
            this.logger.debug(`Timer B expired for INVITE client transaction ${this.id}.`);
            if (this.state === transaction_state_1.TransactionState.Calling) {
                this.onRequestTimeout();
                this.stateTransition(transaction_state_1.TransactionState.Terminated);
            }
        }
        /**
         * If Timer D fires while the client transaction is in the "Completed" state,
         * the client transaction MUST move to the "Terminated" state.
         * https://tools.ietf.org/html/rfc6026#section-8.4
         */
        timerD() {
            this.logger.debug(`Timer D expired for INVITE client transaction ${this.id}.`);
            if (this.state === transaction_state_1.TransactionState.Completed) {
                this.stateTransition(transaction_state_1.TransactionState.Terminated);
            }
        }
        /**
         * If Timer M fires while the client transaction is in the "Accepted"
         * state, the client transaction MUST move to the "Terminated" state.
         * https://tools.ietf.org/html/rfc6026#section-8.4
         */
        timerM() {
            this.logger.debug(`Timer M expired for INVITE client transaction ${this.id}.`);
            if (this.state === transaction_state_1.TransactionState.Accepted) {
                this.stateTransition(transaction_state_1.TransactionState.Terminated);
            }
        }
    }
    exports.InviteClientTransaction = InviteClientTransaction;
});


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 3;

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 32;

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(32), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(24), __webpack_require__(25)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parse = exports.SyntaxError = void 0;
    const name_addr_header_1 = require("../../name-addr-header");
    const uri_1 = require("../../uri");
    class SyntaxError extends Error {
        constructor(message, expected, found, location) {
            super();
            this.message = message;
            this.expected = expected;
            this.found = found;
            this.location = location;
            this.name = "SyntaxError";
            if (typeof Error.captureStackTrace === "function") {
                Error.captureStackTrace(this, SyntaxError);
            }
        }
        static buildMessage(expected, found) {
            function hex(ch) {
                return ch.charCodeAt(0).toString(16).toUpperCase();
            }
            function literalEscape(s) {
                return s
                    .replace(/\\/g, "\\\\")
                    .replace(/"/g, "\\\"")
                    .replace(/\0/g, "\\0")
                    .replace(/\t/g, "\\t")
                    .replace(/\n/g, "\\n")
                    .replace(/\r/g, "\\r")
                    .replace(/[\x00-\x0F]/g, (ch) => "\\x0" + hex(ch))
                    .replace(/[\x10-\x1F\x7F-\x9F]/g, (ch) => "\\x" + hex(ch));
            }
            function classEscape(s) {
                return s
                    .replace(/\\/g, "\\\\")
                    .replace(/\]/g, "\\]")
                    .replace(/\^/g, "\\^")
                    .replace(/-/g, "\\-")
                    .replace(/\0/g, "\\0")
                    .replace(/\t/g, "\\t")
                    .replace(/\n/g, "\\n")
                    .replace(/\r/g, "\\r")
                    .replace(/[\x00-\x0F]/g, (ch) => "\\x0" + hex(ch))
                    .replace(/[\x10-\x1F\x7F-\x9F]/g, (ch) => "\\x" + hex(ch));
            }
            function describeExpectation(expectation) {
                switch (expectation.type) {
                    case "literal":
                        return "\"" + literalEscape(expectation.text) + "\"";
                    case "class":
                        const escapedParts = expectation.parts.map((part) => {
                            return Array.isArray(part)
                                ? classEscape(part[0]) + "-" + classEscape(part[1])
                                : classEscape(part);
                        });
                        return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
                    case "any":
                        return "any character";
                    case "end":
                        return "end of input";
                    case "other":
                        return expectation.description;
                }
            }
            function describeExpected(expected1) {
                const descriptions = expected1.map(describeExpectation);
                let i;
                let j;
                descriptions.sort();
                if (descriptions.length > 0) {
                    for (i = 1, j = 1; i < descriptions.length; i++) {
                        if (descriptions[i - 1] !== descriptions[i]) {
                            descriptions[j] = descriptions[i];
                            j++;
                        }
                    }
                    descriptions.length = j;
                }
                switch (descriptions.length) {
                    case 1:
                        return descriptions[0];
                    case 2:
                        return descriptions[0] + " or " + descriptions[1];
                    default:
                        return descriptions.slice(0, -1).join(", ")
                            + ", or "
                            + descriptions[descriptions.length - 1];
                }
            }
            function describeFound(found1) {
                return found1 ? "\"" + literalEscape(found1) + "\"" : "end of input";
            }
            return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
        }
    }
    exports.SyntaxError = SyntaxError;
    function peg$parse(input, options) {
        options = options !== undefined ? options : {};
        const peg$FAILED = {};
        const peg$startRuleIndices = { Contact: 119, Name_Addr_Header: 156, Record_Route: 176, Request_Response: 81, SIP_URI: 45, Subscription_State: 186, Supported: 191, Require: 182, Via: 194, absoluteURI: 84, Call_ID: 118, Content_Disposition: 130, Content_Length: 135, Content_Type: 136, CSeq: 146, displayName: 122, Event: 149, From: 151, host: 52, Max_Forwards: 154, Min_SE: 213, Proxy_Authenticate: 157, quoted_string: 40, Refer_To: 178, Replaces: 179, Session_Expires: 210, stun_URI: 217, To: 192, turn_URI: 223, uuid: 226, WWW_Authenticate: 209, challenge: 158, sipfrag: 230, Referred_By: 231 };
        let peg$startRuleIndex = 119;
        const peg$consts = [
            "\r\n",
            peg$literalExpectation("\r\n", false),
            /^[0-9]/,
            peg$classExpectation([["0", "9"]], false, false),
            /^[a-zA-Z]/,
            peg$classExpectation([["a", "z"], ["A", "Z"]], false, false),
            /^[0-9a-fA-F]/,
            peg$classExpectation([["0", "9"], ["a", "f"], ["A", "F"]], false, false),
            /^[\0-\xFF]/,
            peg$classExpectation([["\0", "\xFF"]], false, false),
            /^["]/,
            peg$classExpectation(["\""], false, false),
            " ",
            peg$literalExpectation(" ", false),
            "\t",
            peg$literalExpectation("\t", false),
            /^[a-zA-Z0-9]/,
            peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"]], false, false),
            ";",
            peg$literalExpectation(";", false),
            "/",
            peg$literalExpectation("/", false),
            "?",
            peg$literalExpectation("?", false),
            ":",
            peg$literalExpectation(":", false),
            "@",
            peg$literalExpectation("@", false),
            "&",
            peg$literalExpectation("&", false),
            "=",
            peg$literalExpectation("=", false),
            "+",
            peg$literalExpectation("+", false),
            "$",
            peg$literalExpectation("$", false),
            ",",
            peg$literalExpectation(",", false),
            "-",
            peg$literalExpectation("-", false),
            "_",
            peg$literalExpectation("_", false),
            ".",
            peg$literalExpectation(".", false),
            "!",
            peg$literalExpectation("!", false),
            "~",
            peg$literalExpectation("~", false),
            "*",
            peg$literalExpectation("*", false),
            "'",
            peg$literalExpectation("'", false),
            "(",
            peg$literalExpectation("(", false),
            ")",
            peg$literalExpectation(")", false),
            "%",
            peg$literalExpectation("%", false),
            function () { return " "; },
            function () { return ':'; },
            /^[!-~]/,
            peg$classExpectation([["!", "~"]], false, false),
            /^[\x80-\uFFFF]/,
            peg$classExpectation([["\x80", "\uFFFF"]], false, false),
            /^[\x80-\xBF]/,
            peg$classExpectation([["\x80", "\xBF"]], false, false),
            /^[a-f]/,
            peg$classExpectation([["a", "f"]], false, false),
            "`",
            peg$literalExpectation("`", false),
            "<",
            peg$literalExpectation("<", false),
            ">",
            peg$literalExpectation(">", false),
            "\\",
            peg$literalExpectation("\\", false),
            "[",
            peg$literalExpectation("[", false),
            "]",
            peg$literalExpectation("]", false),
            "{",
            peg$literalExpectation("{", false),
            "}",
            peg$literalExpectation("}", false),
            function () { return "*"; },
            function () { return "/"; },
            function () { return "="; },
            function () { return "("; },
            function () { return ")"; },
            function () { return ">"; },
            function () { return "<"; },
            function () { return ","; },
            function () { return ";"; },
            function () { return ":"; },
            function () { return "\""; },
            /^[!-']/,
            peg$classExpectation([["!", "'"]], false, false),
            /^[*-[]/,
            peg$classExpectation([["*", "["]], false, false),
            /^[\]-~]/,
            peg$classExpectation([["]", "~"]], false, false),
            function (contents) {
                return contents;
            },
            /^[#-[]/,
            peg$classExpectation([["#", "["]], false, false),
            /^[\0-\t]/,
            peg$classExpectation([["\0", "\t"]], false, false),
            /^[\x0B-\f]/,
            peg$classExpectation([["\x0B", "\f"]], false, false),
            /^[\x0E-\x7F]/,
            peg$classExpectation([["\x0E", "\x7F"]], false, false),
            function () {
                options = options || { data: {} };
                options.data.uri = new uri_1.URI(options.data.scheme, options.data.user, options.data.host, options.data.port);
                delete options.data.scheme;
                delete options.data.user;
                delete options.data.host;
                delete options.data.host_type;
                delete options.data.port;
            },
            function () {
                options = options || { data: {} };
                options.data.uri = new uri_1.URI(options.data.scheme, options.data.user, options.data.host, options.data.port, options.data.uri_params, options.data.uri_headers);
                delete options.data.scheme;
                delete options.data.user;
                delete options.data.host;
                delete options.data.host_type;
                delete options.data.port;
                delete options.data.uri_params;
                if (options.startRule === 'SIP_URI') {
                    options.data = options.data.uri;
                }
            },
            "sips",
            peg$literalExpectation("sips", true),
            "sip",
            peg$literalExpectation("sip", true),
            function (uri_scheme) {
                options = options || { data: {} };
                options.data.scheme = uri_scheme;
            },
            function () {
                options = options || { data: {} };
                options.data.user = decodeURIComponent(text().slice(0, -1));
            },
            function () {
                options = options || { data: {} };
                options.data.password = text();
            },
            function () {
                options = options || { data: {} };
                options.data.host = text();
                return options.data.host;
            },
            function () {
                options = options || { data: {} };
                options.data.host_type = 'domain';
                return text();
            },
            /^[a-zA-Z0-9_\-]/,
            peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"], "_", "-"], false, false),
            /^[a-zA-Z0-9\-]/,
            peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"], "-"], false, false),
            function () {
                options = options || { data: {} };
                options.data.host_type = 'IPv6';
                return text();
            },
            "::",
            peg$literalExpectation("::", false),
            function () {
                options = options || { data: {} };
                options.data.host_type = 'IPv6';
                return text();
            },
            function () {
                options = options || { data: {} };
                options.data.host_type = 'IPv4';
                return text();
            },
            "25",
            peg$literalExpectation("25", false),
            /^[0-5]/,
            peg$classExpectation([["0", "5"]], false, false),
            "2",
            peg$literalExpectation("2", false),
            /^[0-4]/,
            peg$classExpectation([["0", "4"]], false, false),
            "1",
            peg$literalExpectation("1", false),
            /^[1-9]/,
            peg$classExpectation([["1", "9"]], false, false),
            function (port) {
                options = options || { data: {} };
                port = parseInt(port.join(''));
                options.data.port = port;
                return port;
            },
            "transport=",
            peg$literalExpectation("transport=", true),
            "udp",
            peg$literalExpectation("udp", true),
            "tcp",
            peg$literalExpectation("tcp", true),
            "sctp",
            peg$literalExpectation("sctp", true),
            "tls",
            peg$literalExpectation("tls", true),
            function (transport) {
                options = options || { data: {} };
                if (!options.data.uri_params)
                    options.data.uri_params = {};
                options.data.uri_params['transport'] = transport.toLowerCase();
            },
            "user=",
            peg$literalExpectation("user=", true),
            "phone",
            peg$literalExpectation("phone", true),
            "ip",
            peg$literalExpectation("ip", true),
            function (user) {
                options = options || { data: {} };
                if (!options.data.uri_params)
                    options.data.uri_params = {};
                options.data.uri_params['user'] = user.toLowerCase();
            },
            "method=",
            peg$literalExpectation("method=", true),
            function (method) {
                options = options || { data: {} };
                if (!options.data.uri_params)
                    options.data.uri_params = {};
                options.data.uri_params['method'] = method;
            },
            "ttl=",
            peg$literalExpectation("ttl=", true),
            function (ttl) {
                options = options || { data: {} };
                if (!options.data.params)
                    options.data.params = {};
                options.data.params['ttl'] = ttl;
            },
            "maddr=",
            peg$literalExpectation("maddr=", true),
            function (maddr) {
                options = options || { data: {} };
                if (!options.data.uri_params)
                    options.data.uri_params = {};
                options.data.uri_params['maddr'] = maddr;
            },
            "lr",
            peg$literalExpectation("lr", true),
            function () {
                options = options || { data: {} };
                if (!options.data.uri_params)
                    options.data.uri_params = {};
                options.data.uri_params['lr'] = undefined;
            },
            function (param, value) {
                options = options || { data: {} };
                if (!options.data.uri_params)
                    options.data.uri_params = {};
                if (value === null) {
                    value = undefined;
                }
                else {
                    value = value[1];
                }
                options.data.uri_params[param.toLowerCase()] = value;
            },
            function (hname, hvalue) {
                hname = hname.join('').toLowerCase();
                hvalue = hvalue.join('');
                options = options || { data: {} };
                if (!options.data.uri_headers)
                    options.data.uri_headers = {};
                if (!options.data.uri_headers[hname]) {
                    options.data.uri_headers[hname] = [hvalue];
                }
                else {
                    options.data.uri_headers[hname].push(hvalue);
                }
            },
            function () {
                options = options || { data: {} };
                // lots of tests fail if this isn't guarded...
                if (options.startRule === 'Refer_To') {
                    options.data.uri = new uri_1.URI(options.data.scheme, options.data.user, options.data.host, options.data.port, options.data.uri_params, options.data.uri_headers);
                    delete options.data.scheme;
                    delete options.data.user;
                    delete options.data.host;
                    delete options.data.host_type;
                    delete options.data.port;
                    delete options.data.uri_params;
                }
            },
            "//",
            peg$literalExpectation("//", false),
            function () {
                options = options || { data: {} };
                options.data.scheme = text();
            },
            peg$literalExpectation("SIP", true),
            function () {
                options = options || { data: {} };
                options.data.sip_version = text();
            },
            "INVITE",
            peg$literalExpectation("INVITE", false),
            "ACK",
            peg$literalExpectation("ACK", false),
            "VXACH",
            peg$literalExpectation("VXACH", false),
            "OPTIONS",
            peg$literalExpectation("OPTIONS", false),
            "BYE",
            peg$literalExpectation("BYE", false),
            "CANCEL",
            peg$literalExpectation("CANCEL", false),
            "REGISTER",
            peg$literalExpectation("REGISTER", false),
            "SUBSCRIBE",
            peg$literalExpectation("SUBSCRIBE", false),
            "NOTIFY",
            peg$literalExpectation("NOTIFY", false),
            "REFER",
            peg$literalExpectation("REFER", false),
            "PUBLISH",
            peg$literalExpectation("PUBLISH", false),
            function () {
                options = options || { data: {} };
                options.data.method = text();
                return options.data.method;
            },
            function (status_code) {
                options = options || { data: {} };
                options.data.status_code = parseInt(status_code.join(''));
            },
            function () {
                options = options || { data: {} };
                options.data.reason_phrase = text();
            },
            function () {
                options = options || { data: {} };
                options.data = text();
            },
            function () {
                var idx, length;
                options = options || { data: {} };
                length = options.data.multi_header.length;
                for (idx = 0; idx < length; idx++) {
                    if (options.data.multi_header[idx].parsed === null) {
                        options.data = null;
                        break;
                    }
                }
                if (options.data !== null) {
                    options.data = options.data.multi_header;
                }
                else {
                    options.data = -1;
                }
            },
            function () {
                var header;
                options = options || { data: {} };
                if (!options.data.multi_header)
                    options.data.multi_header = [];
                try {
                    header = new name_addr_header_1.NameAddrHeader(options.data.uri, options.data.displayName, options.data.params);
                    delete options.data.uri;
                    delete options.data.displayName;
                    delete options.data.params;
                }
                catch (e) {
                    header = null;
                }
                options.data.multi_header.push({ 'position': peg$currPos,
                    'offset': location().start.offset,
                    'parsed': header
                });
            },
            function (displayName) {
                displayName = text().trim();
                if (displayName[0] === '\"') {
                    displayName = displayName.substring(1, displayName.length - 1);
                }
                options = options || { data: {} };
                options.data.displayName = displayName;
            },
            "q",
            peg$literalExpectation("q", true),
            function (q) {
                options = options || { data: {} };
                if (!options.data.params)
                    options.data.params = {};
                options.data.params['q'] = q;
            },
            "expires",
            peg$literalExpectation("expires", true),
            function (expires) {
                options = options || { data: {} };
                if (!options.data.params)
                    options.data.params = {};
                options.data.params['expires'] = expires;
            },
            function (delta_seconds) {
                return parseInt(delta_seconds.join(''));
            },
            "0",
            peg$literalExpectation("0", false),
            function () {
                return parseFloat(text());
            },
            function (param, value) {
                options = options || { data: {} };
                if (!options.data.params)
                    options.data.params = {};
                if (value === null) {
                    value = undefined;
                }
                else {
                    value = value[1];
                }
                options.data.params[param.toLowerCase()] = value;
            },
            "render",
            peg$literalExpectation("render", true),
            "session",
            peg$literalExpectation("session", true),
            "icon",
            peg$literalExpectation("icon", true),
            "alert",
            peg$literalExpectation("alert", true),
            function () {
                options = options || { data: {} };
                if (options.startRule === 'Content_Disposition') {
                    options.data.type = text().toLowerCase();
                }
            },
            "handling",
            peg$literalExpectation("handling", true),
            "optional",
            peg$literalExpectation("optional", true),
            "required",
            peg$literalExpectation("required", true),
            function (length) {
                options = options || { data: {} };
                options.data = parseInt(length.join(''));
            },
            function () {
                options = options || { data: {} };
                options.data = text();
            },
            "text",
            peg$literalExpectation("text", true),
            "image",
            peg$literalExpectation("image", true),
            "audio",
            peg$literalExpectation("audio", true),
            "video",
            peg$literalExpectation("video", true),
            "application",
            peg$literalExpectation("application", true),
            "message",
            peg$literalExpectation("message", true),
            "multipart",
            peg$literalExpectation("multipart", true),
            "x-",
            peg$literalExpectation("x-", true),
            function (cseq_value) {
                options = options || { data: {} };
                options.data.value = parseInt(cseq_value.join(''));
            },
            function (expires) { options = options || { data: {} }; options.data = expires; },
            function (event_type) {
                options = options || { data: {} };
                options.data.event = event_type.toLowerCase();
            },
            function () {
                options = options || { data: {} };
                var tag = options.data.tag;
                options.data = new name_addr_header_1.NameAddrHeader(options.data.uri, options.data.displayName, options.data.params);
                if (tag) {
                    options.data.setParam('tag', tag);
                }
            },
            "tag",
            peg$literalExpectation("tag", true),
            function (tag) { options = options || { data: {} }; options.data.tag = tag; },
            function (forwards) {
                options = options || { data: {} };
                options.data = parseInt(forwards.join(''));
            },
            function (min_expires) { options = options || { data: {} }; options.data = min_expires; },
            function () {
                options = options || { data: {} };
                options.data = new name_addr_header_1.NameAddrHeader(options.data.uri, options.data.displayName, options.data.params);
            },
            "digest",
            peg$literalExpectation("Digest", true),
            "realm",
            peg$literalExpectation("realm", true),
            function (realm) { options = options || { data: {} }; options.data.realm = realm; },
            "domain",
            peg$literalExpectation("domain", true),
            "nonce",
            peg$literalExpectation("nonce", true),
            function (nonce) { options = options || { data: {} }; options.data.nonce = nonce; },
            "opaque",
            peg$literalExpectation("opaque", true),
            function (opaque) { options = options || { data: {} }; options.data.opaque = opaque; },
            "stale",
            peg$literalExpectation("stale", true),
            "true",
            peg$literalExpectation("true", true),
            function () { options = options || { data: {} }; options.data.stale = true; },
            "false",
            peg$literalExpectation("false", true),
            function () { options = options || { data: {} }; options.data.stale = false; },
            "algorithm",
            peg$literalExpectation("algorithm", true),
            "md5",
            peg$literalExpectation("MD5", true),
            "md5-sess",
            peg$literalExpectation("MD5-sess", true),
            function (algorithm) {
                options = options || { data: {} };
                options.data.algorithm = algorithm.toUpperCase();
            },
            "qop",
            peg$literalExpectation("qop", true),
            "auth-int",
            peg$literalExpectation("auth-int", true),
            "auth",
            peg$literalExpectation("auth", true),
            function (qop_value) {
                options = options || { data: {} };
                options.data.qop || (options.data.qop = []);
                options.data.qop.push(qop_value.toLowerCase());
            },
            function (rack_value) {
                options = options || { data: {} };
                options.data.value = parseInt(rack_value.join(''));
            },
            function () {
                var idx, length;
                options = options || { data: {} };
                length = options.data.multi_header.length;
                for (idx = 0; idx < length; idx++) {
                    if (options.data.multi_header[idx].parsed === null) {
                        options.data = null;
                        break;
                    }
                }
                if (options.data !== null) {
                    options.data = options.data.multi_header;
                }
                else {
                    options.data = -1;
                }
            },
            function () {
                var header;
                options = options || { data: {} };
                if (!options.data.multi_header)
                    options.data.multi_header = [];
                try {
                    header = new name_addr_header_1.NameAddrHeader(options.data.uri, options.data.displayName, options.data.params);
                    delete options.data.uri;
                    delete options.data.displayName;
                    delete options.data.params;
                }
                catch (e) {
                    header = null;
                }
                options.data.multi_header.push({ 'position': peg$currPos,
                    'offset': location().start.offset,
                    'parsed': header
                });
            },
            function () {
                options = options || { data: {} };
                options.data = new name_addr_header_1.NameAddrHeader(options.data.uri, options.data.displayName, options.data.params);
            },
            function () {
                options = options || { data: {} };
                if (!(options.data.replaces_from_tag && options.data.replaces_to_tag)) {
                    options.data = -1;
                }
            },
            function () {
                options = options || { data: {} };
                options.data = {
                    call_id: options.data
                };
            },
            "from-tag",
            peg$literalExpectation("from-tag", true),
            function (from_tag) {
                options = options || { data: {} };
                options.data.replaces_from_tag = from_tag;
            },
            "to-tag",
            peg$literalExpectation("to-tag", true),
            function (to_tag) {
                options = options || { data: {} };
                options.data.replaces_to_tag = to_tag;
            },
            "early-only",
            peg$literalExpectation("early-only", true),
            function () {
                options = options || { data: {} };
                options.data.early_only = true;
            },
            function (head, r) { return r; },
            function (head, tail) { return list(head, tail); },
            function (value) {
                options = options || { data: {} };
                if (options.startRule === 'Require') {
                    options.data = value || [];
                }
            },
            function (rseq_value) {
                options = options || { data: {} };
                options.data.value = parseInt(rseq_value.join(''));
            },
            "active",
            peg$literalExpectation("active", true),
            "pending",
            peg$literalExpectation("pending", true),
            "terminated",
            peg$literalExpectation("terminated", true),
            function () {
                options = options || { data: {} };
                options.data.state = text();
            },
            "reason",
            peg$literalExpectation("reason", true),
            function (reason) {
                options = options || { data: {} };
                if (typeof reason !== 'undefined')
                    options.data.reason = reason;
            },
            function (expires) {
                options = options || { data: {} };
                if (typeof expires !== 'undefined')
                    options.data.expires = expires;
            },
            "retry_after",
            peg$literalExpectation("retry_after", true),
            function (retry_after) {
                options = options || { data: {} };
                if (typeof retry_after !== 'undefined')
                    options.data.retry_after = retry_after;
            },
            "deactivated",
            peg$literalExpectation("deactivated", true),
            "probation",
            peg$literalExpectation("probation", true),
            "rejected",
            peg$literalExpectation("rejected", true),
            "timeout",
            peg$literalExpectation("timeout", true),
            "giveup",
            peg$literalExpectation("giveup", true),
            "noresource",
            peg$literalExpectation("noresource", true),
            "invariant",
            peg$literalExpectation("invariant", true),
            function (value) {
                options = options || { data: {} };
                if (options.startRule === 'Supported') {
                    options.data = value || [];
                }
            },
            function () {
                options = options || { data: {} };
                var tag = options.data.tag;
                options.data = new name_addr_header_1.NameAddrHeader(options.data.uri, options.data.displayName, options.data.params);
                if (tag) {
                    options.data.setParam('tag', tag);
                }
            },
            "ttl",
            peg$literalExpectation("ttl", true),
            function (via_ttl_value) {
                options = options || { data: {} };
                options.data.ttl = via_ttl_value;
            },
            "maddr",
            peg$literalExpectation("maddr", true),
            function (via_maddr) {
                options = options || { data: {} };
                options.data.maddr = via_maddr;
            },
            "received",
            peg$literalExpectation("received", true),
            function (via_received) {
                options = options || { data: {} };
                options.data.received = via_received;
            },
            "branch",
            peg$literalExpectation("branch", true),
            function (via_branch) {
                options = options || { data: {} };
                options.data.branch = via_branch;
            },
            "rport",
            peg$literalExpectation("rport", true),
            function (response_port) {
                options = options || { data: {} };
                if (typeof response_port !== 'undefined')
                    options.data.rport = response_port.join('');
            },
            function (via_protocol) {
                options = options || { data: {} };
                options.data.protocol = via_protocol;
            },
            peg$literalExpectation("UDP", true),
            peg$literalExpectation("TCP", true),
            peg$literalExpectation("TLS", true),
            peg$literalExpectation("SCTP", true),
            function (via_transport) {
                options = options || { data: {} };
                options.data.transport = via_transport;
            },
            function () {
                options = options || { data: {} };
                options.data.host = text();
            },
            function (via_sent_by_port) {
                options = options || { data: {} };
                options.data.port = parseInt(via_sent_by_port.join(''));
            },
            function (ttl) {
                return parseInt(ttl.join(''));
            },
            function (deltaSeconds) {
                options = options || { data: {} };
                if (options.startRule === 'Session_Expires') {
                    options.data.deltaSeconds = deltaSeconds;
                }
            },
            "refresher",
            peg$literalExpectation("refresher", false),
            "uas",
            peg$literalExpectation("uas", false),
            "uac",
            peg$literalExpectation("uac", false),
            function (endpoint) {
                options = options || { data: {} };
                if (options.startRule === 'Session_Expires') {
                    options.data.refresher = endpoint;
                }
            },
            function (deltaSeconds) {
                options = options || { data: {} };
                if (options.startRule === 'Min_SE') {
                    options.data = deltaSeconds;
                }
            },
            "stuns",
            peg$literalExpectation("stuns", true),
            "stun",
            peg$literalExpectation("stun", true),
            function (scheme) {
                options = options || { data: {} };
                options.data.scheme = scheme;
            },
            function (host) {
                options = options || { data: {} };
                options.data.host = host;
            },
            "?transport=",
            peg$literalExpectation("?transport=", false),
            "turns",
            peg$literalExpectation("turns", true),
            "turn",
            peg$literalExpectation("turn", true),
            function (transport) {
                options = options || { data: {} };
                options.data.transport = transport;
            },
            function () {
                options = options || { data: {} };
                options.data = text();
            },
            "Referred-By",
            peg$literalExpectation("Referred-By", false),
            "b",
            peg$literalExpectation("b", false),
            "cid",
            peg$literalExpectation("cid", false)
        ];
        const peg$bytecode = [
            peg$decode("2 \"\"6 7!"),
            peg$decode("4\"\"\"5!7#"),
            peg$decode("4$\"\"5!7%"),
            peg$decode("4&\"\"5!7'"),
            peg$decode(";'.# &;("),
            peg$decode("4(\"\"5!7)"),
            peg$decode("4*\"\"5!7+"),
            peg$decode("2,\"\"6,7-"),
            peg$decode("2.\"\"6.7/"),
            peg$decode("40\"\"5!71"),
            peg$decode("22\"\"6273.\x89 &24\"\"6475.} &26\"\"6677.q &28\"\"6879.e &2:\"\"6:7;.Y &2<\"\"6<7=.M &2>\"\"6>7?.A &2@\"\"6@7A.5 &2B\"\"6B7C.) &2D\"\"6D7E"),
            peg$decode(";).# &;,"),
            peg$decode("2F\"\"6F7G.} &2H\"\"6H7I.q &2J\"\"6J7K.e &2L\"\"6L7M.Y &2N\"\"6N7O.M &2P\"\"6P7Q.A &2R\"\"6R7S.5 &2T\"\"6T7U.) &2V\"\"6V7W"),
            peg$decode("%%2X\"\"6X7Y/5#;#/,$;#/#$+#)(#'#(\"'#&'#/\"!&,)"),
            peg$decode("%%$;$0#*;$&/,#; /#$+\")(\"'#&'#.\" &\"/=#$;$/&#0#*;$&&&#/'$8\":Z\" )(\"'#&'#"),
            peg$decode(";..\" &\""),
            peg$decode("%$;'.# &;(0)*;'.# &;(&/?#28\"\"6879/0$;//'$8#:[# )(#'#(\"'#&'#"),
            peg$decode("%%$;2/&#0#*;2&&&#/g#$%$;.0#*;.&/,#;2/#$+\")(\"'#&'#0=*%$;.0#*;.&/,#;2/#$+\")(\"'#&'#&/#$+\")(\"'#&'#/\"!&,)"),
            peg$decode("4\\\"\"5!7].# &;3"),
            peg$decode("4^\"\"5!7_"),
            peg$decode("4`\"\"5!7a"),
            peg$decode(";!.) &4b\"\"5!7c"),
            peg$decode("%$;).\x95 &2F\"\"6F7G.\x89 &2J\"\"6J7K.} &2L\"\"6L7M.q &2X\"\"6X7Y.e &2P\"\"6P7Q.Y &2H\"\"6H7I.M &2@\"\"6@7A.A &2d\"\"6d7e.5 &2R\"\"6R7S.) &2N\"\"6N7O/\x9E#0\x9B*;).\x95 &2F\"\"6F7G.\x89 &2J\"\"6J7K.} &2L\"\"6L7M.q &2X\"\"6X7Y.e &2P\"\"6P7Q.Y &2H\"\"6H7I.M &2@\"\"6@7A.A &2d\"\"6d7e.5 &2R\"\"6R7S.) &2N\"\"6N7O&&&#/\"!&,)"),
            peg$decode("%$;).\x89 &2F\"\"6F7G.} &2L\"\"6L7M.q &2X\"\"6X7Y.e &2P\"\"6P7Q.Y &2H\"\"6H7I.M &2@\"\"6@7A.A &2d\"\"6d7e.5 &2R\"\"6R7S.) &2N\"\"6N7O/\x92#0\x8F*;).\x89 &2F\"\"6F7G.} &2L\"\"6L7M.q &2X\"\"6X7Y.e &2P\"\"6P7Q.Y &2H\"\"6H7I.M &2@\"\"6@7A.A &2d\"\"6d7e.5 &2R\"\"6R7S.) &2N\"\"6N7O&&&#/\"!&,)"),
            peg$decode("2T\"\"6T7U.\xE3 &2V\"\"6V7W.\xD7 &2f\"\"6f7g.\xCB &2h\"\"6h7i.\xBF &2:\"\"6:7;.\xB3 &2D\"\"6D7E.\xA7 &22\"\"6273.\x9B &28\"\"6879.\x8F &2j\"\"6j7k.\x83 &;&.} &24\"\"6475.q &2l\"\"6l7m.e &2n\"\"6n7o.Y &26\"\"6677.M &2>\"\"6>7?.A &2p\"\"6p7q.5 &2r\"\"6r7s.) &;'.# &;("),
            peg$decode("%$;).\u012B &2F\"\"6F7G.\u011F &2J\"\"6J7K.\u0113 &2L\"\"6L7M.\u0107 &2X\"\"6X7Y.\xFB &2P\"\"6P7Q.\xEF &2H\"\"6H7I.\xE3 &2@\"\"6@7A.\xD7 &2d\"\"6d7e.\xCB &2R\"\"6R7S.\xBF &2N\"\"6N7O.\xB3 &2T\"\"6T7U.\xA7 &2V\"\"6V7W.\x9B &2f\"\"6f7g.\x8F &2h\"\"6h7i.\x83 &28\"\"6879.w &2j\"\"6j7k.k &;&.e &24\"\"6475.Y &2l\"\"6l7m.M &2n\"\"6n7o.A &26\"\"6677.5 &2p\"\"6p7q.) &2r\"\"6r7s/\u0134#0\u0131*;).\u012B &2F\"\"6F7G.\u011F &2J\"\"6J7K.\u0113 &2L\"\"6L7M.\u0107 &2X\"\"6X7Y.\xFB &2P\"\"6P7Q.\xEF &2H\"\"6H7I.\xE3 &2@\"\"6@7A.\xD7 &2d\"\"6d7e.\xCB &2R\"\"6R7S.\xBF &2N\"\"6N7O.\xB3 &2T\"\"6T7U.\xA7 &2V\"\"6V7W.\x9B &2f\"\"6f7g.\x8F &2h\"\"6h7i.\x83 &28\"\"6879.w &2j\"\"6j7k.k &;&.e &24\"\"6475.Y &2l\"\"6l7m.M &2n\"\"6n7o.A &26\"\"6677.5 &2p\"\"6p7q.) &2r\"\"6r7s&&&#/\"!&,)"),
            peg$decode("%;//?#2P\"\"6P7Q/0$;//'$8#:t# )(#'#(\"'#&'#"),
            peg$decode("%;//?#24\"\"6475/0$;//'$8#:u# )(#'#(\"'#&'#"),
            peg$decode("%;//?#2>\"\"6>7?/0$;//'$8#:v# )(#'#(\"'#&'#"),
            peg$decode("%;//?#2T\"\"6T7U/0$;//'$8#:w# )(#'#(\"'#&'#"),
            peg$decode("%;//?#2V\"\"6V7W/0$;//'$8#:x# )(#'#(\"'#&'#"),
            peg$decode("%2h\"\"6h7i/0#;//'$8\":y\" )(\"'#&'#"),
            peg$decode("%;//6#2f\"\"6f7g/'$8\":z\" )(\"'#&'#"),
            peg$decode("%;//?#2D\"\"6D7E/0$;//'$8#:{# )(#'#(\"'#&'#"),
            peg$decode("%;//?#22\"\"6273/0$;//'$8#:|# )(#'#(\"'#&'#"),
            peg$decode("%;//?#28\"\"6879/0$;//'$8#:}# )(#'#(\"'#&'#"),
            peg$decode("%;//0#;&/'$8\":~\" )(\"'#&'#"),
            peg$decode("%;&/0#;//'$8\":~\" )(\"'#&'#"),
            peg$decode("%;=/T#$;G.) &;K.# &;F0/*;G.) &;K.# &;F&/,$;>/#$+#)(#'#(\"'#&'#"),
            peg$decode("4\x7F\"\"5!7\x80.A &4\x81\"\"5!7\x82.5 &4\x83\"\"5!7\x84.) &;3.# &;."),
            peg$decode("%%;//Q#;&/H$$;J.# &;K0)*;J.# &;K&/,$;&/#$+$)($'#(#'#(\"'#&'#/\"!&,)"),
            peg$decode("%;//]#;&/T$%$;J.# &;K0)*;J.# &;K&/\"!&,)/1$;&/($8$:\x85$!!)($'#(#'#(\"'#&'#"),
            peg$decode(";..G &2L\"\"6L7M.; &4\x86\"\"5!7\x87./ &4\x83\"\"5!7\x84.# &;3"),
            peg$decode("%2j\"\"6j7k/J#4\x88\"\"5!7\x89.5 &4\x8A\"\"5!7\x8B.) &4\x8C\"\"5!7\x8D/#$+\")(\"'#&'#"),
            peg$decode("%;N/M#28\"\"6879/>$;O.\" &\"/0$;S/'$8$:\x8E$ )($'#(#'#(\"'#&'#"),
            peg$decode("%;N/d#28\"\"6879/U$;O.\" &\"/G$;S/>$;_/5$;l.\" &\"/'$8&:\x8F& )(&'#(%'#($'#(#'#(\"'#&'#"),
            peg$decode("%3\x90\"\"5$7\x91.) &3\x92\"\"5#7\x93/' 8!:\x94!! )"),
            peg$decode("%;P/]#%28\"\"6879/,#;R/#$+\")(\"'#&'#.\" &\"/6$2:\"\"6:7;/'$8#:\x95# )(#'#(\"'#&'#"),
            peg$decode("$;+.) &;-.# &;Q/2#0/*;+.) &;-.# &;Q&&&#"),
            peg$decode("2<\"\"6<7=.q &2>\"\"6>7?.e &2@\"\"6@7A.Y &2B\"\"6B7C.M &2D\"\"6D7E.A &22\"\"6273.5 &26\"\"6677.) &24\"\"6475"),
            peg$decode("%$;+._ &;-.Y &2<\"\"6<7=.M &2>\"\"6>7?.A &2@\"\"6@7A.5 &2B\"\"6B7C.) &2D\"\"6D7E0e*;+._ &;-.Y &2<\"\"6<7=.M &2>\"\"6>7?.A &2@\"\"6@7A.5 &2B\"\"6B7C.) &2D\"\"6D7E&/& 8!:\x96! )"),
            peg$decode("%;T/J#%28\"\"6879/,#;^/#$+\")(\"'#&'#.\" &\"/#$+\")(\"'#&'#"),
            peg$decode("%;U.) &;\\.# &;X/& 8!:\x97! )"),
            peg$decode("%$%;V/2#2J\"\"6J7K/#$+\")(\"'#&'#0<*%;V/2#2J\"\"6J7K/#$+\")(\"'#&'#&/D#;W/;$2J\"\"6J7K.\" &\"/'$8#:\x98# )(#'#(\"'#&'#"),
            peg$decode("$4\x99\"\"5!7\x9A/,#0)*4\x99\"\"5!7\x9A&&&#"),
            peg$decode("%4$\"\"5!7%/?#$4\x9B\"\"5!7\x9C0)*4\x9B\"\"5!7\x9C&/#$+\")(\"'#&'#"),
            peg$decode("%2l\"\"6l7m/?#;Y/6$2n\"\"6n7o/'$8#:\x9D# )(#'#(\"'#&'#"),
            peg$decode("%%;Z/\xB3#28\"\"6879/\xA4$;Z/\x9B$28\"\"6879/\x8C$;Z/\x83$28\"\"6879/t$;Z/k$28\"\"6879/\\$;Z/S$28\"\"6879/D$;Z/;$28\"\"6879/,$;[/#$+-)(-'#(,'#(+'#(*'#()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#.\u0790 &%2\x9E\"\"6\x9E7\x9F/\xA4#;Z/\x9B$28\"\"6879/\x8C$;Z/\x83$28\"\"6879/t$;Z/k$28\"\"6879/\\$;Z/S$28\"\"6879/D$;Z/;$28\"\"6879/,$;[/#$+,)(,'#(+'#(*'#()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#.\u06F9 &%2\x9E\"\"6\x9E7\x9F/\x8C#;Z/\x83$28\"\"6879/t$;Z/k$28\"\"6879/\\$;Z/S$28\"\"6879/D$;Z/;$28\"\"6879/,$;[/#$+*)(*'#()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#.\u067A &%2\x9E\"\"6\x9E7\x9F/t#;Z/k$28\"\"6879/\\$;Z/S$28\"\"6879/D$;Z/;$28\"\"6879/,$;[/#$+()(('#(''#(&'#(%'#($'#(#'#(\"'#&'#.\u0613 &%2\x9E\"\"6\x9E7\x9F/\\#;Z/S$28\"\"6879/D$;Z/;$28\"\"6879/,$;[/#$+&)(&'#(%'#($'#(#'#(\"'#&'#.\u05C4 &%2\x9E\"\"6\x9E7\x9F/D#;Z/;$28\"\"6879/,$;[/#$+$)($'#(#'#(\"'#&'#.\u058D &%2\x9E\"\"6\x9E7\x9F/,#;[/#$+\")(\"'#&'#.\u056E &%2\x9E\"\"6\x9E7\x9F/,#;Z/#$+\")(\"'#&'#.\u054F &%;Z/\x9B#2\x9E\"\"6\x9E7\x9F/\x8C$;Z/\x83$28\"\"6879/t$;Z/k$28\"\"6879/\\$;Z/S$28\"\"6879/D$;Z/;$28\"\"6879/,$;[/#$++)(+'#(*'#()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#.\u04C7 &%;Z/\xAA#%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\x83$2\x9E\"\"6\x9E7\x9F/t$;Z/k$28\"\"6879/\\$;Z/S$28\"\"6879/D$;Z/;$28\"\"6879/,$;[/#$+*)(*'#()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#.\u0430 &%;Z/\xB9#%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\x92$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/k$2\x9E\"\"6\x9E7\x9F/\\$;Z/S$28\"\"6879/D$;Z/;$28\"\"6879/,$;[/#$+))()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#.\u038A &%;Z/\xC8#%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\xA1$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/z$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/S$2\x9E\"\"6\x9E7\x9F/D$;Z/;$28\"\"6879/,$;[/#$+()(('#(''#(&'#(%'#($'#(#'#(\"'#&'#.\u02D5 &%;Z/\xD7#%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\xB0$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\x89$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/b$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/;$2\x9E\"\"6\x9E7\x9F/,$;[/#$+')(''#(&'#(%'#($'#(#'#(\"'#&'#.\u0211 &%;Z/\xFE#%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\xD7$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\xB0$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\x89$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/b$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/;$2\x9E\"\"6\x9E7\x9F/,$;Z/#$+()(('#(''#(&'#(%'#($'#(#'#(\"'#&'#.\u0126 &%;Z/\u011C#%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\xF5$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\xCE$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\xA7$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/\x80$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/Y$%28\"\"6879/,#;Z/#$+\")(\"'#&'#.\" &\"/2$2\x9E\"\"6\x9E7\x9F/#$+()(('#(''#(&'#(%'#($'#(#'#(\"'#&'#/& 8!:\xA0! )"),
            peg$decode("%;#/M#;#.\" &\"/?$;#.\" &\"/1$;#.\" &\"/#$+$)($'#(#'#(\"'#&'#"),
            peg$decode("%;Z/;#28\"\"6879/,$;Z/#$+#)(#'#(\"'#&'#.# &;\\"),
            peg$decode("%;]/o#2J\"\"6J7K/`$;]/W$2J\"\"6J7K/H$;]/?$2J\"\"6J7K/0$;]/'$8':\xA1' )(''#(&'#(%'#($'#(#'#(\"'#&'#"),
            peg$decode("%2\xA2\"\"6\xA27\xA3/2#4\xA4\"\"5!7\xA5/#$+\")(\"'#&'#.\x98 &%2\xA6\"\"6\xA67\xA7/;#4\xA8\"\"5!7\xA9/,$;!/#$+#)(#'#(\"'#&'#.j &%2\xAA\"\"6\xAA7\xAB/5#;!/,$;!/#$+#)(#'#(\"'#&'#.B &%4\xAC\"\"5!7\xAD/,#;!/#$+\")(\"'#&'#.# &;!"),
            peg$decode("%%;!.\" &\"/[#;!.\" &\"/M$;!.\" &\"/?$;!.\" &\"/1$;!.\" &\"/#$+%)(%'#($'#(#'#(\"'#&'#/' 8!:\xAE!! )"),
            peg$decode("$%22\"\"6273/,#;`/#$+\")(\"'#&'#0<*%22\"\"6273/,#;`/#$+\")(\"'#&'#&"),
            peg$decode(";a.A &;b.; &;c.5 &;d./ &;e.) &;f.# &;g"),
            peg$decode("%3\xAF\"\"5*7\xB0/a#3\xB1\"\"5#7\xB2.G &3\xB3\"\"5#7\xB4.; &3\xB5\"\"5$7\xB6./ &3\xB7\"\"5#7\xB8.# &;6/($8\":\xB9\"! )(\"'#&'#"),
            peg$decode("%3\xBA\"\"5%7\xBB/I#3\xBC\"\"5%7\xBD./ &3\xBE\"\"5\"7\xBF.# &;6/($8\":\xC0\"! )(\"'#&'#"),
            peg$decode("%3\xC1\"\"5'7\xC2/1#;\x90/($8\":\xC3\"! )(\"'#&'#"),
            peg$decode("%3\xC4\"\"5$7\xC5/1#;\xF0/($8\":\xC6\"! )(\"'#&'#"),
            peg$decode("%3\xC7\"\"5&7\xC8/1#;T/($8\":\xC9\"! )(\"'#&'#"),
            peg$decode("%3\xCA\"\"5\"7\xCB/N#%2>\"\"6>7?/,#;6/#$+\")(\"'#&'#.\" &\"/'$8\":\xCC\" )(\"'#&'#"),
            peg$decode("%;h/P#%2>\"\"6>7?/,#;i/#$+\")(\"'#&'#.\" &\"/)$8\":\xCD\"\"! )(\"'#&'#"),
            peg$decode("%$;j/&#0#*;j&&&#/\"!&,)"),
            peg$decode("%$;j/&#0#*;j&&&#/\"!&,)"),
            peg$decode(";k.) &;+.# &;-"),
            peg$decode("2l\"\"6l7m.e &2n\"\"6n7o.Y &24\"\"6475.M &28\"\"6879.A &2<\"\"6<7=.5 &2@\"\"6@7A.) &2B\"\"6B7C"),
            peg$decode("%26\"\"6677/n#;m/e$$%2<\"\"6<7=/,#;m/#$+\")(\"'#&'#0<*%2<\"\"6<7=/,#;m/#$+\")(\"'#&'#&/#$+#)(#'#(\"'#&'#"),
            peg$decode("%;n/A#2>\"\"6>7?/2$;o/)$8#:\xCE#\"\" )(#'#(\"'#&'#"),
            peg$decode("$;p.) &;+.# &;-/2#0/*;p.) &;+.# &;-&&&#"),
            peg$decode("$;p.) &;+.# &;-0/*;p.) &;+.# &;-&"),
            peg$decode("2l\"\"6l7m.e &2n\"\"6n7o.Y &24\"\"6475.M &26\"\"6677.A &28\"\"6879.5 &2@\"\"6@7A.) &2B\"\"6B7C"),
            peg$decode(";\x91.# &;r"),
            peg$decode("%;\x90/G#;'/>$;s/5$;'/,$;\x84/#$+%)(%'#($'#(#'#(\"'#&'#"),
            peg$decode(";M.# &;t"),
            peg$decode("%;\x7F/E#28\"\"6879/6$;u.# &;x/'$8#:\xCF# )(#'#(\"'#&'#"),
            peg$decode("%;v.# &;w/J#%26\"\"6677/,#;\x83/#$+\")(\"'#&'#.\" &\"/#$+\")(\"'#&'#"),
            peg$decode("%2\xD0\"\"6\xD07\xD1/:#;\x80/1$;w.\" &\"/#$+#)(#'#(\"'#&'#"),
            peg$decode("%24\"\"6475/,#;{/#$+\")(\"'#&'#"),
            peg$decode("%;z/3#$;y0#*;y&/#$+\")(\"'#&'#"),
            peg$decode(";*.) &;+.# &;-"),
            peg$decode(";+.\x8F &;-.\x89 &22\"\"6273.} &26\"\"6677.q &28\"\"6879.e &2:\"\"6:7;.Y &2<\"\"6<7=.M &2>\"\"6>7?.A &2@\"\"6@7A.5 &2B\"\"6B7C.) &2D\"\"6D7E"),
            peg$decode("%;|/e#$%24\"\"6475/,#;|/#$+\")(\"'#&'#0<*%24\"\"6475/,#;|/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
            peg$decode("%$;~0#*;~&/e#$%22\"\"6273/,#;}/#$+\")(\"'#&'#0<*%22\"\"6273/,#;}/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
            peg$decode("$;~0#*;~&"),
            peg$decode(";+.w &;-.q &28\"\"6879.e &2:\"\"6:7;.Y &2<\"\"6<7=.M &2>\"\"6>7?.A &2@\"\"6@7A.5 &2B\"\"6B7C.) &2D\"\"6D7E"),
            peg$decode("%%;\"/\x87#$;\".G &;!.A &2@\"\"6@7A.5 &2F\"\"6F7G.) &2J\"\"6J7K0M*;\".G &;!.A &2@\"\"6@7A.5 &2F\"\"6F7G.) &2J\"\"6J7K&/#$+\")(\"'#&'#/& 8!:\xD2! )"),
            peg$decode(";\x81.# &;\x82"),
            peg$decode("%%;O/2#2:\"\"6:7;/#$+\")(\"'#&'#.\" &\"/,#;S/#$+\")(\"'#&'#.\" &\""),
            peg$decode("$;+.\x83 &;-.} &2B\"\"6B7C.q &2D\"\"6D7E.e &22\"\"6273.Y &28\"\"6879.M &2:\"\"6:7;.A &2<\"\"6<7=.5 &2>\"\"6>7?.) &2@\"\"6@7A/\x8C#0\x89*;+.\x83 &;-.} &2B\"\"6B7C.q &2D\"\"6D7E.e &22\"\"6273.Y &28\"\"6879.M &2:\"\"6:7;.A &2<\"\"6<7=.5 &2>\"\"6>7?.) &2@\"\"6@7A&&&#"),
            peg$decode("$;y0#*;y&"),
            peg$decode("%3\x92\"\"5#7\xD3/q#24\"\"6475/b$$;!/&#0#*;!&&&#/L$2J\"\"6J7K/=$$;!/&#0#*;!&&&#/'$8%:\xD4% )(%'#($'#(#'#(\"'#&'#"),
            peg$decode("2\xD5\"\"6\xD57\xD6"),
            peg$decode("2\xD7\"\"6\xD77\xD8"),
            peg$decode("2\xD9\"\"6\xD97\xDA"),
            peg$decode("2\xDB\"\"6\xDB7\xDC"),
            peg$decode("2\xDD\"\"6\xDD7\xDE"),
            peg$decode("2\xDF\"\"6\xDF7\xE0"),
            peg$decode("2\xE1\"\"6\xE17\xE2"),
            peg$decode("2\xE3\"\"6\xE37\xE4"),
            peg$decode("2\xE5\"\"6\xE57\xE6"),
            peg$decode("2\xE7\"\"6\xE77\xE8"),
            peg$decode("2\xE9\"\"6\xE97\xEA"),
            peg$decode("%;\x85.Y &;\x86.S &;\x88.M &;\x89.G &;\x8A.A &;\x8B.; &;\x8C.5 &;\x8F./ &;\x8D.) &;\x8E.# &;6/& 8!:\xEB! )"),
            peg$decode("%;\x84/G#;'/>$;\x92/5$;'/,$;\x94/#$+%)(%'#($'#(#'#(\"'#&'#"),
            peg$decode("%;\x93/' 8!:\xEC!! )"),
            peg$decode("%;!/5#;!/,$;!/#$+#)(#'#(\"'#&'#"),
            peg$decode("%$;*.A &;+.; &;-.5 &;3./ &;4.) &;'.# &;(0G*;*.A &;+.; &;-.5 &;3./ &;4.) &;'.# &;(&/& 8!:\xED! )"),
            peg$decode("%;\xB6/Y#$%;A/,#;\xB6/#$+\")(\"'#&'#06*%;A/,#;\xB6/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
            peg$decode("%;9/N#%2:\"\"6:7;/,#;9/#$+\")(\"'#&'#.\" &\"/'$8\":\xEE\" )(\"'#&'#"),
            peg$decode("%;:.c &%;\x98/Y#$%;A/,#;\x98/#$+\")(\"'#&'#06*%;A/,#;\x98/#$+\")(\"'#&'#&/#$+\")(\"'#&'#/& 8!:\xEF! )"),
            peg$decode("%;L.# &;\x99/]#$%;B/,#;\x9B/#$+\")(\"'#&'#06*%;B/,#;\x9B/#$+\")(\"'#&'#&/'$8\":\xF0\" )(\"'#&'#"),
            peg$decode("%;\x9A.\" &\"/>#;@/5$;M/,$;?/#$+$)($'#(#'#(\"'#&'#"),
            peg$decode("%%;6/Y#$%;./,#;6/#$+\")(\"'#&'#06*%;./,#;6/#$+\")(\"'#&'#&/#$+\")(\"'#&'#.# &;H/' 8!:\xF1!! )"),
            peg$decode(";\x9C.) &;\x9D.# &;\xA0"),
            peg$decode("%3\xF2\"\"5!7\xF3/:#;</1$;\x9F/($8#:\xF4#! )(#'#(\"'#&'#"),
            peg$decode("%3\xF5\"\"5'7\xF6/:#;</1$;\x9E/($8#:\xF7#! )(#'#(\"'#&'#"),
            peg$decode("%$;!/&#0#*;!&&&#/' 8!:\xF8!! )"),
            peg$decode("%2\xF9\"\"6\xF97\xFA/o#%2J\"\"6J7K/M#;!.\" &\"/?$;!.\" &\"/1$;!.\" &\"/#$+$)($'#(#'#(\"'#&'#.\" &\"/'$8\":\xFB\" )(\"'#&'#"),
            peg$decode("%;6/J#%;</,#;\xA1/#$+\")(\"'#&'#.\" &\"/)$8\":\xFC\"\"! )(\"'#&'#"),
            peg$decode(";6.) &;T.# &;H"),
            peg$decode("%;\xA3/Y#$%;B/,#;\xA4/#$+\")(\"'#&'#06*%;B/,#;\xA4/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
            peg$decode("%3\xFD\"\"5&7\xFE.G &3\xFF\"\"5'7\u0100.; &3\u0101\"\"5$7\u0102./ &3\u0103\"\"5%7\u0104.# &;6/& 8!:\u0105! )"),
            peg$decode(";\xA5.# &;\xA0"),
            peg$decode("%3\u0106\"\"5(7\u0107/M#;</D$3\u0108\"\"5(7\u0109./ &3\u010A\"\"5(7\u010B.# &;6/#$+#)(#'#(\"'#&'#"),
            peg$decode("%;6/Y#$%;A/,#;6/#$+\")(\"'#&'#06*%;A/,#;6/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
            peg$decode("%$;!/&#0#*;!&&&#/' 8!:\u010C!! )"),
            peg$decode("%;\xA9/& 8!:\u010D! )"),
            peg$decode("%;\xAA/k#;;/b$;\xAF/Y$$%;B/,#;\xB0/#$+\")(\"'#&'#06*%;B/,#;\xB0/#$+\")(\"'#&'#&/#$+$)($'#(#'#(\"'#&'#"),
            peg$decode(";\xAB.# &;\xAC"),
            peg$decode("3\u010E\"\"5$7\u010F.S &3\u0110\"\"5%7\u0111.G &3\u0112\"\"5%7\u0113.; &3\u0114\"\"5%7\u0115./ &3\u0116\"\"5+7\u0117.# &;\xAD"),
            peg$decode("3\u0118\"\"5'7\u0119./ &3\u011A\"\"5)7\u011B.# &;\xAD"),
            peg$decode(";6.# &;\xAE"),
            peg$decode("%3\u011C\"\"5\"7\u011D/,#;6/#$+\")(\"'#&'#"),
            peg$decode(";\xAD.# &;6"),
            peg$decode("%;6/5#;</,$;\xB1/#$+#)(#'#(\"'#&'#"),
            peg$decode(";6.# &;H"),
            peg$decode("%;\xB3/5#;./,$;\x90/#$+#)(#'#(\"'#&'#"),
            peg$decode("%$;!/&#0#*;!&&&#/' 8!:\u011E!! )"),
            peg$decode("%;\x9E/' 8!:\u011F!! )"),
            peg$decode("%;\xB6/^#$%;B/,#;\xA0/#$+\")(\"'#&'#06*%;B/,#;\xA0/#$+\")(\"'#&'#&/($8\":\u0120\"!!)(\"'#&'#"),
            peg$decode("%%;7/e#$%2J\"\"6J7K/,#;7/#$+\")(\"'#&'#0<*%2J\"\"6J7K/,#;7/#$+\")(\"'#&'#&/#$+\")(\"'#&'#/\"!&,)"),
            peg$decode("%;L.# &;\x99/]#$%;B/,#;\xB8/#$+\")(\"'#&'#06*%;B/,#;\xB8/#$+\")(\"'#&'#&/'$8\":\u0121\" )(\"'#&'#"),
            peg$decode(";\xB9.# &;\xA0"),
            peg$decode("%3\u0122\"\"5#7\u0123/:#;</1$;6/($8#:\u0124#! )(#'#(\"'#&'#"),
            peg$decode("%$;!/&#0#*;!&&&#/' 8!:\u0125!! )"),
            peg$decode("%;\x9E/' 8!:\u0126!! )"),
            peg$decode("%$;\x9A0#*;\x9A&/x#;@/o$;M/f$;?/]$$%;B/,#;\xA0/#$+\")(\"'#&'#06*%;B/,#;\xA0/#$+\")(\"'#&'#&/'$8%:\u0127% )(%'#($'#(#'#(\"'#&'#"),
            peg$decode(";\xBE"),
            peg$decode("%3\u0128\"\"5&7\u0129/k#;./b$;\xC1/Y$$%;A/,#;\xC1/#$+\")(\"'#&'#06*%;A/,#;\xC1/#$+\")(\"'#&'#&/#$+$)($'#(#'#(\"'#&'#.# &;\xBF"),
            peg$decode("%;6/k#;./b$;\xC0/Y$$%;A/,#;\xC0/#$+\")(\"'#&'#06*%;A/,#;\xC0/#$+\")(\"'#&'#&/#$+$)($'#(#'#(\"'#&'#"),
            peg$decode("%;6/;#;</2$;6.# &;H/#$+#)(#'#(\"'#&'#"),
            peg$decode(";\xC2.G &;\xC4.A &;\xC6.; &;\xC8.5 &;\xC9./ &;\xCA.) &;\xCB.# &;\xC0"),
            peg$decode("%3\u012A\"\"5%7\u012B/5#;</,$;\xC3/#$+#)(#'#(\"'#&'#"),
            peg$decode("%;I/' 8!:\u012C!! )"),
            peg$decode("%3\u012D\"\"5&7\u012E/\x97#;</\x8E$;D/\x85$;\xC5/|$$%$;'/&#0#*;'&&&#/,#;\xC5/#$+\")(\"'#&'#0C*%$;'/&#0#*;'&&&#/,#;\xC5/#$+\")(\"'#&'#&/,$;E/#$+&)(&'#(%'#($'#(#'#(\"'#&'#"),
            peg$decode(";t.# &;w"),
            peg$decode("%3\u012F\"\"5%7\u0130/5#;</,$;\xC7/#$+#)(#'#(\"'#&'#"),
            peg$decode("%;I/' 8!:\u0131!! )"),
            peg$decode("%3\u0132\"\"5&7\u0133/:#;</1$;I/($8#:\u0134#! )(#'#(\"'#&'#"),
            peg$decode("%3\u0135\"\"5%7\u0136/]#;</T$%3\u0137\"\"5$7\u0138/& 8!:\u0139! ).4 &%3\u013A\"\"5%7\u013B/& 8!:\u013C! )/#$+#)(#'#(\"'#&'#"),
            peg$decode("%3\u013D\"\"5)7\u013E/R#;</I$3\u013F\"\"5#7\u0140./ &3\u0141\"\"5(7\u0142.# &;6/($8#:\u0143#! )(#'#(\"'#&'#"),
            peg$decode("%3\u0144\"\"5#7\u0145/\x93#;</\x8A$;D/\x81$%;\xCC/e#$%2D\"\"6D7E/,#;\xCC/#$+\")(\"'#&'#0<*%2D\"\"6D7E/,#;\xCC/#$+\")(\"'#&'#&/#$+\")(\"'#&'#/,$;E/#$+%)(%'#($'#(#'#(\"'#&'#"),
            peg$decode("%3\u0146\"\"5(7\u0147./ &3\u0148\"\"5$7\u0149.# &;6/' 8!:\u014A!! )"),
            peg$decode("%;6/Y#$%;A/,#;6/#$+\")(\"'#&'#06*%;A/,#;6/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
            peg$decode("%;\xCF/G#;./>$;\xCF/5$;./,$;\x90/#$+%)(%'#($'#(#'#(\"'#&'#"),
            peg$decode("%$;!/&#0#*;!&&&#/' 8!:\u014B!! )"),
            peg$decode("%;\xD1/]#$%;A/,#;\xD1/#$+\")(\"'#&'#06*%;A/,#;\xD1/#$+\")(\"'#&'#&/'$8\":\u014C\" )(\"'#&'#"),
            peg$decode("%;\x99/]#$%;B/,#;\xA0/#$+\")(\"'#&'#06*%;B/,#;\xA0/#$+\")(\"'#&'#&/'$8\":\u014D\" )(\"'#&'#"),
            peg$decode("%;L.O &;\x99.I &%;@.\" &\"/:#;t/1$;?.\" &\"/#$+#)(#'#(\"'#&'#/]#$%;B/,#;\xA0/#$+\")(\"'#&'#06*%;B/,#;\xA0/#$+\")(\"'#&'#&/'$8\":\u014E\" )(\"'#&'#"),
            peg$decode("%;\xD4/]#$%;B/,#;\xD5/#$+\")(\"'#&'#06*%;B/,#;\xD5/#$+\")(\"'#&'#&/'$8\":\u014F\" )(\"'#&'#"),
            peg$decode("%;\x96/& 8!:\u0150! )"),
            peg$decode("%3\u0151\"\"5(7\u0152/:#;</1$;6/($8#:\u0153#! )(#'#(\"'#&'#.g &%3\u0154\"\"5&7\u0155/:#;</1$;6/($8#:\u0156#! )(#'#(\"'#&'#.: &%3\u0157\"\"5*7\u0158/& 8!:\u0159! ).# &;\xA0"),
            peg$decode("%%;6/k#$%;A/2#;6/)$8\":\u015A\"\"$ )(\"'#&'#0<*%;A/2#;6/)$8\":\u015A\"\"$ )(\"'#&'#&/)$8\":\u015B\"\"! )(\"'#&'#.\" &\"/' 8!:\u015C!! )"),
            peg$decode("%;\xD8/Y#$%;A/,#;\xD8/#$+\")(\"'#&'#06*%;A/,#;\xD8/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
            peg$decode("%;\x99/Y#$%;B/,#;\xA0/#$+\")(\"'#&'#06*%;B/,#;\xA0/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
            peg$decode("%$;!/&#0#*;!&&&#/' 8!:\u015D!! )"),
            peg$decode("%;\xDB/Y#$%;B/,#;\xDC/#$+\")(\"'#&'#06*%;B/,#;\xDC/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
            peg$decode("%3\u015E\"\"5&7\u015F.; &3\u0160\"\"5'7\u0161./ &3\u0162\"\"5*7\u0163.# &;6/& 8!:\u0164! )"),
            peg$decode("%3\u0165\"\"5&7\u0166/:#;</1$;\xDD/($8#:\u0167#! )(#'#(\"'#&'#.} &%3\xF5\"\"5'7\xF6/:#;</1$;\x9E/($8#:\u0168#! )(#'#(\"'#&'#.P &%3\u0169\"\"5+7\u016A/:#;</1$;\x9E/($8#:\u016B#! )(#'#(\"'#&'#.# &;\xA0"),
            peg$decode("3\u016C\"\"5+7\u016D.k &3\u016E\"\"5)7\u016F._ &3\u0170\"\"5(7\u0171.S &3\u0172\"\"5'7\u0173.G &3\u0174\"\"5&7\u0175.; &3\u0176\"\"5*7\u0177./ &3\u0178\"\"5)7\u0179.# &;6"),
            peg$decode(";1.\" &\""),
            peg$decode("%%;6/k#$%;A/2#;6/)$8\":\u015A\"\"$ )(\"'#&'#0<*%;A/2#;6/)$8\":\u015A\"\"$ )(\"'#&'#&/)$8\":\u015B\"\"! )(\"'#&'#.\" &\"/' 8!:\u017A!! )"),
            peg$decode("%;L.# &;\x99/]#$%;B/,#;\xE1/#$+\")(\"'#&'#06*%;B/,#;\xE1/#$+\")(\"'#&'#&/'$8\":\u017B\" )(\"'#&'#"),
            peg$decode(";\xB9.# &;\xA0"),
            peg$decode("%;\xE3/Y#$%;A/,#;\xE3/#$+\")(\"'#&'#06*%;A/,#;\xE3/#$+\")(\"'#&'#&/#$+\")(\"'#&'#"),
            peg$decode("%;\xEA/k#;./b$;\xED/Y$$%;B/,#;\xE4/#$+\")(\"'#&'#06*%;B/,#;\xE4/#$+\")(\"'#&'#&/#$+$)($'#(#'#(\"'#&'#"),
            peg$decode(";\xE5.; &;\xE6.5 &;\xE7./ &;\xE8.) &;\xE9.# &;\xA0"),
            peg$decode("%3\u017C\"\"5#7\u017D/:#;</1$;\xF0/($8#:\u017E#! )(#'#(\"'#&'#"),
            peg$decode("%3\u017F\"\"5%7\u0180/:#;</1$;T/($8#:\u0181#! )(#'#(\"'#&'#"),
            peg$decode("%3\u0182\"\"5(7\u0183/F#;</=$;\\.) &;Y.# &;X/($8#:\u0184#! )(#'#(\"'#&'#"),
            peg$decode("%3\u0185\"\"5&7\u0186/:#;</1$;6/($8#:\u0187#! )(#'#(\"'#&'#"),
            peg$decode("%3\u0188\"\"5%7\u0189/A#;</8$$;!0#*;!&/($8#:\u018A#! )(#'#(\"'#&'#"),
            peg$decode("%;\xEB/G#;;/>$;6/5$;;/,$;\xEC/#$+%)(%'#($'#(#'#(\"'#&'#"),
            peg$decode("%3\x92\"\"5#7\xD3.# &;6/' 8!:\u018B!! )"),
            peg$decode("%3\xB1\"\"5#7\u018C.G &3\xB3\"\"5#7\u018D.; &3\xB7\"\"5#7\u018E./ &3\xB5\"\"5$7\u018F.# &;6/' 8!:\u0190!! )"),
            peg$decode("%;\xEE/D#%;C/,#;\xEF/#$+\")(\"'#&'#.\" &\"/#$+\")(\"'#&'#"),
            peg$decode("%;U.) &;\\.# &;X/& 8!:\u0191! )"),
            peg$decode("%%;!.\" &\"/[#;!.\" &\"/M$;!.\" &\"/?$;!.\" &\"/1$;!.\" &\"/#$+%)(%'#($'#(#'#(\"'#&'#/' 8!:\u0192!! )"),
            peg$decode("%%;!/?#;!.\" &\"/1$;!.\" &\"/#$+#)(#'#(\"'#&'#/' 8!:\u0193!! )"),
            peg$decode(";\xBE"),
            peg$decode("%;\x9E/^#$%;B/,#;\xF3/#$+\")(\"'#&'#06*%;B/,#;\xF3/#$+\")(\"'#&'#&/($8\":\u0194\"!!)(\"'#&'#"),
            peg$decode(";\xF4.# &;\xA0"),
            peg$decode("%2\u0195\"\"6\u01957\u0196/L#;</C$2\u0197\"\"6\u01977\u0198.) &2\u0199\"\"6\u01997\u019A/($8#:\u019B#! )(#'#(\"'#&'#"),
            peg$decode("%;\x9E/^#$%;B/,#;\xA0/#$+\")(\"'#&'#06*%;B/,#;\xA0/#$+\")(\"'#&'#&/($8\":\u019C\"!!)(\"'#&'#"),
            peg$decode("%;6/5#;0/,$;\xF7/#$+#)(#'#(\"'#&'#"),
            peg$decode("$;2.) &;4.# &;.0/*;2.) &;4.# &;.&"),
            peg$decode("$;%0#*;%&"),
            peg$decode("%;\xFA/;#28\"\"6879/,$;\xFB/#$+#)(#'#(\"'#&'#"),
            peg$decode("%3\u019D\"\"5%7\u019E.) &3\u019F\"\"5$7\u01A0/' 8!:\u01A1!! )"),
            peg$decode("%;\xFC/J#%28\"\"6879/,#;^/#$+\")(\"'#&'#.\" &\"/#$+\")(\"'#&'#"),
            peg$decode("%;\\.) &;X.# &;\x82/' 8!:\u01A2!! )"),
            peg$decode(";\".S &;!.M &2F\"\"6F7G.A &2J\"\"6J7K.5 &2H\"\"6H7I.) &2N\"\"6N7O"),
            peg$decode("2L\"\"6L7M.\x95 &2B\"\"6B7C.\x89 &2<\"\"6<7=.} &2R\"\"6R7S.q &2T\"\"6T7U.e &2V\"\"6V7W.Y &2P\"\"6P7Q.M &2@\"\"6@7A.A &2D\"\"6D7E.5 &22\"\"6273.) &2>\"\"6>7?"),
            peg$decode("%;\u0100/b#28\"\"6879/S$;\xFB/J$%2\u01A3\"\"6\u01A37\u01A4/,#;\xEC/#$+\")(\"'#&'#.\" &\"/#$+$)($'#(#'#(\"'#&'#"),
            peg$decode("%3\u01A5\"\"5%7\u01A6.) &3\u01A7\"\"5$7\u01A8/' 8!:\u01A1!! )"),
            peg$decode("%3\xB1\"\"5#7\xB2.6 &3\xB3\"\"5#7\xB4.* &$;+0#*;+&/' 8!:\u01A9!! )"),
            peg$decode("%;\u0104/\x87#2F\"\"6F7G/x$;\u0103/o$2F\"\"6F7G/`$;\u0103/W$2F\"\"6F7G/H$;\u0103/?$2F\"\"6F7G/0$;\u0105/'$8):\u01AA) )()'#(('#(''#(&'#(%'#($'#(#'#(\"'#&'#"),
            peg$decode("%;#/>#;#/5$;#/,$;#/#$+$)($'#(#'#(\"'#&'#"),
            peg$decode("%;\u0103/,#;\u0103/#$+\")(\"'#&'#"),
            peg$decode("%;\u0103/5#;\u0103/,$;\u0103/#$+#)(#'#(\"'#&'#"),
            peg$decode("%;q/T#$;m0#*;m&/D$%; /,#;\xF8/#$+\")(\"'#&'#.\" &\"/#$+#)(#'#(\"'#&'#"),
            peg$decode("%2\u01AB\"\"6\u01AB7\u01AC.) &2\u01AD\"\"6\u01AD7\u01AE/w#;0/n$;\u0108/e$$%;B/2#;\u0109.# &;\xA0/#$+\")(\"'#&'#0<*%;B/2#;\u0109.# &;\xA0/#$+\")(\"'#&'#&/#$+$)($'#(#'#(\"'#&'#"),
            peg$decode(";\x99.# &;L"),
            peg$decode("%2\u01AF\"\"6\u01AF7\u01B0/5#;</,$;\u010A/#$+#)(#'#(\"'#&'#"),
            peg$decode("%;D/S#;,/J$2:\"\"6:7;/;$;,.# &;T/,$;E/#$+%)(%'#($'#(#'#(\"'#&'#")
        ];
        let peg$currPos = 0;
        let peg$savedPos = 0;
        const peg$posDetailsCache = [{ line: 1, column: 1 }];
        let peg$maxFailPos = 0;
        let peg$maxFailExpected = [];
        let peg$silentFails = 0;
        let peg$result;
        if (options.startRule !== undefined) {
            if (!(options.startRule in peg$startRuleIndices)) {
                throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
            }
            peg$startRuleIndex = peg$startRuleIndices[options.startRule];
        }
        function text() {
            return input.substring(peg$savedPos, peg$currPos);
        }
        function location() {
            return peg$computeLocation(peg$savedPos, peg$currPos);
        }
        function expected(description, location1) {
            location1 = location1 !== undefined
                ? location1
                : peg$computeLocation(peg$savedPos, peg$currPos);
            throw peg$buildStructuredError([peg$otherExpectation(description)], input.substring(peg$savedPos, peg$currPos), location1);
        }
        function error(message, location1) {
            location1 = location1 !== undefined
                ? location1
                : peg$computeLocation(peg$savedPos, peg$currPos);
            throw peg$buildSimpleError(message, location1);
        }
        function peg$literalExpectation(text1, ignoreCase) {
            return { type: "literal", text: text1, ignoreCase: ignoreCase };
        }
        function peg$classExpectation(parts, inverted, ignoreCase) {
            return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
        }
        function peg$anyExpectation() {
            return { type: "any" };
        }
        function peg$endExpectation() {
            return { type: "end" };
        }
        function peg$otherExpectation(description) {
            return { type: "other", description: description };
        }
        function peg$computePosDetails(pos) {
            let details = peg$posDetailsCache[pos];
            let p;
            if (details) {
                return details;
            }
            else {
                p = pos - 1;
                while (!peg$posDetailsCache[p]) {
                    p--;
                }
                details = peg$posDetailsCache[p];
                details = {
                    line: details.line,
                    column: details.column
                };
                while (p < pos) {
                    if (input.charCodeAt(p) === 10) {
                        details.line++;
                        details.column = 1;
                    }
                    else {
                        details.column++;
                    }
                    p++;
                }
                peg$posDetailsCache[pos] = details;
                return details;
            }
        }
        function peg$computeLocation(startPos, endPos) {
            const startPosDetails = peg$computePosDetails(startPos);
            const endPosDetails = peg$computePosDetails(endPos);
            return {
                start: {
                    offset: startPos,
                    line: startPosDetails.line,
                    column: startPosDetails.column
                },
                end: {
                    offset: endPos,
                    line: endPosDetails.line,
                    column: endPosDetails.column
                }
            };
        }
        function peg$fail(expected1) {
            if (peg$currPos < peg$maxFailPos) {
                return;
            }
            if (peg$currPos > peg$maxFailPos) {
                peg$maxFailPos = peg$currPos;
                peg$maxFailExpected = [];
            }
            peg$maxFailExpected.push(expected1);
        }
        function peg$buildSimpleError(message, location1) {
            return new SyntaxError(message, [], "", location1);
        }
        function peg$buildStructuredError(expected1, found, location1) {
            return new SyntaxError(SyntaxError.buildMessage(expected1, found), expected1, found, location1);
        }
        function peg$decode(s) {
            return s.split("").map((ch) => ch.charCodeAt(0) - 32);
        }
        function peg$parseRule(index) {
            const bc = peg$bytecode[index];
            let ip = 0;
            const ips = [];
            let end = bc.length;
            const ends = [];
            const stack = [];
            let params;
            while (true) {
                while (ip < end) {
                    switch (bc[ip]) {
                        case 0:
                            stack.push(peg$consts[bc[ip + 1]]);
                            ip += 2;
                            break;
                        case 1:
                            stack.push(undefined);
                            ip++;
                            break;
                        case 2:
                            stack.push(null);
                            ip++;
                            break;
                        case 3:
                            stack.push(peg$FAILED);
                            ip++;
                            break;
                        case 4:
                            stack.push([]);
                            ip++;
                            break;
                        case 5:
                            stack.push(peg$currPos);
                            ip++;
                            break;
                        case 6:
                            stack.pop();
                            ip++;
                            break;
                        case 7:
                            peg$currPos = stack.pop();
                            ip++;
                            break;
                        case 8:
                            stack.length -= bc[ip + 1];
                            ip += 2;
                            break;
                        case 9:
                            stack.splice(-2, 1);
                            ip++;
                            break;
                        case 10:
                            stack[stack.length - 2].push(stack.pop());
                            ip++;
                            break;
                        case 11:
                            stack.push(stack.splice(stack.length - bc[ip + 1], bc[ip + 1]));
                            ip += 2;
                            break;
                        case 12:
                            stack.push(input.substring(stack.pop(), peg$currPos));
                            ip++;
                            break;
                        case 13:
                            ends.push(end);
                            ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);
                            if (stack[stack.length - 1]) {
                                end = ip + 3 + bc[ip + 1];
                                ip += 3;
                            }
                            else {
                                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                                ip += 3 + bc[ip + 1];
                            }
                            break;
                        case 14:
                            ends.push(end);
                            ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);
                            if (stack[stack.length - 1] === peg$FAILED) {
                                end = ip + 3 + bc[ip + 1];
                                ip += 3;
                            }
                            else {
                                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                                ip += 3 + bc[ip + 1];
                            }
                            break;
                        case 15:
                            ends.push(end);
                            ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);
                            if (stack[stack.length - 1] !== peg$FAILED) {
                                end = ip + 3 + bc[ip + 1];
                                ip += 3;
                            }
                            else {
                                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                                ip += 3 + bc[ip + 1];
                            }
                            break;
                        case 16:
                            if (stack[stack.length - 1] !== peg$FAILED) {
                                ends.push(end);
                                ips.push(ip);
                                end = ip + 2 + bc[ip + 1];
                                ip += 2;
                            }
                            else {
                                ip += 2 + bc[ip + 1];
                            }
                            break;
                        case 17:
                            ends.push(end);
                            ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);
                            if (input.length > peg$currPos) {
                                end = ip + 3 + bc[ip + 1];
                                ip += 3;
                            }
                            else {
                                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                                ip += 3 + bc[ip + 1];
                            }
                            break;
                        case 18:
                            ends.push(end);
                            ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);
                            if (input.substr(peg$currPos, peg$consts[bc[ip + 1]].length) === peg$consts[bc[ip + 1]]) {
                                end = ip + 4 + bc[ip + 2];
                                ip += 4;
                            }
                            else {
                                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                                ip += 4 + bc[ip + 2];
                            }
                            break;
                        case 19:
                            ends.push(end);
                            ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);
                            if (input.substr(peg$currPos, peg$consts[bc[ip + 1]].length).toLowerCase() === peg$consts[bc[ip + 1]]) {
                                end = ip + 4 + bc[ip + 2];
                                ip += 4;
                            }
                            else {
                                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                                ip += 4 + bc[ip + 2];
                            }
                            break;
                        case 20:
                            ends.push(end);
                            ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);
                            if (peg$consts[bc[ip + 1]].test(input.charAt(peg$currPos))) {
                                end = ip + 4 + bc[ip + 2];
                                ip += 4;
                            }
                            else {
                                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                                ip += 4 + bc[ip + 2];
                            }
                            break;
                        case 21:
                            stack.push(input.substr(peg$currPos, bc[ip + 1]));
                            peg$currPos += bc[ip + 1];
                            ip += 2;
                            break;
                        case 22:
                            stack.push(peg$consts[bc[ip + 1]]);
                            peg$currPos += peg$consts[bc[ip + 1]].length;
                            ip += 2;
                            break;
                        case 23:
                            stack.push(peg$FAILED);
                            if (peg$silentFails === 0) {
                                peg$fail(peg$consts[bc[ip + 1]]);
                            }
                            ip += 2;
                            break;
                        case 24:
                            peg$savedPos = stack[stack.length - 1 - bc[ip + 1]];
                            ip += 2;
                            break;
                        case 25:
                            peg$savedPos = peg$currPos;
                            ip++;
                            break;
                        case 26:
                            params = bc.slice(ip + 4, ip + 4 + bc[ip + 3])
                                .map(function (p) { return stack[stack.length - 1 - p]; });
                            stack.splice(stack.length - bc[ip + 2], bc[ip + 2], peg$consts[bc[ip + 1]].apply(null, params));
                            ip += 4 + bc[ip + 3];
                            break;
                        case 27:
                            stack.push(peg$parseRule(bc[ip + 1]));
                            ip += 2;
                            break;
                        case 28:
                            peg$silentFails++;
                            ip++;
                            break;
                        case 29:
                            peg$silentFails--;
                            ip++;
                            break;
                        default:
                            throw new Error("Invalid opcode: " + bc[ip] + ".");
                    }
                }
                if (ends.length > 0) {
                    end = ends.pop();
                    ip = ips.pop();
                }
                else {
                    break;
                }
            }
            return stack[0];
        }
        options.data = {}; // Object to which header attributes will be assigned during parsing
        function list(head, tail) {
            return [head].concat(tail);
        }
        peg$result = peg$parseRule(peg$startRuleIndex);
        if (peg$result !== peg$FAILED && peg$currPos === input.length) {
            return peg$result;
        }
        else {
            if (peg$result !== peg$FAILED && peg$currPos < input.length) {
                peg$fail(peg$endExpectation());
            }
            throw peg$buildStructuredError(peg$maxFailExpected, peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null, peg$maxFailPos < input.length
                ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
                : peg$computeLocation(peg$maxFailPos, peg$maxFailPos));
        }
    }
    exports.parse = peg$parse;
});


/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(3), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReInviteUserAgentServer = void 0;
    const transactions_1 = require("../transactions");
    const user_agent_server_1 = require("./user-agent-server");
    /**
     * Re-INVITE UAS.
     * @remarks
     * 14 Modifying an Existing Session
     * https://tools.ietf.org/html/rfc3261#section-14
     * 14.2 UAS Behavior
     * https://tools.ietf.org/html/rfc3261#section-14.2
     * @public
     */
    class ReInviteUserAgentServer extends user_agent_server_1.UserAgentServer {
        constructor(dialog, message, delegate) {
            super(transactions_1.InviteServerTransaction, dialog.userAgentCore, message, delegate);
            dialog.reinviteUserAgentServer = this;
            this.dialog = dialog;
        }
        /**
         * Update the dialog signaling state on a 2xx response.
         * @param options - Options bucket.
         */
        accept(options = { statusCode: 200 }) {
            // FIXME: The next two lines SHOULD go away, but I suppose it's technically harmless...
            // These are here because some versions of SIP.js prior to 0.13.8 set the route set
            // of all in dialog ACKs based on the Record-Route headers in the associated 2xx
            // response. While this worked for dialog forming 2xx responses, it was technically
            // broken for re-INVITE ACKS as it only worked if the UAS populated the Record-Route
            // headers in the re-INVITE 2xx response (which is not required and a waste of bandwidth
            // as the should be ignored if present in re-INVITE ACKS) and the UAS populated
            // the Record-Route headers with the correct values (would be weird not too, but...).
            // Anyway, for now the technically useless Record-Route headers are being added
            // to maintain "backwards compatibility" with the older broken versions of SIP.js.
            options.extraHeaders = options.extraHeaders || [];
            options.extraHeaders = options.extraHeaders.concat(this.dialog.routeSet.map((route) => `Record-Route: ${route}`));
            // Send and return the response
            const response = super.accept(options);
            const session = this.dialog;
            const result = Object.assign(Object.assign({}, response), { session });
            if (options.body) {
                // Update dialog signaling state with offer/answer in body
                this.dialog.signalingStateTransition(options.body);
            }
            // Update dialog
            this.dialog.reConfirm();
            return result;
        }
        /**
         * Update the dialog signaling state on a 1xx response.
         * @param options - Progress options bucket.
         */
        progress(options = { statusCode: 180 }) {
            // Send and return the response
            const response = super.progress(options);
            const session = this.dialog;
            const result = Object.assign(Object.assign({}, response), { session });
            // Update dialog signaling state
            if (options.body) {
                this.dialog.signalingStateTransition(options.body);
            }
            return result;
        }
        /**
         * TODO: Not Yet Supported
         * @param contacts - Contacts to redirect to.
         * @param options - Redirect options bucket.
         */
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        redirect(contacts, options = { statusCode: 302 }) {
            this.dialog.signalingStateRollback();
            this.dialog.reinviteUserAgentServer = undefined; // ACK will be handled by transaction
            throw new Error("Unimplemented.");
        }
        /**
         * 3.1 Background on Re-INVITE Handling by UASs
         * An error response to a re-INVITE has the following semantics.  As
         * specified in Section 12.2.2 of RFC 3261 [RFC3261], if a re-INVITE is
         * rejected, no state changes are performed.
         * https://tools.ietf.org/html/rfc6141#section-3.1
         * @param options - Reject options bucket.
         */
        reject(options = { statusCode: 488 }) {
            this.dialog.signalingStateRollback();
            this.dialog.reinviteUserAgentServer = undefined; // ACK will be handled by transaction
            return super.reject(options);
        }
    }
    exports.ReInviteUserAgentServer = ReInviteUserAgentServer;
});


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(8), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(34)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Grammar = void 0;
    /* eslint-disable @typescript-eslint/no-namespace */
    /* eslint-disable no-inner-declarations */
    const pegGrammar = require("./pegjs/dist/grammar");
    /**
     * Grammar.
     * @internal
     */
    var Grammar;
    (function (Grammar) {
        /**
         * Parse.
         * @param input -
         * @param startRule -
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function parse(input, startRule) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const options = { startRule };
            try {
                pegGrammar.parse(input, options);
            }
            catch (e) {
                options.data = -1;
            }
            return options.data;
        }
        Grammar.parse = parse;
        /**
         * Parse the given string and returns a SIP.NameAddrHeader instance or undefined if
         * it is an invalid NameAddrHeader.
         * @param name_addr_header -
         */
        function nameAddrHeaderParse(nameAddrHeader) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const parsedNameAddrHeader = Grammar.parse(nameAddrHeader, "Name_Addr_Header");
            return parsedNameAddrHeader !== -1 ? parsedNameAddrHeader : undefined;
        }
        Grammar.nameAddrHeaderParse = nameAddrHeaderParse;
        /**
         * Parse the given string and returns a SIP.URI instance or undefined if
         * it is an invalid URI.
         * @param uri -
         */
        function URIParse(uri) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const parsedUri = Grammar.parse(uri, "SIP_URI");
            return parsedUri !== -1 ? parsedUri : undefined;
        }
        Grammar.URIParse = URIParse;
    })(Grammar = exports.Grammar || (exports.Grammar = {}));
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

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(1), exports);
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
    exports.C = void 0;
    /* eslint-disable @typescript-eslint/no-namespace */
    /**
     * SIP Methods
     * @internal
     */
    var C;
    (function (C) {
        C.ACK = "ACK";
        C.BYE = "BYE";
        C.CANCEL = "CANCEL";
        C.INFO = "INFO";
        C.INVITE = "INVITE";
        C.MESSAGE = "MESSAGE";
        C.NOTIFY = "NOTIFY";
        C.OPTIONS = "OPTIONS";
        C.REGISTER = "REGISTER";
        C.UPDATE = "UPDATE";
        C.SUBSCRIBE = "SUBSCRIBE";
        C.PUBLISH = "PUBLISH";
        C.REFER = "REFER";
        C.PRACK = "PRACK";
    })(C = exports.C || (exports.C = {}));
});


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(1), exports);
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
});


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(1), exports);
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
});


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(1), exports);
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
});


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(1), exports);
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
});


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(1), exports);
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
});


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(1), exports);
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
});


/***/ }),

/***/ 5:
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
        var v = factory(__webpack_require__(0), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(14), __webpack_require__(57), __webpack_require__(58), __webpack_require__(59), __webpack_require__(17), __webpack_require__(18), __webpack_require__(60), __webpack_require__(19), __webpack_require__(61), __webpack_require__(27), __webpack_require__(62), __webpack_require__(63), __webpack_require__(64)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Grammar
    __exportStar(require("../../grammar"), exports);
    // Directories
    __exportStar(require("./methods"), exports);
    // Files
    __exportStar(require("./body"), exports);
    __exportStar(require("./digest-authentication"), exports);
    __exportStar(require("./incoming-message"), exports);
    __exportStar(require("./incoming-request-message"), exports);
    __exportStar(require("./incoming-request"), exports);
    __exportStar(require("./incoming-response-message"), exports);
    __exportStar(require("./incoming-response"), exports);
    __exportStar(require("./outgoing-request-message"), exports);
    __exportStar(require("./outgoing-request"), exports);
    __exportStar(require("./outgoing-response"), exports);
    __exportStar(require("./parser"), exports);
});


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(1), exports);
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
});


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(1), exports);
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
});


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(1), exports);
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
});


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(1), exports);
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
});


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(1), exports);
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
});


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(1), exports);
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
});


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* eslint-disable */
(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(0), exports);
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
    exports.Md5 = void 0;
    //
    // Scoped from: https://github.com/cotag/ts-md5
    //
    /*
    
    TypeScript Md5
    ==============
    
    Based on work by
    * Joseph Myers: http://www.myersdaily.org/joseph/javascript/md5-text.html
    * André Cruz: https://github.com/satazor/SparkMD5
    * Raymond Hill: https://github.com/gorhill/yamd5.js
    
    Effectively a TypeScrypt re-write of Raymond Hill JS Library
    
    The MIT License (MIT)
    
    Copyright (C) 2014 Raymond Hill
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
    
    
    
                DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                        Version 2, December 2004
    
     Copyright (C) 2015 André Cruz <amdfcruz@gmail.com>
    
     Everyone is permitted to copy and distribute verbatim or modified
     copies of this license document, and changing it is allowed as long
     as the name is changed.
    
                DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
       TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
    
      0. You just DO WHAT THE FUCK YOU WANT TO.
    
    
    */
    class Md5 {
        constructor() {
            this._dataLength = 0;
            this._bufferLength = 0;
            this._state = new Int32Array(4);
            this._buffer = new ArrayBuffer(68);
            this._buffer8 = new Uint8Array(this._buffer, 0, 68);
            this._buffer32 = new Uint32Array(this._buffer, 0, 17);
            this.start();
        }
        static hashStr(str, raw = false) {
            return this.onePassHasher
                .start()
                .appendStr(str)
                .end(raw);
        }
        static hashAsciiStr(str, raw = false) {
            return this.onePassHasher
                .start()
                .appendAsciiStr(str)
                .end(raw);
        }
        static _hex(x) {
            const hc = Md5.hexChars;
            const ho = Md5.hexOut;
            let n;
            let offset;
            let j;
            let i;
            for (i = 0; i < 4; i += 1) {
                offset = i * 8;
                n = x[i];
                for (j = 0; j < 8; j += 2) {
                    ho[offset + 1 + j] = hc.charAt(n & 0x0F);
                    n >>>= 4;
                    ho[offset + 0 + j] = hc.charAt(n & 0x0F);
                    n >>>= 4;
                }
            }
            return ho.join('');
        }
        static _md5cycle(x, k) {
            let a = x[0];
            let b = x[1];
            let c = x[2];
            let d = x[3];
            // ff()
            a += (b & c | ~b & d) + k[0] - 680876936 | 0;
            a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[1] - 389564586 | 0;
            d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[2] + 606105819 | 0;
            c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
            b = (b << 22 | b >>> 10) + c | 0;
            a += (b & c | ~b & d) + k[4] - 176418897 | 0;
            a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
            d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
            c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[7] - 45705983 | 0;
            b = (b << 22 | b >>> 10) + c | 0;
            a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
            a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
            d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[10] - 42063 | 0;
            c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
            b = (b << 22 | b >>> 10) + c | 0;
            a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
            a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[13] - 40341101 | 0;
            d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
            c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
            b = (b << 22 | b >>> 10) + c | 0;
            // gg()
            a += (b & d | c & ~d) + k[1] - 165796510 | 0;
            a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
            d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[11] + 643717713 | 0;
            c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[0] - 373897302 | 0;
            b = (b << 20 | b >>> 12) + c | 0;
            a += (b & d | c & ~d) + k[5] - 701558691 | 0;
            a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[10] + 38016083 | 0;
            d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[15] - 660478335 | 0;
            c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[4] - 405537848 | 0;
            b = (b << 20 | b >>> 12) + c | 0;
            a += (b & d | c & ~d) + k[9] + 568446438 | 0;
            a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
            d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[3] - 187363961 | 0;
            c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
            b = (b << 20 | b >>> 12) + c | 0;
            a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
            a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[2] - 51403784 | 0;
            d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
            c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
            b = (b << 20 | b >>> 12) + c | 0;
            // hh()
            a += (b ^ c ^ d) + k[5] - 378558 | 0;
            a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
            d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
            c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[14] - 35309556 | 0;
            b = (b << 23 | b >>> 9) + c | 0;
            a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
            a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
            d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[7] - 155497632 | 0;
            c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
            b = (b << 23 | b >>> 9) + c | 0;
            a += (b ^ c ^ d) + k[13] + 681279174 | 0;
            a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[0] - 358537222 | 0;
            d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[3] - 722521979 | 0;
            c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[6] + 76029189 | 0;
            b = (b << 23 | b >>> 9) + c | 0;
            a += (b ^ c ^ d) + k[9] - 640364487 | 0;
            a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[12] - 421815835 | 0;
            d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[15] + 530742520 | 0;
            c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[2] - 995338651 | 0;
            b = (b << 23 | b >>> 9) + c | 0;
            // ii()
            a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
            a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
            d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
            c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
            b = (b << 21 | b >>> 11) + c | 0;
            a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
            a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
            d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
            c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
            b = (b << 21 | b >>> 11) + c | 0;
            a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
            a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
            d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
            c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
            b = (b << 21 | b >>> 11) + c | 0;
            a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
            a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
            d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
            c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
            b = (b << 21 | b >>> 11) + c | 0;
            x[0] = a + x[0] | 0;
            x[1] = b + x[1] | 0;
            x[2] = c + x[2] | 0;
            x[3] = d + x[3] | 0;
        }
        start() {
            this._dataLength = 0;
            this._bufferLength = 0;
            this._state.set(Md5.stateIdentity);
            return this;
        }
        // Char to code point to to array conversion:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
        // #Example.3A_Fixing_charCodeAt_to_handle_non-Basic-Multilingual-Plane_characters_if_their_presence_earlier_in_the_string_is_unknown
        appendStr(str) {
            const buf8 = this._buffer8;
            const buf32 = this._buffer32;
            let bufLen = this._bufferLength;
            let code;
            let i;
            for (i = 0; i < str.length; i += 1) {
                code = str.charCodeAt(i);
                if (code < 128) {
                    buf8[bufLen++] = code;
                }
                else if (code < 0x800) {
                    buf8[bufLen++] = (code >>> 6) + 0xC0;
                    buf8[bufLen++] = code & 0x3F | 0x80;
                }
                else if (code < 0xD800 || code > 0xDBFF) {
                    buf8[bufLen++] = (code >>> 12) + 0xE0;
                    buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                    buf8[bufLen++] = (code & 0x3F) | 0x80;
                }
                else {
                    code = ((code - 0xD800) * 0x400) + (str.charCodeAt(++i) - 0xDC00) + 0x10000;
                    if (code > 0x10FFFF) {
                        throw new Error('Unicode standard supports code points up to U+10FFFF');
                    }
                    buf8[bufLen++] = (code >>> 18) + 0xF0;
                    buf8[bufLen++] = (code >>> 12 & 0x3F) | 0x80;
                    buf8[bufLen++] = (code >>> 6 & 0x3F) | 0x80;
                    buf8[bufLen++] = (code & 0x3F) | 0x80;
                }
                if (bufLen >= 64) {
                    this._dataLength += 64;
                    Md5._md5cycle(this._state, buf32);
                    bufLen -= 64;
                    buf32[0] = buf32[16];
                }
            }
            this._bufferLength = bufLen;
            return this;
        }
        appendAsciiStr(str) {
            const buf8 = this._buffer8;
            const buf32 = this._buffer32;
            let bufLen = this._bufferLength;
            let i;
            let j = 0;
            for (;;) {
                i = Math.min(str.length - j, 64 - bufLen);
                while (i--) {
                    buf8[bufLen++] = str.charCodeAt(j++);
                }
                if (bufLen < 64) {
                    break;
                }
                this._dataLength += 64;
                Md5._md5cycle(this._state, buf32);
                bufLen = 0;
            }
            this._bufferLength = bufLen;
            return this;
        }
        appendByteArray(input) {
            const buf8 = this._buffer8;
            const buf32 = this._buffer32;
            let bufLen = this._bufferLength;
            let i;
            let j = 0;
            for (;;) {
                i = Math.min(input.length - j, 64 - bufLen);
                while (i--) {
                    buf8[bufLen++] = input[j++];
                }
                if (bufLen < 64) {
                    break;
                }
                this._dataLength += 64;
                Md5._md5cycle(this._state, buf32);
                bufLen = 0;
            }
            this._bufferLength = bufLen;
            return this;
        }
        getState() {
            const self = this;
            const s = self._state;
            return {
                buffer: String.fromCharCode.apply(null, self._buffer8),
                buflen: self._bufferLength,
                length: self._dataLength,
                state: [s[0], s[1], s[2], s[3]]
            };
        }
        setState(state) {
            const buf = state.buffer;
            const x = state.state;
            const s = this._state;
            let i;
            this._dataLength = state.length;
            this._bufferLength = state.buflen;
            s[0] = x[0];
            s[1] = x[1];
            s[2] = x[2];
            s[3] = x[3];
            for (i = 0; i < buf.length; i += 1) {
                this._buffer8[i] = buf.charCodeAt(i);
            }
        }
        end(raw = false) {
            const bufLen = this._bufferLength;
            const buf8 = this._buffer8;
            const buf32 = this._buffer32;
            const i = (bufLen >> 2) + 1;
            let dataBitsLen;
            this._dataLength += bufLen;
            buf8[bufLen] = 0x80;
            buf8[bufLen + 1] = buf8[bufLen + 2] = buf8[bufLen + 3] = 0;
            buf32.set(Md5.buffer32Identity.subarray(i), i);
            if (bufLen > 55) {
                Md5._md5cycle(this._state, buf32);
                buf32.set(Md5.buffer32Identity);
            }
            // Do the final computation based on the tail and length
            // Beware that the final length may not fit in 32 bits so we take care of that
            dataBitsLen = this._dataLength * 8;
            if (dataBitsLen <= 0xFFFFFFFF) {
                buf32[14] = dataBitsLen;
            }
            else {
                const matches = dataBitsLen.toString(16).match(/(.*?)(.{0,8})$/);
                if (matches === null) {
                    return;
                }
                const lo = parseInt(matches[2], 16);
                const hi = parseInt(matches[1], 16) || 0;
                buf32[14] = lo;
                buf32[15] = hi;
            }
            Md5._md5cycle(this._state, buf32);
            return raw ? this._state : Md5._hex(this._state);
        }
    }
    exports.Md5 = Md5;
    // Private Static Variables
    Md5.stateIdentity = new Int32Array([1732584193, -271733879, -1732584194, 271733878]);
    Md5.buffer32Identity = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    Md5.hexChars = '0123456789abcdef';
    Md5.hexOut = [];
    // Permanent instance is to use for one-call hashing
    Md5.onePassHasher = new Md5();
    if (Md5.hashStr('hello') !== '5d41402abc4b2a76b9719d911017c592') {
        console.error('Md5 self test failed.');
    }
});


/***/ }),

/***/ 57:
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
        var v = factory(__webpack_require__(1), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(43), __webpack_require__(44), __webpack_require__(45), __webpack_require__(46), __webpack_require__(47), __webpack_require__(48), __webpack_require__(49), __webpack_require__(50), __webpack_require__(51), __webpack_require__(52), __webpack_require__(53), __webpack_require__(54), __webpack_require__(55)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require("./constants"), exports);
    __exportStar(require("./ack"), exports);
    __exportStar(require("./bye"), exports);
    __exportStar(require("./cancel"), exports);
    __exportStar(require("./info"), exports);
    __exportStar(require("./invite"), exports);
    __exportStar(require("./message"), exports);
    __exportStar(require("./notify"), exports);
    __exportStar(require("./prack"), exports);
    __exportStar(require("./publish"), exports);
    __exportStar(require("./register"), exports);
    __exportStar(require("./refer"), exports);
    __exportStar(require("./subscribe"), exports);
});


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(0), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(18), __webpack_require__(19), __webpack_require__(27)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getBody = exports.isBody = exports.fromBodyLegacy = void 0;
    const incoming_request_message_1 = require("./incoming-request-message");
    const incoming_response_message_1 = require("./incoming-response-message");
    const outgoing_request_message_1 = require("./outgoing-request-message");
    // If the Content-Disposition header field is missing, bodies of
    // Content-Type application/sdp imply the disposition "session", while
    // other content types imply "render".
    // https://tools.ietf.org/html/rfc3261#section-13.2.1
    function contentTypeToContentDisposition(contentType) {
        if (contentType === "application/sdp") {
            return "session";
        }
        else {
            return "render";
        }
    }
    /**
     * Create a Body given a legacy body type.
     * @param bodyLegacy - Body Object
     * @internal
     */
    function fromBodyLegacy(bodyLegacy) {
        const content = typeof bodyLegacy === "string" ? bodyLegacy : bodyLegacy.body;
        const contentType = typeof bodyLegacy === "string" ? "application/sdp" : bodyLegacy.contentType;
        const contentDisposition = contentTypeToContentDisposition(contentType);
        const body = { contentDisposition, contentType, content };
        return body;
    }
    exports.fromBodyLegacy = fromBodyLegacy;
    /**
     * User-Defined Type Guard for Body.
     * @param body - Body to check.
     * @internal
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function isBody(body) {
        return body &&
            typeof body.content === "string" &&
            typeof body.contentType === "string" &&
            body.contentDisposition === undefined
            ? true
            : typeof body.contentDisposition === "string";
    }
    exports.isBody = isBody;
    /**
     * Given a message, get a normalized body.
     * The content disposition is inferred if not set.
     * @param message - The message.
     * @internal
     */
    function getBody(message) {
        let contentDisposition;
        let contentType;
        let content;
        // We're in UAS role, receiving incoming request
        if (message instanceof incoming_request_message_1.IncomingRequestMessage) {
            if (message.body) {
                // FIXME: Parsing needs typing
                const parse = message.parseHeader("Content-Disposition");
                contentDisposition = parse ? parse.type : undefined;
                contentType = message.parseHeader("Content-Type");
                content = message.body;
            }
        }
        // We're in UAC role, receiving incoming response
        if (message instanceof incoming_response_message_1.IncomingResponseMessage) {
            if (message.body) {
                // FIXME: Parsing needs typing
                const parse = message.parseHeader("Content-Disposition");
                contentDisposition = parse ? parse.type : undefined;
                contentType = message.parseHeader("Content-Type");
                content = message.body;
            }
        }
        // We're in UAC role, sending outgoing request
        if (message instanceof outgoing_request_message_1.OutgoingRequestMessage) {
            if (message.body) {
                contentDisposition = message.getHeader("Content-Disposition");
                contentType = message.getHeader("Content-Type");
                if (typeof message.body === "string") {
                    // FIXME: OutgoingRequest should not allow a "string" body without a "Content-Type" header.
                    if (!contentType) {
                        throw new Error("Header content type header does not equal body content type.");
                    }
                    content = message.body;
                }
                else {
                    // FIXME: OutgoingRequest should not allow the "Content-Type" header not to match th body content type
                    if (contentType && contentType !== message.body.contentType) {
                        throw new Error("Header content type header does not equal body content type.");
                    }
                    contentType = message.body.contentType;
                    content = message.body.body;
                }
            }
        }
        // We're in UAS role, sending outgoing response
        if (isBody(message)) {
            contentDisposition = message.contentDisposition;
            contentType = message.contentType;
            content = message.content;
        }
        // No content, no body.
        if (!content) {
            return undefined;
        }
        if (contentType && !contentDisposition) {
            contentDisposition = contentTypeToContentDisposition(contentType);
        }
        if (!contentDisposition) {
            throw new Error("Content disposition undefined.");
        }
        if (!contentType) {
            throw new Error("Content type undefined.");
        }
        return {
            contentDisposition,
            contentType,
            content
        };
    }
    exports.getBody = getBody;
});


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(0), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(56), __webpack_require__(11)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DigestAuthentication = void 0;
    const md5_1 = require("./md5");
    const utils_1 = require("./utils");
    function MD5(s) {
        return md5_1.Md5.hashStr(s);
    }
    /**
     * Digest Authentication.
     * @internal
     */
    class DigestAuthentication {
        /**
         * Constructor.
         * @param loggerFactory - LoggerFactory.
         * @param username - Username.
         * @param password - Password.
         */
        constructor(loggerFactory, ha1, username, password) {
            this.logger = loggerFactory.getLogger("sipjs.digestauthentication");
            this.username = username;
            this.password = password;
            this.ha1 = ha1;
            this.nc = 0;
            this.ncHex = "00000000";
        }
        /**
         * Performs Digest authentication given a SIP request and the challenge
         * received in a response to that request.
         * @param request -
         * @param challenge -
         * @returns true if credentials were successfully generated, false otherwise.
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        authenticate(request, challenge, body) {
            // Inspect and validate the challenge.
            this.algorithm = challenge.algorithm;
            this.realm = challenge.realm;
            this.nonce = challenge.nonce;
            this.opaque = challenge.opaque;
            this.stale = challenge.stale;
            if (this.algorithm) {
                if (this.algorithm !== "MD5") {
                    this.logger.warn("challenge with Digest algorithm different than 'MD5', authentication aborted");
                    return false;
                }
            }
            else {
                this.algorithm = "MD5";
            }
            if (!this.realm) {
                this.logger.warn("challenge without Digest realm, authentication aborted");
                return false;
            }
            if (!this.nonce) {
                this.logger.warn("challenge without Digest nonce, authentication aborted");
                return false;
            }
            // 'qop' can contain a list of values (Array). Let's choose just one.
            if (challenge.qop) {
                if (challenge.qop.indexOf("auth") > -1) {
                    this.qop = "auth";
                }
                else if (challenge.qop.indexOf("auth-int") > -1) {
                    this.qop = "auth-int";
                }
                else {
                    // Otherwise 'qop' is present but does not contain 'auth' or 'auth-int', so abort here.
                    this.logger.warn("challenge without Digest qop different than 'auth' or 'auth-int', authentication aborted");
                    return false;
                }
            }
            else {
                this.qop = undefined;
            }
            // Fill other attributes.
            this.method = request.method;
            this.uri = request.ruri;
            this.cnonce = utils_1.createRandomToken(12);
            this.nc += 1;
            this.updateNcHex();
            // nc-value = 8LHEX. Max value = 'FFFFFFFF'.
            if (this.nc === 4294967296) {
                this.nc = 1;
                this.ncHex = "00000001";
            }
            // Calculate the Digest "response" value.
            this.calculateResponse(body);
            return true;
        }
        /**
         * Return the Proxy-Authorization or WWW-Authorization header value.
         */
        toString() {
            const authParams = [];
            if (!this.response) {
                throw new Error("response field does not exist, cannot generate Authorization header");
            }
            authParams.push("algorithm=" + this.algorithm);
            authParams.push('username="' + this.username + '"');
            authParams.push('realm="' + this.realm + '"');
            authParams.push('nonce="' + this.nonce + '"');
            authParams.push('uri="' + this.uri + '"');
            authParams.push('response="' + this.response + '"');
            if (this.opaque) {
                authParams.push('opaque="' + this.opaque + '"');
            }
            if (this.qop) {
                authParams.push("qop=" + this.qop);
                authParams.push('cnonce="' + this.cnonce + '"');
                authParams.push("nc=" + this.ncHex);
            }
            return "Digest " + authParams.join(", ");
        }
        /**
         * Generate the 'nc' value as required by Digest in this.ncHex by reading this.nc.
         */
        updateNcHex() {
            const hex = Number(this.nc).toString(16);
            this.ncHex = "00000000".substr(0, 8 - hex.length) + hex;
        }
        /**
         * Generate Digest 'response' value.
         */
        calculateResponse(body) {
            let ha1, ha2;
            // HA1 = MD5(A1) = MD5(username:realm:password)
            ha1 = this.ha1;
            if (ha1 === "" || ha1 === undefined) {
                ha1 = MD5(this.username + ":" + this.realm + ":" + this.password);
            }
            if (this.qop === "auth") {
                // HA2 = MD5(A2) = MD5(method:digestURI)
                ha2 = MD5(this.method + ":" + this.uri);
                // response = MD5(HA1:nonce:nonceCount:credentialsNonce:qop:HA2)`
                this.response = MD5(ha1 + ":" + this.nonce + ":" + this.ncHex + ":" + this.cnonce + ":auth:" + ha2);
            }
            else if (this.qop === "auth-int") {
                // HA2 = MD5(A2) = MD5(method:digestURI:MD5(entityBody))
                ha2 = MD5(this.method + ":" + this.uri + ":" + MD5(body ? body : ""));
                // response = MD5(HA1:nonce:nonceCount:credentialsNonce:qop:HA2)
                this.response = MD5(ha1 + ":" + this.nonce + ":" + this.ncHex + ":" + this.cnonce + ":auth-int:" + ha2);
            }
            else if (this.qop === undefined) {
                // HA2 = MD5(A2) = MD5(method:digestURI)
                ha2 = MD5(this.method + ":" + this.uri);
                // response = MD5(HA1:nonce:HA2)
                this.response = MD5(ha1 + ":" + this.nonce + ":" + ha2);
            }
        }
    }
    exports.DigestAuthentication = DigestAuthentication;
});


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(0), exports);
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
});


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(0), exports);
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
});


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(0), exports);
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
});


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(0), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(11)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.constructOutgoingResponse = void 0;
    const utils_1 = require("./utils");
    /**
     * When a UAS wishes to construct a response to a request, it follows
     * the general procedures detailed in the following subsections.
     * Additional behaviors specific to the response code in question, which
     * are not detailed in this section, may also be required.
     * https://tools.ietf.org/html/rfc3261#section-8.2.6
     * @internal
     */
    function constructOutgoingResponse(message, options) {
        const CRLF = "\r\n";
        if (options.statusCode < 100 || options.statusCode > 699) {
            throw new TypeError("Invalid statusCode: " + options.statusCode);
        }
        const reasonPhrase = options.reasonPhrase ? options.reasonPhrase : utils_1.getReasonPhrase(options.statusCode);
        // SIP responses are distinguished from requests by having a Status-Line
        // as their start-line.  A Status-Line consists of the protocol version
        // followed by a numeric Status-Code and its associated textual phrase,
        // with each element separated by a single SP character.
        // https://tools.ietf.org/html/rfc3261#section-7.2
        let response = "SIP/2.0 " + options.statusCode + " " + reasonPhrase + CRLF;
        // One largely non-method-specific guideline for the generation of
        // responses is that UASs SHOULD NOT issue a provisional response for a
        // non-INVITE request.  Rather, UASs SHOULD generate a final response to
        // a non-INVITE request as soon as possible.
        // https://tools.ietf.org/html/rfc3261#section-8.2.6.1
        if (options.statusCode >= 100 && options.statusCode < 200) {
            // TODO
        }
        // When a 100 (Trying) response is generated, any Timestamp header field
        // present in the request MUST be copied into this 100 (Trying)
        // response.  If there is a delay in generating the response, the UAS
        // SHOULD add a delay value into the Timestamp value in the response.
        // This value MUST contain the difference between the time of sending of
        // the response and receipt of the request, measured in seconds.
        // https://tools.ietf.org/html/rfc3261#section-8.2.6.1
        if (options.statusCode === 100) {
            // TODO
        }
        // The From field of the response MUST equal the From header field of
        // the request.  The Call-ID header field of the response MUST equal the
        // Call-ID header field of the request.  The CSeq header field of the
        // response MUST equal the CSeq field of the request.  The Via header
        // field values in the response MUST equal the Via header field values
        // in the request and MUST maintain the same ordering.
        // https://tools.ietf.org/html/rfc3261#section-8.2.6.2
        const fromHeader = "From: " + message.getHeader("From") + CRLF;
        const callIdHeader = "Call-ID: " + message.callId + CRLF;
        const cSeqHeader = "CSeq: " + message.cseq + " " + message.method + CRLF;
        const viaHeaders = message.getHeaders("via").reduce((previous, current) => {
            return previous + "Via: " + current + CRLF;
        }, "");
        // If a request contained a To tag in the request, the To header field
        // in the response MUST equal that of the request.  However, if the To
        // header field in the request did not contain a tag, the URI in the To
        // header field in the response MUST equal the URI in the To header
        // field; additionally, the UAS MUST add a tag to the To header field in
        // the response (with the exception of the 100 (Trying) response, in
        // which a tag MAY be present).  This serves to identify the UAS that is
        // responding, possibly resulting in a component of a dialog ID.  The
        // same tag MUST be used for all responses to that request, both final
        // and provisional (again excepting the 100 (Trying)).
        // https://tools.ietf.org/html/rfc3261#section-8.2.6.2
        let toHeader = "To: " + message.getHeader("to");
        if (options.statusCode > 100 && !message.parseHeader("to").hasParam("tag")) {
            let toTag = options.toTag;
            if (!toTag) {
                // Stateless UAS Behavior...
                // o  To header tags MUST be generated for responses in a stateless
                //    manner - in a manner that will generate the same tag for the
                //    same request consistently.  For information on tag construction
                //    see Section 19.3.
                // https://tools.ietf.org/html/rfc3261#section-8.2.7
                toTag = utils_1.newTag(); // FIXME: newTag() currently generates random tags
            }
            toHeader += ";tag=" + toTag;
        }
        toHeader += CRLF;
        // FIXME: TODO: needs review... moved to InviteUserAgentServer (as it is specific to that)
        // let recordRouteHeaders = "";
        // if (request.method === C.INVITE && statusCode > 100 && statusCode <= 200) {
        //   recordRouteHeaders = request.getHeaders("record-route").reduce((previous, current) => {
        //     return previous + "Record-Route: " + current + CRLF;
        //   }, "");
        // }
        // FIXME: TODO: needs review...
        let supportedHeader = "";
        if (options.supported) {
            supportedHeader = "Supported: " + options.supported.join(", ") + CRLF;
        }
        // FIXME: TODO: needs review...
        let userAgentHeader = "";
        if (options.userAgent) {
            userAgentHeader = "User-Agent: " + options.userAgent + CRLF;
        }
        let extensionHeaders = "";
        if (options.extraHeaders) {
            extensionHeaders = options.extraHeaders.reduce((previous, current) => {
                return previous + current.trim() + CRLF;
            }, "");
        }
        // The relative order of header fields with different field names is not
        // significant.  However, it is RECOMMENDED that header fields which are
        // needed for proxy processing (Via, Route, Record-Route, Proxy-Require,
        // Max-Forwards, and Proxy-Authorization, for example) appear towards
        // the top of the message to facilitate rapid parsing.
        // https://tools.ietf.org/html/rfc3261#section-7.3.1
        // response += recordRouteHeaders;
        response += viaHeaders;
        response += fromHeader;
        response += toHeader;
        response += cSeqHeader;
        response += callIdHeader;
        response += supportedHeader;
        response += userAgentHeader;
        response += extensionHeaders;
        if (options.body) {
            response += "Content-Type: " + options.body.contentType + CRLF;
            response += "Content-Length: " + utils_1.utf8Length(options.body.content) + CRLF + CRLF;
            response += options.body.content;
        }
        else {
            response += "Content-Length: " + 0 + CRLF + CRLF;
        }
        return { message: response };
    }
    exports.constructOutgoingResponse = constructOutgoingResponse;
});


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(0), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(14), __webpack_require__(18), __webpack_require__(19)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Parser = void 0;
    /* eslint-disable no-inner-declarations */
    /* eslint-disable @typescript-eslint/no-namespace */
    const grammar_1 = require("../../grammar");
    const incoming_request_message_1 = require("./incoming-request-message");
    const incoming_response_message_1 = require("./incoming-response-message");
    /**
     * Extract and parse every header of a SIP message.
     * @internal
     */
    var Parser;
    (function (Parser) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function getHeader(data, headerStart) {
            // 'start' position of the header.
            let start = headerStart;
            // 'end' position of the header.
            let end = 0;
            // 'partial end' position of the header.
            let partialEnd = 0;
            // End of message.
            if (data.substring(start, start + 2).match(/(^\r\n)/)) {
                return -2;
            }
            while (end === 0) {
                // Partial End of Header.
                partialEnd = data.indexOf("\r\n", start);
                // 'indexOf' returns -1 if the value to be found never occurs.
                if (partialEnd === -1) {
                    return partialEnd;
                }
                if (!data.substring(partialEnd + 2, partialEnd + 4).match(/(^\r\n)/) &&
                    data.charAt(partialEnd + 2).match(/(^\s+)/)) {
                    // Not the end of the message. Continue from the next position.
                    start = partialEnd + 2;
                }
                else {
                    end = partialEnd;
                }
            }
            return end;
        }
        Parser.getHeader = getHeader;
        function parseHeader(message, 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data, headerStart, headerEnd) {
            const hcolonIndex = data.indexOf(":", headerStart);
            const headerName = data.substring(headerStart, hcolonIndex).trim();
            const headerValue = data.substring(hcolonIndex + 1, headerEnd).trim();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            let parsed;
            // If header-field is well-known, parse it.
            switch (headerName.toLowerCase()) {
                case "via":
                case "v":
                    message.addHeader("via", headerValue);
                    if (message.getHeaders("via").length === 1) {
                        parsed = message.parseHeader("Via");
                        if (parsed) {
                            message.via = parsed;
                            message.viaBranch = parsed.branch;
                        }
                    }
                    else {
                        parsed = 0;
                    }
                    break;
                case "from":
                case "f":
                    message.setHeader("from", headerValue);
                    parsed = message.parseHeader("from");
                    if (parsed) {
                        message.from = parsed;
                        message.fromTag = parsed.getParam("tag");
                    }
                    break;
                case "to":
                case "t":
                    message.setHeader("to", headerValue);
                    parsed = message.parseHeader("to");
                    if (parsed) {
                        message.to = parsed;
                        message.toTag = parsed.getParam("tag");
                    }
                    break;
                case "record-route":
                    parsed = grammar_1.Grammar.parse(headerValue, "Record_Route");
                    if (parsed === -1) {
                        parsed = undefined;
                        break;
                    }
                    if (!(parsed instanceof Array)) {
                        parsed = undefined;
                        break;
                    }
                    parsed.forEach((header) => {
                        message.addHeader("record-route", headerValue.substring(header.position, header.offset));
                        message.headers["Record-Route"][message.getHeaders("record-route").length - 1].parsed = header.parsed;
                    });
                    break;
                case "call-id":
                case "i":
                    message.setHeader("call-id", headerValue);
                    parsed = message.parseHeader("call-id");
                    if (parsed) {
                        message.callId = headerValue;
                    }
                    break;
                case "contact":
                case "m":
                    parsed = grammar_1.Grammar.parse(headerValue, "Contact");
                    if (parsed === -1) {
                        parsed = undefined;
                        break;
                    }
                    if (!(parsed instanceof Array)) {
                        parsed = undefined;
                        break;
                    }
                    parsed.forEach((header) => {
                        message.addHeader("contact", headerValue.substring(header.position, header.offset));
                        message.headers.Contact[message.getHeaders("contact").length - 1].parsed = header.parsed;
                    });
                    break;
                case "content-length":
                case "l":
                    message.setHeader("content-length", headerValue);
                    parsed = message.parseHeader("content-length");
                    break;
                case "content-type":
                case "c":
                    message.setHeader("content-type", headerValue);
                    parsed = message.parseHeader("content-type");
                    break;
                case "cseq":
                    message.setHeader("cseq", headerValue);
                    parsed = message.parseHeader("cseq");
                    if (parsed) {
                        message.cseq = parsed.value;
                    }
                    if (message instanceof incoming_response_message_1.IncomingResponseMessage) {
                        message.method = parsed.method;
                    }
                    break;
                case "max-forwards":
                    message.setHeader("max-forwards", headerValue);
                    parsed = message.parseHeader("max-forwards");
                    break;
                case "www-authenticate":
                    message.setHeader("www-authenticate", headerValue);
                    parsed = message.parseHeader("www-authenticate");
                    break;
                case "proxy-authenticate":
                    message.setHeader("proxy-authenticate", headerValue);
                    parsed = message.parseHeader("proxy-authenticate");
                    break;
                case "refer-to":
                case "r":
                    message.setHeader("refer-to", headerValue);
                    parsed = message.parseHeader("refer-to");
                    if (parsed) {
                        message.referTo = parsed;
                    }
                    break;
                default:
                    // Do not parse this header.
                    message.addHeader(headerName.toLowerCase(), headerValue);
                    parsed = 0;
            }
            if (parsed === undefined) {
                return {
                    error: "error parsing header '" + headerName + "'"
                };
            }
            else {
                return true;
            }
        }
        Parser.parseHeader = parseHeader;
        function parseMessage(data, logger) {
            let headerStart = 0;
            let headerEnd = data.indexOf("\r\n");
            if (headerEnd === -1) {
                logger.warn("no CRLF found, not a SIP message, discarded");
                return;
            }
            // Parse first line. Check if it is a Request or a Reply.
            const firstLine = data.substring(0, headerEnd);
            const parsed = grammar_1.Grammar.parse(firstLine, "Request_Response");
            let message;
            if (parsed === -1) {
                logger.warn('error parsing first line of SIP message: "' + firstLine + '"');
                return;
            }
            else if (!parsed.status_code) {
                message = new incoming_request_message_1.IncomingRequestMessage();
                message.method = parsed.method;
                message.ruri = parsed.uri;
            }
            else {
                message = new incoming_response_message_1.IncomingResponseMessage();
                message.statusCode = parsed.status_code;
                message.reasonPhrase = parsed.reason_phrase;
            }
            message.data = data;
            headerStart = headerEnd + 2;
            // Loop over every line in data. Detect the end of each header and parse
            // it or simply add to the headers collection.
            let bodyStart;
            // eslint-disable-next-line no-constant-condition
            while (true) {
                headerEnd = getHeader(data, headerStart);
                // The SIP message has normally finished.
                if (headerEnd === -2) {
                    bodyStart = headerStart + 2;
                    break;
                }
                else if (headerEnd === -1) {
                    // data.indexOf returned -1 due to a malformed message.
                    logger.error("malformed message");
                    return;
                }
                const parsedHeader = parseHeader(message, data, headerStart, headerEnd);
                if (parsedHeader && parsedHeader !== true) {
                    logger.error(parsedHeader.error);
                    return;
                }
                headerStart = headerEnd + 2;
            }
            // RFC3261 18.3.
            // If there are additional bytes in the transport packet
            // beyond the end of the body, they MUST be discarded.
            if (message.hasHeader("content-length")) {
                message.body = data.substr(bodyStart, Number(message.getHeader("content-length")));
            }
            else {
                message.body = data.substring(bodyStart);
            }
            return message;
        }
        Parser.parseMessage = parseMessage;
    })(Parser = exports.Parser || (exports.Parser = {}));
});


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(4), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(9), __webpack_require__(22), __webpack_require__(12)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InviteServerTransaction = void 0;
    const messages_1 = require("../messages");
    const timers_1 = require("../timers");
    const server_transaction_1 = require("./server-transaction");
    const transaction_state_1 = require("./transaction-state");
    /**
     * INVITE Server Transaction.
     * @remarks
     * https://tools.ietf.org/html/rfc3261#section-17.2.1
     * @public
     */
    class InviteServerTransaction extends server_transaction_1.ServerTransaction {
        /**
         * Constructor.
         * Upon construction, a "100 Trying" reply will be immediately sent.
         * After construction the transaction will be in the "proceeding" state and the transaction
         * `id` will equal the branch parameter set in the Via header of the incoming request.
         * https://tools.ietf.org/html/rfc3261#section-17.2.1
         * @param request - Incoming INVITE request from the transport.
         * @param transport - The transport.
         * @param user - The transaction user.
         */
        constructor(request, transport, user) {
            super(request, transport, user, transaction_state_1.TransactionState.Proceeding, "sip.transaction.ist");
        }
        /**
         * Destructor.
         */
        dispose() {
            this.stopProgressExtensionTimer();
            if (this.H) {
                clearTimeout(this.H);
                this.H = undefined;
            }
            if (this.I) {
                clearTimeout(this.I);
                this.I = undefined;
            }
            if (this.L) {
                clearTimeout(this.L);
                this.L = undefined;
            }
            super.dispose();
        }
        /** Transaction kind. Deprecated. */
        get kind() {
            return "ist";
        }
        /**
         * Receive requests from transport matching this transaction.
         * @param request - Request matching this transaction.
         */
        receiveRequest(request) {
            switch (this.state) {
                case transaction_state_1.TransactionState.Proceeding:
                    // If a request retransmission is received while in the "Proceeding" state, the most
                    // recent provisional response that was received from the TU MUST be passed to the
                    // transport layer for retransmission.
                    // https://tools.ietf.org/html/rfc3261#section-17.2.1
                    if (request.method === messages_1.C.INVITE) {
                        if (this.lastProvisionalResponse) {
                            this.send(this.lastProvisionalResponse).catch((error) => {
                                this.logTransportError(error, "Failed to send retransmission of provisional response.");
                            });
                        }
                        return;
                    }
                    break;
                case transaction_state_1.TransactionState.Accepted:
                    // While in the "Accepted" state, any retransmissions of the INVITE
                    // received will match this transaction state machine and will be
                    // absorbed by the machine without changing its state. These
                    // retransmissions are not passed onto the TU.
                    // https://tools.ietf.org/html/rfc6026#section-7.1
                    if (request.method === messages_1.C.INVITE) {
                        return;
                    }
                    break;
                case transaction_state_1.TransactionState.Completed:
                    // Furthermore, while in the "Completed" state, if a request retransmission is
                    // received, the server SHOULD pass the response to the transport for retransmission.
                    // https://tools.ietf.org/html/rfc3261#section-17.2.1
                    if (request.method === messages_1.C.INVITE) {
                        if (!this.lastFinalResponse) {
                            throw new Error("Last final response undefined.");
                        }
                        this.send(this.lastFinalResponse).catch((error) => {
                            this.logTransportError(error, "Failed to send retransmission of final response.");
                        });
                        return;
                    }
                    // If an ACK is received while the server transaction is in the "Completed" state,
                    // the server transaction MUST transition to the "Confirmed" state.
                    // https://tools.ietf.org/html/rfc3261#section-17.2.1
                    if (request.method === messages_1.C.ACK) {
                        this.stateTransition(transaction_state_1.TransactionState.Confirmed);
                        return;
                    }
                    break;
                case transaction_state_1.TransactionState.Confirmed:
                    // The purpose of the "Confirmed" state is to absorb any additional ACK messages that arrive,
                    // triggered from retransmissions of the final response.
                    // https://tools.ietf.org/html/rfc3261#section-17.2.1
                    if (request.method === messages_1.C.INVITE || request.method === messages_1.C.ACK) {
                        return;
                    }
                    break;
                case transaction_state_1.TransactionState.Terminated:
                    // For good measure absorb any additional messages that arrive (should not happen).
                    if (request.method === messages_1.C.INVITE || request.method === messages_1.C.ACK) {
                        return;
                    }
                    break;
                default:
                    throw new Error(`Invalid state ${this.state}`);
            }
            const message = `INVITE server transaction received unexpected ${request.method} request while in state ${this.state}.`;
            this.logger.warn(message);
            return;
        }
        /**
         * Receive responses from TU for this transaction.
         * @param statusCode - Status code of response.
         * @param response - Response.
         */
        receiveResponse(statusCode, response) {
            if (statusCode < 100 || statusCode > 699) {
                throw new Error(`Invalid status code ${statusCode}`);
            }
            switch (this.state) {
                case transaction_state_1.TransactionState.Proceeding:
                    // The TU passes any number of provisional responses to the server
                    // transaction. So long as the server transaction is in the
                    // "Proceeding" state, each of these MUST be passed to the transport
                    // layer for transmission. They are not sent reliably by the
                    // transaction layer (they are not retransmitted by it) and do not cause
                    // a change in the state of the server transaction.
                    // https://tools.ietf.org/html/rfc3261#section-17.2.1
                    if (statusCode >= 100 && statusCode <= 199) {
                        this.lastProvisionalResponse = response;
                        // Start the progress extension timer only for a non-100 provisional response.
                        if (statusCode > 100) {
                            this.startProgressExtensionTimer(); // FIXME: remove
                        }
                        this.send(response).catch((error) => {
                            this.logTransportError(error, "Failed to send 1xx response.");
                        });
                        return;
                    }
                    // If, while in the "Proceeding" state, the TU passes a 2xx response
                    // to the server transaction, the server transaction MUST pass this
                    // response to the transport layer for transmission. It is not
                    // retransmitted by the server transaction; retransmissions of 2xx
                    // responses are handled by the TU. The server transaction MUST then
                    // transition to the "Accepted" state.
                    // https://tools.ietf.org/html/rfc6026#section-8.5
                    if (statusCode >= 200 && statusCode <= 299) {
                        this.lastFinalResponse = response;
                        this.stateTransition(transaction_state_1.TransactionState.Accepted);
                        this.send(response).catch((error) => {
                            this.logTransportError(error, "Failed to send 2xx response.");
                        });
                        return;
                    }
                    // While in the "Proceeding" state, if the TU passes a response with
                    // status code from 300 to 699 to the server transaction, the response
                    // MUST be passed to the transport layer for transmission, and the state
                    // machine MUST enter the "Completed" state.
                    // https://tools.ietf.org/html/rfc3261#section-17.2.1
                    if (statusCode >= 300 && statusCode <= 699) {
                        this.lastFinalResponse = response;
                        this.stateTransition(transaction_state_1.TransactionState.Completed);
                        this.send(response).catch((error) => {
                            this.logTransportError(error, "Failed to send non-2xx final response.");
                        });
                        return;
                    }
                    break;
                case transaction_state_1.TransactionState.Accepted:
                    // While in the "Accepted" state, if the TU passes a 2xx response,
                    // the server transaction MUST pass the response to the transport layer for transmission.
                    // https://tools.ietf.org/html/rfc6026#section-8.7
                    if (statusCode >= 200 && statusCode <= 299) {
                        this.send(response).catch((error) => {
                            this.logTransportError(error, "Failed to send 2xx response.");
                        });
                        return;
                    }
                    break;
                case transaction_state_1.TransactionState.Completed:
                    break;
                case transaction_state_1.TransactionState.Confirmed:
                    break;
                case transaction_state_1.TransactionState.Terminated:
                    break;
                default:
                    throw new Error(`Invalid state ${this.state}`);
            }
            const message = `INVITE server transaction received unexpected ${statusCode} response from TU while in state ${this.state}.`;
            this.logger.error(message);
            throw new Error(message);
        }
        /**
         * Retransmit the last 2xx response. This is a noop if not in the "accepted" state.
         */
        retransmitAcceptedResponse() {
            if (this.state === transaction_state_1.TransactionState.Accepted && this.lastFinalResponse) {
                this.send(this.lastFinalResponse).catch((error) => {
                    this.logTransportError(error, "Failed to send 2xx response.");
                });
            }
        }
        /**
         * First, the procedures in [4] are followed, which attempt to deliver the response to a backup.
         * If those should all fail, based on the definition of failure in [4], the server transaction SHOULD
         * inform the TU that a failure has occurred, and MUST remain in the current state.
         * https://tools.ietf.org/html/rfc6026#section-8.8
         */
        onTransportError(error) {
            if (this.user.onTransportError) {
                this.user.onTransportError(error);
            }
        }
        /** For logging. */
        typeToString() {
            return "INVITE server transaction";
        }
        /**
         * Execute a state transition.
         * @param newState - New state.
         */
        stateTransition(newState) {
            // Assert valid state transitions.
            const invalidStateTransition = () => {
                throw new Error(`Invalid state transition from ${this.state} to ${newState}`);
            };
            switch (newState) {
                case transaction_state_1.TransactionState.Proceeding:
                    invalidStateTransition();
                    break;
                case transaction_state_1.TransactionState.Accepted:
                case transaction_state_1.TransactionState.Completed:
                    if (this.state !== transaction_state_1.TransactionState.Proceeding) {
                        invalidStateTransition();
                    }
                    break;
                case transaction_state_1.TransactionState.Confirmed:
                    if (this.state !== transaction_state_1.TransactionState.Completed) {
                        invalidStateTransition();
                    }
                    break;
                case transaction_state_1.TransactionState.Terminated:
                    if (this.state !== transaction_state_1.TransactionState.Accepted &&
                        this.state !== transaction_state_1.TransactionState.Completed &&
                        this.state !== transaction_state_1.TransactionState.Confirmed) {
                        invalidStateTransition();
                    }
                    break;
                default:
                    invalidStateTransition();
            }
            // On any state transition, stop resending provisional responses
            this.stopProgressExtensionTimer();
            // The purpose of the "Accepted" state is to absorb retransmissions of an accepted INVITE request.
            // Any such retransmissions are absorbed entirely within the server transaction.
            // They are not passed up to the TU since any downstream UAS cores that accepted the request have
            // taken responsibility for reliability and will already retransmit their 2xx responses if necessary.
            // https://tools.ietf.org/html/rfc6026#section-8.7
            if (newState === transaction_state_1.TransactionState.Accepted) {
                this.L = setTimeout(() => this.timerL(), timers_1.Timers.TIMER_L);
            }
            // When the "Completed" state is entered, timer H MUST be set to fire in 64*T1 seconds for all transports.
            // Timer H determines when the server transaction abandons retransmitting the response.
            // If an ACK is received while the server transaction is in the "Completed" state,
            // the server transaction MUST transition to the "Confirmed" state.
            // https://tools.ietf.org/html/rfc3261#section-17.2.1
            if (newState === transaction_state_1.TransactionState.Completed) {
                // FIXME: Missing timer G for unreliable transports.
                this.H = setTimeout(() => this.timerH(), timers_1.Timers.TIMER_H);
            }
            // The purpose of the "Confirmed" state is to absorb any additional ACK messages that arrive,
            // triggered from retransmissions of the final response. When this state is entered, timer I
            // is set to fire in T4 seconds for unreliable transports, and zero seconds for reliable
            // transports. Once timer I fires, the server MUST transition to the "Terminated" state.
            // https://tools.ietf.org/html/rfc3261#section-17.2.1
            if (newState === transaction_state_1.TransactionState.Confirmed) {
                // FIXME: This timer is not getting set correctly for unreliable transports.
                this.I = setTimeout(() => this.timerI(), timers_1.Timers.TIMER_I);
            }
            // Once the transaction is in the "Terminated" state, it MUST be destroyed immediately.
            // https://tools.ietf.org/html/rfc6026#section-8.7
            if (newState === transaction_state_1.TransactionState.Terminated) {
                this.dispose();
            }
            // Update state.
            this.setState(newState);
        }
        /**
         * FIXME: UAS Provisional Retransmission Timer. See RFC 3261 Section 13.3.1.1
         * This is in the wrong place. This is not a transaction level thing. It's a UAS level thing.
         */
        startProgressExtensionTimer() {
            // Start the progress extension timer only for the first non-100 provisional response.
            if (this.progressExtensionTimer === undefined) {
                this.progressExtensionTimer = setInterval(() => {
                    this.logger.debug(`Progress extension timer expired for INVITE server transaction ${this.id}.`);
                    if (!this.lastProvisionalResponse) {
                        throw new Error("Last provisional response undefined.");
                    }
                    this.send(this.lastProvisionalResponse).catch((error) => {
                        this.logTransportError(error, "Failed to send retransmission of provisional response.");
                    });
                }, timers_1.Timers.PROVISIONAL_RESPONSE_INTERVAL);
            }
        }
        /**
         * FIXME: UAS Provisional Retransmission Timer id. See RFC 3261 Section 13.3.1.1
         * This is in the wrong place. This is not a transaction level thing. It's a UAS level thing.
         */
        stopProgressExtensionTimer() {
            if (this.progressExtensionTimer !== undefined) {
                clearInterval(this.progressExtensionTimer);
                this.progressExtensionTimer = undefined;
            }
        }
        /**
         * While in the "Proceeding" state, if the TU passes a response with status code
         * from 300 to 699 to the server transaction, the response MUST be passed to the
         * transport layer for transmission, and the state machine MUST enter the "Completed" state.
         * For unreliable transports, timer G is set to fire in T1 seconds, and is not set to fire for
         * reliable transports. If timer G fires, the response is passed to the transport layer once
         * more for retransmission, and timer G is set to fire in MIN(2*T1, T2) seconds. From then on,
         * when timer G fires, the response is passed to the transport again for transmission, and
         * timer G is reset with a value that doubles, unless that value exceeds T2, in which case
         * it is reset with the value of T2.
         * https://tools.ietf.org/html/rfc3261#section-17.2.1
         */
        timerG() {
            // TODO
        }
        /**
         * If timer H fires while in the "Completed" state, it implies that the ACK was never received.
         * In this case, the server transaction MUST transition to the "Terminated" state, and MUST
         * indicate to the TU that a transaction failure has occurred.
         * https://tools.ietf.org/html/rfc3261#section-17.2.1
         */
        timerH() {
            this.logger.debug(`Timer H expired for INVITE server transaction ${this.id}.`);
            if (this.state === transaction_state_1.TransactionState.Completed) {
                this.logger.warn("ACK to negative final response was never received, terminating transaction.");
                this.stateTransition(transaction_state_1.TransactionState.Terminated);
            }
        }
        /**
         * Once timer I fires, the server MUST transition to the "Terminated" state.
         * https://tools.ietf.org/html/rfc3261#section-17.2.1
         */
        timerI() {
            this.logger.debug(`Timer I expired for INVITE server transaction ${this.id}.`);
            this.stateTransition(transaction_state_1.TransactionState.Terminated);
        }
        /**
         * When Timer L fires and the state machine is in the "Accepted" state, the machine MUST
         * transition to the "Terminated" state. Once the transaction is in the "Terminated" state,
         * it MUST be destroyed immediately. Timer L reflects the amount of time the server
         * transaction could receive 2xx responses for retransmission from the
         * TU while it is waiting to receive an ACK.
         * https://tools.ietf.org/html/rfc6026#section-7.1
         * https://tools.ietf.org/html/rfc6026#section-8.7
         */
        timerL() {
            this.logger.debug(`Timer L expired for INVITE server transaction ${this.id}.`);
            if (this.state === transaction_state_1.TransactionState.Accepted) {
                this.stateTransition(transaction_state_1.TransactionState.Terminated);
            }
        }
    }
    exports.InviteServerTransaction = InviteServerTransaction;
});


/***/ }),

/***/ 67:
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

/***/ 68:
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

/***/ 69:
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
});


/***/ }),

/***/ 8:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 8;

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