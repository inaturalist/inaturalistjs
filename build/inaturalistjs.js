/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint global-require: 0 */
var iNaturalistAPI = __webpack_require__(1);

module.exports = {
  setConfig: iNaturalistAPI.setConfig,
  annotations: __webpack_require__(11),
  authorized_applications: __webpack_require__(13),
  comments: __webpack_require__(15),
  computervision: __webpack_require__(17),
  controlled_terms: __webpack_require__(22),
  flags: __webpack_require__(24),
  identifications: __webpack_require__(26),
  log: __webpack_require__(59),
  messages: __webpack_require__(29),
  observation_field_values: __webpack_require__(31),
  observation_photos: __webpack_require__(33),
  observation_sounds: __webpack_require__(34),
  observations: __webpack_require__(35),
  photos: __webpack_require__(37),
  places: __webpack_require__(38),
  posts: __webpack_require__(40),
  projects: __webpack_require__(42),
  project_observations: __webpack_require__(43),
  project_users: __webpack_require__(45),
  provider_authorizations: __webpack_require__(47),
  relationships: __webpack_require__(49),
  search: __webpack_require__(51),
  sites: __webpack_require__(52),
  sounds: __webpack_require__(54),
  taxa: __webpack_require__(55),
  translations: __webpack_require__(56),
  users: __webpack_require__(57),
  Annotation: __webpack_require__(12),
  Comment: __webpack_require__(16),
  ControlledTerm: __webpack_require__(23),
  Flag: __webpack_require__(25),
  Identification: __webpack_require__(27),
  Observation: __webpack_require__(28),
  ObservationFieldValue: __webpack_require__(32),
  Photo: __webpack_require__(19),
  Place: __webpack_require__(39),
  Post: __webpack_require__(41),
  Project: __webpack_require__(36),
  ProjectUser: __webpack_require__(46),
  ProviderAuthorization: __webpack_require__(48),
  Site: __webpack_require__(53),
  Taxon: __webpack_require__(18),
  User: __webpack_require__(20),
  FileUpload: __webpack_require__(58)
};

/***/ }),
/* 1 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// cross-fetch wraps https://github.com/github/fetch, which doesn't seem to work
// quite right in React Native (see https://github.com/github/fetch/issues/601
// and https://github.com/lquixada/cross-fetch/issues/2). Conditional requires
// like this seem to work, though they do result in unnecessarily large files
// for React native
var localFetch;

if (typeof fetch !== "undefined") {
  localFetch = fetch;
} else {
  localFetch = __webpack_require__(2); // eslint-disable-line global-require
}

var LocalFormData;

if (typeof FormData !== "undefined") {
  LocalFormData = FormData;
} else {
  LocalFormData = __webpack_require__(3); // eslint-disable-line global-require, import/no-extraneous-dependencies
}

var querystring = __webpack_require__(4);

var rison = __webpack_require__(7);

var util = __webpack_require__(8);

var INaturalistAPIResponse = __webpack_require__(9);

var iNaturalistAPI = /*#__PURE__*/function () {
  function iNaturalistAPI() {
    _classCallCheck(this, iNaturalistAPI);
  }

  _createClass(iNaturalistAPI, null, [{
    key: "fetch",
    value: function fetch(route, ids, p, options) {
      var fetchIDs = ids;
      var params = p ? _objectSpread({}, p) : {};

      if (!Array.isArray(fetchIDs)) {
        fetchIDs = [fetchIDs];
      }

      var apiToken = iNaturalistAPI.apiToken(options);
      var headers = apiToken ? {
        Authorization: apiToken
      } : {};
      headers["Content-Type"] = "application/json";
      var fieldsObject;

      if (params && params.fields && _typeof(params.fields) === "object") {
        fieldsObject = params.fields;
        params.fields = rison.encode(params.fields);
      }

      var query = _typeof(params) === "object" && Object.keys(params).length > 0 ? "?".concat(querystring.stringify(params)) : "";
      var baseURL = "".concat(iNaturalistAPI.apiURL, "/").concat(route, "/").concat(fetchIDs.join(","));
      var urlWithQueryParams = "".concat(baseURL).concat(query);
      var fetch;

      if (urlWithQueryParams.length > 2000 && fieldsObject) {
        headers.Accept = "application/json";
        headers["X-HTTP-Method-Override"] = "GET";
        fetch = localFetch(baseURL, {
          method: "post",
          headers: headers,
          body: JSON.stringify(_objectSpread(_objectSpread({}, params), {}, {
            fields: fieldsObject
          }))
        });
      } else {
        fetch = localFetch(urlWithQueryParams, {
          headers: headers
        });
      }

      return fetch.then(iNaturalistAPI.thenText).then(iNaturalistAPI.thenJson).then(iNaturalistAPI.thenWrap);
    } // Note, this generally assumes that all GET requests go to the Node API. If
    // you want to GET something from the Rails API, call this with
    // useWriteApi: true

  }, {
    key: "get",
    value: function get(route, params, opts) {
      var options = _objectSpread({}, opts || {});

      var interpolated = iNaturalistAPI.interpolateRouteParams(route, params);

      if (interpolated.err) {
        return interpolated.err;
      }

      var thisRoute = interpolated.route;
      var apiToken = options.useAuth ? iNaturalistAPI.apiToken(options) : null;
      var headers = {
        Accept: "application/json",
        // DO NOT OMIT! Without this, fetch in React Native on Android will not
        // even execute the request
        "Content-Type": "application/json",
        "X-Via": "inaturalistjs"
      };

      if (apiToken) {
        headers.Authorization = apiToken;
      }

      var host = options.useWriteApi ? iNaturalistAPI.writeApiURL : iNaturalistAPI.apiURL;
      var baseURL = "".concat(host, "/").concat(thisRoute);
      var remainingParams = interpolated.remainingParams;
      var fieldsObject;

      if (remainingParams && remainingParams.fields && _typeof(remainingParams.fields) === "object") {
        fieldsObject = remainingParams.fields;
        remainingParams.fields = rison.encode(remainingParams.fields);
      }

      var query = remainingParams && Object.keys(remainingParams).length > 0 ? "?".concat(querystring.stringify(remainingParams)) : "";
      var urlWithQueryParams = "".concat(baseURL).concat(query);
      var fetch;

      if (urlWithQueryParams.length > 2000 && fieldsObject) {
        headers.Accept = "application/json";
        headers["X-HTTP-Method-Override"] = "GET";
        headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS, PUT, DELETE, HEAD";
        fetch = localFetch(baseURL, {
          method: "post",
          headers: headers,
          body: JSON.stringify(_objectSpread(_objectSpread({}, remainingParams), {}, {
            fields: fieldsObject
          }))
        });
      } else {
        fetch = localFetch(urlWithQueryParams, {
          headers: headers
        });
      }

      return fetch.then(iNaturalistAPI.thenText).then(iNaturalistAPI.thenJson).then(iNaturalistAPI.thenWrap);
    }
  }, {
    key: "post",
    value: function post(route, p, opts) {
      var options = _objectSpread({}, opts || {});

      var params = _objectSpread({}, p || {}); // interpolate path params, e.g. /:id => /1


      var interpolated = iNaturalistAPI.interpolateRouteParams(route, params);

      if (interpolated.err) {
        return interpolated.err;
      }

      var thisRoute = interpolated.route; // set up request headers

      var headers = {
        Accept: "application/json",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE, HEAD",
        "X-Via": "inaturalistjs"
      };

      if (options.user_agent) {
        headers["user-agent"] = options.user_agent;
      }

      if (options.remote_ip) {
        headers["x-forwarded-for"] = options.remote_ip;
      } // set up authentication


      var csrf = iNaturalistAPI.csrf();
      var apiToken = iNaturalistAPI.apiToken(options);

      if (apiToken) {
        headers.Authorization = apiToken;
      } else if (csrf) {
        params[csrf.param] = csrf.token;
      } // get the right host to send requests


      var host = iNaturalistAPI.methodHostPrefix(options); // make the request

      var body;

      if (options.upload) {
        body = new LocalFormData(); // Before params get "flattened" extract the fields and encode them as a
        // single JSON string, which the server can handle

        var fields = interpolated.remainingParams.fields;

        if (fields) {
          delete interpolated.remainingParams.fields;
          body.append("fields", JSON.stringify(fields));
        } // multipart requests reference all nested parameter names as strings
        // so flatten arrays into "arr[0]" and objects into "obj[prop]"


        params = iNaturalistAPI.flattenMultipartParams(interpolated.remainingParams);
        Object.keys(params).forEach(function (k) {
          // FormData params can include options like file upload sizes
          if (params[k] && params[k].type === "custom" && params[k].value) {
            body.append(k, params[k].value, params[k].options);
          } else {
            body.append(k, typeof params[k] === "boolean" ? params[k].toString() : params[k]);
          }
        });
      } else {
        headers["Content-Type"] = "application/json";
        body = JSON.stringify(interpolated.remainingParams);
      }

      var fetchOpts = {
        method: options.method || "post",
        credentials: options.same_origin ? "same-origin" : undefined,
        headers: headers
      };

      if (options.method !== "head") {
        fetchOpts.body = body;
      }

      var query = ""; // Rails, at least, can read params from DELETE request URLs, but
      // cannot read post data. So append any params to the URL

      if (options.method === "delete" && Object.keys(interpolated.remainingParams).length > 0) {
        query = "?".concat(querystring.stringify(interpolated.remainingParams));
      }

      var url = "".concat(host, "/").concat(thisRoute).concat(query);
      return localFetch(url, fetchOpts).then(iNaturalistAPI.thenText).then(iNaturalistAPI.thenJson);
    } // a variant of post using the http PUT method

  }, {
    key: "head",
    value: function head(route, params) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var options = _objectSpread(_objectSpread({}, opts), {}, {
        method: "head"
      });

      return iNaturalistAPI.post(route, params, options);
    } // a variant of post using the http PUT method

  }, {
    key: "put",
    value: function put(route, params) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var options = _objectSpread(_objectSpread({}, opts), {}, {
        method: "put"
      });

      return iNaturalistAPI.post(route, params, options);
    } // a variant of post using the http DELETE method

  }, {
    key: "delete",
    value: function _delete(route, params) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var options = _objectSpread(_objectSpread({}, opts), {}, {
        method: "delete"
      });

      return iNaturalistAPI.post(route, params, options);
    }
  }, {
    key: "upload",
    value: function upload(route, params) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      // uploads can be POST or PUT
      var method = opts.method || "post";

      var options = _objectSpread(_objectSpread({}, opts || {}), {}, {
        method: method,
        upload: true
      });

      return iNaturalistAPI.post(route, params, options);
    }
  }, {
    key: "methodHostPrefix",
    value: function methodHostPrefix(opts) {
      if (opts.same_origin) {
        return "";
      }

      if (opts.apiURL) {
        return opts.apiURL;
      }

      return "".concat(iNaturalistAPI.writeApiURL);
    }
  }, {
    key: "csrf",
    value: function csrf() {
      var param = util.browserMetaTagContent("csrf-param");
      var token = util.browserMetaTagContent("csrf-token");
      return param && token ? {
        param: param,
        token: token
      } : null;
    }
  }, {
    key: "apiToken",
    value: function apiToken() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var token = util.browserMetaTagContent("inaturalist-api-token");

      if (token) {
        return token;
      }

      return opts.api_token;
    }
  }, {
    key: "thenText",
    value: function thenText(response) {
      // return non-successes before parsing text, so the client can parse it
      if (response.status < 200 || response.status >= 300) {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      } // not using response.json( ) as there may be no JSON


      return response.text().then(function (text) {
        return response.status >= 200 && response.status < 300 ? text : null;
      });
    }
  }, {
    key: "thenJson",
    value: function thenJson(text) {
      if (text) {
        return JSON.parse(text);
      }

      return text;
    }
  }, {
    key: "thenWrap",
    value: function thenWrap(response) {
      if (Array.isArray(response)) {
        return response;
      }

      return new INaturalistAPIResponse(response);
    } // flatten nested objects like arrays into "arr[0]" and objects into "obj[prop]"

  }, {
    key: "flattenMultipartParams",
    value: function flattenMultipartParams(params, keyPrefix) {
      if (params === null) {
        return params;
      }

      if (_typeof(params) === "object") {
        if (!params.constructor || params.constructor.name === "Object") {
          if (params.type === "custom") {
            return _defineProperty({}, keyPrefix, params);
          }

          var flattenedParams = {};
          Object.keys(params).forEach(function (k) {
            var newPrefix = keyPrefix ? "".concat(keyPrefix, "[").concat(k, "]") : k;
            Object.assign(flattenedParams, iNaturalistAPI.flattenMultipartParams(params[k], newPrefix));
          });
          return flattenedParams;
        }

        if (params.constructor.name === "Array") {
          var _flattenedParams = {};
          params.forEach(function (value, index) {
            var newPrefix = "".concat(keyPrefix, "[").concat(index, "]");
            Object.assign(_flattenedParams, iNaturalistAPI.flattenMultipartParams(params[index], newPrefix));
          });
          return _flattenedParams;
        }
      }

      return _defineProperty({}, keyPrefix, params);
    }
  }, {
    key: "setConfig",
    value: function setConfig() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var legacyEnv = iNaturalistAPI.legacyEnvConfig(config);
      var envURLConfig = legacyEnv.apiURL || util.browserMetaTagContent("config:inaturalist_api_url") || util.nodeENV("API_URL");
      var envWriteURLConfig = legacyEnv.writeApiURL || util.browserMetaTagContent("config:inaturalist_write_api_url") || util.nodeENV("WRITE_API_URL");
      iNaturalistAPI.apiURL = config.apiURL || envURLConfig || "https://api.inaturalist.org/v1";
      iNaturalistAPI.writeApiURL = config.writeApiURL || envWriteURLConfig || envURLConfig || config.apiURL || "https://www.inaturalist.org";
    }
  }, {
    key: "legacyEnvConfig",
    value: function legacyEnvConfig(config) {
      var oldVariables = {
        envHostConfig: config.apiHost || util.browserMetaTagContent("config:inaturalist_api_host") || util.nodeENV("API_HOST"),
        envWriteHostConfig: config.writeApiHost || util.browserMetaTagContent("config:inaturalist_write_api_host") || util.nodeENV("WRITE_API_HOST"),
        envApiHostSSL: config.apiHostSSL || (util.browserMetaTagContent("config:inaturalist_api_host_ssl") || util.nodeENV("API_HOST_SSL")) === "true",
        envWriteHostSSL: config.writeApiHostSSL || (util.browserMetaTagContent("config:inaturalist_write_host_ssl") || util.nodeENV("WRITE_HOST_SSL")) === "true"
      };
      var updatedVariables = {};

      if (oldVariables.envHostConfig) {
        updatedVariables.apiURL = (oldVariables.envApiHostSSL ? "https://" : "http://") + oldVariables.envHostConfig;
      }

      if (oldVariables.envWriteHostConfig) {
        updatedVariables.writeApiURL = (oldVariables.envWriteHostSSL ? "https://" : "http://") + oldVariables.envWriteHostConfig;
      }

      return updatedVariables;
    }
  }, {
    key: "interpolateRouteParams",
    value: function interpolateRouteParams(route, params) {
      var err;
      var interpolatedRoute = route;

      var remainingParams = _objectSpread({}, params);

      var interpolatedParams = {};
      var matches = route.match(/(:[a-z]+)(?=\/|$)/g);

      if (matches) {
        matches.forEach(function (sym) {
          if (err) {
            return;
          }

          var v = sym.substring(1);

          if (remainingParams[v]) {
            interpolatedRoute = interpolatedRoute.replace(sym, encodeURI(remainingParams[v]));
            interpolatedParams[sym] = encodeURI(remainingParams[v]);
            delete remainingParams[v];
          } else if (sym === ":id" && remainingParams.uuid) {
            // If a UUID was provided but not an ID, sub that in instead
            interpolatedRoute = interpolatedRoute.replace(sym, encodeURI(remainingParams.uuid));
            interpolatedParams[sym] = encodeURI(remainingParams.uuid);
            delete remainingParams.uuid;
          } else {
            err = new Promise(function (res, rej) {
              rej(new Error("".concat(v, " required")));
            });
          }
        });
      }

      return {
        route: interpolatedRoute,
        interpolatedParams: interpolatedParams,
        remainingParams: remainingParams,
        err: err
      };
    }
  }, {
    key: "optionsUseAuth",
    value: function optionsUseAuth(options) {
      return _objectSpread(_objectSpread({}, options), {}, {
        useAuth: true
      });
    }
  }]);

  return iNaturalistAPI;
}();

