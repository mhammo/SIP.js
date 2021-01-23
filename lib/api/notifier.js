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
    exports.Notifier = void 0;
    /**
     * TODO: This is currently just a placeholder.
     * Notifier is the peer of a Subscriber.
     * That is, a Notifier sends NOTIFY requests.
     * @internal
     */
    class Notifier {
    }
    exports.Notifier = Notifier;
});
