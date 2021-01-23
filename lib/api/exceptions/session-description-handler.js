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
    exports.SessionDescriptionHandlerError = void 0;
    const core_1 = require("../../core");
    /**
     * An exception indicating a session description handler error occured.
     * @public
     */
    class SessionDescriptionHandlerError extends core_1.Exception {
        constructor(message) {
            super(message ? message : "Unspecified session description handler error.");
        }
    }
    exports.SessionDescriptionHandlerError = SessionDescriptionHandlerError;
});
