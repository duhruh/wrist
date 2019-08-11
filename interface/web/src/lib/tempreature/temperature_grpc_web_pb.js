/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.proto = require('./temperature_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.TemperatureServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.proto.TemperatureServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.proto.ReadingsRequest,
 *   !proto.proto.Reading>}
 */
const methodDescriptor_TemperatureService_StreamReadings = new grpc.web.MethodDescriptor(
  '/proto.TemperatureService/StreamReadings',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.proto.ReadingsRequest,
  proto.proto.Reading,
  /** @param {!proto.proto.ReadingsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.Reading.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.proto.ReadingsRequest,
 *   !proto.proto.Reading>}
 */
const methodInfo_TemperatureService_StreamReadings = new grpc.web.AbstractClientBase.MethodInfo(
  proto.proto.Reading,
  /** @param {!proto.proto.ReadingsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.proto.Reading.deserializeBinary
);


/**
 * @param {!proto.proto.ReadingsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Reading>}
 *     The XHR Node Readable Stream
 */
proto.proto.TemperatureServiceClient.prototype.streamReadings =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/proto.TemperatureService/StreamReadings',
      request,
      metadata || {},
      methodDescriptor_TemperatureService_StreamReadings);
};


/**
 * @param {!proto.proto.ReadingsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.proto.Reading>}
 *     The XHR Node Readable Stream
 */
proto.proto.TemperatureServicePromiseClient.prototype.streamReadings =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/proto.TemperatureService/StreamReadings',
      request,
      metadata || {},
      methodDescriptor_TemperatureService_StreamReadings);
};


module.exports = proto.proto;

