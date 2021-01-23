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
/******/ 	return __webpack_require__(__webpack_require__.s = 192);
/******/ })
/************************************************************************/
/******/ ({

/***/ 144:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 144;

/***/ }),

/***/ 192:
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
        var v = factory(__webpack_require__(144), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(193)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * SessionDescriptionHandlerModifer functions for web browsers.
     * @packageDocumentation
     */
    __exportStar(require("./modifiers"), exports);
});


/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(144), exports);
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
    exports.holdModifier = exports.addMidLines = exports.stripVideo = exports.stripRtpPayload = exports.stripG722 = exports.cleanJitsiSdpImageattr = exports.stripTelephoneEvent = exports.stripTcpCandidates = void 0;
    const stripPayload = (sdp, payload) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const mediaDescs = [];
        const lines = sdp.split(/\r\n/);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let currentMediaDesc;
        for (let i = 0; i < lines.length;) {
            const line = lines[i];
            if (/^m=(?:audio|video)/.test(line)) {
                currentMediaDesc = {
                    index: i,
                    stripped: []
                };
                mediaDescs.push(currentMediaDesc);
            }
            else if (currentMediaDesc) {
                const rtpmap = /^a=rtpmap:(\d+) ([^/]+)\//.exec(line);
                if (rtpmap && payload === rtpmap[2]) {
                    lines.splice(i, 1);
                    currentMediaDesc.stripped.push(rtpmap[1]);
                    continue; // Don't increment 'i'
                }
            }
            i++;
        }
        for (const mediaDesc of mediaDescs) {
            const mline = lines[mediaDesc.index].split(" ");
            // Ignore the first 3 parameters of the mline. The codec information is after that
            for (let j = 3; j < mline.length;) {
                if (mediaDesc.stripped.indexOf(mline[j]) !== -1) {
                    mline.splice(j, 1);
                    continue;
                }
                j++;
            }
            lines[mediaDesc.index] = mline.join(" ");
        }
        return lines.join("\r\n");
    };
    const stripMediaDescription = (sdp, description) => {
        const descriptionRegExp = new RegExp("m=" + description + ".*$", "gm");
        const groupRegExp = new RegExp("^a=group:.*$", "gm");
        if (descriptionRegExp.test(sdp)) {
            let midLineToRemove;
            sdp = sdp.split(/^m=/gm).filter((section) => {
                if (section.substr(0, description.length) === description) {
                    midLineToRemove = section.match(/^a=mid:.*$/gm);
                    if (midLineToRemove) {
                        const step = midLineToRemove[0].match(/:.+$/g);
                        if (step) {
                            midLineToRemove = step[0].substr(1);
                        }
                    }
                    return false;
                }
                return true;
            }).join("m=");
            const groupLine = sdp.match(groupRegExp);
            if (groupLine && groupLine.length === 1) {
                let groupLinePortion = groupLine[0];
                // eslint-disable-next-line no-useless-escape
                const groupRegExpReplace = new RegExp("\ *" + midLineToRemove + "[^\ ]*", "g");
                groupLinePortion = groupLinePortion.replace(groupRegExpReplace, "");
                sdp = sdp.split(groupRegExp).join(groupLinePortion);
            }
        }
        return sdp;
    };
    /**
     * Modifier.
     * @public
     */
    function stripTcpCandidates(description) {
        description.sdp = (description.sdp || "").replace(/^a=candidate:\d+ \d+ tcp .*?\r\n/img, "");
        return Promise.resolve(description);
    }
    exports.stripTcpCandidates = stripTcpCandidates;
    /**
     * Modifier.
     * @public
     */
    function stripTelephoneEvent(description) {
        description.sdp = stripPayload(description.sdp || "", "telephone-event");
        return Promise.resolve(description);
    }
    exports.stripTelephoneEvent = stripTelephoneEvent;
    /**
     * Modifier.
     * @public
     */
    function cleanJitsiSdpImageattr(description) {
        description.sdp = (description.sdp || "").replace(/^(a=imageattr:.*?)(x|y)=\[0-/gm, "$1$2=[1:");
        return Promise.resolve(description);
    }
    exports.cleanJitsiSdpImageattr = cleanJitsiSdpImageattr;
    /**
     * Modifier.
     * @public
     */
    function stripG722(description) {
        description.sdp = stripPayload(description.sdp || "", "G722");
        return Promise.resolve(description);
    }
    exports.stripG722 = stripG722;
    /**
     * Modifier.
     * @public
     */
    function stripRtpPayload(payload) {
        return (description) => {
            description.sdp = stripPayload(description.sdp || "", payload);
            return Promise.resolve(description);
        };
    }
    exports.stripRtpPayload = stripRtpPayload;
    /**
     * Modifier.
     * @public
     */
    function stripVideo(description) {
        description.sdp = stripMediaDescription(description.sdp || "", "video");
        return Promise.resolve(description);
    }
    exports.stripVideo = stripVideo;
    /**
     * Modifier.
     * @public
     */
    function addMidLines(description) {
        let sdp = description.sdp || "";
        if (sdp.search(/^a=mid.*$/gm) === -1) {
            const mlines = sdp.match(/^m=.*$/gm);
            const sdpArray = sdp.split(/^m=.*$/gm);
            if (mlines) {
                mlines.forEach((elem, idx) => {
                    mlines[idx] = elem + "\na=mid:" + idx;
                });
            }
            sdpArray.forEach((elem, idx) => {
                if (mlines && mlines[idx]) {
                    sdpArray[idx] = elem + mlines[idx];
                }
            });
            sdp = sdpArray.join("");
            description.sdp = sdp;
        }
        return Promise.resolve(description);
    }
    exports.addMidLines = addMidLines;
    /**
     * The modifier that should be used when the session would like to place the call on hold.
     * @param description - The description that will be modified.
     */
    function holdModifier(description) {
        if (!description.sdp || !description.type) {
            throw new Error("Invalid SDP");
        }
        let sdp = description.sdp;
        const type = description.type;
        if (sdp) {
            if (!/a=(sendrecv|sendonly|recvonly|inactive)/.test(sdp)) {
                sdp = sdp.replace(/(m=[^\r]*\r\n)/g, "$1a=sendonly\r\n");
            }
            else {
                sdp = sdp.replace(/a=sendrecv\r\n/g, "a=sendonly\r\n");
                sdp = sdp.replace(/a=recvonly\r\n/g, "a=inactive\r\n");
            }
        }
        return Promise.resolve({ sdp, type });
    }
    exports.holdModifier = holdModifier;
});


/***/ })

/******/ })));