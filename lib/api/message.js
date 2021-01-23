(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Message = void 0;
    /**
     * A received message (incoming MESSAGE).
     * @public
     */
    class Message {
        /** @internal */
        constructor(incomingMessageRequest) {
            this.incomingMessageRequest = incomingMessageRequest;
        }
        /** Incoming MESSAGE request message. */
        get request() {
            return this.incomingMessageRequest.message;
        }
        /** Accept the request. */
        accept(options) {
            this.incomingMessageRequest.accept(options);
            return Promise.resolve();
        }
        /** Reject the request. */
        reject(options) {
            this.incomingMessageRequest.reject(options);
            return Promise.resolve();
        }
    }
    exports.Message = Message;
});
