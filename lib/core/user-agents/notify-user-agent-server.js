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
    exports.NotifyUserAgentServer = void 0;
    const transactions_1 = require("../transactions");
    const user_agent_server_1 = require("./user-agent-server");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function instanceOfDialog(object) {
        return object.userAgentCore !== undefined;
    }
    /**
     * NOTIFY UAS.
     * @public
     */
    class NotifyUserAgentServer extends user_agent_server_1.UserAgentServer {
        /**
         * NOTIFY UAS constructor.
         * @param dialogOrCore - Dialog for in dialog NOTIFY, UserAgentCore for out of dialog NOTIFY (deprecated).
         * @param message - Incoming NOTIFY request message.
         */
        constructor(dialogOrCore, message, delegate) {
            const userAgentCore = instanceOfDialog(dialogOrCore) ? dialogOrCore.userAgentCore : dialogOrCore;
            super(transactions_1.NonInviteServerTransaction, userAgentCore, message, delegate);
        }
    }
    exports.NotifyUserAgentServer = NotifyUserAgentServer;
});
