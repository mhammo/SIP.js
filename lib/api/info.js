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
    exports.Info = void 0;
    /**
     * An exchange of information (incoming INFO).
     * @public
     */
    class Info {
        /** @internal */
        constructor(incomingInfoRequest) {
            this.incomingInfoRequest = incomingInfoRequest;
        }
        /** Incoming MESSAGE request message. */
        get request() {
            return this.incomingInfoRequest.message;
        }
        /** Accept the request. */
        accept(options) {
            this.incomingInfoRequest.accept(options);
            return Promise.resolve();
        }
        /** Reject the request. */
        reject(options) {
            this.incomingInfoRequest.reject(options);
            return Promise.resolve();
        }
    }
    exports.Info = Info;
});
