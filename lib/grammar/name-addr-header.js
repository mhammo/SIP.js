(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./parameters"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NameAddrHeader = void 0;
    const parameters_1 = require("./parameters");
    /**
     * Name Address SIP header.
     * @public
     */
    class NameAddrHeader extends parameters_1.Parameters {
        /**
         * Constructor
         * @param uri -
         * @param displayName -
         * @param parameters -
         */
        constructor(uri, displayName, parameters) {
            super(parameters);
            this.uri = uri;
            this._displayName = displayName;
        }
        get friendlyName() {
            return this.displayName || this.uri.aor;
        }
        get displayName() { return this._displayName; }
        set displayName(value) {
            this._displayName = value;
        }
        clone() {
            return new NameAddrHeader(this.uri.clone(), this._displayName, JSON.parse(JSON.stringify(this.parameters)));
        }
        toString() {
            let body = (this.displayName || this.displayName === "0") ? '"' + this.displayName + '" ' : "";
            body += "<" + this.uri.toString() + ">";
            for (const parameter in this.parameters) {
                // eslint-disable-next-line no-prototype-builtins
                if (this.parameters.hasOwnProperty(parameter)) {
                    body += ";" + parameter;
                    if (this.parameters[parameter] !== null) {
                        body += "=" + this.parameters[parameter];
                    }
                }
            }
            return body;
        }
    }
    exports.NameAddrHeader = NameAddrHeader;
});
