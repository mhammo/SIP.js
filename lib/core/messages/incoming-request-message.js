(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./incoming-message"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IncomingRequestMessage = void 0;
    const incoming_message_1 = require("./incoming-message");
    /**
     * Incoming request message.
     * @public
     */
    class IncomingRequestMessage extends incoming_message_1.IncomingMessage {
        constructor() {
            super();
        }
    }
    exports.IncomingRequestMessage = IncomingRequestMessage;
});
