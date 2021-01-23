"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Web = exports.Core = exports.version = exports.name = void 0;
// Helpful name and version exports
const version_1 = require("./version");
const version = version_1.LIBRARY_VERSION;
exports.version = version;
const name = "sip.js";
exports.name = name;
// Export api
__exportStar(require("./api"), exports);
// Export grammar
__exportStar(require("./grammar"), exports);
// Export namespaced core
const Core = require("./core");
exports.Core = Core;
// Export namespaced web
const Web = require("./platform/web");
exports.Web = Web;
