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
    exports.PrackUserAgentServer = void 0;
    const transactions_1 = require("../transactions");
    const user_agent_server_1 = require("./user-agent-server");
    /**
     * PRACK UAS.
     * @public
     */
    class PrackUserAgentServer extends user_agent_server_1.UserAgentServer {
        constructor(dialog, message, delegate) {
            super(transactions_1.NonInviteServerTransaction, dialog.userAgentCore, message, delegate);
            // Update dialog signaling state with offer/answer in body
            dialog.signalingStateTransition(message);
            this.dialog = dialog;
        }
        /**
         * Update the dialog signaling state on a 2xx response.
         * @param options - Options bucket.
         */
        accept(options = { statusCode: 200 }) {
            if (options.body) {
                // Update dialog signaling state with offer/answer in body
                this.dialog.signalingStateTransition(options.body);
            }
            return super.accept(options);
        }
    }
    exports.PrackUserAgentServer = PrackUserAgentServer;
});