iNaturalistAPI.setConfig();
module.exports = iNaturalistAPI;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var global = typeof self !== 'undefined' ? self : this;

var __self__ = function () {
  function F() {
    this.fetch = false;
    this.DOMException = global.DOMException;
  }

  F.prototype = global;
  return new F();
}();

(function (self) {
  var irrelevant = function (exports) {
    var support = {
      searchParams: 'URLSearchParams' in self,
      iterable: 'Symbol' in self && 'iterator' in Symbol,
      blob: 'FileReader' in self && 'Blob' in self && function () {
        try {
          new Blob();
          return true;
        } catch (e) {
          return false;
        }
      }(),
      formData: 'FormData' in self,
      arrayBuffer: 'ArrayBuffer' in self
    };

    function isDataView(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj);
    }

    if (support.arrayBuffer) {
      var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

      var isArrayBufferView = ArrayBuffer.isView || function (obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
      };
    }

    function normalizeName(name) {
      if (typeof name !== 'string') {
        name = String(name);
      }

      if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
        throw new TypeError('Invalid character in header field name');
      }

      return name.toLowerCase();
    }

    function normalizeValue(value) {
      if (typeof value !== 'string') {
        value = String(value);
      }

      return value;
    } // Build a destructive iterator for the value list


    function iteratorFor(items) {
      var iterator = {
        next: function next() {
          var value = items.shift();
          return {
            done: value === undefined,
            value: value
          };
        }
      };

      if (support.iterable) {
        iterator[Symbol.iterator] = function () {
          return iterator;
        };
      }

      return iterator;
    }

    function Headers(headers) {
      this.map = {};

      if (headers instanceof Headers) {
        headers.forEach(function (value, name) {
          this.append(name, value);
        }, this);
      } else if (Array.isArray(headers)) {
        headers.forEach(function (header) {
          this.append(header[0], header[1]);
        }, this);
      } else if (headers) {
        Object.getOwnPropertyNames(headers).forEach(function (name) {
          this.append(name, headers[name]);
        }, this);
      }
    }

    Headers.prototype.append = function (name, value) {
      name = normalizeName(name);
      value = normalizeValue(value);
      var oldValue = this.map[name];
      this.map[name] = oldValue ? oldValue + ', ' + value : value;
    };

    Headers.prototype['delete'] = function (name) {
      delete this.map[normalizeName(name)];
    };

    Headers.prototype.get = function (name) {
      name = normalizeName(name);
      return this.has(name) ? this.map[name] : null;
    };

    Headers.prototype.has = function (name) {
      return this.map.hasOwnProperty(normalizeName(name));
    };

    Headers.prototype.set = function (name, value) {
      this.map[normalizeName(name)] = normalizeValue(value);
    };

    Headers.prototype.forEach = function (callback, thisArg) {
      for (var name in this.map) {
        if (this.map.hasOwnProperty(name)) {
          callback.call(thisArg, this.map[name], name, this);
        }
      }
    };

    Headers.prototype.keys = function () {
      var items = [];
      this.forEach(function (value, name) {
        items.push(name);
      });
      return iteratorFor(items);
    };

    Headers.prototype.values = function () {
      var items = [];
      this.forEach(function (value) {
        items.push(value);
      });
      return iteratorFor(items);
    };

    Headers.prototype.entries = function () {
      var items = [];
      this.forEach(function (value, name) {
        items.push([name, value]);
      });
      return iteratorFor(items);
    };

    if (support.iterable) {
      Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
    }

    function consumed(body) {
      if (body.bodyUsed) {
        return Promise.reject(new TypeError('Already read'));
      }

      body.bodyUsed = true;
    }

    function fileReaderReady(reader) {
      return new Promise(function (resolve, reject) {
        reader.onload = function () {
          resolve(reader.result);
        };

        reader.onerror = function () {
          reject(reader.error);
        };
      });
    }

    function readBlobAsArrayBuffer(blob) {
      var reader = new FileReader();
      var promise = fileReaderReady(reader);
      reader.readAsArrayBuffer(blob);
      return promise;
    }

    function readBlobAsText(blob) {
      var reader = new FileReader();
      var promise = fileReaderReady(reader);
      reader.readAsText(blob);
      return promise;
    }

    function readArrayBufferAsText(buf) {
      var view = new Uint8Array(buf);
      var chars = new Array(view.length);

      for (var i = 0; i < view.length; i++) {
        chars[i] = String.fromCharCode(view[i]);
      }

      return chars.join('');
    }

    function bufferClone(buf) {
      if (buf.slice) {
        return buf.slice(0);
      } else {
        var view = new Uint8Array(buf.byteLength);
        view.set(new Uint8Array(buf));
        return view.buffer;
      }
    }

    function Body() {
      this.bodyUsed = false;

      this._initBody = function (body) {
        this._bodyInit = body;

        if (!body) {
          this._bodyText = '';
        } else if (typeof body === 'string') {
          this._bodyText = body;
        } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
          this._bodyBlob = body;
        } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
          this._bodyFormData = body;
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this._bodyText = body.toString();
        } else if (support.arrayBuffer && support.blob && isDataView(body)) {
          this._bodyArrayBuffer = bufferClone(body.buffer); // IE 10-11 can't handle a DataView body.

          this._bodyInit = new Blob([this._bodyArrayBuffer]);
        } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
          this._bodyArrayBuffer = bufferClone(body);
        } else {
          this._bodyText = body = Object.prototype.toString.call(body);
        }

        if (!this.headers.get('content-type')) {
          if (typeof body === 'string') {
            this.headers.set('content-type', 'text/plain;charset=UTF-8');
          } else if (this._bodyBlob && this._bodyBlob.type) {
            this.headers.set('content-type', this._bodyBlob.type);
          } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
            this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
          }
        }
      };

      if (support.blob) {
        this.blob = function () {
          var rejected = consumed(this);

          if (rejected) {
            return rejected;
          }

          if (this._bodyBlob) {
            return Promise.resolve(this._bodyBlob);
          } else if (this._bodyArrayBuffer) {
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          } else if (this._bodyFormData) {
            throw new Error('could not read FormData body as blob');
          } else {
            return Promise.resolve(new Blob([this._bodyText]));
          }
        };

        this.arrayBuffer = function () {
          if (this._bodyArrayBuffer) {
            return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
          } else {
            return this.blob().then(readBlobAsArrayBuffer);
          }
        };
      }

      this.text = function () {
        var rejected = consumed(this);

        if (rejected) {
          return rejected;
        }

        if (this._bodyBlob) {
          return readBlobAsText(this._bodyBlob);
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as text');
        } else {
          return Promise.resolve(this._bodyText);
        }
      };

      if (support.formData) {
        this.formData = function () {
          return this.text().then(decode);
        };
      }

      this.json = function () {
        return this.text().then(JSON.parse);
      };

      return this;
    } // HTTP methods whose capitalization should be normalized


    var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

    function normalizeMethod(method) {
      var upcased = method.toUpperCase();
      return methods.indexOf(upcased) > -1 ? upcased : method;
    }

    function Request(input, options) {
      options = options || {};
      var body = options.body;

      if (input instanceof Request) {
        if (input.bodyUsed) {
          throw new TypeError('Already read');
        }

        this.url = input.url;
        this.credentials = input.credentials;

        if (!options.headers) {
          this.headers = new Headers(input.headers);
        }

        this.method = input.method;
        this.mode = input.mode;
        this.signal = input.signal;

        if (!body && input._bodyInit != null) {
          body = input._bodyInit;
          input.bodyUsed = true;
        }
      } else {
        this.url = String(input);
      }

      this.credentials = options.credentials || this.credentials || 'same-origin';

      if (options.headers || !this.headers) {
        this.headers = new Headers(options.headers);
      }

      this.method = normalizeMethod(options.method || this.method || 'GET');
      this.mode = options.mode || this.mode || null;
      this.signal = options.signal || this.signal;
      this.referrer = null;

      if ((this.method === 'GET' || this.method === 'HEAD') && body) {
        throw new TypeError('Body not allowed for GET or HEAD requests');
      }

      this._initBody(body);
    }

    Request.prototype.clone = function () {
      return new Request(this, {
        body: this._bodyInit
      });
    };

    function decode(body) {
      var form = new FormData();
      body.trim().split('&').forEach(function (bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
      return form;
    }

    function parseHeaders(rawHeaders) {
      var headers = new Headers(); // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
      // https://tools.ietf.org/html/rfc7230#section-3.2

      var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
      preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
        var parts = line.split(':');
        var key = parts.shift().trim();

        if (key) {
          var value = parts.join(':').trim();
          headers.append(key, value);
        }
      });
      return headers;
    }

    Body.call(Request.prototype);

    function Response(bodyInit, options) {
      if (!options) {
        options = {};
      }

      this.type = 'default';
      this.status = options.status === undefined ? 200 : options.status;
      this.ok = this.status >= 200 && this.status < 300;
      this.statusText = 'statusText' in options ? options.statusText : 'OK';
      this.headers = new Headers(options.headers);
      this.url = options.url || '';

      this._initBody(bodyInit);
    }

    Body.call(Response.prototype);

    Response.prototype.clone = function () {
      return new Response(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new Headers(this.headers),
        url: this.url
      });
    };

    Response.error = function () {
      var response = new Response(null, {
        status: 0,
        statusText: ''
      });
      response.type = 'error';
      return response;
    };

    var redirectStatuses = [301, 302, 303, 307, 308];

    Response.redirect = function (url, status) {
      if (redirectStatuses.indexOf(status) === -1) {
        throw new RangeError('Invalid status code');
      }

      return new Response(null, {
        status: status,
        headers: {
          location: url
        }
      });
    };

    exports.DOMException = self.DOMException;

    try {
      new exports.DOMException();
    } catch (err) {
      exports.DOMException = function (message, name) {
        this.message = message;
        this.name = name;
        var error = Error(message);
        this.stack = error.stack;
      };

      exports.DOMException.prototype = Object.create(Error.prototype);
      exports.DOMException.prototype.constructor = exports.DOMException;
    }

    function fetch(input, init) {
      return new Promise(function (resolve, reject) {
        var request = new Request(input, init);

        if (request.signal && request.signal.aborted) {
          return reject(new exports.DOMException('Aborted', 'AbortError'));
        }

        var xhr = new XMLHttpRequest();

        function abortXhr() {
          xhr.abort();
        }

        xhr.onload = function () {
          var options = {
            status: xhr.status,
            statusText: xhr.statusText,
            headers: parseHeaders(xhr.getAllResponseHeaders() || '')
          };
          options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
          var body = 'response' in xhr ? xhr.response : xhr.responseText;
          resolve(new Response(body, options));
        };

        xhr.onerror = function () {
          reject(new TypeError('Network request failed'));
        };

        xhr.ontimeout = function () {
          reject(new TypeError('Network request failed'));
        };

        xhr.onabort = function () {
          reject(new exports.DOMException('Aborted', 'AbortError'));
        };

        xhr.open(request.method, request.url, true);

        if (request.credentials === 'include') {
          xhr.withCredentials = true;
        } else if (request.credentials === 'omit') {
          xhr.withCredentials = false;
        }

        if ('responseType' in xhr && support.blob) {
          xhr.responseType = 'blob';
        }

        request.headers.forEach(function (value, name) {
          xhr.setRequestHeader(name, value);
        });

        if (request.signal) {
          request.signal.addEventListener('abort', abortXhr);

          xhr.onreadystatechange = function () {
            // DONE (success or failure)
            if (xhr.readyState === 4) {
              request.signal.removeEventListener('abort', abortXhr);
            }
          };
        }

        xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
      });
    }

    fetch.polyfill = true;

    if (!self.fetch) {
      self.fetch = fetch;
      self.Headers = Headers;
      self.Request = Request;
      self.Response = Response;
    }

    exports.Headers = Headers;
    exports.Request = Request;
    exports.Response = Response;
    exports.fetch = fetch;
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    return exports;
  }({});
})(__self__);

