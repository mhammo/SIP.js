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
