"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ByeUserAgentServer = void 0;
const transactions_1 = require("../transactions");
const user_agent_server_1 = require("./user-agent-server");
/**
 * BYE UAS.
 * @public
 */
class ByeUserAgentServer extends user_agent_server_1.UserAgentServer {
    constructor(dialog, message, delegate) {
        super(transactions_1.NonInviteServerTransaction, dialog.userAgentCore, message, delegate);
    }
}
exports.ByeUserAgentServer = ByeUserAgentServer;