__self__.fetch.ponyfill = true; // Remove "polyfill" property added by whatwg-fetch

delete __self__.fetch.polyfill; // Choose between native implementation (global) or custom implementation (__self__)
// var ctx = global.fetch ? global : __self__;

var ctx = __self__; // this line disable service worker support temporarily

exports = ctx.fetch; // To enable: import fetch from 'cross-fetch'

exports["default"] = ctx.fetch; // For TypeScript consumers without esModuleInterop.

exports.fetch = ctx.fetch; // To enable: import {fetch} from 'cross-fetch'

exports.Headers = ctx.Headers;
exports.Request = ctx.Request;
exports.Response = ctx.Response;
module.exports = exports;

/***/ }),
/* 3 */
/***/ (function(module) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/* eslint-env browser */
module.exports = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' ? self.FormData : window.FormData;

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(5);
exports.encode = exports.stringify = __webpack_require__(6);

/***/ }),
/* 5 */
/***/ (function(module) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
 // If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function (qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);
  var maxKeys = 1000;

  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length; // maxKeys <= 0 means that we should not limit keys count

  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr,
        vstr,
        k,
        v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

/***/ }),
/* 6 */
/***/ (function(module) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var stringifyPrimitive = function stringifyPrimitive(v) {
  switch (_typeof(v)) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function (obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';

  if (obj === null) {
    obj = undefined;
  }

  if (_typeof(obj) === 'object') {
    return map(objectKeys(obj), function (k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;

      if (isArray(obj[k])) {
        return map(obj[k], function (v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);
  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map(xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];

  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }

  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }

  return res;
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// Uses CommonJS, AMD or browser globals to create a module.
// Based on: https://github.com/umdjs/umd/blob/master/templates/returnExports.js
(function (root, factory) {
  if (( false ? 0 : _typeof(exports)) === 'object' && "object" !== 'undefined') {
    // CommonJS
    module.exports = factory();
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(typeof self !== 'undefined' ? self : this, function () {
  var rison = {}; //////////////////////////////////////////////////
  //
  //  the stringifier is based on
  //    http://json.org/json.js as of 2006-04-28 from json.org
  //  the parser is based on
  //    http://osteele.com/sources/openlaszlo/json
  //

  /**
   *  rules for an uri encoder that is more tolerant than encodeURIComponent
   *
   *  encodeURIComponent passes  ~!*()-_.'
   *
   *  we also allow              ,:@$/
   *
   */

  rison.uri_ok = {
    // ok in url paths and in form query args
    '~': true,
    '!': true,
    '*': true,
    '(': true,
    ')': true,
    '-': true,
    '_': true,
    '.': true,
    ',': true,
    ':': true,
    '@': true,
    '$': true,
    "'": true,
    '/': true
  };
  /*
   * we divide the uri-safe glyphs into three sets
   *   <rison> - used by rison                         ' ! : ( ) ,
   *   <reserved> - not common in strings, reserved    * @ $ & ; =
   *
   * we define <identifier> as anything that's not forbidden
   */

  /**
   * punctuation characters that are legal inside ids.
   */
  // this var isn't actually used
  //rison.idchar_punctuation = "_-./~";

  (function () {
    var l = [];

    for (var hi = 0; hi < 16; hi++) {
      for (var lo = 0; lo < 16; lo++) {
        if (hi + lo === 0) continue;
        var c = String.fromCharCode(hi * 16 + lo);
        if (!/\w|[-_./~]/.test(c)) l.push("\\u00" + hi.toString(16) + lo.toString(16));
      }
    }
    /**
     * characters that are illegal inside ids.
     * <rison> and <reserved> classes are illegal in ids.
     *
     */


    rison.not_idchar = l.join(''); //idcrx = new RegExp('[' + rison.not_idchar + ']');
    //console.log('NOT', (idcrx.test(' ')) );
  })(); //rison.not_idchar  = " \t\r\n\"<>[]{}'!=:(),*@$;&";


  rison.not_idchar = " '!:(),*@$";
  /**
   * characters that are illegal as the start of an id
   * this is so ids can't look like numbers.
   */

  rison.not_idstart = '-0123456789';

  (function () {
    var idrx = '[^' + rison.not_idstart + rison.not_idchar + '][^' + rison.not_idchar + ']*';
    rison.id_ok = new RegExp('^' + idrx + '$'); // regexp to find the end of an id when parsing
    // g flag on the regexp is necessary for iterative regexp.exec()

    rison.next_id = new RegExp(idrx, 'g');
  })();
  /**
   * this is like encodeURIComponent() but quotes fewer characters.
   *
   * @see rison.uri_ok
   *
   * encodeURIComponent passes   ~!*()-_.'
   * rison.quote also passes   ,:@$/
   *   and quotes " " as "+" instead of "%20"
   */


  rison.quote = function (x) {
    if (/^[-A-Za-z0-9~!*()_.',:@$/]*$/.test(x)) return x;
    return encodeURIComponent(x).replace(/%2C/g, ',').replace(/%3A/g, ':').replace(/%40/g, '@').replace(/%24/g, '$').replace(/%2F/g, '/').replace(/%20/g, '+');
  };
  /**
   * this is like decodeURIComponent() but also replaces "+" with " "
   */


  rison.unquote = function (s) {
    // eslint-disable-next-line
    return decodeURIComponent(s.replace(/\+/g, '%20'));
  }; //
  //  based on json.js 2006-04-28 from json.org
  //  license: http://www.json.org/license.html
  //
  //  hacked by nix for use in uris.
  //


  (function () {
    var sq = {
      // url-ok but quoted in strings
      "'": true,
      '!': true
    },
        enc = function enc(v) {
      if (v && typeof v.toJSON === 'function') v = v.toJSON();

      var fn = s[_typeof(v)];

      if (fn) return fn(v);
    },
        s = {
      array: function array(x) {
        var a = ['!('],
            b,
            i,
            l = x.length,
            v;

        for (i = 0; i < l; i += 1) {
          v = enc(x[i]);

          if (typeof v == 'string') {
            if (b) {
              a[a.length] = ',';
            }

            a[a.length] = v;
            b = true;
          }
        }

        a[a.length] = ')';
        return a.join('');
      },
      'boolean': function boolean(x) {
        if (x) return '!t';
        return '!f';
      },
      'null': function _null() {
        return '!n';
      },
      number: function number(x) {
        if (!isFinite(x)) return '!n'; // strip '+' out of exponent, '-' is ok though

        return String(x).replace(/\+/, '');
      },
      object: function object(x) {
        if (x) {
          if (x instanceof Array) {
            return s.array(x);
          } // WILL: will this work on non-Firefox browsers?


          if (_typeof(x.__prototype__) === 'object' && typeof x.__prototype__.encode_rison !== 'undefined') return x.encode_rison();
          var a = ['('],
              b,
              i,
              v,
              k,
              ki,
              ks = [];

          for (i in x) {
            ks[ks.length] = i;
          }

          ks.sort();

          for (ki = 0; ki < ks.length; ki++) {
            i = ks[ki];
            v = enc(x[i]);

            if (typeof v == 'string') {
              if (b) {
                a[a.length] = ',';
              }

              k = !isFinite(i) || isNaN(parseInt(i)) ? s.string(i) : s.number(i);
              a.push(k, ':', v);
              b = true;
            }
          }

          a[a.length] = ')';
          return a.join('');
        }

        return '!n';
      },
      string: function string(x) {
        if (x === '') return "''";
        if (rison.id_ok.test(x)) return x;
        x = x.replace(/(['!])/g, function (a, b) {
          if (sq[b]) return '!' + b;
          return b;
        });
        return "'" + x + "'";
      },
      undefined: function undefined() {
        // ignore undefined just like JSON
        return;
      }
    };
    /**
     * rison-encode a javascript structure
     *
     *  implemementation based on Douglas Crockford's json.js:
     *    http://json.org/json.js as of 2006-04-28 from json.org
     *
     */


    rison.encode = function (v) {
      return enc(v);
    };
    /**
     * rison-encode a javascript object without surrounding parens
     *
     */


    rison.encode_object = function (v) {
      if (_typeof(v) != 'object' || v === null || v instanceof Array) throw new Error('rison.encode_object expects an object argument');

      var r = s[_typeof(v)](v);

      return r.substring(1, r.length - 1);
    };
    /**
     * rison-encode a javascript array without surrounding parens
     *
     */


    rison.encode_array = function (v) {
      if (!(v instanceof Array)) throw new Error('rison.encode_array expects an array argument');

      var r = s[_typeof(v)](v);

      return r.substring(2, r.length - 1);
    };
    /**
     * rison-encode and uri-encode a javascript structure
     *
     */


    rison.encode_uri = function (v) {
      return rison.quote(s[_typeof(v)](v));
    };
    /**
     * uri-decode (reversing encode_uri's space -> '+' mapping) then rison-decode a string
     * Reverses encode_uri
     *
     */


    rison.decode_uri = function (s) {
      return rison.decode(rison.unquote(s));
    };
  })(); //
  // based on openlaszlo-json and hacked by nix for use in uris.
  //
  // Author: Oliver Steele
  // Copyright: Copyright 2006 Oliver Steele.  All rights reserved.
  // Homepage: http://osteele.com/sources/openlaszlo/json
  // License: MIT License.
  // Version: 1.0

  /**
   * parse a rison string into a javascript structure.
   *
   * this is the simplest decoder entry point.
   *
   *  based on Oliver Steele's OpenLaszlo-JSON
   *     http://osteele.com/sources/openlaszlo/json
   */


  rison.decode = function (r) {
    var errcb = function errcb(e) {
      throw Error('rison decoder error: ' + e);
    }; // validate input is a string


    if (typeof r !== 'string') return errcb("decode input must be a string");
    var p = new rison.parser(errcb);
    return p.parse(r);
  };
  /**
   * parse an o-rison string into a javascript structure.
   *
   * this simply adds parentheses around the string before parsing.
   */


  rison.decode_object = function (r) {
    return rison.decode('(' + r + ')');
  };
  /**
   * parse an a-rison string into a javascript structure.
   *
   * this simply adds array markup around the string before parsing.
   */


  rison.decode_array = function (r) {
    return rison.decode('!(' + r + ')');
  };
  /**
   * construct a new parser object for reuse.
   *
   * @constructor
   * @class A Rison parser class.  You should probably
   *        use rison.decode instead.
   * @see rison.decode
   */


  rison.parser = function (errcb) {
    this.errorHandler = errcb;
  };
  /**
   * a string containing acceptable whitespace characters.
   * by default the rison decoder tolerates no whitespace.
   * to accept whitespace set rison.parser.WHITESPACE = " \t\n\r\f";
   */


  rison.parser.WHITESPACE = ''; // expose this as-is?

  rison.parser.prototype.setOptions = function (options) {
    if (options['errorHandler']) this.errorHandler = options.errorHandler;
  };
  /**
   * parse a rison string into a javascript structure.
   */


  rison.parser.prototype.parse = function (str) {
    this.string = str;
    this.index = 0;
    this.message = null;
    var value = this.readValue();
    if (!this.message && this.next()) value = this.error("unable to parse string as rison: '" + rison.encode(str) + "'");
    if (this.message && this.errorHandler) this.errorHandler(this.message, this.index);
    return value;
  };

  rison.parser.prototype.error = function (message) {
    if (typeof console !== 'undefined') console.log('rison parser error: ', message); // eslint-disable-line no-console

    this.message = message;
    return undefined;
  };

  rison.parser.prototype.readValue = function () {
    var c = this.next();
    var fn = c && this.table[c];
    if (fn) return fn.apply(this); // fell through table, parse as an id

    var s = this.string;
    var i = this.index - 1; // Regexp.lastIndex may not work right in IE before 5.5?
    // g flag on the regexp is also necessary

    rison.next_id.lastIndex = i;
    var m = rison.next_id.exec(s); // console.log('matched id', i, r.lastIndex);

    if (m.length > 0) {
      var id = m[0];
      this.index = i + id.length;
      return id; // a string
    }

    if (c) return this.error("invalid character: '" + c + "'");
    return this.error('empty expression');
  };

  rison.parser.parse_array = function (parser) {
    var ar = [];
    var c;

    while ((c = parser.next()) !== ')') {
      if (!c) return parser.error("unmatched '!('");

      if (ar.length) {
        if (c !== ',') parser.error("missing ','");
      } else if (c === ',') {
        return parser.error("extra ','");
      } else --parser.index;

      var n = parser.readValue();
      if (typeof n == 'undefined') return undefined;
      ar.push(n);
    }

    return ar;
  };

  rison.parser.bangs = {
    t: true,
    f: false,
    n: null,
    '(': rison.parser.parse_array
  };
  rison.parser.prototype.table = {
    '!': function _() {
      var s = this.string;
      var c = s.charAt(this.index++);
      if (!c) return this.error('"!" at end of input');
      var x = rison.parser.bangs[c];

      if (typeof x == 'function') {
        return x.call(null, this);
      } else if (typeof x == 'undefined') {
        return this.error('unknown literal: "!' + c + '"');
      }

      return x;
    },
    '(': function _() {
      var o = {};
      var c;
      var count = 0;

      while ((c = this.next()) !== ')') {
        if (count) {
          if (c !== ',') this.error("missing ','");
        } else if (c === ',') {
          return this.error("extra ','");
        } else --this.index;

        var k = this.readValue();
        if (typeof k === 'undefined') return undefined;
        if (this.next() !== ':') return this.error("missing ':'");
        var v = this.readValue();
        if (typeof v === 'undefined') return undefined;
        o[k] = v;
        count++;
      }

      return o;
    },
    "'": function _() {
      var s = this.string;
      var i = this.index;
      var start = i;
      var segments = [];
      var c;

      while ((c = s.charAt(i++)) !== "'") {
        //if (i == s.length) return this.error('unmatched "\'"');
        if (!c) return this.error('unmatched "\'"');

        if (c === '!') {
          if (start < i - 1) segments.push(s.slice(start, i - 1));
          c = s.charAt(i++);

          if ("!'".indexOf(c) >= 0) {
            segments.push(c);
          } else {
            return this.error('invalid string escape: "!' + c + '"');
          }

          start = i;
        }
      }

      if (start < i - 1) segments.push(s.slice(start, i - 1));
      this.index = i;
      return segments.length === 1 ? segments[0] : segments.join('');
    },
    // Also any digit.  The statement that follows this table
    // definition fills in the digits.
    '-': function _() {
      var s = this.string;
      var i = this.index;
      var start = i - 1;
      var state = 'int';
      var permittedSigns = '-';
      var transitions = {
        'int+.': 'frac',
        'int+e': 'exp',
        'frac+e': 'exp'
      };

      do {
        var c = s.charAt(i++);
        if (!c) break;
        if ('0' <= c && c <= '9') continue;

        if (permittedSigns.indexOf(c) >= 0) {
          permittedSigns = '';
          continue;
        }

        state = transitions[state + '+' + c.toLowerCase()];
        if (state === 'exp') permittedSigns = '-';
      } while (state);

      this.index = --i;
      s = s.slice(start, i);
      if (s === '-') return this.error('invalid number');
      return Number(s);
    }
  }; // copy table['-'] to each of table[i] | i <- '0'..'9':

  (function (table) {
    for (var i = 0; i <= 9; i++) {
      table[String(i)] = table['-'];
    }
  })(rison.parser.prototype.table); // return the next non-whitespace character, or undefined


  rison.parser.prototype.next = function () {
    var c;
    var s = this.string;
    var i = this.index;

    do {
      if (i === s.length) return undefined;
      c = s.charAt(i++);
    } while (rison.parser.WHITESPACE.indexOf(c) >= 0);

    this.index = i;
    return c;
  };

  return rison; // End of UMD module wrapper
});

/***/ }),
/* 8 */
/***/ (function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var util = /*#__PURE__*/function () {
  function util() {
    _classCallCheck(this, util);
  }

  _createClass(util, null, [{
    key: "isBrowser",
    value: function isBrowser() {
      return typeof document !== "undefined" && typeof document.querySelector !== "undefined";
    }
  }, {
    key: "isNode",
    value: function isNode() {
      return typeof process !== "undefined" && typeof process.env !== "undefined";
    }
  }, {
    key: "browserMetaTagContent",
    value: function browserMetaTagContent(metaTagName) {
      if (util.isBrowser()) {
        var element = document.querySelector("meta[name=\"".concat(metaTagName, "\"]"));
        return element && element.getAttribute("content");
      }

      return null;
    }
  }, {
    key: "nodeENV",
    value: function nodeENV(envVariableName) {
      return util.isNode() ? process.env[envVariableName] : null;
    }
  }]);

  return util;
}();

module.exports = util;

/***/ }),
/* 9 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Model = __webpack_require__(10);

var iNaturalistAPIResponse = /*#__PURE__*/function (_Model) {
  _inherits(iNaturalistAPIResponse, _Model);

  var _super = _createSuper(iNaturalistAPIResponse);

  function iNaturalistAPIResponse() {
    _classCallCheck(this, iNaturalistAPIResponse);

    return _super.apply(this, arguments);
  }

  return _createClass(iNaturalistAPIResponse);
}(Model);

module.exports = iNaturalistAPIResponse;

/***/ }),
/* 10 */
/***/ (function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Model = /*#__PURE__*/function () {
  function Model(attrs) {
    _classCallCheck(this, Model);

    Object.assign(this, attrs);
  }

  _createClass(Model, null, [{
    key: "typifyInstanceResponse",
    value: function typifyInstanceResponse(response, Type) {
      return new Type(response);
    }
  }, {
    key: "typifyArrayResponse",
    value: function typifyArrayResponse(response, Type) {
      var arr = [];
      Object.keys(response).forEach(function (k) {
        arr.push(new Type(response[k]));
      });
      return arr;
    }
  }, {
    key: "typifyResultsResponse",
    value: function typifyResultsResponse(response, Type) {
      if (Type && response.results) {
        response.results = response.results.map(function (r) {
          return new Type(r);
        });
      }

      return response;
    }
  }]);

  return Model;
}();

module.exports = Model;

/***/ }),
/* 11 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var Annotation = __webpack_require__(12);

var annotations = /*#__PURE__*/function () {
  function annotations() {
    _classCallCheck(this, annotations);
  }

  _createClass(annotations, null, [{
    key: "create",
    value: function create(params, options) {
      return iNaturalistAPI.post("annotations", params, options).then(Annotation.typifyInstanceResponse);
    }
  }, {
    key: "delete",
    value: function _delete(params, options) {
      return iNaturalistAPI["delete"]("annotations/:id", params, options);
    }
  }, {
    key: "vote",
    value: function vote(params, options) {
      var endpoint = "votes/vote/annotation/:id";

      if (iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match(/\/v2/)) {
        endpoint = "annotations/:id/vote";
      }

      return iNaturalistAPI.post(endpoint, params, options).then(Annotation.typifyInstanceResponse);
    }
  }, {
    key: "unvote",
    value: function unvote(params, options) {
      var endpoint = "votes/unvote/annotation/:id";

      if (iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match(/\/v2/)) {
        endpoint = "annotations/:id/vote";
      }

      return iNaturalistAPI["delete"](endpoint, params, options);
    }
  }]);

  return annotations;
}();

module.exports = annotations;

/***/ }),
/* 12 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Model = __webpack_require__(10);

var Annotation = /*#__PURE__*/function (_Model) {
  _inherits(Annotation, _Model);

  var _super = _createSuper(Annotation);

  function Annotation() {
    _classCallCheck(this, Annotation);

    return _super.apply(this, arguments);
  }

  _createClass(Annotation, null, [{
    key: "typifyInstanceResponse",
    value: function typifyInstanceResponse(response) {
      return _get(_getPrototypeOf(Annotation), "typifyInstanceResponse", this).call(this, response, Annotation);
    }
  }]);

  return Annotation;
}(Model);

module.exports = Annotation;

/***/ }),
/* 13 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var AuthorizedApplication = __webpack_require__(14);

var authorizedApplications = /*#__PURE__*/function () {
  function authorizedApplications() {
    _classCallCheck(this, authorizedApplications);
  }

  _createClass(authorizedApplications, null, [{
    key: "search",
    value: function search(params) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return iNaturalistAPI.get("authorized_applications", params, _objectSpread(_objectSpread({}, opts), {}, {
        useAuth: true
      })).then(AuthorizedApplication.typifyResultsResponse);
    }
  }, {
    key: "delete",
    value: function _delete(params, options) {
      var endpoint = "oauth/authorized_applications/:id";

      if (iNaturalistAPI.writeApiURL && iNaturalistAPI.writeApiURL.match(/\/v\d/)) {
        endpoint = "authorized_applications/:id";
      }

      return iNaturalistAPI["delete"](endpoint, params, options);
    }
  }]);

  return authorizedApplications;
}();

module.exports = authorizedApplications;

/***/ }),
/* 14 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Model = __webpack_require__(10);

var AuthorizedApplication = /*#__PURE__*/function (_Model) {
  _inherits(AuthorizedApplication, _Model);

  var _super = _createSuper(AuthorizedApplication);

  function AuthorizedApplication() {
    _classCallCheck(this, AuthorizedApplication);

    return _super.apply(this, arguments);
  }

  _createClass(AuthorizedApplication, null, [{
    key: "typifyInstanceResponse",
    value: function typifyInstanceResponse(response) {
      return _get(_getPrototypeOf(AuthorizedApplication), "typifyInstanceResponse", this).call(this, response, AuthorizedApplication);
    }
  }]);

  return AuthorizedApplication;
}(Model);

