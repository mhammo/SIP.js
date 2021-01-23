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
    exports.TransactionState = void 0;
    /**
     * Transaction state.
     * @public
     */
    var TransactionState;
    (function (TransactionState) {
        TransactionState["Accepted"] = "Accepted";
        TransactionState["Calling"] = "Calling";
        TransactionState["Completed"] = "Completed";
        TransactionState["Confirmed"] = "Confirmed";
        TransactionState["Proceeding"] = "Proceeding";
        TransactionState["Terminated"] = "Terminated";
        TransactionState["Trying"] = "Trying";
    })(TransactionState = exports.TransactionState || (exports.TransactionState = {}));
});
