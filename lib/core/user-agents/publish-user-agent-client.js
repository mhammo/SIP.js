(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../transactions", "./user-agent-client"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PublishUserAgentClient = void 0;
    const transactions_1 = require("../transactions");
    const user_agent_client_1 = require("./user-agent-client");
    /**
     * PUBLISH UAC.
     * @public
     */
    class PublishUserAgentClient extends user_agent_client_1.UserAgentClient {
        constructor(core, message, delegate) {
            super(transactions_1.NonInviteClientTransaction, core, message, delegate);
        }
    }
    exports.PublishUserAgentClient = PublishUserAgentClient;
});
