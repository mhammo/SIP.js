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
    exports.RequestPendingError = void 0;
    const core_1 = require("../../core");
    /**
     * An exception indicating an outstanding prior request prevented execution.
     * @public
     */
    class RequestPendingError extends core_1.Exception {
        /** @internal */
        constructor(message) {
            super(message ? message : "Request pending.");
        }
    }
    exports.RequestPendingError = RequestPendingError;
});
