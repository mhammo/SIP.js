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
/******/ 	return __webpack_require__(__webpack_require__.s = 108);
/******/ })
/************************************************************************/
/******/ ({

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(40), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(73), __webpack_require__(90)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoggerFactory = void 0;
    const levels_1 = require("./levels");
    const logger_1 = require("./logger");
    /**
     * Logger.
     * @public
     */
    class LoggerFactory {
        constructor() {
            this.builtinEnabled = true;
            this._level = levels_1.Levels.log;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.loggers = {};
            this.logger = this.getLogger("sip:loggerfactory");
        }
        get level() {
            return this._level;
        }
        set level(newLevel) {
            if (newLevel >= 0 && newLevel <= 3) {
                this._level = newLevel;
            }
            else if (newLevel > 3) {
                this._level = 3;
                // eslint-disable-next-line no-prototype-builtins
            }
            else if (levels_1.Levels.hasOwnProperty(newLevel)) {
                this._level = newLevel;
            }
            else {
                this.logger.error("invalid 'level' parameter value: " + JSON.stringify(newLevel));
            }
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        get connector() {
            return this._connector;
        }
        set connector(value) {
            if (!value) {
                this._connector = undefined;
            }
            else if (typeof value === "function") {
                this._connector = value;
            }
            else {
                this.logger.error("invalid 'connector' parameter value: " + JSON.stringify(value));
            }
        }
        getLogger(category, label) {
            if (label && this.level === 3) {
                return new logger_1.Logger(this, category, label);
            }
            else if (this.loggers[category]) {
                return this.loggers[category];
            }
            else {
                const logger = new logger_1.Logger(this, category);
                this.loggers[category] = logger;
                return logger;
            }
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        genericLog(levelToLog, category, label, content) {
            if (this.level >= levelToLog) {
                if (this.builtinEnabled) {
                    this.print(levelToLog, category, label, content);
                }
            }
            if (this.connector) {
                this.connector(levels_1.Levels[levelToLog], category, label, content);
            }
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        print(levelToLog, category, label, content) {
            if (typeof content === "string") {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const prefix = [new Date(), category];
                if (label) {
                    prefix.push(label);
                }
                content = prefix.concat(content).join(" | ");
            }
            switch (levelToLog) {
                case levels_1.Levels.error:
                    // eslint-disable-next-line no-console
                    console.error(content);
                    break;
                case levels_1.Levels.warn:
                    // eslint-disable-next-line no-console
                    console.warn(content);
                    break;
                case levels_1.Levels.log:
                    // eslint-disable-next-line no-console
                    console.log(content);
                    break;
                case levels_1.Levels.debug:
                    // eslint-disable-next-line no-console
                    console.debug(content);
                    break;
                default:
                    break;
            }
        }
    }
    exports.LoggerFactory = LoggerFactory;
});


/***/ }),

/***/ 40:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 40;

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(40), exports);
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
    exports.Levels = void 0;
    /**
     * Log levels.
     * @public
     */
    var Levels;
    (function (Levels) {
        Levels[Levels["error"] = 0] = "error";
        Levels[Levels["warn"] = 1] = "warn";
        Levels[Levels["log"] = 2] = "log";
        Levels[Levels["debug"] = 3] = "debug";
    })(Levels = exports.Levels || (exports.Levels = {}));
});


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if ( true && typeof module.exports === "object") {
        var v = factory(__webpack_require__(40), exports);
        if (v !== undefined) module.exports = v;
    }
    else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(73)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Logger = void 0;
    const levels_1 = require("./levels");
    /**
     * Logger.
     * @public
     */
    class Logger {
        constructor(logger, category, label) {
            this.logger = logger;
            this.category = category;
            this.label = label;
        }
        error(content) {
            this.genericLog(levels_1.Levels.error, content);
        }
        warn(content) {
            this.genericLog(levels_1.Levels.warn, content);
        }
        log(content) {
            this.genericLog(levels_1.Levels.log, content);
        }
        debug(content) {
            this.genericLog(levels_1.Levels.debug, content);
        }
        genericLog(level, content) {
            this.logger.genericLog(level, this.category, this.label, content);
        }
        get level() {
            return this.logger.level;
        }
        set level(newLevel) {
            this.logger.level = newLevel;
        }
    }
    exports.Logger = Logger;
});


/***/ })

/******/ })));