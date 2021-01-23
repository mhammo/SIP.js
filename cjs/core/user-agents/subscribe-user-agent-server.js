"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscribeUserAgentServer = void 0;
const transactions_1 = require("../transactions");
const user_agent_server_1 = require("./user-agent-server");
/**
 * SUBSCRIBE UAS.
 * @public
 */
class SubscribeUserAgentServer extends user_agent_server_1.UserAgentServer {
    constructor(core, message, delegate) {
        super(transactions_1.NonInviteServerTransaction, core, message, delegate);
        this.core = core;
    }
}
exports.SubscribeUserAgentServer = SubscribeUserAgentServer;
