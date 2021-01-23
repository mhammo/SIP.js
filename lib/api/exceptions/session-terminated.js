(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../core"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SessionTerminatedError = void 0;
    const core_1 = require("../../core");
    /**
     * An exception indicating the session terminated before the action completed.
     * @public
     */
    class SessionTerminatedError extends core_1.Exception {
        constructor() {
            super("The session has terminated.");
        }
    }
    exports.SessionTerminatedError = SessionTerminatedError;
});