module.exports = AuthorizedApplication;

/***/ }),
/* 15 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var Comment = __webpack_require__(16);

var comments = /*#__PURE__*/function () {
  function comments() {
    _classCallCheck(this, comments);
  }

  _createClass(comments, null, [{
    key: "create",
    value: function create(params, options) {
      return iNaturalistAPI.post("comments", params, options).then(Comment.typifyInstanceResponse);
    }
  }, {
    key: "update",
    value: function update(params, options) {
      return iNaturalistAPI.put("comments/:id", params, options).then(Comment.typifyInstanceResponse);
    }
  }, {
    key: "delete",
    value: function _delete(params, options) {
      return iNaturalistAPI["delete"]("comments/:id", params, options);
    }
  }]);

  return comments;
}();

module.exports = comments;

/***/ }),
/* 16 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Model = __webpack_require__(10);

var Comment = /*#__PURE__*/function (_Model) {
  _inherits(Comment, _Model);

  var _super = _createSuper(Comment);

  function Comment() {
    _classCallCheck(this, Comment);

    return _super.apply(this, arguments);
  }

  _createClass(Comment, null, [{
    key: "typifyInstanceResponse",
    value: function typifyInstanceResponse(response) {
      return _get(_getPrototypeOf(Comment), "typifyInstanceResponse", this).call(this, response, Comment);
    }
  }]);

  return Comment;
}(Model);

module.exports = Comment;

/***/ }),
/* 17 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var Taxon = __webpack_require__(18);

var computervision = /*#__PURE__*/function () {
  function computervision() {
    _classCallCheck(this, computervision);
  }

  _createClass(computervision, null, [{
    key: "score_image",
    value: function score_image(params) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      // eslint-disable-line camelcase
      var options = _objectSpread({}, opts);

      options.useAuth = true;
      options.apiURL = iNaturalistAPI.apiURL; // force the host to be the Node API

      return iNaturalistAPI.upload("computervision/score_image", params, options).then(function (response) {
        response.results = response.results.map(function (r) {
          return Object.assign({}, r, {
            taxon: new Taxon(r.taxon)
          });
        });

        if (response.common_ancestor) {
          response.common_ancestor.taxon = new Taxon(response.common_ancestor.taxon);
        }

        return response;
      });
    }
  }, {
    key: "score_observation",
    value: function score_observation(params) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // eslint-disable-line camelcase
      var options = Object.assign({}, opts);
      options.useAuth = true;
      return iNaturalistAPI.get("computervision/score_observation/:id", params, options).then(function (response) {
        response.results = response.results.map(function (r) {
          return Object.assign({}, r, {
            taxon: new Taxon(r.taxon)
          });
        });

        if (response.common_ancestor) {
          response.common_ancestor.taxon = new Taxon(response.common_ancestor.taxon);
        }

        return response;
      });
    }
  }]);

  return computervision;
}();

module.exports = computervision;

/***/ }),
/* 18 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Model = __webpack_require__(10);

var Photo = __webpack_require__(19);

var User = __webpack_require__(20);

var ConservationStatus = __webpack_require__(21);

var Taxon = /*#__PURE__*/function (_Model) {
  _inherits(Taxon, _Model);

  var _super = _createSuper(Taxon);

  function Taxon(attrs) {
    var _this;

    _classCallCheck(this, Taxon);

    _this = _super.call(this, attrs);

    if (_this.default_photo && _this.default_photo !== undefined) {
      _this.defaultPhoto = new Photo(_this.default_photo);
    }

    if (_this.taxon_photos && _this.taxon_photos !== undefined) {
      _this.taxonPhotos = _this.taxon_photos.map(function (tp) {
        return {
          taxon: new Taxon(tp.taxon),
          photo: new Photo(tp.photo)
        };
      });
    }

    if (_this.conservation_status && _this.conservation_status !== undefined) {
      _this.conservationStatus = new ConservationStatus(_this.conservation_status);
    }

    if (_this.conservation_statuses && _this.conservation_statuses !== undefined) {
      _this.conservationStatuses = _this.conservation_statuses.map(function (cs) {
        return new ConservationStatus(cs);
      });
    }

    if (_this.ancestors && _this.ancestors !== undefined) {
      _this.ancestorTaxa = _this.ancestors.map(function (a) {
        return new Taxon(a);
      });
    }

    if (_this.children && _this.children !== undefined) {
      _this.childTaxa = _this.children.map(function (a) {
        return new Taxon(a);
      });
    }

    if (_this.taxon_curators && _this.taxon_curators !== undefined) {
      _this.taxonCurators = _this.taxon_curators.map(function (tc) {
        return {
          user: new User(tc.user)
        };
      });
    }

    return _this;
  }

  _createClass(Taxon, [{
    key: "iconicTaxonName",
    value: function iconicTaxonName() {
      if (this.iconic_taxon_name && this.iconic_taxon_name.length > 0) {
        return this.iconic_taxon_name;
      }

      return "Unknown";
    }
  }, {
    key: "photoTag",
    value: function photoTag() {
      if (this.default_photo) {
        return "<img src='".concat(this.default_photo.square_url, "'/>");
      }

      return "<i class='icon icon-iconic-".concat(this.iconicTaxonName().toLowerCase(), "'/>");
    }
  }], [{
    key: "typifyResultsResponse",
    value: function typifyResultsResponse(response) {
      return _get(_getPrototypeOf(Taxon), "typifyResultsResponse", this).call(this, response, Taxon);
    }
  }]);

  return Taxon;
}(Model);

module.exports = Taxon;

