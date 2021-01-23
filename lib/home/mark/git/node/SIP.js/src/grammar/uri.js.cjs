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
/******/ 	return __webpack_require__(__webpack_require__.s = 360);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 360:
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