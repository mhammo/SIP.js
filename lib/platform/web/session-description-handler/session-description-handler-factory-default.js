(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./media-stream-factory-default", "./peer-connection-configuration-default", "./session-description-handler"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultSessionDescriptionHandlerFactory = void 0;
    const media_stream_factory_default_1 = require("./media-stream-factory-default");
    const peer_connection_configuration_default_1 = require("./peer-connection-configuration-default");
    const session_description_handler_1 = require("./session-description-handler");
    /**
     * Function which returns a SessionDescriptionHandlerFactory.
     * @remarks
     * See {@link defaultPeerConnectionConfiguration} for the default peer connection configuration.
     * The ICE gathering timeout defaults to 5000ms.
     * @param mediaStreamFactory - MediaStream factory.
     * @public
     */
    function defaultSessionDescriptionHandlerFactory(mediaStreamFactory) {
        return (session, options) => {
            // provide a default media stream factory if need be
            if (mediaStreamFactory === undefined) {
                mediaStreamFactory = media_stream_factory_default_1.defaultMediaStreamFactory();
            }
            // make sure we allow `0` to be passed in so timeout can be disabled
            const iceGatheringTimeout = (options === null || options === void 0 ? void 0 : options.iceGatheringTimeout) !== undefined ? options === null || options === void 0 ? void 0 : options.iceGatheringTimeout : 5000;
            // merge passed factory options into default session description configuration
            const sessionDescriptionHandlerConfiguration = {
                iceGatheringTimeout,
                peerConnectionConfiguration: Object.assign(Object.assign({}, peer_connection_configuration_default_1.defaultPeerConnectionConfiguration()), options === null || options === void 0 ? void 0 : options.peerConnectionConfiguration)
            };
            const logger = session.userAgent.getLogger("sip.SessionDescriptionHandler");
            return new session_description_handler_1.SessionDescriptionHandler(logger, mediaStreamFactory, sessionDescriptionHandlerConfiguration);
        };
    }
    exports.defaultSessionDescriptionHandlerFactory = defaultSessionDescriptionHandlerFactory;
});
