(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./exception"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TransactionStateError = void 0;
    const exception_1 = require("./exception");
    /**
     * Indicates that the operation could not be completed given the current transaction state.
     * @public
     */
    class TransactionStateError extends exception_1.Exception {
        constructor(message) {
            super(message ? message : "Transaction state error.");
        }
    }
    exports.TransactionStateError = TransactionStateError;
});
