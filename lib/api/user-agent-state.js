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
    exports.UserAgentState = void 0;
    /**
     * {@link UserAgent} state.
     * @remarks
     * Valid state transitions:
     * ```
     * 1. "Started" --> "Stopped"
     * 2. "Stopped" --> "Started"
     * ```
     * @public
     */
    var UserAgentState;
    (function (UserAgentState) {
        UserAgentState["Started"] = "Started";
        UserAgentState["Stopped"] = "Stopped";
    })(UserAgentState = exports.UserAgentState || (exports.UserAgentState = {}));
});
