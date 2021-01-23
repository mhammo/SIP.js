/**
 * A core library implementing low level SIP protocol elements.
 * @packageDocumentation
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./dialogs", "./exceptions", "./log", "./messages", "./session", "./subscription", "./transactions", "./user-agent-core", "./user-agents", "./timers", "./transport"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Directories
    __exportStar(require("./dialogs"), exports);
    __exportStar(require("./exceptions"), exports);
    __exportStar(require("./log"), exports);
    __exportStar(require("./messages"), exports);
    __exportStar(require("./session"), exports);
    __exportStar(require("./subscription"), exports);
    __exportStar(require("./transactions"), exports);
    __exportStar(require("./user-agent-core"), exports);
    __exportStar(require("./user-agents"), exports);
    // Files
    __exportStar(require("./timers"), exports);
    __exportStar(require("./transport"), exports);
});
