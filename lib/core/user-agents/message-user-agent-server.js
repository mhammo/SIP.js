(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../transactions", "./user-agent-server"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MessageUserAgentServer = void 0;
    const transactions_1 = require("../transactions");
    const user_agent_server_1 = require("./user-agent-server");
    /**
     * MESSAGE UAS.
     * @public
     */
    class MessageUserAgentServer extends user_agent_server_1.UserAgentServer {
        constructor(core, message, delegate) {
            super(transactions_1.NonInviteServerTransaction, core, message, delegate);
        }
    }
    exports.MessageUserAgentServer = MessageUserAgentServer;
});
