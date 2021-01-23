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
/******/ 	return __webpack_require__(__webpack_require__.s = 63);
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


/***/ })

/******/ })));