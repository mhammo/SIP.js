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
/******/ 	return __webpack_require__(__webpack_require__.s = 277);
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

/***/ 277:
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

/***/ })

/******/ })));