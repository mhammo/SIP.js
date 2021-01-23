(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../messages"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AllowedMethods = void 0;
    const messages_1 = require("../messages");
    /**
     * FIXME: TODO: Should be configurable/variable.
     */
    exports.AllowedMethods = [
        messages_1.C.ACK,
        messages_1.C.BYE,
        messages_1.C.CANCEL,
        messages_1.C.INFO,
        messages_1.C.INVITE,
        messages_1.C.MESSAGE,
        messages_1.C.NOTIFY,
        messages_1.C.OPTIONS,
        messages_1.C.PRACK,
        messages_1.C.REFER,
        messages_1.C.REGISTER,
        messages_1.C.SUBSCRIBE
    ];
});
