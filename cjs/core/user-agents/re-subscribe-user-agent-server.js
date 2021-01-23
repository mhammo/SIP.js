"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReSubscribeUserAgentServer = void 0;
const transactions_1 = require("../transactions");
const user_agent_server_1 = require("./user-agent-server");
/**
 * Re-SUBSCRIBE UAS.
 * @public
 */
class ReSubscribeUserAgentServer extends user_agent_server_1.UserAgentServer {
    constructor(dialog, message, delegate) {
        super(transactions_1.NonInviteServerTransaction, dialog.userAgentCore, message, delegate);
    }
}
exports.ReSubscribeUserAgentServer = ReSubscribeUserAgentServer;
