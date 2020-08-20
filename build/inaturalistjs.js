(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint global-require: 0 */
var iNaturalistAPI = __webpack_require__(1);

module.exports = {
  setConfig: iNaturalistAPI.setConfig,
  annotations: __webpack_require__(12),
  comments: __webpack_require__(14),
  computervision: __webpack_require__(16),
  controlled_terms: __webpack_require__(21),
  flags: __webpack_require__(23),
  identifications: __webpack_require__(25),
  messages: __webpack_require__(28),
  observation_field_values: __webpack_require__(30),
  observation_photos: __webpack_require__(32),
  observation_sounds: __webpack_require__(33),
  observations: __webpack_require__(34),
  photos: __webpack_require__(36),
  places: __webpack_require__(37),
  posts: __webpack_require__(39),
  projects: __webpack_require__(41),
  project_observations: __webpack_require__(42),
  project_users: __webpack_require__(44),
  sounds: __webpack_require__(46),
  taxa: __webpack_require__(47),
  users: __webpack_require__(48),
  Annotation: __webpack_require__(13),
  Comment: __webpack_require__(15),
  ControlledTerm: __webpack_require__(22),
  Flag: __webpack_require__(24),
  Identification: __webpack_require__(26),
  Observation: __webpack_require__(27),
  ObservationFieldValue: __webpack_require__(31),
  Photo: __webpack_require__(18),
  Place: __webpack_require__(38),
  Post: __webpack_require__(40),
  Project: __webpack_require__(35),
  ProjectUser: __webpack_require__(45),
  Taxon: __webpack_require__(17),
  User: __webpack_require__(19),
  FileUpload: __webpack_require__(49)
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  LocalFormData = __webpack_require__(4); // eslint-disable-line global-require, import/no-extraneous-dependencies
}

var querystring = __webpack_require__(5);

var util = __webpack_require__(8);

var INaturalistAPIResponse = __webpack_require__(10);

var iNaturalistAPI =
/*#__PURE__*/
function () {
  function iNaturalistAPI() {
    _classCallCheck(this, iNaturalistAPI);
  }

  _createClass(iNaturalistAPI, null, [{
    key: "fetch",
    value: function fetch(route, ids, params, options) {
      var fetchIDs = ids;

      if (!Array.isArray(fetchIDs)) {
        fetchIDs = [fetchIDs];
      }

      var apiToken = iNaturalistAPI.apiToken(options);
      var headers = apiToken ? {
        Authorization: apiToken
      } : {};

      if (params && params.fields && _typeof(params.fields) === "object") {
        headers.Accept = "application/json";
        headers["X-HTTP-Method-Override"] = "GET";
        return localFetch("".concat(iNaturalistAPI.apiURL, "/").concat(route, "/").concat(fetchIDs.join(",")), {
          method: "post",
          headers: headers,
          body: JSON.stringify(params)
        }).then(iNaturalistAPI.thenText).then(iNaturalistAPI.thenJson).then(iNaturalistAPI.thenWrap);
      }

      var query = params ? "?".concat(querystring.stringify(params)) : "";
      return localFetch("".concat(iNaturalistAPI.apiURL) + "/".concat(route, "/").concat(fetchIDs.join(",")).concat(query), {
        headers: headers
      }).then(iNaturalistAPI.thenText).then(iNaturalistAPI.thenJson).then(iNaturalistAPI.thenWrap);
    } // Note, this generally assumes that all GET requests go to the Node API. If
    // you want to GET something from the Rails API, call this with
    // useWriteApi: true

  }, {
    key: "get",
    value: function get(route, params, opts) {
      var options = Object.assign({}, opts || {});
      var interpolated = iNaturalistAPI.interpolateRouteParams(route, params);

      if (interpolated.err) {
        return interpolated.err;
      }

      var thisRoute = interpolated.route;
      var apiToken = options.useAuth ? iNaturalistAPI.apiToken(options) : null;
      var headers = {
        Accept: "application/json",
        "X-Via": "inaturalistjs"
      };

      if (apiToken) {
        headers.Authorization = apiToken;
      }

      var host = options.useWriteApi ? iNaturalistAPI.writeApiURL : iNaturalistAPI.apiURL;
      var url = "".concat(host, "/").concat(thisRoute);

      if (interpolated.remainingParams && Object.keys(interpolated.remainingParams).length > 0) {
        url += "?".concat(querystring.stringify(interpolated.remainingParams));
      }

      if (params && params.fields && _typeof(params.fields) === "object") {
        headers["X-HTTP-Method-Override"] = "GET";
        headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS, PUT, DELETE, HEAD";
        return localFetch(url, {
          method: "post",
          headers: headers,
          body: JSON.stringify(params)
        }).then(iNaturalistAPI.thenText).then(iNaturalistAPI.thenJson).then(iNaturalistAPI.thenWrap);
      }

      return localFetch(url, {
        headers: headers
      }).then(iNaturalistAPI.thenText).then(iNaturalistAPI.thenJson).then(iNaturalistAPI.thenWrap);
    }
  }, {
    key: "post",
    value: function post(route, p, opts) {
      var options = Object.assign({}, opts || {});
      var params = Object.assign({}, p || {}); // interpolate path params, e.g. /:id => /1

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
        // multipart requests reference all nested parameter names as strings
        // so flatten arrays into "arr[0]" and objects into "obj[prop]"
        params = iNaturalistAPI.flattenMultipartParams(params);
        body = new LocalFormData();
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
        body = JSON.stringify(params);
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
      var options = Object.assign({}, opts, {
        method: "head"
      });
      return iNaturalistAPI.post(route, params, options);
    } // a variant of post using the http PUT method

  }, {
    key: "put",
    value: function put(route, params) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var options = Object.assign({}, opts, {
        method: "put"
      });
      return iNaturalistAPI.post(route, params, options);
    } // a variant of post using the http DELETE method

  }, {
    key: "delete",
    value: function _delete(route, params) {
      var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var options = Object.assign({}, opts, {
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
      var options = Object.assign({}, opts || {}, {
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
      var remainingParams = Object.assign({}, params);
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
      return Object.assign({}, options, {
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
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __root__ = function (root) {
  function F() {
    this.fetch = false;
  }

  F.prototype = root;
  return new F();
}(typeof self !== 'undefined' ? self : this);

(function (self) {
  (function (self) {
    if (self.fetch) {
      return;
    }

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

    if (support.arrayBuffer) {
      var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

      var isDataView = function isDataView(obj) {
        return obj && DataView.prototype.isPrototypeOf(obj);
      };

      var isArrayBufferView = ArrayBuffer.isView || function (obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
      };
    }

    function normalizeName(name) {
      if (typeof name !== 'string') {
        name = String(name);
      }

      if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
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
      this.map[name] = oldValue ? oldValue + ',' + value : value;
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
          throw new Error('unsupported BodyInit type');
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

        if (!body && input._bodyInit != null) {
          body = input._bodyInit;
          input.bodyUsed = true;
        }
      } else {
        this.url = String(input);
      }

      this.credentials = options.credentials || this.credentials || 'omit';

      if (options.headers || !this.headers) {
        this.headers = new Headers(options.headers);
      }

      this.method = normalizeMethod(options.method || this.method || 'GET');
      this.mode = options.mode || this.mode || null;
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

    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;

    self.fetch = function (input, init) {
      return new Promise(function (resolve, reject) {
        var request = new Request(input, init);
        var xhr = new XMLHttpRequest();

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
        xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
      });
    };

    self.fetch.polyfill = true;
  })(typeof self !== 'undefined' ? self : this);
}).call(__root__, void 0);
var fetch = __root__.fetch;
var Response = fetch.Response = __root__.Response;
var Request = fetch.Request = __root__.Request;
var Headers = fetch.Headers = __root__.Headers;

if (( false ? undefined : _typeof(module)) === 'object' && module.exports) {
  module.exports = fetch; // Needed for TypeScript consumers without esModuleInterop.

  module.exports.default = fetch;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-env browser */
module.exports = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' ? self.FormData : window.FormData;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(6);
exports.encode = exports.stringify = __webpack_require__(7);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

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


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var util =
/*#__PURE__*/
function () {
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(9)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Model = __webpack_require__(11);

var iNaturalistAPIResponse =
/*#__PURE__*/
function (_Model) {
  _inherits(iNaturalistAPIResponse, _Model);

  function iNaturalistAPIResponse() {
    _classCallCheck(this, iNaturalistAPIResponse);

    return _possibleConstructorReturn(this, _getPrototypeOf(iNaturalistAPIResponse).apply(this, arguments));
  }

  return iNaturalistAPIResponse;
}(Model);

module.exports = iNaturalistAPIResponse;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Model =
/*#__PURE__*/
function () {
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var Annotation = __webpack_require__(13);

var annotations =
/*#__PURE__*/
function () {
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
      return iNaturalistAPI.delete("annotations/:id", params, options);
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
        endpoint = "annotations/:id/unvote";
      }

      return iNaturalistAPI.delete(endpoint, params, options);
    }
  }]);

  return annotations;
}();

module.exports = annotations;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Model = __webpack_require__(11);

var Annotation =
/*#__PURE__*/
function (_Model) {
  _inherits(Annotation, _Model);

  function Annotation() {
    _classCallCheck(this, Annotation);

    return _possibleConstructorReturn(this, _getPrototypeOf(Annotation).apply(this, arguments));
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var Comment = __webpack_require__(15);

var comments =
/*#__PURE__*/
function () {
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
      return iNaturalistAPI.delete("comments/:id", params, options);
    }
  }]);

  return comments;
}();

module.exports = comments;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Model = __webpack_require__(11);

var Comment =
/*#__PURE__*/
function (_Model) {
  _inherits(Comment, _Model);

  function Comment() {
    _classCallCheck(this, Comment);

    return _possibleConstructorReturn(this, _getPrototypeOf(Comment).apply(this, arguments));
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var Taxon = __webpack_require__(17);

var computervision =
/*#__PURE__*/
function () {
  function computervision() {
    _classCallCheck(this, computervision);
  }

  _createClass(computervision, null, [{
    key: "score_image",
    value: function score_image(params) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // eslint-disable-line camelcase
      var options = Object.assign({}, opts);
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Model = __webpack_require__(11);

var Photo = __webpack_require__(18);

var User = __webpack_require__(19);

var ConservationStatus = __webpack_require__(20);

var Taxon =
/*#__PURE__*/
function (_Model) {
  _inherits(Taxon, _Model);

  function Taxon(attrs) {
    var _this;

    _classCallCheck(this, Taxon);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Taxon).call(this, attrs));

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Model = __webpack_require__(11);

var Photo =
/*#__PURE__*/
function (_Model) {
  _inherits(Photo, _Model);

  function Photo() {
    _classCallCheck(this, Photo);

    return _possibleConstructorReturn(this, _getPrototypeOf(Photo).apply(this, arguments));
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
  }]);

  return Photo;
}(Model);

module.exports = Photo;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Model = __webpack_require__(11);

var User =
/*#__PURE__*/
function (_Model) {
  _inherits(User, _Model);

  function User() {
    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, _getPrototypeOf(User).apply(this, arguments));
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Model = __webpack_require__(11);

var ConservationStatus =
/*#__PURE__*/
function (_Model) {
  _inherits(ConservationStatus, _Model);

  function ConservationStatus() {
    _classCallCheck(this, ConservationStatus);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConservationStatus).apply(this, arguments));
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var ControlledTerm = __webpack_require__(22);

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

var controlledTerms =
/*#__PURE__*/
function () {
  function controlledTerms() {
    _classCallCheck(this, controlledTerms);
  }

  _createClass(controlledTerms, null, [{
    key: "for_taxon",
    // eslint-disable-line camelcase
    value: function for_taxon(params) {
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Model = __webpack_require__(11);

var ControlledTerm =
/*#__PURE__*/
function (_Model) {
  _inherits(ControlledTerm, _Model);

  function ControlledTerm(attrs) {
    var _this;

    _classCallCheck(this, ControlledTerm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ControlledTerm).call(this, attrs));

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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var Flag = __webpack_require__(24);

var flags =
/*#__PURE__*/
function () {
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
      return iNaturalistAPI.delete("flags/:id", params, options);
    }
  }]);

  return flags;
}();

module.exports = flags;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Model = __webpack_require__(11);

var Flag =
/*#__PURE__*/
function (_Model) {
  _inherits(Flag, _Model);

  function Flag() {
    _classCallCheck(this, Flag);

    return _possibleConstructorReturn(this, _getPrototypeOf(Flag).apply(this, arguments));
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var Identification = __webpack_require__(26);

var Taxon = __webpack_require__(17);

var User = __webpack_require__(19);

var Observation = __webpack_require__(27);

var identifications =
/*#__PURE__*/
function () {
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
      return iNaturalistAPI.delete("identifications/:id", params, options);
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
            var r = Object.assign({}, res);
            r.taxon = new Taxon(r.taxon);
            r.identification = new Identification(r.identification);
            delete r.identification.observation.identifications;
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
            var r = Object.assign({}, res);
            r.taxon = new Taxon(r.taxon);
            r.identification = new Identification(r.identification);
            delete r.identification.observation.identifications;
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Model = __webpack_require__(11);

var Taxon = __webpack_require__(17);

var Identification =
/*#__PURE__*/
function (_Model) {
  _inherits(Identification, _Model);

  function Identification(attrs) {
    var _this;

    _classCallCheck(this, Identification);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Identification).call(this, attrs));

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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint prefer-destructuring: 0 */
var Model = __webpack_require__(11);

var Taxon = __webpack_require__(17);

var Photo = __webpack_require__(18);

var Identification = __webpack_require__(26);

var Observation =
/*#__PURE__*/
function (_Model) {
  _inherits(Observation, _Model);

  function Observation(attrs) {
    var _this;

    _classCallCheck(this, Observation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Observation).call(this, attrs));

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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var Message = __webpack_require__(29);

var messages =
/*#__PURE__*/
function () {
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
      return iNaturalistAPI.delete("messages/:id", params, options);
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Model = __webpack_require__(11);

var Message =
/*#__PURE__*/
function (_Model) {
  _inherits(Message, _Model);

  function Message() {
    _classCallCheck(this, Message);

    return _possibleConstructorReturn(this, _getPrototypeOf(Message).apply(this, arguments));
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var ObservationFieldValue = __webpack_require__(31);

var observationFieldValues =
/*#__PURE__*/
function () {
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
      return iNaturalistAPI.delete("observation_field_values/:id", params, options);
    }
  }]);

  return observationFieldValues;
}();

module.exports = observationFieldValues;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Model = __webpack_require__(11);

var ObservationFieldValue =
/*#__PURE__*/
function (_Model) {
  _inherits(ObservationFieldValue, _Model);

  function ObservationFieldValue() {
    _classCallCheck(this, ObservationFieldValue);

    return _possibleConstructorReturn(this, _getPrototypeOf(ObservationFieldValue).apply(this, arguments));
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var observationPhotos =
/*#__PURE__*/
function () {
  function observationPhotos() {
    _classCallCheck(this, observationPhotos);
  }

  _createClass(observationPhotos, null, [{
    key: "create",
    value: function create(params, options) {
      return iNaturalistAPI.upload("observation_photos", params, options);
    }
  }, {
    key: "update",
    value: function update(params, opts) {
      var options = Object.assign({}, opts);
      options.method = "PUT";
      return iNaturalistAPI.upload("observation_photos/:id", params, options);
    }
  }, {
    key: "delete",
    value: function _delete(params, options) {
      return iNaturalistAPI.delete("observation_photos/:id", params, options);
    }
  }]);

  return observationPhotos;
}();

module.exports = observationPhotos;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var observationSounds =
/*#__PURE__*/
function () {
  function observationSounds() {
    _classCallCheck(this, observationSounds);
  }

  _createClass(observationSounds, null, [{
    key: "create",
    value: function create(params, options) {
      return iNaturalistAPI.upload("observation_sounds", params, options);
    }
  }]);

  return observationSounds;
}();

module.exports = observationSounds;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var ControlledTerm = __webpack_require__(22);

var Observation = __webpack_require__(27);

var Project = __webpack_require__(35);

var Taxon = __webpack_require__(17);

var User = __webpack_require__(19);

var observations =
/*#__PURE__*/
function () {
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
      return iNaturalistAPI.delete("observations/:id", params, options);
    }
  }, {
    key: "fave",
    value: function fave(params, options) {
      return observations.vote(params, options);
    }
  }, {
    key: "unfave",
    value: function unfave(params, options) {
      return observations.unvote(params, options);
    }
  }, {
    key: "vote",
    value: function vote(params, options) {
      return iNaturalistAPI.post("votes/vote/observation/:id", params, options).then(Observation.typifyInstanceResponse);
    }
  }, {
    key: "unvote",
    value: function unvote(params, options) {
      return iNaturalistAPI.delete("votes/unvote/observation/:id", params, options);
    }
  }, {
    key: "subscribe",
    value: function subscribe(params, options) {
      return iNaturalistAPI.post("subscriptions/Observation/:id/subscribe", params, options);
    }
  }, {
    key: "review",
    value: function review(params, options) {
      var p = Object.assign({}, params);
      p.reviewed = "true";
      return iNaturalistAPI.post("observations/:id/review", p, options);
    }
  }, {
    key: "unreview",
    value: function unreview(params, options) {
      var p = Object.assign({}, params);
      return iNaturalistAPI.delete("observations/:id/review", p, options);
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
      return iNaturalistAPI.delete("observations/:id/quality/:metric", params, options);
    }
  }, {
    key: "fetch",
    value: function fetch(ids, params) {
      return iNaturalistAPI.fetch("observations", ids, params).then(Observation.typifyResultsResponse);
    }
  }, {
    key: "search",
    value: function search(params) {
      return iNaturalistAPI.get("observations", params, {
        useAuth: true
      }).then(Observation.typifyResultsResponse);
    }
  }, {
    key: "identifiers",
    value: function identifiers(params) {
      return iNaturalistAPI.get("observations/identifiers", params).then(function (response) {
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
    key: "observers",
    value: function observers(params) {
      return iNaturalistAPI.get("observations/observers", params).then(function (response) {
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
    key: "speciesCounts",
    value: function speciesCounts(params) {
      return iNaturalistAPI.get("observations/species_counts", params, {
        useAuth: true
      }).then(function (response) {
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
    key: "iconicTaxaCounts",
    value: function iconicTaxaCounts(params) {
      return iNaturalistAPI.get("observations/iconic_taxa_counts", params, {
        useAuth: true
      }).then(function (response) {
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
    key: "iconicTaxaSpeciesCounts",
    value: function iconicTaxaSpeciesCounts(params) {
      return iNaturalistAPI.get("observations/iconic_taxa_species_counts", params, {
        useAuth: true
      }).then(function (response) {
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
    key: "popularFieldValues",
    value: function popularFieldValues(params) {
      return iNaturalistAPI.get("observations/popular_field_values", params).then(function (response) {
        if (response.results) {
          response.results = response.results.map(function (res) {
            var r = Object.assign({}, res);
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
            return Object.assign({}, r, {
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
      var options = Object.assign({}, opts || {});
      options.useAuth = true;
      return iNaturalistAPI.get("observations/similar_species", params, options).then(function (response) {
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
    key: "taxa",
    value: function taxa(params) {
      return iNaturalistAPI.get("observations/taxa", params);
    }
  }]);

  return observations;
}();

module.exports = observations;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Model = __webpack_require__(11);

var Project =
/*#__PURE__*/
function (_Model) {
  _inherits(Project, _Model);

  function Project() {
    _classCallCheck(this, Project);

    return _possibleConstructorReturn(this, _getPrototypeOf(Project).apply(this, arguments));
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var photos =
/*#__PURE__*/
function () {
  function photos() {
    _classCallCheck(this, photos);
  }

  _createClass(photos, null, [{
    key: "create",
    value: function create(params, options) {
      return iNaturalistAPI.upload("photos", params, options);
    }
  }]);

  return photos;
}();

module.exports = photos;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var Place = __webpack_require__(38);

var places =
/*#__PURE__*/
function () {
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
      return iNaturalistAPI.get("places/autocomplete", params).then(Place.typifyResultsResponse);
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Model = __webpack_require__(11);

var Place =
/*#__PURE__*/
function (_Model) {
  _inherits(Place, _Model);

  function Place() {
    _classCallCheck(this, Place);

    return _possibleConstructorReturn(this, _getPrototypeOf(Place).apply(this, arguments));
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var Post = __webpack_require__(40);

var posts =
/*#__PURE__*/
function () {
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
      return iNaturalistAPI.get("posts/for_user", params, options).then(Post.typifyArrayResponse);
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
      return iNaturalistAPI.delete("posts/:id", params, options);
    }
  }]);

  return posts;
}();

module.exports = posts;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Model = __webpack_require__(11);

var Post =
/*#__PURE__*/
function (_Model) {
  _inherits(Post, _Model);

  function Post() {
    _classCallCheck(this, Post);

    return _possibleConstructorReturn(this, _getPrototypeOf(Post).apply(this, arguments));
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var Project = __webpack_require__(35);

var projects =
/*#__PURE__*/
function () {
  function projects() {
    _classCallCheck(this, projects);
  }

  _createClass(projects, null, [{
    key: "fetch",
    value: function fetch(ids, params) {
      return iNaturalistAPI.fetch("projects", ids, params).then(Project.typifyResultsResponse);
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
      return iNaturalistAPI.delete("projects/:id", params, options);
    }
  }, {
    key: "join",
    value: function join(params, options) {
      return iNaturalistAPI.post("projects/:id/join", params, options);
    }
  }, {
    key: "leave",
    value: function leave(params, options) {
      return iNaturalistAPI.delete("projects/:id/leave", params, options);
    }
  }, {
    key: "add",
    value: function add(params, options) {
      return iNaturalistAPI.post("projects/:id/add", params, options);
    }
  }, {
    key: "remove",
    value: function remove(params, options) {
      return iNaturalistAPI.delete("projects/:id/remove", params, options);
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var ProjectObservation = __webpack_require__(43);

var projectObservations =
/*#__PURE__*/
function () {
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
      return iNaturalistAPI.delete("project_observations/:id", params, options);
    }
  }]);

  return projectObservations;
}();

module.exports = projectObservations;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Model = __webpack_require__(11);

var ProjectObservation =
/*#__PURE__*/
function (_Model) {
  _inherits(ProjectObservation, _Model);

  function ProjectObservation() {
    _classCallCheck(this, ProjectObservation);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProjectObservation).apply(this, arguments));
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var ProjectUser = __webpack_require__(45);

var projectUsers =
/*#__PURE__*/
function () {
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Model = __webpack_require__(11);

var ProjectUser =
/*#__PURE__*/
function (_Model) {
  _inherits(ProjectUser, _Model);

  function ProjectUser() {
    _classCallCheck(this, ProjectUser);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProjectUser).apply(this, arguments));
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var sounds =
/*#__PURE__*/
function () {
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var Taxon = __webpack_require__(17);

var taxa =
/*#__PURE__*/
function () {
  function taxa() {
    _classCallCheck(this, taxa);
  }

  _createClass(taxa, null, [{
    key: "fetch",
    value: function fetch(ids, params) {
      return iNaturalistAPI.fetch("taxa", ids, params).then(Taxon.typifyResultsResponse);
    }
  }, {
    key: "search",
    value: function search(params) {
      return iNaturalistAPI.get("taxa", params, params).then(Taxon.typifyResultsResponse);
    }
  }, {
    key: "autocomplete",
    value: function autocomplete(params) {
      return iNaturalistAPI.get("taxa/autocomplete", params, {
        useAuth: true
      }).then(Taxon.typifyResultsResponse);
    }
  }, {
    key: "suggest",
    value: function suggest(params) {
      return iNaturalistAPI.get("taxa/suggest", params, {
        useAuth: true
      }).then(function (response) {
        response.results = response.results.map(function (r) {
          return Object.assign({}, r, {
            taxon: new Taxon(r.taxon)
          });
        });
        return response;
      });
    }
  }, {
    key: "lifelist_metadata",
    value: function lifelist_metadata(params) {
      // eslint-disable-line camelcase
      return iNaturalistAPI.get("taxa/lifelist_metadata", params, params).then(Taxon.typifyResultsResponse);
    }
  }, {
    key: "wanted",
    value: function wanted(params) {
      return iNaturalistAPI.get("taxa/:id/wanted", params, {
        useAuth: true
      }).then(function (response) {
        return Taxon.typifyResultsResponse(response);
      });
    }
  }]);

  return taxa;
}();

module.exports = taxa;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var iNaturalistAPI = __webpack_require__(1);

var User = __webpack_require__(19);

var users =
/*#__PURE__*/
function () {
  function users() {
    _classCallCheck(this, users);
  }

  _createClass(users, null, [{
    key: "fetch",
    value: function fetch(ids) {
      return iNaturalistAPI.fetch("users", ids).then(User.typifyResultsResponse);
    }
  }, {
    key: "update",
    value: function update(params, options) {
      return iNaturalistAPI.upload("users/:id", params, Object.assign({}, options, {
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
      var options = Object.assign({}, opts);
      options.useAuth = true;
      return iNaturalistAPI.get("users/me", null, options).then(User.typifyResultsResponse);
    }
  }, {
    key: "mute",
    value: function mute(params) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = Object.assign({}, opts);
      options.useAuth = true;
      return iNaturalistAPI.post("users/:id/mute", params, options);
    }
  }, {
    key: "unmute",
    value: function unmute(params) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = Object.assign({}, opts);
      options.useAuth = true;
      return iNaturalistAPI.delete("users/:id/mute", params, options);
    }
  }]);

  return users;
}();

module.exports = users;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FileUpload = function FileUpload(attrs) {
  _classCallCheck(this, FileUpload);

  Object.assign(this, attrs);
};

module.exports = FileUpload;

/***/ })
/******/ ])));