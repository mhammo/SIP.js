"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bye = void 0;
/**
 * A request to end a {@link Session} (incoming BYE).
 * @public
 */
class Bye {
    /** @internal */
    constructor(incomingByeRequest) {
        this.incomingByeRequest = incomingByeRequest;
    }
    /** Incoming BYE request message. */
    get request() {
        return this.incomingByeRequest.message;
    }
    /** Accept the request. */
    accept(options) {
        this.incomingByeRequest.accept(options);
        return Promise.resolve();
    }
    /** Reject the request. */
    reject(options) {
        this.incomingByeRequest.reject(options);
        return Promise.resolve();
    }
}
exports.Bye = Bye;
