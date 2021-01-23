(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./levels", "./logger"], factory);
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
