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
    exports.C = void 0;
    /* eslint-disable @typescript-eslint/no-namespace */
    /**
     * SIP Methods
     * @internal
     */
    var C;
    (function (C) {
        C.ACK = "ACK";
        C.BYE = "BYE";
        C.CANCEL = "CANCEL";
        C.INFO = "INFO";
        C.INVITE = "INVITE";
        C.MESSAGE = "MESSAGE";
        C.NOTIFY = "NOTIFY";
        C.OPTIONS = "OPTIONS";
        C.REGISTER = "REGISTER";
        C.UPDATE = "UPDATE";
        C.SUBSCRIBE = "SUBSCRIBE";
        C.PUBLISH = "PUBLISH";
        C.REFER = "REFER";
        C.PRACK = "PRACK";
    })(C = exports.C || (exports.C = {}));
});
