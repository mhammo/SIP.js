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
/**
 * A SessionDescriptionHandler for web browsers.
 * @packageDocumentation
 */
__exportStar(require("./media-stream-factory-default"), exports);
__exportStar(require("./media-stream-factory"), exports);
__exportStar(require("./peer-connection-configuration-default"), exports);
__exportStar(require("./peer-connection-delegate"), exports);
__exportStar(require("./session-description-handler-configuration"), exports);
__exportStar(require("./session-description-handler-factory-default"), exports);
__exportStar(require("./session-description-handler-factory-options"), exports);
__exportStar(require("./session-description-handler-factory"), exports);
__exportStar(require("./session-description-handler-options"), exports);
__exportStar(require("./session-description-handler"), exports);