/***/ }),
/* 19 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Model = __webpack_require__(10);

var Photo = /*#__PURE__*/function (_Model) {
  _inherits(Photo, _Model);

  var _super = _createSuper(Photo);

  function Photo() {
    _classCallCheck(this, Photo);

    return _super.apply(this, arguments);
  }

  _createClass(Photo, [{
    key: "photoUrl",
    value: function photoUrl() {
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "square";
      this.cachedPhotos = this.cachedPhotos || {};

      if (this.cachedPhotos[size]) {
        return this.cachedPhotos[size];
      }

      if (this["".concat(size, "_url")]) {
        return this["".concat(size, "_url")];
      }

      if (this.preview) {
        this.cachedPhotos[size] = this.preview;
      } else if (this.url) {
        this.cachedPhotos[size] = this.url.replace("square", size);
      } else if (this.processing_url) {
        this.cachedPhotos[size] = this.processing_url.replace("large", size);
      } else {
        return null;
      }

      return this.cachedPhotos[size];
    }
  }, {
    key: "flaggedAsCopyrighted",
    value: function flaggedAsCopyrighted() {
      var flagged = false;
      this.flags.forEach(function (flag) {
        flagged = flagged || !flag.resolved && flag.flag === "copyright infringement";
      });
      return flagged;
    }
  }, {
    key: "dimensions",
    value: function dimensions(size) {
      var longEdges = {
        square: 75,
        thumb: 100,
        small: 240,
        medium: 500,
        large: 1024,
        original: 2048
      };

      if (!longEdges[size] || size === "original" || !this.original_dimensions) {
        return this.original_dimensions;
      }

      var w = this.original_dimensions.width;
      var h = this.original_dimensions.height;

      if (Math.max(w, h) < longEdges[size]) {
        return null;
      }

      if (w < h) {
        return {
          width: Math.round(longEdges[size] / this.original_dimensions.height * this.original_dimensions.width),
          height: longEdges[size]
        };
      }

      return {
        width: longEdges[size],
        height: Math.round(longEdges[size] / this.original_dimensions.width * this.original_dimensions.height)
      };
    }
  }], [{
    key: "typifyInstanceResponse",
    value: function typifyInstanceResponse(response) {
      return _get(_getPrototypeOf(Photo), "typifyInstanceResponse", this).call(this, response, Photo);
    }
  }]);

  return Photo;
}(Model);

module.exports = Photo;

/***/ }),
/* 20 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Model = __webpack_require__(10);

var User = /*#__PURE__*/function (_Model) {
  _inherits(User, _Model);

  var _super = _createSuper(User);

  function User() {
    _classCallCheck(this, User);

    return _super.apply(this, arguments);
  }

  _createClass(User, null, [{
    key: "typifyResultsResponse",
    value: function typifyResultsResponse(response) {
      return _get(_getPrototypeOf(User), "typifyResultsResponse", this).call(this, response, User);
    }
  }, {
    key: "typifyInstanceResponse",
    value: function typifyInstanceResponse(response) {
      return _get(_getPrototypeOf(User), "typifyInstanceResponse", this).call(this, response, User);
    }
  }]);

  return User;
}(Model);

module.exports = User;

/***/ }),
/* 21 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Model = __webpack_require__(10);

var ConservationStatus = /*#__PURE__*/function (_Model) {
  _inherits(ConservationStatus, _Model);

  var _super = _createSuper(ConservationStatus);

  function ConservationStatus() {
    _classCallCheck(this, ConservationStatus);

    return _super.apply(this, arguments);
  }

  _createClass(ConservationStatus, [{
    key: "iucnStatus",
    value: function iucnStatus() {
      switch (this.iucn) {
        case 0:
          return "not evaluated";

        case 5:
          return "data deficient";

        case 10:
          return "least concern";

        case 20:
          return "near threatened";

        case 30:
          return "vulnerable";

        case 40:
          return "endangered";

        case 50:
          return "critically endangered";

        case 60:
          return "extinct in the wild";

        case 70:
          return "extinct";

        default:
          return null;
      }
    }
  }, {
    key: "iucnStatusCode",
    value: function iucnStatusCode() {
      return {
        "not evaluated": "NE",
        "data deficient": "DD",
        "least concern": "LC",
        "near threatened": "NT",
        vulnerable: "VU",
        endangered: "EN",
        "critically endangered": "CR",
        "extinct in the wild": "EW",
        extinct: "EX"
      }[this.iucnStatus()];
    }
  }, {
    key: "statusText",
    value: function statusText() {
      switch (this.authority) {
        case "IUCN Red List":
          return this.iucnStatus();

        case "NatureServe":
          return this.natureServeStatus();

        case "Norma Oficial 059":
          return this.normaStatus();

        default:
          switch (this.status.toLowerCase()) {
            case "se":
            case "fe":
            case "le":
            case "e":
              return "endangered";

            case "st":
            case "ft":
            case "lt":
            case "t":
              return "threatened";

            case "sc":
              return "special concern";

            case "c":
              return "candidate";

            default:
              if (this.description && this.description.length < 50) {
                return "".concat(this.description, " (").concat(this.status, ")");
              }

              return this.status;
          }

      }
    }
  }, {
    key: "natureServeStatus",
    value: function natureServeStatus() {
      var status = this.status || "";
      var matches = status.match(/T(.)/);
      var nsStatus = matches ? matches[1] : status[1];

      switch (nsStatus) {
        case "X":
          return "extinct";

        case "H":
          return "possibly extinct";

        case "1":
          return "critically imperiled";

        case "2":
          return "imperiled";

        case "3":
          return "vulnerable";

        case "4":
          return "apparently secure";

        case "5":
          return "secure";

        default:
          return this.status;
      }
    }
  }, {
    key: "normaStatus",
    value: function normaStatus() {
      switch (this.status) {
        case "P":
          return "en peligro de extinción";

        case "A":
          return "amenazada";

        case "Pr":
          return "sujeta a protección especial";

        case "Ex":
          return "probablemente extinta en el medio silvestre";

        default:
          return this.status;
      }
    }
  }], [{
    key: "typifyInstanceResponse",
    value: function typifyInstanceResponse(response) {
      return _get(_getPrototypeOf(ConservationStatus), "typifyInstanceResponse", this).call(this, response, ConservationStatus);
    }
  }]);

  return ConservationStatus;
}(Model);

module.exports = ConservationStatus;

/***/ }),
/* 22 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var ControlledTerm = __webpack_require__(23);

var typifyResponse = function typifyResponse(response) {
  var typifiedResponse = ControlledTerm.typifyResultsResponse(response);

  for (var i = 0; i < typifiedResponse.results.length; i += 1) {
    if (typifiedResponse.results[i] && !typifiedResponse.results[i].values) {
      typifiedResponse.results[i].values = typifiedResponse.results[i].values.map(function (v) {
        return new ControlledTerm(v);
      });
    }
  }

  return typifiedResponse;
};

var controlledTerms = /*#__PURE__*/function () {
  function controlledTerms() {
    _classCallCheck(this, controlledTerms);
  }

  _createClass(controlledTerms, null, [{
    key: "for_taxon",
    value: // eslint-disable-line camelcase
    function for_taxon(params) {
      // eslint-disable-line camelcase
      if (iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match(/\/v2/)) {
        var taxonIds = params.taxon_id.toString().split(",").join(",");
        var newParams = Object.assign({}, params);
        delete newParams.taxon_id;
        return iNaturalistAPI.get("controlled_terms/for_taxon/".concat(taxonIds), newParams).then(typifyResponse);
      }

      return iNaturalistAPI.get("controlled_terms/for_taxon", params).then(typifyResponse);
    }
  }, {
    key: "search",
    value: function search(params) {
      return iNaturalistAPI.get("controlled_terms", params, {}).then(typifyResponse);
    }
  }]);

  return controlledTerms;
}();

module.exports = controlledTerms; // eslint-disable-line camelcase

/***/ }),
/* 23 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Model = __webpack_require__(10);

var ControlledTerm = /*#__PURE__*/function (_Model) {
  _inherits(ControlledTerm, _Model);

  var _super = _createSuper(ControlledTerm);

  function ControlledTerm(attrs) {
    var _this;

    _classCallCheck(this, ControlledTerm);

    _this = _super.call(this, attrs);

    if (_this.values) {
      _this.values = _this.values.map(function (v) {
        return new ControlledTerm(v);
      });
    }

    return _this;
  }

  _createClass(ControlledTerm, null, [{
    key: "typifyResultsResponse",
    value: function typifyResultsResponse(response) {
      return _get(_getPrototypeOf(ControlledTerm), "typifyResultsResponse", this).call(this, response, ControlledTerm);
    }
  }, {
    key: "typifyInstanceResponse",
    value: function typifyInstanceResponse(response) {
      return _get(_getPrototypeOf(ControlledTerm), "typifyInstanceResponse", this).call(this, response, ControlledTerm);
    }
  }]);

  return ControlledTerm;
}(Model);

module.exports = ControlledTerm;

/***/ }),
/* 24 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var Flag = __webpack_require__(25);

var flags = /*#__PURE__*/function () {
  function flags() {
    _classCallCheck(this, flags);
  }

  _createClass(flags, null, [{
    key: "create",
    value: function create(params, options) {
      return iNaturalistAPI.post("flags", params, options).then(Flag.typifyInstanceResponse);
    }
  }, {
    key: "update",
    value: function update(params, options) {
      return iNaturalistAPI.put("flags/:id", params, options).then(Flag.typifyInstanceResponse);
    }
  }, {
    key: "delete",
    value: function _delete(params, options) {
      return iNaturalistAPI["delete"]("flags/:id", params, options);
    }
  }]);

  return flags;
}();

module.exports = flags;

/***/ }),
/* 25 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Model = __webpack_require__(10);

var Flag = /*#__PURE__*/function (_Model) {
  _inherits(Flag, _Model);

  var _super = _createSuper(Flag);

  function Flag() {
    _classCallCheck(this, Flag);

    return _super.apply(this, arguments);
  }

  _createClass(Flag, null, [{
    key: "typifyInstanceResponse",
    value: function typifyInstanceResponse(response) {
      return _get(_getPrototypeOf(Flag), "typifyInstanceResponse", this).call(this, response, Flag);
    }
  }]);

  return Flag;
}(Model);

module.exports = Flag;

/***/ }),
/* 26 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var Identification = __webpack_require__(27);

var Taxon = __webpack_require__(18);

var User = __webpack_require__(20);

var Observation = __webpack_require__(28);

var identifications = /*#__PURE__*/function () {
  function identifications() {
    _classCallCheck(this, identifications);
  }

  _createClass(identifications, null, [{
    key: "create",
    value: function create(params, options) {
      return iNaturalistAPI.post("identifications", params, options).then(Identification.typifyInstanceResponse);
    }
  }, {
    key: "update",
    value: function update(params, options) {
      return iNaturalistAPI.put("identifications/:id", params, options).then(Identification.typifyInstanceResponse);
    }
  }, {
    key: "delete",
    value: function _delete(params, options) {
      return iNaturalistAPI["delete"]("identifications/:id", params, options);
    }
  }, {
    key: "similar_species",
    value: function similar_species(params, opts) {
      // eslint-disable-line camelcase
      var options = Object.assign({}, opts || {});
      options.useAuth = true;
      return iNaturalistAPI.get("identifications/similar_species", params, options).then(function (response) {
        if (response.results) {
          response.results = response.results.map(function (r) {
            return Object.assign({}, r, {
              taxon: new Taxon(r.taxon)
            });
          });
        }

        return response;
      });
    }
  }, {
    key: "recent_taxa",
    value: function recent_taxa(params, opts) {
      // eslint-disable-line camelcase
      var options = Object.assign({}, opts || {});
      options.useAuth = true;
      return iNaturalistAPI.get("identifications/recent_taxa", params, options).then(function (response) {
        if (response.results) {
          response.results = response.results.map(function (res) {
            var _r$identification, _r$identification$obs;

            var r = Object.assign({}, res);
            r.taxon = new Taxon(r.taxon);
            r.identification = new Identification(r.identification);

            if ((_r$identification = r.identification) !== null && _r$identification !== void 0 && (_r$identification$obs = _r$identification.observation) !== null && _r$identification$obs !== void 0 && _r$identification$obs.identifications) {
              delete r.identification.observation.identifications;
            }

            r.identification.observation = new Observation(r.identification.observation);
            return r;
          });
        }

        return response;
      });
    }
  }, {
    key: "recent_taxa_revisited",
    value: function recent_taxa_revisited(params, opts) {
      // eslint-disable-line camelcase
      var options = Object.assign({}, opts || {});
      options.useAuth = true;
      return iNaturalistAPI.get("identifications/recent_taxa_revisited", params, options).then(function (response) {
        if (response.results) {
          response.results = response.results.map(function (res) {
            var _r$identification2, _r$identification2$ob;

            var r = Object.assign({}, res);
            r.taxon = new Taxon(r.taxon);
            r.identification = new Identification(r.identification);

            if ((_r$identification2 = r.identification) !== null && _r$identification2 !== void 0 && (_r$identification2$ob = _r$identification2.observation) !== null && _r$identification2$ob !== void 0 && _r$identification2$ob.identifications) {
              delete r.identification.observation.identifications;
            }

            r.identification.observation = new Observation(r.identification.observation);
            return r;
          });
        }

        return response;
      });
    }
  }, {
    key: "identifiers",
    value: function identifiers(params, options) {
      return iNaturalistAPI.get("identifications/identifiers", params, options).then(function (response) {
        if (response.results) {
          response.results = response.results.map(function (r) {
            return Object.assign({}, r, {
              user: new User(r.user)
            });
          });
        }

        return response;
      });
    }
  }, {
    key: "categories",
    value: function categories(params) {
      return iNaturalistAPI.get("identifications/categories", params);
    }
  }]);

  return identifications;
}();

module.exports = identifications;

/***/ }),
/* 27 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Model = __webpack_require__(10);

var Taxon = __webpack_require__(18);

var Identification = /*#__PURE__*/function (_Model) {
  _inherits(Identification, _Model);

  var _super = _createSuper(Identification);

  function Identification(attrs) {
    var _this;

    _classCallCheck(this, Identification);

    _this = _super.call(this, attrs);

    if (_this.taxon && _this.taxon !== undefined) {
      _this.taxon = new Taxon(_this.taxon);
    }

    return _this;
  }

  _createClass(Identification, null, [{
    key: "typifyInstanceResponse",
    value: function typifyInstanceResponse(response) {
      return _get(_getPrototypeOf(Identification), "typifyInstanceResponse", this).call(this, response, Identification);
    }
  }]);

  return Identification;
}(Model);

module.exports = Identification;

/***/ }),
/* 28 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint prefer-destructuring: 0 */
var Model = __webpack_require__(10);

var Taxon = __webpack_require__(18);

