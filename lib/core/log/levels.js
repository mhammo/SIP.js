(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
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
