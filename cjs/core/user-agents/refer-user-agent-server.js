"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferUserAgentServer = void 0;
const transactions_1 = require("../transactions");
const user_agent_server_1 = require("./user-agent-server");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function instanceOfSessionDialog(object) {
    return object.userAgentCore !== undefined;
}
/**
 * REFER UAS.
 * @public
 */
class ReferUserAgentServer extends user_agent_server_1.UserAgentServer {
    /**
     * REFER UAS constructor.
     * @param dialogOrCore - Dialog for in dialog REFER, UserAgentCore for out of dialog REFER.
     * @param message - Incoming REFER request message.
     */
    constructor(dialogOrCore, message, delegate) {
        const userAgentCore = instanceOfSessionDialog(dialogOrCore) ? dialogOrCore.userAgentCore : dialogOrCore;
        super(transactions_1.NonInviteServerTransaction, userAgentCore, message, delegate);
    }
}
exports.ReferUserAgentServer = ReferUserAgentServer;
