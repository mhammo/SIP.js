"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomingRequestMessage = void 0;
const incoming_message_1 = require("./incoming-message");
/**
 * Incoming request message.
 * @public
 */
class IncomingRequestMessage extends incoming_message_1.IncomingMessage {
    constructor() {
        super();
    }
}
exports.IncomingRequestMessage = IncomingRequestMessage;
