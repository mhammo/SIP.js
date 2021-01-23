"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ByeUserAgentClient = void 0;
const messages_1 = require("../messages");
const transactions_1 = require("../transactions");
const user_agent_client_1 = require("./user-agent-client");
/**
 * BYE UAC.
 * @public
 */
class ByeUserAgentClient extends user_agent_client_1.UserAgentClient {
    constructor(dialog, delegate, options) {
        const message = dialog.createOutgoingRequestMessage(messages_1.C.BYE, options);
        super(transactions_1.NonInviteClientTransaction, dialog.userAgentCore, message, delegate);
        dialog.dispose();
    }
}
exports.ByeUserAgentClient = ByeUserAgentClient;