var Photo = __webpack_require__(19);

var Identification = __webpack_require__(27);

var Observation = /*#__PURE__*/function (_Model) {
  _inherits(Observation, _Model);

  var _super = _createSuper(Observation);

  function Observation(attrs) {
    var _this;

    _classCallCheck(this, Observation);

    _this = _super.call(this, attrs);

    if (_this.private_geojson && _this.private_geojson.coordinates) {
      _this.latitude = _this.private_geojson.coordinates[1];
      _this.longitude = _this.private_geojson.coordinates[0];
    } else if (_this.geojson && _this.geojson.coordinates) {
      _this.latitude = _this.geojson.coordinates[1];
      _this.longitude = _this.geojson.coordinates[0];
    }

    if (_this.taxon) {
      _this.taxon = new Taxon(_this.taxon);
    }

    if (_this.community_taxon) {
      _this.communityTaxon = new Taxon(_this.community_taxon);
    }

    if (_this.photos && _this.photos.length > 0) {
      _this.photos = _this.photos.map(function (p) {
        return new Photo(p);
      });
    }

    if (_this.identifications && _this.identifications.length > 0) {
      _this.identifications = _this.identifications.map(function (i) {
        return new Identification(i);
      });
    }

    return _this;
  }

  _createClass(Observation, [{
    key: "photo",
    value: function photo() {
      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "square";
      this.cachedPhotos = this.cachedPhotos || {};

      if (this.cachedPhotos[size]) {
        return this.cachedPhotos[size];
      }

      if (this.photos && this.photos.length > 0) {
        this.cachedPhotos[size] = this.photos[0].photoUrl(size);
      }

      return this.cachedPhotos[size];
    }
  }, {
    key: "hasPhotos",
    value: function hasPhotos() {
      if (!this.photos || this.photos.length === 0) {
        return false;
      }

      var hasPhotos = false;
      this.photos.forEach(function (p) {
        hasPhotos = hasPhotos || !!p.url;
      });
      return hasPhotos;
    }
  }, {
    key: "hasSounds",
    value: function hasSounds() {
      return this.sounds && this.sounds.length > 0;
    }
  }, {
    key: "hasMedia",
    value: function hasMedia() {
      if (this.hasPhotos() || this.hasSounds()) {
        return true;
      }

      return false;
    }
  }], [{
    key: "typifyResultsResponse",
    value: function typifyResultsResponse(response) {
      return _get(_getPrototypeOf(Observation), "typifyResultsResponse", this).call(this, response, Observation);
    }
  }, {
    key: "typifyInstanceResponse",
    value: function typifyInstanceResponse(response) {
      return _get(_getPrototypeOf(Observation), "typifyInstanceResponse", this).call(this, response, Observation);
    }
  }]);

  return Observation;
}(Model);

module.exports = Observation;

/***/ }),
/* 29 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var Message = __webpack_require__(30);

var messages = /*#__PURE__*/function () {
  function messages() {
    _classCallCheck(this, messages);
  }

  _createClass(messages, null, [{
    key: "create",
    value: function create(params, options) {
      return iNaturalistAPI.post("messages", params, options).then(Message.typifyInstanceResponse);
    }
  }, {
    key: "search",
    value: function search(params, options) {
      var opts = Object.assign({}, options, {
        useWriteApi: true,
        useAuth: true
      });
      return iNaturalistAPI.get("messages", params, opts).then(Message.typifyResultsResponse);
    }
  }, {
    key: "fetch",
    value: function fetch(params, options) {
      var opts = Object.assign({}, options, {
        useWriteApi: true,
        useAuth: true
      });
      return iNaturalistAPI.get("messages/:id", params, opts).then(Message.typifyResultsResponse);
    }
  }, {
    key: "delete",
    value: function _delete(params, options) {
      return iNaturalistAPI["delete"]("messages/:id", params, options);
    }
  }, {
    key: "unread",
    value: function unread(params, options) {
      var opts = Object.assign({}, options, {
        useWriteApi: true,
        useAuth: true
      });
      return iNaturalistAPI.get("messages/count", params, opts);
    }
  }]);

  return messages;
}();

module.exports = messages;

/***/ }),
/* 30 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Model = __webpack_require__(10);

var Message = /*#__PURE__*/function (_Model) {
  _inherits(Message, _Model);

  var _super = _createSuper(Message);

  function Message() {
    _classCallCheck(this, Message);

    return _super.apply(this, arguments);
  }

  _createClass(Message, null, [{
    key: "typifyInstanceResponse",
    value: function typifyInstanceResponse(response) {
      return _get(_getPrototypeOf(Message), "typifyInstanceResponse", this).call(this, response, Message);
    }
  }, {
    key: "typifyResultsResponse",
    value: function typifyResultsResponse(response) {
      return _get(_getPrototypeOf(Message), "typifyResultsResponse", this).call(this, response, Message);
    }
  }]);

  return Message;
}(Model);

module.exports = Message;

/***/ }),
/* 31 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var ObservationFieldValue = __webpack_require__(32);

var observationFieldValues = /*#__PURE__*/function () {
  function observationFieldValues() {
    _classCallCheck(this, observationFieldValues);
  }

  _createClass(observationFieldValues, null, [{
    key: "create",
    value: function create(params, options) {
      return iNaturalistAPI.post("observation_field_values", params, options).then(ObservationFieldValue.typifyInstanceResponse);
    }
  }, {
    key: "update",
    value: function update(params, options) {
      return iNaturalistAPI.put("observation_field_values/:id", params, options).then(ObservationFieldValue.typifyInstanceResponse);
    }
  }, {
    key: "delete",
    value: function _delete(params, options) {
      return iNaturalistAPI["delete"]("observation_field_values/:id", params, options);
    }
  }]);

  return observationFieldValues;
}();

module.exports = observationFieldValues;

/***/ }),
/* 32 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Model = __webpack_require__(10);

var ObservationFieldValue = /*#__PURE__*/function (_Model) {
  _inherits(ObservationFieldValue, _Model);

  var _super = _createSuper(ObservationFieldValue);

  function ObservationFieldValue() {
    _classCallCheck(this, ObservationFieldValue);

    return _super.apply(this, arguments);
  }

  _createClass(ObservationFieldValue, null, [{
    key: "typifyInstanceResponse",
    value: function typifyInstanceResponse(response) {
      return _get(_getPrototypeOf(ObservationFieldValue), "typifyInstanceResponse", this).call(this, response, ObservationFieldValue);
    }
  }]);

  return ObservationFieldValue;
}(Model);

module.exports = ObservationFieldValue;

/***/ }),
/* 33 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var observationPhotos = /*#__PURE__*/function () {
  function observationPhotos() {
    _classCallCheck(this, observationPhotos);
  }

  _createClass(observationPhotos, null, [{
    key: "create",
    value: function create(params, options) {
      if (iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match(/\/v2/) && !params.file) {
        // For API v2, observation_photos creation endpoint shouldn't receive a
        // 'file' input param - however, if we use the 'upload' method, it will
        // send the POST request as a multipart request, which will
        // make the server require the file param.
        return iNaturalistAPI.post("observation_photos", params, options);
      }

      return iNaturalistAPI.upload("observation_photos", params, options);
    }
  }, {
    key: "update",
    value: function update(params, opts) {
      var options = Object.assign({}, opts);

      if (iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match(/\/v2/)) {
        return iNaturalistAPI.put("observation_photos/:id", params, options);
      }

      options.method = "PUT";
      return iNaturalistAPI.upload("observation_photos/:id", params, options);
    }
  }, {
    key: "delete",
    value: function _delete(params, options) {
      return iNaturalistAPI["delete"]("observation_photos/:id", params, options);
    }
  }]);

  return observationPhotos;
}();

module.exports = observationPhotos;

/***/ }),
/* 34 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var observationSounds = /*#__PURE__*/function () {
  function observationSounds() {
    _classCallCheck(this, observationSounds);
  }

  _createClass(observationSounds, null, [{
    key: "create",
    value: function create(params, options) {
      if (iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match(/\/v2/) && !params.file) {
        // For API v2, observation_photos creation endpoint shouldn't receive a
        // 'file' input param - however, if we use the 'upload' method, it will
        // send the POST request as a multipart request, which will
        // make the server require the file param.
        return iNaturalistAPI.post("observation_sounds", params, options);
      }

      return iNaturalistAPI.upload("observation_sounds", params, options);
    }
  }, {
    key: "update",
    value: function update(params, opts) {
      var options = Object.assign({}, opts);

      if (iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match(/\/v2/)) {
        return iNaturalistAPI.put("observation_sounds/:id", params, options);
      }

      options.method = "PUT";
      return iNaturalistAPI.upload("observation_sounds/:id", params, options);
    }
  }, {
    key: "delete",
    value: function _delete(params, options) {
      return iNaturalistAPI["delete"]("observation_sounds/:id", params, options);
    }
  }]);

  return observationSounds;
}();

module.exports = observationSounds;

/***/ }),
/* 35 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var ControlledTerm = __webpack_require__(23);

var Observation = __webpack_require__(28);

var Project = __webpack_require__(36);

var Taxon = __webpack_require__(18);

var User = __webpack_require__(20);

var observations = /*#__PURE__*/function () {
  function observations() {
    _classCallCheck(this, observations);
  }

  _createClass(observations, null, [{
    key: "create",
    value: function create(params, options) {
      return iNaturalistAPI.post("observations", params, options).then(Observation.typifyInstanceResponse);
    }
  }, {
    key: "update",
    value: function update(params, options) {
      return iNaturalistAPI.put("observations/:id", params, options).then(Observation.typifyInstanceResponse);
    }
  }, {
    key: "delete",
    value: function _delete(params, options) {
      return iNaturalistAPI["delete"]("observations/:id", params, options);
    }
  }, {
    key: "fave",
    value: function fave(params, options) {
      if (!iNaturalistAPI.apiURL || !iNaturalistAPI.apiURL.match(/\/v2/)) {
        return observations.vote(params, options);
      }

      return iNaturalistAPI.post("observations/:id/fave", params, options);
    }
  }, {
    key: "unfave",
    value: function unfave(params, options) {
      // return observations.unvote( params, options );
      if (!iNaturalistAPI.apiURL || !iNaturalistAPI.apiURL.match(/\/v2/)) {
        return observations.unvote(params, options);
      }

      return iNaturalistAPI["delete"]("observations/:id/fave", params, options);
    }
  }, {
    key: "vote",
    value: function vote(params, options) {
      if (iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match(/\/v2/)) {
        throw new Error("API v2 does not support observations.vote. Use fave or setQualityMetric instead.");
      }

      return iNaturalistAPI.post("votes/vote/observation/:id", params, options).then(Observation.typifyInstanceResponse);
    }
  }, {
    key: "unvote",
    value: function unvote(params, options) {
      if (iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match(/\/v2/)) {
        throw new Error("API v2 does not support observations.unvote. Use unfave or deleteQualityMetric instead.");
      }

      return iNaturalistAPI["delete"]("votes/unvote/observation/:id", params, options);
    }
  }, {
    key: "subscribe",
    value: function subscribe(params, options) {
      if (iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match(/\/v2/)) {
        return iNaturalistAPI.put("observations/:id/subscription", params, options);
      }

      return iNaturalistAPI.post("subscriptions/Observation/:id/subscribe", params, options);
    }
  }, {
    key: "review",
    value: function review(params, options) {
      var p = _objectSpread({}, params);

      p.reviewed = "true";
      return iNaturalistAPI.post("observations/:id/review", p, options);
    }
  }, {
    key: "unreview",
    value: function unreview(params, options) {
      var p = _objectSpread({}, params);

      return iNaturalistAPI["delete"]("observations/:id/review", p, options);
    }
  }, {
    key: "qualityMetrics",
    value: function qualityMetrics(params, options) {
      return iNaturalistAPI.get("observations/:id/quality_metrics", params, options);
    }
  }, {
    key: "setQualityMetric",
    value: function setQualityMetric(params, options) {
      return iNaturalistAPI.post("observations/:id/quality/:metric", params, options);
    }
  }, {
    key: "deleteQualityMetric",
    value: function deleteQualityMetric(params, options) {
      return iNaturalistAPI["delete"]("observations/:id/quality/:metric", params, options);
    }
  }, {
    key: "fetch",
    value: function fetch(ids, params) {
      return iNaturalistAPI.fetch("observations", ids, params).then(Observation.typifyResultsResponse);
    }
  }, {
    key: "search",
    value: function search(params) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return iNaturalistAPI.get("observations", params, _objectSpread(_objectSpread({}, opts), {}, {
        useAuth: true
      })).then(Observation.typifyResultsResponse);
    }
  }, {
    key: "identifiers",
    value: function identifiers(params) {
      return iNaturalistAPI.get("observations/identifiers", params).then(function (response) {
        if (response.results) {
          response.results = response.results.map(function (r) {
            return _objectSpread(_objectSpread({}, r), {}, {
              user: new User(r.user)
            });
          });
        }

        return response;
      });
    }
  }, {
    key: "observers",
    value: function observers(params) {
      return iNaturalistAPI.get("observations/observers", params).then(function (response) {
        if (response.results) {
          response.results = response.results.map(function (r) {
            return _objectSpread(_objectSpread({}, r), {}, {
              user: new User(r.user)
            });
          });
        }

        return response;
      });
    }
  }, {
    key: "speciesCounts",
    value: function speciesCounts(params) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return iNaturalistAPI.get("observations/species_counts", params, _objectSpread(_objectSpread({}, opts), {}, {
        useAuth: true
      })).then(function (response) {
        if (response.results) {
          response.results = response.results.map(function (r) {
            return _objectSpread(_objectSpread({}, r), {}, {
              taxon: new Taxon(r.taxon)
            });
          });
        }

        return response;
      });
    }
  }, {
    key: "iconicTaxaCounts",
    value: function iconicTaxaCounts(params) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return iNaturalistAPI.get("observations/iconic_taxa_counts", params, _objectSpread(_objectSpread({}, opts), {}, {
        useAuth: true
      })).then(function (response) {
        if (response.results) {
          response.results = response.results.map(function (r) {
            return _objectSpread(_objectSpread({}, r), {}, {
              taxon: new Taxon(r.taxon)
            });
          });
        }

        return response;
      });
    }
  }, {
    key: "iconicTaxaSpeciesCounts",
    value: function iconicTaxaSpeciesCounts(params) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return iNaturalistAPI.get("observations/iconic_taxa_species_counts", params, _objectSpread(_objectSpread({}, opts), {}, {
        useAuth: true
      })).then(function (response) {
        if (response.results) {
          response.results = response.results.map(function (r) {
            return _objectSpread(_objectSpread({}, r), {}, {
              taxon: new Taxon(r.taxon)
            });
          });
        }

        return response;
      });
    }
  }, {
    key: "popularFieldValues",
    value: function popularFieldValues(params) {
      return iNaturalistAPI.get("observations/popular_field_values", params).then(function (response) {
        if (response.results) {
          response.results = response.results.map(function (res) {
            var r = _objectSpread({}, res);

            r.controlled_attribute = new ControlledTerm(r.controlled_attribute);
            r.controlled_value = new ControlledTerm(r.controlled_value);
            return r;
          });
        }

        return response;
      });
    }
  }, {
    key: "umbrellaProjectStats",
    value: function umbrellaProjectStats(params) {
      return iNaturalistAPI.get("observations/umbrella_project_stats", params).then(function (response) {
        if (response.results) {
          response.results = response.results.map(function (r) {
            return _objectSpread(_objectSpread({}, r), {}, {
              project: new Project(r.project)
            });
          });
        }

        return response;
      });
    }
  }, {
    key: "histogram",
    value: function histogram(params) {
      return iNaturalistAPI.get("observations/histogram", params);
    }
  }, {
    key: "qualityGrades",
    value: function qualityGrades(params) {
      return iNaturalistAPI.get("observations/quality_grades", params);
    }
  }, {
    key: "subscriptions",
    value: function subscriptions(params, options) {
      return iNaturalistAPI.get("observations/:id/subscriptions", params, iNaturalistAPI.optionsUseAuth(options));
    }
  }, {
    key: "taxonSummary",
    value: function taxonSummary(params) {
      return iNaturalistAPI.get("observations/:id/taxon_summary", params);
    }
  }, {
    key: "updates",
    value: function updates(params, options) {
      return iNaturalistAPI.get("observations/updates", params, iNaturalistAPI.optionsUseAuth(options));
    }
  }, {
    key: "viewedUpdates",
    value: function viewedUpdates(params, options) {
      return iNaturalistAPI.put("observations/:id/viewed_updates", params, iNaturalistAPI.optionsUseAuth(options));
    }
  }, {
    key: "identificationCategories",
    value: function identificationCategories(params) {
      return iNaturalistAPI.get("observations/identification_categories", params);
    }
  }, {
    key: "taxonomy",
    value: function taxonomy(params) {
      return iNaturalistAPI.get("observations/taxonomy", params).then(Taxon.typifyResultsResponse);
    }
  }, {
    key: "similarSpecies",
    value: function similarSpecies(params, opts) {
      var options = _objectSpread({}, opts || {});

      options.useAuth = true;
      return iNaturalistAPI.get("observations/similar_species", params, options).then(function (response) {
        if (response.results) {
          response.results = response.results.map(function (r) {
            return _objectSpread(_objectSpread({}, r), {}, {
              taxon: new Taxon(r.taxon)
            });
          });
        }

        return response;
      });
    }
  }, {
    key: "taxa",
    value: function taxa(params) {
      return iNaturalistAPI.get("observations/taxa", params);
    }
  }, {
    key: "deleted",
    value: function deleted(params, options) {
      return iNaturalistAPI.get("observations/deleted", params, iNaturalistAPI.optionsUseAuth(options));
    }
  }]);

  return observations;
}();

