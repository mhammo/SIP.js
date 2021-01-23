(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./pegjs/dist/grammar"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Grammar = void 0;
    /* eslint-disable @typescript-eslint/no-namespace */
    /* eslint-disable no-inner-declarations */
    const pegGrammar = require("./pegjs/dist/grammar");
    /**
     * Grammar.
     * @internal
     */
    var Grammar;
    (function (Grammar) {
        /**
         * Parse.
         * @param input -
         * @param startRule -
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function parse(input, startRule) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const options = { startRule };
            try {
                pegGrammar.parse(input, options);
            }
            catch (e) {
                options.data = -1;
            }
            return options.data;
        }
        Grammar.parse = parse;
        /**
         * Parse the given string and returns a SIP.NameAddrHeader instance or undefined if
         * it is an invalid NameAddrHeader.
         * @param name_addr_header -
         */
        function nameAddrHeaderParse(nameAddrHeader) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const parsedNameAddrHeader = Grammar.parse(nameAddrHeader, "Name_Addr_Header");
            return parsedNameAddrHeader !== -1 ? parsedNameAddrHeader : undefined;
        }
        Grammar.nameAddrHeaderParse = nameAddrHeaderParse;
        /**
         * Parse the given string and returns a SIP.URI instance or undefined if
         * it is an invalid URI.
         * @param uri -
         */
        function URIParse(uri) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const parsedUri = Grammar.parse(uri, "SIP_URI");
            return parsedUri !== -1 ? parsedUri : undefined;
        }
        Grammar.URIParse = URIParse;
    })(Grammar = exports.Grammar || (exports.Grammar = {}));
});
