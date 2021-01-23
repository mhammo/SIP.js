(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../messages", "../transactions", "./user-agent-client"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InfoUserAgentClient = void 0;
    const messages_1 = require("../messages");
    const transactions_1 = require("../transactions");
    const user_agent_client_1 = require("./user-agent-client");
    /**
     * INFO UAC.
     * @public
     */
    class InfoUserAgentClient extends user_agent_client_1.UserAgentClient {
        constructor(dialog, delegate, options) {
            const message = dialog.createOutgoingRequestMessage(messages_1.C.INFO, options);
            super(transactions_1.NonInviteClientTransaction, dialog.userAgentCore, message, delegate);
        }
    }
    exports.InfoUserAgentClient = InfoUserAgentClient;
});