module.exports = observations;

/***/ }),
/* 36 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Model = __webpack_require__(10);

var Project = /*#__PURE__*/function (_Model) {
  _inherits(Project, _Model);

  var _super = _createSuper(Project);

  function Project() {
    _classCallCheck(this, Project);

    return _super.apply(this, arguments);
  }

  _createClass(Project, null, [{
    key: "typifyResultsResponse",
    value: function typifyResultsResponse(response) {
      return _get(_getPrototypeOf(Project), "typifyResultsResponse", this).call(this, response, Project);
    }
  }, {
    key: "typifyInstanceResponse",
    value: function typifyInstanceResponse(response) {
      return _get(_getPrototypeOf(Project), "typifyInstanceResponse", this).call(this, response, Project);
    }
  }]);

  return Project;
}(Model);

module.exports = Project;

/***/ }),
/* 37 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var Photo = __webpack_require__(19);

var photos = /*#__PURE__*/function () {
  function photos() {
    _classCallCheck(this, photos);
  }

  _createClass(photos, null, [{
    key: "create",
    value: function create(params, options) {
      return iNaturalistAPI.upload("photos", params, options);
    }
  }, {
    key: "update",
    value: function update(params, options) {
      return iNaturalistAPI.put("photos/:id", params, options).then(Photo.typifyInstanceResponse);
    }
  }]);

  return photos;
}();

module.exports = photos;

/***/ }),
/* 38 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var Place = __webpack_require__(39);

var places = /*#__PURE__*/function () {
  function places() {
    _classCallCheck(this, places);
  }

  _createClass(places, null, [{
    key: "fetch",
    value: function fetch(ids, params) {
      return iNaturalistAPI.fetch("places", ids, params).then(Place.typifyResultsResponse);
    }
  }, {
    key: "autocomplete",
    value: function autocomplete(params) {
      if (iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match(/\/v2/)) {
        throw new Error("API v2 does not support places.autocomplete. Use places.search instead.");
      }

      return iNaturalistAPI.get("places/autocomplete", params).then(Place.typifyResultsResponse);
    }
  }, {
    key: "search",
    value: function search(params) {
      if (iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match(/\/v1/)) {
        throw new Error("API v1 does not support places.search. Use places.autocomplete instead.");
      }

      return iNaturalistAPI.get("places", params).then(Place.typifyResultsResponse);
    }
  }, {
    key: "containing",
    value: function containing(params) {
      return iNaturalistAPI.get("places/containing", params).then(Place.typifyResultsResponse);
    }
  }]);

  return places;
}();

module.exports = places;

/***/ }),
/* 39 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Model = __webpack_require__(10);

var Place = /*#__PURE__*/function (_Model) {
  _inherits(Place, _Model);

  var _super = _createSuper(Place);

  function Place() {
    _classCallCheck(this, Place);

    return _super.apply(this, arguments);
  }

  _createClass(Place, null, [{
    key: "typifyResultsResponse",
    value: function typifyResultsResponse(response) {
      return _get(_getPrototypeOf(Place), "typifyResultsResponse", this).call(this, response, Place);
    }
  }]);

  return Place;
}(Model);

module.exports = Place;

/***/ }),
/* 40 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var Post = __webpack_require__(41);

var posts = /*#__PURE__*/function () {
  function posts() {
    _classCallCheck(this, posts);
  }

  _createClass(posts, null, [{
    key: "search",
    value: function search(params, options) {
      return iNaturalistAPI.get("posts", params, options).then(Post.typifyArrayResponse);
    }
  }, {
    key: "for_user",
    value: function for_user(params, options) {
      // eslint-disable-line camelcase
      return iNaturalistAPI.get("posts/for_user", params, _objectSpread(_objectSpread({}, options), {}, {
        useAuth: true
      })).then(Post.typifyArrayResponse);
    }
  }, {
    key: "create",
    value: function create(params, options) {
      return iNaturalistAPI.post("posts", params, options).then(Post.typifyInstanceResponse);
    }
  }, {
    key: "update",
    value: function update(params, options) {
      return iNaturalistAPI.put("posts/:id", params, options).then(Post.typifyInstanceResponse);
    }
  }, {
    key: "delete",
    value: function _delete(params, options) {
      return iNaturalistAPI["delete"]("posts/:id", params, options);
    }
  }]);

  return posts;
}();

module.exports = posts;

/***/ }),
/* 41 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Model = __webpack_require__(10);

var Post = /*#__PURE__*/function (_Model) {
  _inherits(Post, _Model);

  var _super = _createSuper(Post);

  function Post() {
    _classCallCheck(this, Post);

    return _super.apply(this, arguments);
  }

  _createClass(Post, null, [{
    key: "typifyArrayResponse",
    value: function typifyArrayResponse(response) {
      return _get(_getPrototypeOf(Post), "typifyArrayResponse", this).call(this, response, Post);
    }
  }, {
    key: "typifyInstanceResponse",
    value: function typifyInstanceResponse(response) {
      return _get(_getPrototypeOf(Post), "typifyInstanceResponse", this).call(this, response, Post);
    }
  }]);

  return Post;
}(Model);

module.exports = Post;

/***/ }),
/* 42 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var Project = __webpack_require__(36);

var projects = /*#__PURE__*/function () {
  function projects() {
    _classCallCheck(this, projects);
  }

  _createClass(projects, null, [{
    key: "fetch",
    value: function fetch(ids, params) {
      return iNaturalistAPI.fetch("projects", ids, params).then(Project.typifyResultsResponse);
    }
  }, {
    key: "search",
    value: function search(params, options) {
      return iNaturalistAPI.get("projects", params, options).then(Project.typifyResultsResponse);
    }
  }, {
    key: "autocomplete",
    value: function autocomplete(params) {
      return iNaturalistAPI.get("projects/autocomplete", params).then(Project.typifyResultsResponse);
    }
  }, {
    key: "create",
    value: function create(params, options) {
      return iNaturalistAPI.upload("projects", params, options).then(Project.typifyInstanceResponse);
    }
  }, {
    key: "update",
    value: function update(params, options) {
      return iNaturalistAPI.upload("projects/:id", params, Object.assign({}, options, {
        method: "put"
      })).then(Project.typifyInstanceResponse);
    }
  }, {
    key: "delete",
    value: function _delete(params, options) {
      return iNaturalistAPI["delete"]("projects/:id", params, options);
    }
  }, {
    key: "join",
    value: function join(params, options) {
      var endpoint = "projects/:id/join";

      if (iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match(/\/v2/)) {
        endpoint = "projects/:id/membership";
      }

      return iNaturalistAPI.post(endpoint, params, options);
    }
  }, {
    key: "leave",
    value: function leave(params, options) {
      var endpoint = "projects/:id/leave";

      if (iNaturalistAPI.apiURL && iNaturalistAPI.apiURL.match(/\/v2/)) {
        endpoint = "projects/:id/membership";
      }

      return iNaturalistAPI["delete"](endpoint, params, options);
    }
  }, {
    key: "add",
    value: function add(params, options) {
      return iNaturalistAPI.post("projects/:id/add", params, options);
    }
  }, {
    key: "remove",
    value: function remove(params, options) {
      return iNaturalistAPI["delete"]("projects/:id/remove", params, options);
    }
  }, {
    key: "posts",
    value: function posts(params, options) {
      return iNaturalistAPI.get("projects/:id/posts", params, options);
    }
  }, {
    key: "subscribe",
    value: function subscribe(params, options) {
      return iNaturalistAPI.post("subscriptions/Project/:id/subscribe", params, options);
    }
  }, {
    key: "subscriptions",
    value: function subscriptions(params, options) {
      return iNaturalistAPI.get("projects/:id/subscriptions", params, iNaturalistAPI.optionsUseAuth(options));
    }
  }, {
    key: "followers",
    value: function followers(params, options) {
      return iNaturalistAPI.get("projects/:id/followers", params, options);
    }
  }, {
    key: "members",
    value: function members(params, options) {
      return iNaturalistAPI.get("projects/:id/members", params, options);
    }
  }, {
    key: "membership",
    value: function membership(params, options) {
      return iNaturalistAPI.get("projects/:id/membership", params, iNaturalistAPI.optionsUseAuth(options));
    }
  }, {
    key: "feature",
    value: function feature(params, options) {
      return iNaturalistAPI.put("projects/:id/feature", params, options);
    }
  }, {
    key: "unfeature",
    value: function unfeature(params, options) {
      return iNaturalistAPI.put("projects/:id/unfeature", params, options);
    }
  }]);

  return projects;
}();

module.exports = projects;

/***/ }),
/* 43 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var ProjectObservation = __webpack_require__(44);

var projectObservations = /*#__PURE__*/function () {
  function projectObservations() {
    _classCallCheck(this, projectObservations);
  }

  _createClass(projectObservations, null, [{
    key: "create",
    value: function create(params, options) {
      return iNaturalistAPI.post("project_observations", params, options).then(ProjectObservation.typifyInstanceResponse);
    }
  }, {
    key: "update",
    value: function update(params, options) {
      return iNaturalistAPI.put("project_observations/:id", params, options).then(ProjectObservation.typifyInstanceResponse);
    }
  }, {
    key: "delete",
    value: function _delete(params, options) {
      return iNaturalistAPI["delete"]("project_observations/:id", params, options);
    }
  }]);

  return projectObservations;
}();

module.exports = projectObservations;

/***/ }),
/* 44 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Model = __webpack_require__(10);

var ProjectObservation = /*#__PURE__*/function (_Model) {
  _inherits(ProjectObservation, _Model);

  var _super = _createSuper(ProjectObservation);

  function ProjectObservation() {
    _classCallCheck(this, ProjectObservation);

    return _super.apply(this, arguments);
  }

  _createClass(ProjectObservation, null, [{
    key: "typifyInstanceResponse",
    value: function typifyInstanceResponse(response) {
      return _get(_getPrototypeOf(ProjectObservation), "typifyInstanceResponse", this).call(this, response, ProjectObservation);
    }
  }]);

  return ProjectObservation;
}(Model);

module.exports = ProjectObservation;

/***/ }),
/* 45 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var ProjectUser = __webpack_require__(46);

var projectUsers = /*#__PURE__*/function () {
  function projectUsers() {
    _classCallCheck(this, projectUsers);
  }

  _createClass(projectUsers, null, [{
    key: "update",
    value: function update(params, options) {
      return iNaturalistAPI.put("project_users/:id", params, options).then(ProjectUser.typifyInstanceResponse);
    }
  }]);

  return projectUsers;
}();

module.exports = projectUsers;

/***/ }),
/* 46 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Model = __webpack_require__(10);

var ProjectUser = /*#__PURE__*/function (_Model) {
  _inherits(ProjectUser, _Model);

  var _super = _createSuper(ProjectUser);

  function ProjectUser() {
    _classCallCheck(this, ProjectUser);

    return _super.apply(this, arguments);
  }

  _createClass(ProjectUser, null, [{
    key: "typifyInstanceResponse",
    value: function typifyInstanceResponse(response) {
      return _get(_getPrototypeOf(ProjectUser), "typifyInstanceResponse", this).call(this, response, ProjectUser);
    }
  }]);

  return ProjectUser;
}(Model);

module.exports = ProjectUser;

/***/ }),
/* 47 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var ProviderAuthorization = __webpack_require__(48);

var ProviderAuthorizations = /*#__PURE__*/function () {
  function ProviderAuthorizations() {
    _classCallCheck(this, ProviderAuthorizations);
  }

  _createClass(ProviderAuthorizations, null, [{
    key: "search",
    value: function search(params) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return iNaturalistAPI.get("provider_authorizations", params, _objectSpread(_objectSpread({}, opts), {}, {
        useAuth: true
      })).then(ProviderAuthorization.typifyResultsResponse);
    }
  }, {
    key: "delete",
    value: function _delete(params, options) {
      var endpoint = "provider_authorizations/:id";

      if (iNaturalistAPI.writeApiURL && iNaturalistAPI.writeApiURL.match(/\/v\d/)) {
        endpoint = "provider_authorizations/:id";
      }

      return iNaturalistAPI["delete"](endpoint, params, options);
    }
  }]);

  return ProviderAuthorizations;
}();

module.exports = ProviderAuthorizations;

/***/ }),
/* 48 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Model = __webpack_require__(10);

var ProviderAuthorization = /*#__PURE__*/function (_Model) {
  _inherits(ProviderAuthorization, _Model);

  var _super = _createSuper(ProviderAuthorization);

  function ProviderAuthorization() {
    _classCallCheck(this, ProviderAuthorization);

    return _super.apply(this, arguments);
  }

  _createClass(ProviderAuthorization, null, [{
    key: "typifyInstanceResponse",
    value: function typifyInstanceResponse(response) {
      return _get(_getPrototypeOf(ProviderAuthorization), "typifyInstanceResponse", this).call(this, response, ProviderAuthorization);
    }
  }]);

  return ProviderAuthorization;
}(Model);

module.exports = ProviderAuthorization;

/***/ }),
/* 49 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var Relationship = __webpack_require__(50);

var relationships = /*#__PURE__*/function () {
  function relationships() {
    _classCallCheck(this, relationships);
  }

  _createClass(relationships, null, [{
    key: "create",
    value: function create(params, options) {
      return iNaturalistAPI.post("relationships", params, options).then(Relationship.typifyInstanceResponse);
    }
  }, {
    key: "search",
    value: function search(params, options) {
      var useWriteApi = false;

      if (iNaturalistAPI.writeApiURL && iNaturalistAPI.writeApiURL.match(/\/v\d/)) {
        useWriteApi = true;
      }

      var opts = _objectSpread(_objectSpread({}, options), {}, {
        useWriteApi: useWriteApi,
        useAuth: true
      });

      return iNaturalistAPI.get("relationships", params, opts).then(Relationship.typifyResultsResponse);
    }
  }, {
    key: "update",
    value: function update(params, options) {
      return iNaturalistAPI.put("relationships/:id", params, options);
    }
  }, {
    key: "delete",
    value: function _delete(params, options) {
      return iNaturalistAPI["delete"]("relationships/:id", params, options);
    }
  }]);

  return relationships;
}();

module.exports = relationships;

/***/ }),
/* 50 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Model = __webpack_require__(10);

var User = __webpack_require__(20);

var Relationship = /*#__PURE__*/function (_Model) {
  _inherits(Relationship, _Model);

  var _super = _createSuper(Relationship);

  function Relationship() {
    _classCallCheck(this, Relationship);

    return _super.apply(this, arguments);
  }

  _createClass(Relationship, null, [{
    key: "typifyInstanceResponse",
    value: function typifyInstanceResponse(response) {
      var r = _get(_getPrototypeOf(Relationship), "typifyInstanceResponse", this).call(this, response, Relationship);

      r.friendUser = User.typifyInstanceResponse(r.friend_user, User);
      delete r.friend_user;
      return r;
    }
  }, {
    key: "typifyResultsResponse",
    value: function typifyResultsResponse(response) {
      if (response.results) {
        response.results = response.results.map(function (r) {
          return Relationship.typifyInstanceResponse(r);
        });
      }

      return response;
    }
  }]);

  return Relationship;
}(Model);

module.exports = Relationship;

/***/ }),
/* 51 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var Place = __webpack_require__(39);

var Project = __webpack_require__(36);

var Taxon = __webpack_require__(18);

var User = __webpack_require__(20);

var search = /*#__PURE__*/function () {
  function search() {
    _classCallCheck(this, search);
  }

  _createClass(search, null, [{
    key: "index",
    value: function index() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return iNaturalistAPI.get("search", params, options).then(function (response) {
        if (response.results) {
          response.results.forEach(function (result, index) {
            var instanceAttribute;

            if (result.type === "Place") {
              instanceAttribute = "record" in result ? "record" : "place";
              response.results[index][instanceAttribute] = new Place(result[instanceAttribute]);
            } else if (result.type === "Project") {
              instanceAttribute = "record" in result ? "record" : "project";
              response.results[index][instanceAttribute] = new Project(result[instanceAttribute]);
            } else if (result.type === "Taxon") {
              instanceAttribute = "record" in result ? "record" : "taxon";
              response.results[index][instanceAttribute] = new Taxon(result[instanceAttribute]);
            } else if (result.type === "User") {
              instanceAttribute = "record" in result ? "record" : "user";
              response.results[index][instanceAttribute] = new User(result[instanceAttribute]);
            }
          });
        }

        return response;
      });
    }
  }]);

  return search;
}();

module.exports = search.index;

/***/ }),
/* 52 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var Site = __webpack_require__(53);

var sites = /*#__PURE__*/function () {
  function sites() {
    _classCallCheck(this, sites);
  }

  _createClass(sites, null, [{
    key: "search",
    value: function search(params) {
      return iNaturalistAPI.get("sites", params).then(Site.typifyResultsResponse);
    }
  }, {
    key: "fetch",
    value: function fetch(ids, params) {
      if (!ids || ids.length === 0) {
        return iNaturalistAPI.get("sites", params).then(Site.typifyResultsResponse);
      }

      return iNaturalistAPI.fetch("sites", ids, params).then(Site.typifyResultsResponse);
    }
  }]);

  return sites;
}();

module.exports = sites;

/***/ }),
/* 53 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Model = __webpack_require__(10);

var Site = /*#__PURE__*/function (_Model) {
  _inherits(Site, _Model);

  var _super = _createSuper(Site);

  function Site() {
    _classCallCheck(this, Site);

    return _super.apply(this, arguments);
  }

  _createClass(Site, null, [{
    key: "typifyResultsResponse",
    value: function typifyResultsResponse(response) {
      return _get(_getPrototypeOf(Site), "typifyResultsResponse", this).call(this, response, Site);
    }
  }]);

  return Site;
}(Model);

module.exports = Site;

/***/ }),
/* 54 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var sounds = /*#__PURE__*/function () {
  function sounds() {
    _classCallCheck(this, sounds);
  }

  _createClass(sounds, null, [{
    key: "create",
    value: function create(params, options) {
      return iNaturalistAPI.upload("sounds", params, options);
    }
  }]);

  return sounds;
}();

module.exports = sounds;

/***/ }),
/* 55 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var Taxon = __webpack_require__(18);

var taxa = /*#__PURE__*/function () {
  function taxa() {
    _classCallCheck(this, taxa);
  }

  _createClass(taxa, null, [{
    key: "fetch",
    value: function fetch(ids, params) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return iNaturalistAPI.fetch("taxa", ids, params, _objectSpread(_objectSpread({}, opts), {}, {
        useAuth: true
      })).then(Taxon.typifyResultsResponse);
    }
  }, {
    key: "search",
    value: function search(params) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return iNaturalistAPI.get("taxa", params, _objectSpread(_objectSpread({}, opts), {}, {
        useAuth: true
      })).then(Taxon.typifyResultsResponse);
    }
  }, {
    key: "autocomplete",
    value: function autocomplete(params) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return iNaturalistAPI.get("taxa/autocomplete", params, _objectSpread(_objectSpread({}, opts), {}, {
        useAuth: true
      })).then(Taxon.typifyResultsResponse);
    }
  }, {
    key: "suggest",
    value: function suggest(params) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return iNaturalistAPI.get("taxa/suggest", params, _objectSpread(_objectSpread({}, opts), {}, {
        useAuth: true
      })).then(function (response) {
        response.results = response.results.map(function (r) {
          return _objectSpread(_objectSpread({}, r), {}, {
            taxon: new Taxon(r.taxon)
          });
        });
        return response;
      });
    }
  }, {
    key: "lifelist_metadata",
    value: function lifelist_metadata(params) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // eslint-disable-line camelcase
      return iNaturalistAPI.get("taxa/lifelist_metadata", params, _objectSpread(_objectSpread({}, opts), {}, {
        useAuth: true
      })).then(Taxon.typifyResultsResponse);
    }
  }, {
    key: "wanted",
    value: function wanted(params) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return iNaturalistAPI.get("taxa/:id/wanted", params, _objectSpread(_objectSpread({}, opts), {}, {
        useAuth: true
      })).then(function (response) {
        return Taxon.typifyResultsResponse(response);
      });
    }
  }]);

  return taxa;
}();

module.exports = taxa;

/***/ }),
/* 56 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var translations = /*#__PURE__*/function () {
  function translations() {
    _classCallCheck(this, translations);
  }

  _createClass(translations, null, [{
    key: "locales",
    value: function locales() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return iNaturalistAPI.get("translations/locales", params, options);
    }
  }]);

  return translations;
}();

module.exports = translations;

/***/ }),
/* 57 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var Project = __webpack_require__(36);

var User = __webpack_require__(20);

var users = /*#__PURE__*/function () {
  function users() {
    _classCallCheck(this, users);
  }

  _createClass(users, null, [{
    key: "fetch",
    value: function fetch(ids) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return iNaturalistAPI.fetch("users", ids, params).then(User.typifyResultsResponse);
    }
  }, {
    key: "update",
    value: function update(params, options) {
      return iNaturalistAPI.upload("users/:id", params, _objectSpread(_objectSpread({}, options), {}, {
        method: "put"
      })).then(User.typifyInstanceResponse);
    }
  }, {
    key: "update_session",
    value: function update_session(params, options) {
      // eslint-disable-line camelcase
      return iNaturalistAPI.put("users/update_session", params, options);
    }
  }, {
    key: "me",
    value: function me() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var options = _objectSpread({}, opts);

      var params = {};

      if (options.fields) {
        params.fields = options.fields;
        delete options.fields;
      }

      options.useAuth = true;
      return iNaturalistAPI.get("users/me", params, options).then(User.typifyResultsResponse);
    }
  }, {
    key: "mute",
    value: function mute(params) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var options = _objectSpread({}, opts);

      options.useAuth = true;
      return iNaturalistAPI.post("users/:id/mute", params, options);
    }
  }, {
    key: "unmute",
    value: function unmute(params) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var options = _objectSpread({}, opts);

      options.useAuth = true;
      return iNaturalistAPI["delete"]("users/:id/mute", params, options);
    }
  }, {
    key: "block",
    value: function block(params) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var options = _objectSpread({}, opts);

      options.useAuth = true;
      return iNaturalistAPI.post("users/:id/block", params, options);
    }
  }, {
    key: "unblock",
    value: function unblock(params) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var options = _objectSpread({}, opts);

      options.useAuth = true;
      return iNaturalistAPI["delete"]("users/:id/block", params, options);
    }
  }, {
    key: "projects",
    value: function projects(params) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var options = _objectSpread({}, opts);

      options.useAuth = true;
      return iNaturalistAPI.get("users/:id/projects", params, options).then(Project.typifyResultsResponse);
    }
  }, {
    key: "resendConfirmation",
    value: function resendConfirmation(params) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var options = _objectSpread({}, opts);

      options.useAuth = true;
      return iNaturalistAPI.post("users/resend_confirmation", params, options);
    }
  }]);

  return users;
}();

module.exports = users;

/***/ }),
/* 58 */
/***/ (function(module) {

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FileUpload = /*#__PURE__*/_createClass(function FileUpload(attrs) {
  _classCallCheck(this, FileUpload);

  Object.assign(this, attrs);
});

module.exports = FileUpload;

/***/ }),
/* 59 */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var iNaturalistAPI = __webpack_require__(1);

var log = function log(params, userJWT, applicationJWT) {
  var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var options = _objectSpread({}, opts);

  if (!iNaturalistAPI.apiURL || !iNaturalistAPI.apiURL.match(/\/v2/)) {
    throw new Error("log endpoint is only availble as of API v2");
  }

  if (!userJWT) {
    throw new Error("userJWT is required");
  }

  if (!applicationJWT) {
    throw new Error("applicationJWT is required");
  }

  options.api_token = "".concat(userJWT, ",").concat(applicationJWT);
  options.apiURL = iNaturalistAPI.apiURL; // force the host to be the Node API

  var newParams = params; // Set params if an Error object was passed in

  if (params instanceof Error) {
    var pieces = params.message.split(/^\s+at /m);
    newParams = {
      level: options.level || "error",
      message: options.message || pieces[0].trim(),
      error_type: params.constructor.name,
      context: options.context
    };

    if (pieces.length > 1) {
      newParams.backtrace = pieces.slice(1).map(function (piece) {
        return piece.trim();
      }).join("\n");
    }
  }

  return iNaturalistAPI.post("log", newParams, options);
};

module.exports = log;

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;