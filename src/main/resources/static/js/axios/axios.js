<!DOCTYPE html><html lang="en"><head><script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-140352188-1"></script><script>window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-140352188-1');</script><meta charSet="utf-8"/><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/><meta name="description" content="The CDN for axios"/><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1"/><meta name="timestamp" content="2020-01-13T08:44:43.238Z"/><link rel="shortcut icon" href="/favicon.ico"/><title>UNPKG - axios</title><script>window.Promise || document.write('\x3Cscript src="/es6-promise@4.2.5/dist/es6-promise.min.js">\x3C/script>\x3Cscript>ES6Promise.polyfill()\x3C/script>')</script><script>window.fetch || document.write('\x3Cscript src="/whatwg-fetch@3.0.0/dist/fetch.umd.js">\x3C/script>')</script><script>window.__DATA__ = {"packageName":"axios","packageVersion":"0.19.1","availableVersions":["0.1.0","0.2.0","0.2.1","0.2.2","0.3.0","0.3.1","0.4.0","0.4.1","0.4.2","0.5.0","0.5.1","0.5.2","0.5.3","0.5.4","0.6.0","0.7.0","0.8.0","0.8.1","0.9.0","0.9.1","0.10.0","0.11.0","0.11.1","0.12.0","0.13.0","0.13.1","0.14.0","0.15.0","0.15.1","0.15.2","0.15.3","0.16.0","0.16.1","0.16.2","0.17.0","0.17.1","0.18.0","0.18.1","0.19.0-beta.1","0.19.0","0.19.1"],"filename":"/dist/axios.js","target":{"path":"/dist/axios.js","type":"file","details":{"contentType":"application/javascript","integrity":"sha384-gX2MR2qKC0nfxvfyy9ENLzk1ajatR6fYxg40paCiRNwoZGpvGFC8IlfEofjfDZq1","language":"JavaScript","size":46593,"uri":null,"highlights":["<span class=\"code-comment\">/* axios v0.19.1 | (c) 2020 by Matt Zabriskie */</span>\n","(<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">webpackUniversalModuleDefinition</span>(<span class=\"code-params\">root, factory</span>) </span>{\n","\t<span class=\"code-keyword\">if</span>(<span class=\"code-keyword\">typeof</span> exports === <span class=\"code-string\">'object'</span> &amp;&amp; <span class=\"code-keyword\">typeof</span> <span class=\"code-built_in\">module</span> === <span class=\"code-string\">'object'</span>)\n","\t\t<span class=\"code-built_in\">module</span>.exports = factory();\n","\t<span class=\"code-keyword\">else</span> <span class=\"code-keyword\">if</span>(<span class=\"code-keyword\">typeof</span> define === <span class=\"code-string\">'function'</span> &amp;&amp; define.amd)\n","\t\tdefine([], factory);\n","\t<span class=\"code-keyword\">else</span> <span class=\"code-keyword\">if</span>(<span class=\"code-keyword\">typeof</span> exports === <span class=\"code-string\">'object'</span>)\n","\t\texports[<span class=\"code-string\">\"axios\"</span>] = factory();\n","\t<span class=\"code-keyword\">else</span>\n","\t\troot[<span class=\"code-string\">\"axios\"</span>] = factory();\n","})(<span class=\"code-keyword\">this</span>, <span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\"></span>) </span>{\n","<span class=\"code-keyword\">return</span> <span class=\"code-comment\">/******/</span> (<span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">modules</span>) </span>{ <span class=\"code-comment\">// webpackBootstrap</span>\n","<span class=\"code-comment\">/******/</span> \t<span class=\"code-comment\">// The module cache</span>\n","<span class=\"code-comment\">/******/</span> \t<span class=\"code-keyword\">var</span> installedModules = {};\n","<span class=\"code-comment\">/******/</span>\n","<span class=\"code-comment\">/******/</span> \t<span class=\"code-comment\">// The require function</span>\n","<span class=\"code-comment\">/******/</span> \t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">__webpack_require__</span>(<span class=\"code-params\">moduleId</span>) </span>{\n","<span class=\"code-comment\">/******/</span>\n","<span class=\"code-comment\">/******/</span> \t\t<span class=\"code-comment\">// Check if module is in cache</span>\n","<span class=\"code-comment\">/******/</span> \t\t<span class=\"code-keyword\">if</span>(installedModules[moduleId])\n","<span class=\"code-comment\">/******/</span> \t\t\t<span class=\"code-keyword\">return</span> installedModules[moduleId].exports;\n","<span class=\"code-comment\">/******/</span>\n","<span class=\"code-comment\">/******/</span> \t\t<span class=\"code-comment\">// Create a new module (and put it into the cache)</span>\n","<span class=\"code-comment\">/******/</span> \t\t<span class=\"code-keyword\">var</span> <span class=\"code-built_in\">module</span> = installedModules[moduleId] = {\n","<span class=\"code-comment\">/******/</span> \t\t\texports: {},\n","<span class=\"code-comment\">/******/</span> \t\t\tid: moduleId,\n","<span class=\"code-comment\">/******/</span> \t\t\tloaded: <span class=\"code-literal\">false</span>\n","<span class=\"code-comment\">/******/</span> \t\t};\n","<span class=\"code-comment\">/******/</span>\n","<span class=\"code-comment\">/******/</span> \t\t<span class=\"code-comment\">// Execute the module function</span>\n","<span class=\"code-comment\">/******/</span> \t\tmodules[moduleId].call(<span class=\"code-built_in\">module</span>.exports, <span class=\"code-built_in\">module</span>, <span class=\"code-built_in\">module</span>.exports, __webpack_require__);\n","<span class=\"code-comment\">/******/</span>\n","<span class=\"code-comment\">/******/</span> \t\t<span class=\"code-comment\">// Flag the module as loaded</span>\n","<span class=\"code-comment\">/******/</span> \t\t<span class=\"code-built_in\">module</span>.loaded = <span class=\"code-literal\">true</span>;\n","<span class=\"code-comment\">/******/</span>\n","<span class=\"code-comment\">/******/</span> \t\t<span class=\"code-comment\">// Return the exports of the module</span>\n","<span class=\"code-comment\">/******/</span> \t\t<span class=\"code-keyword\">return</span> <span class=\"code-built_in\">module</span>.exports;\n","<span class=\"code-comment\">/******/</span> \t}\n","<span class=\"code-comment\">/******/</span>\n","<span class=\"code-comment\">/******/</span>\n","<span class=\"code-comment\">/******/</span> \t<span class=\"code-comment\">// expose the modules object (__webpack_modules__)</span>\n","<span class=\"code-comment\">/******/</span> \t__webpack_require__.m = modules;\n","<span class=\"code-comment\">/******/</span>\n","<span class=\"code-comment\">/******/</span> \t<span class=\"code-comment\">// expose the module cache</span>\n","<span class=\"code-comment\">/******/</span> \t__webpack_require__.c = installedModules;\n","<span class=\"code-comment\">/******/</span>\n","<span class=\"code-comment\">/******/</span> \t<span class=\"code-comment\">// __webpack_public_path__</span>\n","<span class=\"code-comment\">/******/</span> \t__webpack_require__.p = <span class=\"code-string\">\"\"</span>;\n","<span class=\"code-comment\">/******/</span>\n","<span class=\"code-comment\">/******/</span> \t<span class=\"code-comment\">// Load entry module and return exports</span>\n","<span class=\"code-comment\">/******/</span> \t<span class=\"code-keyword\">return</span> __webpack_require__(<span class=\"code-number\">0</span>);\n","<span class=\"code-comment\">/******/</span> })\n","<span class=\"code-comment\">/************************************************************************/</span>\n","<span class=\"code-comment\">/******/</span> ([\n","<span class=\"code-comment\">/* 0 */</span>\n","<span class=\"code-comment\">/***/</span> (<span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">module, exports, __webpack_require__</span>) </span>{\n","\n","\t<span class=\"code-built_in\">module</span>.exports = __webpack_require__(<span class=\"code-number\">1</span>);\n","\n","<span class=\"code-comment\">/***/</span> }),\n","<span class=\"code-comment\">/* 1 */</span>\n","<span class=\"code-comment\">/***/</span> (<span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">module, exports, __webpack_require__</span>) </span>{\n","\n","<span class=\"code-meta\">\t'use strict'</span>;\n","\t\n","\t<span class=\"code-keyword\">var</span> utils = __webpack_require__(<span class=\"code-number\">2</span>);\n","\t<span class=\"code-keyword\">var</span> bind = __webpack_require__(<span class=\"code-number\">3</span>);\n","\t<span class=\"code-keyword\">var</span> Axios = __webpack_require__(<span class=\"code-number\">4</span>);\n","\t<span class=\"code-keyword\">var</span> mergeConfig = __webpack_require__(<span class=\"code-number\">23</span>);\n","\t<span class=\"code-keyword\">var</span> defaults = __webpack_require__(<span class=\"code-number\">10</span>);\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Create an instance of Axios\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Object} defaultConfig The default config for the instance\n</span>","<span class=\"code-comment\">\t * @return {Axios} A new instance of Axios\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">createInstance</span>(<span class=\"code-params\">defaultConfig</span>) </span>{\n","\t  <span class=\"code-keyword\">var</span> context = <span class=\"code-keyword\">new</span> Axios(defaultConfig);\n","\t  <span class=\"code-keyword\">var</span> instance = bind(Axios.prototype.request, context);\n","\t\n","\t  <span class=\"code-comment\">// Copy axios.prototype to instance</span>\n","\t  utils.extend(instance, Axios.prototype, context);\n","\t\n","\t  <span class=\"code-comment\">// Copy context to instance</span>\n","\t  utils.extend(instance, context);\n","\t\n","\t  <span class=\"code-keyword\">return</span> instance;\n","\t}\n","\t\n","\t<span class=\"code-comment\">// Create the default instance to be exported</span>\n","\t<span class=\"code-keyword\">var</span> axios = createInstance(defaults);\n","\t\n","\t<span class=\"code-comment\">// Expose Axios class to allow class inheritance</span>\n","\taxios.Axios = Axios;\n","\t\n","\t<span class=\"code-comment\">// Factory for creating new instances</span>\n","\taxios.create = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">create</span>(<span class=\"code-params\">instanceConfig</span>) </span>{\n","\t  <span class=\"code-keyword\">return</span> createInstance(mergeConfig(axios.defaults, instanceConfig));\n","\t};\n","\t\n","\t<span class=\"code-comment\">// Expose Cancel &amp; CancelToken</span>\n","\taxios.Cancel = __webpack_require__(<span class=\"code-number\">24</span>);\n","\taxios.CancelToken = __webpack_require__(<span class=\"code-number\">25</span>);\n","\taxios.isCancel = __webpack_require__(<span class=\"code-number\">9</span>);\n","\t\n","\t<span class=\"code-comment\">// Expose all/spread</span>\n","\taxios.all = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">all</span>(<span class=\"code-params\">promises</span>) </span>{\n","\t  <span class=\"code-keyword\">return</span> <span class=\"code-built_in\">Promise</span>.all(promises);\n","\t};\n","\taxios.spread = __webpack_require__(<span class=\"code-number\">26</span>);\n","\t\n","\t<span class=\"code-built_in\">module</span>.exports = axios;\n","\t\n","\t<span class=\"code-comment\">// Allow use of default import syntax in TypeScript</span>\n","\t<span class=\"code-built_in\">module</span>.exports.default = axios;\n","\n","\n","<span class=\"code-comment\">/***/</span> }),\n","<span class=\"code-comment\">/* 2 */</span>\n","<span class=\"code-comment\">/***/</span> (<span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">module, exports, __webpack_require__</span>) </span>{\n","\n","<span class=\"code-meta\">\t'use strict'</span>;\n","\t\n","\t<span class=\"code-keyword\">var</span> bind = __webpack_require__(<span class=\"code-number\">3</span>);\n","\t\n","\t<span class=\"code-comment\">/*global toString:true*/</span>\n","\t\n","\t<span class=\"code-comment\">// utils is a library of generic helper functions non-specific to axios</span>\n","\t\n","\t<span class=\"code-keyword\">var</span> toString = <span class=\"code-built_in\">Object</span>.prototype.toString;\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Determine if a value is an Array\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Object} val The value to test\n</span>","<span class=\"code-comment\">\t * @returns {boolean} True if value is an Array, otherwise false\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">isArray</span>(<span class=\"code-params\">val</span>) </span>{\n","\t  <span class=\"code-keyword\">return</span> toString.call(val) === <span class=\"code-string\">'[object Array]'</span>;\n","\t}\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Determine if a value is undefined\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Object} val The value to test\n</span>","<span class=\"code-comment\">\t * @returns {boolean} True if the value is undefined, otherwise false\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">isUndefined</span>(<span class=\"code-params\">val</span>) </span>{\n","\t  <span class=\"code-keyword\">return</span> <span class=\"code-keyword\">typeof</span> val === <span class=\"code-string\">'undefined'</span>;\n","\t}\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Determine if a value is a Buffer\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Object} val The value to test\n</span>","<span class=\"code-comment\">\t * @returns {boolean} True if value is a Buffer, otherwise false\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">isBuffer</span>(<span class=\"code-params\">val</span>) </span>{\n","\t  <span class=\"code-keyword\">return</span> val !== <span class=\"code-literal\">null</span> &amp;&amp; !isUndefined(val) &amp;&amp; val.constructor !== <span class=\"code-literal\">null</span> &amp;&amp; !isUndefined(val.constructor)\n","\t    &amp;&amp; <span class=\"code-keyword\">typeof</span> val.constructor.isBuffer === <span class=\"code-string\">'function'</span> &amp;&amp; val.constructor.isBuffer(val);\n","\t}\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Determine if a value is an ArrayBuffer\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Object} val The value to test\n</span>","<span class=\"code-comment\">\t * @returns {boolean} True if value is an ArrayBuffer, otherwise false\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">isArrayBuffer</span>(<span class=\"code-params\">val</span>) </span>{\n","\t  <span class=\"code-keyword\">return</span> toString.call(val) === <span class=\"code-string\">'[object ArrayBuffer]'</span>;\n","\t}\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Determine if a value is a FormData\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Object} val The value to test\n</span>","<span class=\"code-comment\">\t * @returns {boolean} True if value is an FormData, otherwise false\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">isFormData</span>(<span class=\"code-params\">val</span>) </span>{\n","\t  <span class=\"code-keyword\">return</span> (<span class=\"code-keyword\">typeof</span> FormData !== <span class=\"code-string\">'undefined'</span>) &amp;&amp; (val <span class=\"code-keyword\">instanceof</span> FormData);\n","\t}\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Determine if a value is a view on an ArrayBuffer\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Object} val The value to test\n</span>","<span class=\"code-comment\">\t * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">isArrayBufferView</span>(<span class=\"code-params\">val</span>) </span>{\n","\t  <span class=\"code-keyword\">var</span> result;\n","\t  <span class=\"code-keyword\">if</span> ((<span class=\"code-keyword\">typeof</span> <span class=\"code-built_in\">ArrayBuffer</span> !== <span class=\"code-string\">'undefined'</span>) &amp;&amp; (<span class=\"code-built_in\">ArrayBuffer</span>.isView)) {\n","\t    result = <span class=\"code-built_in\">ArrayBuffer</span>.isView(val);\n","\t  } <span class=\"code-keyword\">else</span> {\n","\t    result = (val) &amp;&amp; (val.buffer) &amp;&amp; (val.buffer <span class=\"code-keyword\">instanceof</span> <span class=\"code-built_in\">ArrayBuffer</span>);\n","\t  }\n","\t  <span class=\"code-keyword\">return</span> result;\n","\t}\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Determine if a value is a String\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Object} val The value to test\n</span>","<span class=\"code-comment\">\t * @returns {boolean} True if value is a String, otherwise false\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">isString</span>(<span class=\"code-params\">val</span>) </span>{\n","\t  <span class=\"code-keyword\">return</span> <span class=\"code-keyword\">typeof</span> val === <span class=\"code-string\">'string'</span>;\n","\t}\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Determine if a value is a Number\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Object} val The value to test\n</span>","<span class=\"code-comment\">\t * @returns {boolean} True if value is a Number, otherwise false\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">isNumber</span>(<span class=\"code-params\">val</span>) </span>{\n","\t  <span class=\"code-keyword\">return</span> <span class=\"code-keyword\">typeof</span> val === <span class=\"code-string\">'number'</span>;\n","\t}\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Determine if a value is an Object\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Object} val The value to test\n</span>","<span class=\"code-comment\">\t * @returns {boolean} True if value is an Object, otherwise false\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">isObject</span>(<span class=\"code-params\">val</span>) </span>{\n","\t  <span class=\"code-keyword\">return</span> val !== <span class=\"code-literal\">null</span> &amp;&amp; <span class=\"code-keyword\">typeof</span> val === <span class=\"code-string\">'object'</span>;\n","\t}\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Determine if a value is a Date\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Object} val The value to test\n</span>","<span class=\"code-comment\">\t * @returns {boolean} True if value is a Date, otherwise false\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">isDate</span>(<span class=\"code-params\">val</span>) </span>{\n","\t  <span class=\"code-keyword\">return</span> toString.call(val) === <span class=\"code-string\">'[object Date]'</span>;\n","\t}\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Determine if a value is a File\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Object} val The value to test\n</span>","<span class=\"code-comment\">\t * @returns {boolean} True if value is a File, otherwise false\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">isFile</span>(<span class=\"code-params\">val</span>) </span>{\n","\t  <span class=\"code-keyword\">return</span> toString.call(val) === <span class=\"code-string\">'[object File]'</span>;\n","\t}\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Determine if a value is a Blob\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Object} val The value to test\n</span>","<span class=\"code-comment\">\t * @returns {boolean} True if value is a Blob, otherwise false\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">isBlob</span>(<span class=\"code-params\">val</span>) </span>{\n","\t  <span class=\"code-keyword\">return</span> toString.call(val) === <span class=\"code-string\">'[object Blob]'</span>;\n","\t}\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Determine if a value is a Function\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Object} val The value to test\n</span>","<span class=\"code-comment\">\t * @returns {boolean} True if value is a Function, otherwise false\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">isFunction</span>(<span class=\"code-params\">val</span>) </span>{\n","\t  <span class=\"code-keyword\">return</span> toString.call(val) === <span class=\"code-string\">'[object Function]'</span>;\n","\t}\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Determine if a value is a Stream\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Object} val The value to test\n</span>","<span class=\"code-comment\">\t * @returns {boolean} True if value is a Stream, otherwise false\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">isStream</span>(<span class=\"code-params\">val</span>) </span>{\n","\t  <span class=\"code-keyword\">return</span> isObject(val) &amp;&amp; isFunction(val.pipe);\n","\t}\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Determine if a value is a URLSearchParams object\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Object} val The value to test\n</span>","<span class=\"code-comment\">\t * @returns {boolean} True if value is a URLSearchParams object, otherwise false\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">isURLSearchParams</span>(<span class=\"code-params\">val</span>) </span>{\n","\t  <span class=\"code-keyword\">return</span> <span class=\"code-keyword\">typeof</span> URLSearchParams !== <span class=\"code-string\">'undefined'</span> &amp;&amp; val <span class=\"code-keyword\">instanceof</span> URLSearchParams;\n","\t}\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Trim excess whitespace off the beginning and end of a string\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {String} str The String to trim\n</span>","<span class=\"code-comment\">\t * @returns {String} The String freed of excess whitespace\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">trim</span>(<span class=\"code-params\">str</span>) </span>{\n","\t  <span class=\"code-keyword\">return</span> str.replace(<span class=\"code-regexp\">/^\\s*/</span>, <span class=\"code-string\">''</span>).replace(<span class=\"code-regexp\">/\\s*$/</span>, <span class=\"code-string\">''</span>);\n","\t}\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Determine if we're running in a standard browser environment\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * This allows axios to run in a web worker, and react-native.\n</span>","<span class=\"code-comment\">\t * Both environments support XMLHttpRequest, but not fully standard globals.\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * web workers:\n</span>","<span class=\"code-comment\">\t *  typeof window -&gt; undefined\n</span>","<span class=\"code-comment\">\t *  typeof document -&gt; undefined\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * react-native:\n</span>","<span class=\"code-comment\">\t *  navigator.product -&gt; 'ReactNative'\n</span>","<span class=\"code-comment\">\t * nativescript\n</span>","<span class=\"code-comment\">\t *  navigator.product -&gt; 'NativeScript' or 'NS'\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">isStandardBrowserEnv</span>(<span class=\"code-params\"></span>) </span>{\n","\t  <span class=\"code-keyword\">if</span> (<span class=\"code-keyword\">typeof</span> navigator !== <span class=\"code-string\">'undefined'</span> &amp;&amp; (navigator.product === <span class=\"code-string\">'ReactNative'</span> ||\n","\t                                           navigator.product === <span class=\"code-string\">'NativeScript'</span> ||\n","\t                                           navigator.product === <span class=\"code-string\">'NS'</span>)) {\n","\t    <span class=\"code-keyword\">return</span> <span class=\"code-literal\">false</span>;\n","\t  }\n","\t  <span class=\"code-keyword\">return</span> (\n","\t    <span class=\"code-keyword\">typeof</span> <span class=\"code-built_in\">window</span> !== <span class=\"code-string\">'undefined'</span> &amp;&amp;\n","\t    <span class=\"code-keyword\">typeof</span> <span class=\"code-built_in\">document</span> !== <span class=\"code-string\">'undefined'</span>\n","\t  );\n","\t}\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Iterate over an Array or an Object invoking a function for each item.\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * If `obj` is an Array callback will be called passing\n</span>","<span class=\"code-comment\">\t * the value, index, and complete array for each item.\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * If 'obj' is an Object callback will be called passing\n</span>","<span class=\"code-comment\">\t * the value, key, and complete object for each property.\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Object|Array} obj The object to iterate\n</span>","<span class=\"code-comment\">\t * @param {Function} fn The callback to invoke for each item\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">forEach</span>(<span class=\"code-params\">obj, fn</span>) </span>{\n","\t  <span class=\"code-comment\">// Don't bother if no value provided</span>\n","\t  <span class=\"code-keyword\">if</span> (obj === <span class=\"code-literal\">null</span> || <span class=\"code-keyword\">typeof</span> obj === <span class=\"code-string\">'undefined'</span>) {\n","\t    <span class=\"code-keyword\">return</span>;\n","\t  }\n","\t\n","\t  <span class=\"code-comment\">// Force an array if not already something iterable</span>\n","\t  <span class=\"code-keyword\">if</span> (<span class=\"code-keyword\">typeof</span> obj !== <span class=\"code-string\">'object'</span>) {\n","\t    <span class=\"code-comment\">/*eslint no-param-reassign:0*/</span>\n","\t    obj = [obj];\n","\t  }\n","\t\n","\t  <span class=\"code-keyword\">if</span> (isArray(obj)) {\n","\t    <span class=\"code-comment\">// Iterate over array values</span>\n","\t    <span class=\"code-keyword\">for</span> (<span class=\"code-keyword\">var</span> i = <span class=\"code-number\">0</span>, l = obj.length; i &lt; l; i++) {\n","\t      fn.call(<span class=\"code-literal\">null</span>, obj[i], i, obj);\n","\t    }\n","\t  } <span class=\"code-keyword\">else</span> {\n","\t    <span class=\"code-comment\">// Iterate over object keys</span>\n","\t    <span class=\"code-keyword\">for</span> (<span class=\"code-keyword\">var</span> key <span class=\"code-keyword\">in</span> obj) {\n","\t      <span class=\"code-keyword\">if</span> (<span class=\"code-built_in\">Object</span>.prototype.hasOwnProperty.call(obj, key)) {\n","\t        fn.call(<span class=\"code-literal\">null</span>, obj[key], key, obj);\n","\t      }\n","\t    }\n","\t  }\n","\t}\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Accepts varargs expecting each argument to be an object, then\n</span>","<span class=\"code-comment\">\t * immutably merges the properties of each object and returns result.\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * When multiple objects contain the same key the later object in\n</span>","<span class=\"code-comment\">\t * the arguments list will take precedence.\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * Example:\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * ```js\n</span>","<span class=\"code-comment\">\t * var result = merge({foo: 123}, {foo: 456});\n</span>","<span class=\"code-comment\">\t * console.log(result.foo); // outputs 456\n</span>","<span class=\"code-comment\">\t * ```\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Object} obj1 Object to merge\n</span>","<span class=\"code-comment\">\t * @returns {Object} Result of all merge properties\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">merge</span>(<span class=\"code-params\"><span class=\"code-regexp\">/* obj1, obj2, obj3, ... */</span></span>) </span>{\n","\t  <span class=\"code-keyword\">var</span> result = {};\n","\t  <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">assignValue</span>(<span class=\"code-params\">val, key</span>) </span>{\n","\t    <span class=\"code-keyword\">if</span> (<span class=\"code-keyword\">typeof</span> result[key] === <span class=\"code-string\">'object'</span> &amp;&amp; <span class=\"code-keyword\">typeof</span> val === <span class=\"code-string\">'object'</span>) {\n","\t      result[key] = merge(result[key], val);\n","\t    } <span class=\"code-keyword\">else</span> {\n","\t      result[key] = val;\n","\t    }\n","\t  }\n","\t\n","\t  <span class=\"code-keyword\">for</span> (<span class=\"code-keyword\">var</span> i = <span class=\"code-number\">0</span>, l = <span class=\"code-built_in\">arguments</span>.length; i &lt; l; i++) {\n","\t    forEach(<span class=\"code-built_in\">arguments</span>[i], assignValue);\n","\t  }\n","\t  <span class=\"code-keyword\">return</span> result;\n","\t}\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Function equal to merge with the difference being that no reference\n</span>","<span class=\"code-comment\">\t * to original objects is kept.\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @see merge\n</span>","<span class=\"code-comment\">\t * @param {Object} obj1 Object to merge\n</span>","<span class=\"code-comment\">\t * @returns {Object} Result of all merge properties\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">deepMerge</span>(<span class=\"code-params\"><span class=\"code-regexp\">/* obj1, obj2, obj3, ... */</span></span>) </span>{\n","\t  <span class=\"code-keyword\">var</span> result = {};\n","\t  <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">assignValue</span>(<span class=\"code-params\">val, key</span>) </span>{\n","\t    <span class=\"code-keyword\">if</span> (<span class=\"code-keyword\">typeof</span> result[key] === <span class=\"code-string\">'object'</span> &amp;&amp; <span class=\"code-keyword\">typeof</span> val === <span class=\"code-string\">'object'</span>) {\n","\t      result[key] = deepMerge(result[key], val);\n","\t    } <span class=\"code-keyword\">else</span> <span class=\"code-keyword\">if</span> (<span class=\"code-keyword\">typeof</span> val === <span class=\"code-string\">'object'</span>) {\n","\t      result[key] = deepMerge({}, val);\n","\t    } <span class=\"code-keyword\">else</span> {\n","\t      result[key] = val;\n","\t    }\n","\t  }\n","\t\n","\t  <span class=\"code-keyword\">for</span> (<span class=\"code-keyword\">var</span> i = <span class=\"code-number\">0</span>, l = <span class=\"code-built_in\">arguments</span>.length; i &lt; l; i++) {\n","\t    forEach(<span class=\"code-built_in\">arguments</span>[i], assignValue);\n","\t  }\n","\t  <span class=\"code-keyword\">return</span> result;\n","\t}\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Extends object a by mutably adding to it the properties of object b.\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Object} a The object to be extended\n</span>","<span class=\"code-comment\">\t * @param {Object} b The object to copy properties from\n</span>","<span class=\"code-comment\">\t * @param {Object} thisArg The object to bind function to\n</span>","<span class=\"code-comment\">\t * @return {Object} The resulting value of object a\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">extend</span>(<span class=\"code-params\">a, b, thisArg</span>) </span>{\n","\t  forEach(b, <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">assignValue</span>(<span class=\"code-params\">val, key</span>) </span>{\n","\t    <span class=\"code-keyword\">if</span> (thisArg &amp;&amp; <span class=\"code-keyword\">typeof</span> val === <span class=\"code-string\">'function'</span>) {\n","\t      a[key] = bind(val, thisArg);\n","\t    } <span class=\"code-keyword\">else</span> {\n","\t      a[key] = val;\n","\t    }\n","\t  });\n","\t  <span class=\"code-keyword\">return</span> a;\n","\t}\n","\t\n","\t<span class=\"code-built_in\">module</span>.exports = {\n","\t  isArray: isArray,\n","\t  isArrayBuffer: isArrayBuffer,\n","\t  isBuffer: isBuffer,\n","\t  isFormData: isFormData,\n","\t  isArrayBufferView: isArrayBufferView,\n","\t  isString: isString,\n","\t  isNumber: isNumber,\n","\t  isObject: isObject,\n","\t  isUndefined: isUndefined,\n","\t  isDate: isDate,\n","\t  isFile: isFile,\n","\t  isBlob: isBlob,\n","\t  isFunction: isFunction,\n","\t  isStream: isStream,\n","\t  isURLSearchParams: isURLSearchParams,\n","\t  isStandardBrowserEnv: isStandardBrowserEnv,\n","\t  forEach: forEach,\n","\t  merge: merge,\n","\t  deepMerge: deepMerge,\n","\t  extend: extend,\n","\t  trim: trim\n","\t};\n","\n","\n","<span class=\"code-comment\">/***/</span> }),\n","<span class=\"code-comment\">/* 3 */</span>\n","<span class=\"code-comment\">/***/</span> (<span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">module, exports</span>) </span>{\n","\n","<span class=\"code-meta\">\t'use strict'</span>;\n","\t\n","\t<span class=\"code-built_in\">module</span>.exports = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">bind</span>(<span class=\"code-params\">fn, thisArg</span>) </span>{\n","\t  <span class=\"code-keyword\">return</span> <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">wrap</span>(<span class=\"code-params\"></span>) </span>{\n","\t    <span class=\"code-keyword\">var</span> args = <span class=\"code-keyword\">new</span> <span class=\"code-built_in\">Array</span>(<span class=\"code-built_in\">arguments</span>.length);\n","\t    <span class=\"code-keyword\">for</span> (<span class=\"code-keyword\">var</span> i = <span class=\"code-number\">0</span>; i &lt; args.length; i++) {\n","\t      args[i] = <span class=\"code-built_in\">arguments</span>[i];\n","\t    }\n","\t    <span class=\"code-keyword\">return</span> fn.apply(thisArg, args);\n","\t  };\n","\t};\n","\n","\n","<span class=\"code-comment\">/***/</span> }),\n","<span class=\"code-comment\">/* 4 */</span>\n","<span class=\"code-comment\">/***/</span> (<span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">module, exports, __webpack_require__</span>) </span>{\n","\n","<span class=\"code-meta\">\t'use strict'</span>;\n","\t\n","\t<span class=\"code-keyword\">var</span> utils = __webpack_require__(<span class=\"code-number\">2</span>);\n","\t<span class=\"code-keyword\">var</span> buildURL = __webpack_require__(<span class=\"code-number\">5</span>);\n","\t<span class=\"code-keyword\">var</span> InterceptorManager = __webpack_require__(<span class=\"code-number\">6</span>);\n","\t<span class=\"code-keyword\">var</span> dispatchRequest = __webpack_require__(<span class=\"code-number\">7</span>);\n","\t<span class=\"code-keyword\">var</span> mergeConfig = __webpack_require__(<span class=\"code-number\">23</span>);\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Create a new instance of Axios\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Object} instanceConfig The default config for the instance\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">Axios</span>(<span class=\"code-params\">instanceConfig</span>) </span>{\n","\t  <span class=\"code-keyword\">this</span>.defaults = instanceConfig;\n","\t  <span class=\"code-keyword\">this</span>.interceptors = {\n","\t    request: <span class=\"code-keyword\">new</span> InterceptorManager(),\n","\t    response: <span class=\"code-keyword\">new</span> InterceptorManager()\n","\t  };\n","\t}\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Dispatch a request\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Object} config The config specific for this request (merged with this.defaults)\n</span>","<span class=\"code-comment\">\t */</span>\n","\tAxios.prototype.request = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">request</span>(<span class=\"code-params\">config</span>) </span>{\n","\t  <span class=\"code-comment\">/*eslint no-param-reassign:0*/</span>\n","\t  <span class=\"code-comment\">// Allow for axios('example/url'[, config]) a la fetch API</span>\n","\t  <span class=\"code-keyword\">if</span> (<span class=\"code-keyword\">typeof</span> config === <span class=\"code-string\">'string'</span>) {\n","\t    config = <span class=\"code-built_in\">arguments</span>[<span class=\"code-number\">1</span>] || {};\n","\t    config.url = <span class=\"code-built_in\">arguments</span>[<span class=\"code-number\">0</span>];\n","\t  } <span class=\"code-keyword\">else</span> {\n","\t    config = config || {};\n","\t  }\n","\t\n","\t  config = mergeConfig(<span class=\"code-keyword\">this</span>.defaults, config);\n","\t\n","\t  <span class=\"code-comment\">// Set config.method</span>\n","\t  <span class=\"code-keyword\">if</span> (config.method) {\n","\t    config.method = config.method.toLowerCase();\n","\t  } <span class=\"code-keyword\">else</span> <span class=\"code-keyword\">if</span> (<span class=\"code-keyword\">this</span>.defaults.method) {\n","\t    config.method = <span class=\"code-keyword\">this</span>.defaults.method.toLowerCase();\n","\t  } <span class=\"code-keyword\">else</span> {\n","\t    config.method = <span class=\"code-string\">'get'</span>;\n","\t  }\n","\t\n","\t  <span class=\"code-comment\">// Hook up interceptors middleware</span>\n","\t  <span class=\"code-keyword\">var</span> chain = [dispatchRequest, <span class=\"code-literal\">undefined</span>];\n","\t  <span class=\"code-keyword\">var</span> promise = <span class=\"code-built_in\">Promise</span>.resolve(config);\n","\t\n","\t  <span class=\"code-keyword\">this</span>.interceptors.request.forEach(<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">unshiftRequestInterceptors</span>(<span class=\"code-params\">interceptor</span>) </span>{\n","\t    chain.unshift(interceptor.fulfilled, interceptor.rejected);\n","\t  });\n","\t\n","\t  <span class=\"code-keyword\">this</span>.interceptors.response.forEach(<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">pushResponseInterceptors</span>(<span class=\"code-params\">interceptor</span>) </span>{\n","\t    chain.push(interceptor.fulfilled, interceptor.rejected);\n","\t  });\n","\t\n","\t  <span class=\"code-keyword\">while</span> (chain.length) {\n","\t    promise = promise.then(chain.shift(), chain.shift());\n","\t  }\n","\t\n","\t  <span class=\"code-keyword\">return</span> promise;\n","\t};\n","\t\n","\tAxios.prototype.getUri = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">getUri</span>(<span class=\"code-params\">config</span>) </span>{\n","\t  config = mergeConfig(<span class=\"code-keyword\">this</span>.defaults, config);\n","\t  <span class=\"code-keyword\">return</span> buildURL(config.url, config.params, config.paramsSerializer).replace(<span class=\"code-regexp\">/^\\?/</span>, <span class=\"code-string\">''</span>);\n","\t};\n","\t\n","\t<span class=\"code-comment\">// Provide aliases for supported request methods</span>\n","\tutils.forEach([<span class=\"code-string\">'delete'</span>, <span class=\"code-string\">'get'</span>, <span class=\"code-string\">'head'</span>, <span class=\"code-string\">'options'</span>], <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">forEachMethodNoData</span>(<span class=\"code-params\">method</span>) </span>{\n","\t  <span class=\"code-comment\">/*eslint func-names:0*/</span>\n","\t  Axios.prototype[method] = <span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">url, config</span>) </span>{\n","\t    <span class=\"code-keyword\">return</span> <span class=\"code-keyword\">this</span>.request(utils.merge(config || {}, {\n","\t      method: method,\n","\t      url: url\n","\t    }));\n","\t  };\n","\t});\n","\t\n","\tutils.forEach([<span class=\"code-string\">'post'</span>, <span class=\"code-string\">'put'</span>, <span class=\"code-string\">'patch'</span>], <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">forEachMethodWithData</span>(<span class=\"code-params\">method</span>) </span>{\n","\t  <span class=\"code-comment\">/*eslint func-names:0*/</span>\n","\t  Axios.prototype[method] = <span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">url, data, config</span>) </span>{\n","\t    <span class=\"code-keyword\">return</span> <span class=\"code-keyword\">this</span>.request(utils.merge(config || {}, {\n","\t      method: method,\n","\t      url: url,\n","\t      data: data\n","\t    }));\n","\t  };\n","\t});\n","\t\n","\t<span class=\"code-built_in\">module</span>.exports = Axios;\n","\n","\n","<span class=\"code-comment\">/***/</span> }),\n","<span class=\"code-comment\">/* 5 */</span>\n","<span class=\"code-comment\">/***/</span> (<span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">module, exports, __webpack_require__</span>) </span>{\n","\n","<span class=\"code-meta\">\t'use strict'</span>;\n","\t\n","\t<span class=\"code-keyword\">var</span> utils = __webpack_require__(<span class=\"code-number\">2</span>);\n","\t\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">encode</span>(<span class=\"code-params\">val</span>) </span>{\n","\t  <span class=\"code-keyword\">return</span> <span class=\"code-built_in\">encodeURIComponent</span>(val).\n","\t    replace(<span class=\"code-regexp\">/%40/gi</span>, <span class=\"code-string\">'@'</span>).\n","\t    replace(<span class=\"code-regexp\">/%3A/gi</span>, <span class=\"code-string\">':'</span>).\n","\t    replace(<span class=\"code-regexp\">/%24/g</span>, <span class=\"code-string\">'$'</span>).\n","\t    replace(<span class=\"code-regexp\">/%2C/gi</span>, <span class=\"code-string\">','</span>).\n","\t    replace(<span class=\"code-regexp\">/%20/g</span>, <span class=\"code-string\">'+'</span>).\n","\t    replace(<span class=\"code-regexp\">/%5B/gi</span>, <span class=\"code-string\">'['</span>).\n","\t    replace(<span class=\"code-regexp\">/%5D/gi</span>, <span class=\"code-string\">']'</span>);\n","\t}\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Build a URL by appending params to the end\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {string} url The base of the url (e.g., http://www.google.com)\n</span>","<span class=\"code-comment\">\t * @param {object} [params] The params to be appended\n</span>","<span class=\"code-comment\">\t * @returns {string} The formatted url\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-built_in\">module</span>.exports = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">buildURL</span>(<span class=\"code-params\">url, params, paramsSerializer</span>) </span>{\n","\t  <span class=\"code-comment\">/*eslint no-param-reassign:0*/</span>\n","\t  <span class=\"code-keyword\">if</span> (!params) {\n","\t    <span class=\"code-keyword\">return</span> url;\n","\t  }\n","\t\n","\t  <span class=\"code-keyword\">var</span> serializedParams;\n","\t  <span class=\"code-keyword\">if</span> (paramsSerializer) {\n","\t    serializedParams = paramsSerializer(params);\n","\t  } <span class=\"code-keyword\">else</span> <span class=\"code-keyword\">if</span> (utils.isURLSearchParams(params)) {\n","\t    serializedParams = params.toString();\n","\t  } <span class=\"code-keyword\">else</span> {\n","\t    <span class=\"code-keyword\">var</span> parts = [];\n","\t\n","\t    utils.forEach(params, <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">serialize</span>(<span class=\"code-params\">val, key</span>) </span>{\n","\t      <span class=\"code-keyword\">if</span> (val === <span class=\"code-literal\">null</span> || <span class=\"code-keyword\">typeof</span> val === <span class=\"code-string\">'undefined'</span>) {\n","\t        <span class=\"code-keyword\">return</span>;\n","\t      }\n","\t\n","\t      <span class=\"code-keyword\">if</span> (utils.isArray(val)) {\n","\t        key = key + <span class=\"code-string\">'[]'</span>;\n","\t      } <span class=\"code-keyword\">else</span> {\n","\t        val = [val];\n","\t      }\n","\t\n","\t      utils.forEach(val, <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">parseValue</span>(<span class=\"code-params\">v</span>) </span>{\n","\t        <span class=\"code-keyword\">if</span> (utils.isDate(v)) {\n","\t          v = v.toISOString();\n","\t        } <span class=\"code-keyword\">else</span> <span class=\"code-keyword\">if</span> (utils.isObject(v)) {\n","\t          v = <span class=\"code-built_in\">JSON</span>.stringify(v);\n","\t        }\n","\t        parts.push(encode(key) + <span class=\"code-string\">'='</span> + encode(v));\n","\t      });\n","\t    });\n","\t\n","\t    serializedParams = parts.join(<span class=\"code-string\">'&amp;'</span>);\n","\t  }\n","\t\n","\t  <span class=\"code-keyword\">if</span> (serializedParams) {\n","\t    <span class=\"code-keyword\">var</span> hashmarkIndex = url.indexOf(<span class=\"code-string\">'#'</span>);\n","\t    <span class=\"code-keyword\">if</span> (hashmarkIndex !== <span class=\"code-number\">-1</span>) {\n","\t      url = url.slice(<span class=\"code-number\">0</span>, hashmarkIndex);\n","\t    }\n","\t\n","\t    url += (url.indexOf(<span class=\"code-string\">'?'</span>) === <span class=\"code-number\">-1</span> ? <span class=\"code-string\">'?'</span> : <span class=\"code-string\">'&amp;'</span>) + serializedParams;\n","\t  }\n","\t\n","\t  <span class=\"code-keyword\">return</span> url;\n","\t};\n","\n","\n","<span class=\"code-comment\">/***/</span> }),\n","<span class=\"code-comment\">/* 6 */</span>\n","<span class=\"code-comment\">/***/</span> (<span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">module, exports, __webpack_require__</span>) </span>{\n","\n","<span class=\"code-meta\">\t'use strict'</span>;\n","\t\n","\t<span class=\"code-keyword\">var</span> utils = __webpack_require__(<span class=\"code-number\">2</span>);\n","\t\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">InterceptorManager</span>(<span class=\"code-params\"></span>) </span>{\n","\t  <span class=\"code-keyword\">this</span>.handlers = [];\n","\t}\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Add a new interceptor to the stack\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Function} fulfilled The function to handle `then` for a `Promise`\n</span>","<span class=\"code-comment\">\t * @param {Function} rejected The function to handle `reject` for a `Promise`\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @return {Number} An ID used to remove interceptor later\n</span>","<span class=\"code-comment\">\t */</span>\n","\tInterceptorManager.prototype.use = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">use</span>(<span class=\"code-params\">fulfilled, rejected</span>) </span>{\n","\t  <span class=\"code-keyword\">this</span>.handlers.push({\n","\t    fulfilled: fulfilled,\n","\t    rejected: rejected\n","\t  });\n","\t  <span class=\"code-keyword\">return</span> <span class=\"code-keyword\">this</span>.handlers.length - <span class=\"code-number\">1</span>;\n","\t};\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Remove an interceptor from the stack\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Number} id The ID that was returned by `use`\n</span>","<span class=\"code-comment\">\t */</span>\n","\tInterceptorManager.prototype.eject = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">eject</span>(<span class=\"code-params\">id</span>) </span>{\n","\t  <span class=\"code-keyword\">if</span> (<span class=\"code-keyword\">this</span>.handlers[id]) {\n","\t    <span class=\"code-keyword\">this</span>.handlers[id] = <span class=\"code-literal\">null</span>;\n","\t  }\n","\t};\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Iterate over all the registered interceptors\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * This method is particularly useful for skipping over any\n</span>","<span class=\"code-comment\">\t * interceptors that may have become `null` calling `eject`.\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Function} fn The function to call for each interceptor\n</span>","<span class=\"code-comment\">\t */</span>\n","\tInterceptorManager.prototype.forEach = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">forEach</span>(<span class=\"code-params\">fn</span>) </span>{\n","\t  utils.forEach(<span class=\"code-keyword\">this</span>.handlers, <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">forEachHandler</span>(<span class=\"code-params\">h</span>) </span>{\n","\t    <span class=\"code-keyword\">if</span> (h !== <span class=\"code-literal\">null</span>) {\n","\t      fn(h);\n","\t    }\n","\t  });\n","\t};\n","\t\n","\t<span class=\"code-built_in\">module</span>.exports = InterceptorManager;\n","\n","\n","<span class=\"code-comment\">/***/</span> }),\n","<span class=\"code-comment\">/* 7 */</span>\n","<span class=\"code-comment\">/***/</span> (<span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">module, exports, __webpack_require__</span>) </span>{\n","\n","<span class=\"code-meta\">\t'use strict'</span>;\n","\t\n","\t<span class=\"code-keyword\">var</span> utils = __webpack_require__(<span class=\"code-number\">2</span>);\n","\t<span class=\"code-keyword\">var</span> transformData = __webpack_require__(<span class=\"code-number\">8</span>);\n","\t<span class=\"code-keyword\">var</span> isCancel = __webpack_require__(<span class=\"code-number\">9</span>);\n","\t<span class=\"code-keyword\">var</span> defaults = __webpack_require__(<span class=\"code-number\">10</span>);\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Throws a `Cancel` if cancellation has been requested.\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">throwIfCancellationRequested</span>(<span class=\"code-params\">config</span>) </span>{\n","\t  <span class=\"code-keyword\">if</span> (config.cancelToken) {\n","\t    config.cancelToken.throwIfRequested();\n","\t  }\n","\t}\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Dispatch a request to the server using the configured adapter.\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {object} config The config that is to be used for the request\n</span>","<span class=\"code-comment\">\t * @returns {Promise} The Promise to be fulfilled\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-built_in\">module</span>.exports = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">dispatchRequest</span>(<span class=\"code-params\">config</span>) </span>{\n","\t  throwIfCancellationRequested(config);\n","\t\n","\t  <span class=\"code-comment\">// Ensure headers exist</span>\n","\t  config.headers = config.headers || {};\n","\t\n","\t  <span class=\"code-comment\">// Transform request data</span>\n","\t  config.data = transformData(\n","\t    config.data,\n","\t    config.headers,\n","\t    config.transformRequest\n","\t  );\n","\t\n","\t  <span class=\"code-comment\">// Flatten headers</span>\n","\t  config.headers = utils.merge(\n","\t    config.headers.common || {},\n","\t    config.headers[config.method] || {},\n","\t    config.headers\n","\t  );\n","\t\n","\t  utils.forEach(\n","\t    [<span class=\"code-string\">'delete'</span>, <span class=\"code-string\">'get'</span>, <span class=\"code-string\">'head'</span>, <span class=\"code-string\">'post'</span>, <span class=\"code-string\">'put'</span>, <span class=\"code-string\">'patch'</span>, <span class=\"code-string\">'common'</span>],\n","\t    <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">cleanHeaderConfig</span>(<span class=\"code-params\">method</span>) </span>{\n","\t      <span class=\"code-keyword\">delete</span> config.headers[method];\n","\t    }\n","\t  );\n","\t\n","\t  <span class=\"code-keyword\">var</span> adapter = config.adapter || defaults.adapter;\n","\t\n","\t  <span class=\"code-keyword\">return</span> adapter(config).then(<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">onAdapterResolution</span>(<span class=\"code-params\">response</span>) </span>{\n","\t    throwIfCancellationRequested(config);\n","\t\n","\t    <span class=\"code-comment\">// Transform response data</span>\n","\t    response.data = transformData(\n","\t      response.data,\n","\t      response.headers,\n","\t      config.transformResponse\n","\t    );\n","\t\n","\t    <span class=\"code-keyword\">return</span> response;\n","\t  }, <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">onAdapterRejection</span>(<span class=\"code-params\">reason</span>) </span>{\n","\t    <span class=\"code-keyword\">if</span> (!isCancel(reason)) {\n","\t      throwIfCancellationRequested(config);\n","\t\n","\t      <span class=\"code-comment\">// Transform response data</span>\n","\t      <span class=\"code-keyword\">if</span> (reason &amp;&amp; reason.response) {\n","\t        reason.response.data = transformData(\n","\t          reason.response.data,\n","\t          reason.response.headers,\n","\t          config.transformResponse\n","\t        );\n","\t      }\n","\t    }\n","\t\n","\t    <span class=\"code-keyword\">return</span> <span class=\"code-built_in\">Promise</span>.reject(reason);\n","\t  });\n","\t};\n","\n","\n","<span class=\"code-comment\">/***/</span> }),\n","<span class=\"code-comment\">/* 8 */</span>\n","<span class=\"code-comment\">/***/</span> (<span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">module, exports, __webpack_require__</span>) </span>{\n","\n","<span class=\"code-meta\">\t'use strict'</span>;\n","\t\n","\t<span class=\"code-keyword\">var</span> utils = __webpack_require__(<span class=\"code-number\">2</span>);\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Transform the data for a request or a response\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Object|String} data The data to be transformed\n</span>","<span class=\"code-comment\">\t * @param {Array} headers The headers for the request or response\n</span>","<span class=\"code-comment\">\t * @param {Array|Function} fns A single function or Array of functions\n</span>","<span class=\"code-comment\">\t * @returns {*} The resulting transformed data\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-built_in\">module</span>.exports = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">transformData</span>(<span class=\"code-params\">data, headers, fns</span>) </span>{\n","\t  <span class=\"code-comment\">/*eslint no-param-reassign:0*/</span>\n","\t  utils.forEach(fns, <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">transform</span>(<span class=\"code-params\">fn</span>) </span>{\n","\t    data = fn(data, headers);\n","\t  });\n","\t\n","\t  <span class=\"code-keyword\">return</span> data;\n","\t};\n","\n","\n","<span class=\"code-comment\">/***/</span> }),\n","<span class=\"code-comment\">/* 9 */</span>\n","<span class=\"code-comment\">/***/</span> (<span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">module, exports</span>) </span>{\n","\n","<span class=\"code-meta\">\t'use strict'</span>;\n","\t\n","\t<span class=\"code-built_in\">module</span>.exports = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">isCancel</span>(<span class=\"code-params\">value</span>) </span>{\n","\t  <span class=\"code-keyword\">return</span> !!(value &amp;&amp; value.__CANCEL__);\n","\t};\n","\n","\n","<span class=\"code-comment\">/***/</span> }),\n","<span class=\"code-comment\">/* 10 */</span>\n","<span class=\"code-comment\">/***/</span> (<span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">module, exports, __webpack_require__</span>) </span>{\n","\n","<span class=\"code-meta\">\t'use strict'</span>;\n","\t\n","\t<span class=\"code-keyword\">var</span> utils = __webpack_require__(<span class=\"code-number\">2</span>);\n","\t<span class=\"code-keyword\">var</span> normalizeHeaderName = __webpack_require__(<span class=\"code-number\">11</span>);\n","\t\n","\t<span class=\"code-keyword\">var</span> DEFAULT_CONTENT_TYPE = {\n","\t  <span class=\"code-string\">'Content-Type'</span>: <span class=\"code-string\">'application/x-www-form-urlencoded'</span>\n","\t};\n","\t\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">setContentTypeIfUnset</span>(<span class=\"code-params\">headers, value</span>) </span>{\n","\t  <span class=\"code-keyword\">if</span> (!utils.isUndefined(headers) &amp;&amp; utils.isUndefined(headers[<span class=\"code-string\">'Content-Type'</span>])) {\n","\t    headers[<span class=\"code-string\">'Content-Type'</span>] = value;\n","\t  }\n","\t}\n","\t\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">getDefaultAdapter</span>(<span class=\"code-params\"></span>) </span>{\n","\t  <span class=\"code-keyword\">var</span> adapter;\n","\t  <span class=\"code-keyword\">if</span> (<span class=\"code-keyword\">typeof</span> XMLHttpRequest !== <span class=\"code-string\">'undefined'</span>) {\n","\t    <span class=\"code-comment\">// For browsers use XHR adapter</span>\n","\t    adapter = __webpack_require__(<span class=\"code-number\">12</span>);\n","\t  } <span class=\"code-keyword\">else</span> <span class=\"code-keyword\">if</span> (<span class=\"code-keyword\">typeof</span> process !== <span class=\"code-string\">'undefined'</span> &amp;&amp; <span class=\"code-built_in\">Object</span>.prototype.toString.call(process) === <span class=\"code-string\">'[object process]'</span>) {\n","\t    <span class=\"code-comment\">// For node use HTTP adapter</span>\n","\t    adapter = __webpack_require__(<span class=\"code-number\">12</span>);\n","\t  }\n","\t  <span class=\"code-keyword\">return</span> adapter;\n","\t}\n","\t\n","\t<span class=\"code-keyword\">var</span> defaults = {\n","\t  adapter: getDefaultAdapter(),\n","\t\n","\t  transformRequest: [<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">transformRequest</span>(<span class=\"code-params\">data, headers</span>) </span>{\n","\t    normalizeHeaderName(headers, <span class=\"code-string\">'Accept'</span>);\n","\t    normalizeHeaderName(headers, <span class=\"code-string\">'Content-Type'</span>);\n","\t    <span class=\"code-keyword\">if</span> (utils.isFormData(data) ||\n","\t      utils.isArrayBuffer(data) ||\n","\t      utils.isBuffer(data) ||\n","\t      utils.isStream(data) ||\n","\t      utils.isFile(data) ||\n","\t      utils.isBlob(data)\n","\t    ) {\n","\t      <span class=\"code-keyword\">return</span> data;\n","\t    }\n","\t    <span class=\"code-keyword\">if</span> (utils.isArrayBufferView(data)) {\n","\t      <span class=\"code-keyword\">return</span> data.buffer;\n","\t    }\n","\t    <span class=\"code-keyword\">if</span> (utils.isURLSearchParams(data)) {\n","\t      setContentTypeIfUnset(headers, <span class=\"code-string\">'application/x-www-form-urlencoded;charset=utf-8'</span>);\n","\t      <span class=\"code-keyword\">return</span> data.toString();\n","\t    }\n","\t    <span class=\"code-keyword\">if</span> (utils.isObject(data)) {\n","\t      setContentTypeIfUnset(headers, <span class=\"code-string\">'application/json;charset=utf-8'</span>);\n","\t      <span class=\"code-keyword\">return</span> <span class=\"code-built_in\">JSON</span>.stringify(data);\n","\t    }\n","\t    <span class=\"code-keyword\">return</span> data;\n","\t  }],\n","\t\n","\t  transformResponse: [<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">transformResponse</span>(<span class=\"code-params\">data</span>) </span>{\n","\t    <span class=\"code-comment\">/*eslint no-param-reassign:0*/</span>\n","\t    <span class=\"code-keyword\">if</span> (<span class=\"code-keyword\">typeof</span> data === <span class=\"code-string\">'string'</span>) {\n","\t      <span class=\"code-keyword\">try</span> {\n","\t        data = <span class=\"code-built_in\">JSON</span>.parse(data);\n","\t      } <span class=\"code-keyword\">catch</span> (e) { <span class=\"code-comment\">/* Ignore */</span> }\n","\t    }\n","\t    <span class=\"code-keyword\">return</span> data;\n","\t  }],\n","\t\n","\t  <span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t   * A timeout in milliseconds to abort a request. If set to 0 (default) a\n</span>","<span class=\"code-comment\">\t   * timeout is not created.\n</span>","<span class=\"code-comment\">\t   */</span>\n","\t  timeout: <span class=\"code-number\">0</span>,\n","\t\n","\t  xsrfCookieName: <span class=\"code-string\">'XSRF-TOKEN'</span>,\n","\t  xsrfHeaderName: <span class=\"code-string\">'X-XSRF-TOKEN'</span>,\n","\t\n","\t  maxContentLength: <span class=\"code-number\">-1</span>,\n","\t\n","\t  validateStatus: <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">validateStatus</span>(<span class=\"code-params\">status</span>) </span>{\n","\t    <span class=\"code-keyword\">return</span> status &gt;= <span class=\"code-number\">200</span> &amp;&amp; status &lt; <span class=\"code-number\">300</span>;\n","\t  }\n","\t};\n","\t\n","\tdefaults.headers = {\n","\t  common: {\n","\t    <span class=\"code-string\">'Accept'</span>: <span class=\"code-string\">'application/json, text/plain, */*'</span>\n","\t  }\n","\t};\n","\t\n","\tutils.forEach([<span class=\"code-string\">'delete'</span>, <span class=\"code-string\">'get'</span>, <span class=\"code-string\">'head'</span>], <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">forEachMethodNoData</span>(<span class=\"code-params\">method</span>) </span>{\n","\t  defaults.headers[method] = {};\n","\t});\n","\t\n","\tutils.forEach([<span class=\"code-string\">'post'</span>, <span class=\"code-string\">'put'</span>, <span class=\"code-string\">'patch'</span>], <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">forEachMethodWithData</span>(<span class=\"code-params\">method</span>) </span>{\n","\t  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);\n","\t});\n","\t\n","\t<span class=\"code-built_in\">module</span>.exports = defaults;\n","\n","\n","<span class=\"code-comment\">/***/</span> }),\n","<span class=\"code-comment\">/* 11 */</span>\n","<span class=\"code-comment\">/***/</span> (<span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">module, exports, __webpack_require__</span>) </span>{\n","\n","<span class=\"code-meta\">\t'use strict'</span>;\n","\t\n","\t<span class=\"code-keyword\">var</span> utils = __webpack_require__(<span class=\"code-number\">2</span>);\n","\t\n","\t<span class=\"code-built_in\">module</span>.exports = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">normalizeHeaderName</span>(<span class=\"code-params\">headers, normalizedName</span>) </span>{\n","\t  utils.forEach(headers, <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">processHeader</span>(<span class=\"code-params\">value, name</span>) </span>{\n","\t    <span class=\"code-keyword\">if</span> (name !== normalizedName &amp;&amp; name.toUpperCase() === normalizedName.toUpperCase()) {\n","\t      headers[normalizedName] = value;\n","\t      <span class=\"code-keyword\">delete</span> headers[name];\n","\t    }\n","\t  });\n","\t};\n","\n","\n","<span class=\"code-comment\">/***/</span> }),\n","<span class=\"code-comment\">/* 12 */</span>\n","<span class=\"code-comment\">/***/</span> (<span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">module, exports, __webpack_require__</span>) </span>{\n","\n","<span class=\"code-meta\">\t'use strict'</span>;\n","\t\n","\t<span class=\"code-keyword\">var</span> utils = __webpack_require__(<span class=\"code-number\">2</span>);\n","\t<span class=\"code-keyword\">var</span> settle = __webpack_require__(<span class=\"code-number\">13</span>);\n","\t<span class=\"code-keyword\">var</span> buildURL = __webpack_require__(<span class=\"code-number\">5</span>);\n","\t<span class=\"code-keyword\">var</span> buildFullPath = __webpack_require__(<span class=\"code-number\">16</span>);\n","\t<span class=\"code-keyword\">var</span> parseHeaders = __webpack_require__(<span class=\"code-number\">19</span>);\n","\t<span class=\"code-keyword\">var</span> isURLSameOrigin = __webpack_require__(<span class=\"code-number\">20</span>);\n","\t<span class=\"code-keyword\">var</span> createError = __webpack_require__(<span class=\"code-number\">14</span>);\n","\t\n","\t<span class=\"code-built_in\">module</span>.exports = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">xhrAdapter</span>(<span class=\"code-params\">config</span>) </span>{\n","\t  <span class=\"code-keyword\">return</span> <span class=\"code-keyword\">new</span> <span class=\"code-built_in\">Promise</span>(<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">dispatchXhrRequest</span>(<span class=\"code-params\">resolve, reject</span>) </span>{\n","\t    <span class=\"code-keyword\">var</span> requestData = config.data;\n","\t    <span class=\"code-keyword\">var</span> requestHeaders = config.headers;\n","\t\n","\t    <span class=\"code-keyword\">if</span> (utils.isFormData(requestData)) {\n","\t      <span class=\"code-keyword\">delete</span> requestHeaders[<span class=\"code-string\">'Content-Type'</span>]; <span class=\"code-comment\">// Let the browser set it</span>\n","\t    }\n","\t\n","\t    <span class=\"code-keyword\">var</span> request = <span class=\"code-keyword\">new</span> XMLHttpRequest();\n","\t\n","\t    <span class=\"code-comment\">// HTTP basic authentication</span>\n","\t    <span class=\"code-keyword\">if</span> (config.auth) {\n","\t      <span class=\"code-keyword\">var</span> username = config.auth.username || <span class=\"code-string\">''</span>;\n","\t      <span class=\"code-keyword\">var</span> password = config.auth.password || <span class=\"code-string\">''</span>;\n","\t      requestHeaders.Authorization = <span class=\"code-string\">'Basic '</span> + btoa(username + <span class=\"code-string\">':'</span> + password);\n","\t    }\n","\t\n","\t    <span class=\"code-keyword\">var</span> fullPath = buildFullPath(config.baseURL, config.url);\n","\t    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), <span class=\"code-literal\">true</span>);\n","\t\n","\t    <span class=\"code-comment\">// Set the request timeout in MS</span>\n","\t    request.timeout = config.timeout;\n","\t\n","\t    <span class=\"code-comment\">// Listen for ready state</span>\n","\t    request.onreadystatechange = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">handleLoad</span>(<span class=\"code-params\"></span>) </span>{\n","\t      <span class=\"code-keyword\">if</span> (!request || request.readyState !== <span class=\"code-number\">4</span>) {\n","\t        <span class=\"code-keyword\">return</span>;\n","\t      }\n","\t\n","\t      <span class=\"code-comment\">// The request errored out and we didn't get a response, this will be</span>\n","\t      <span class=\"code-comment\">// handled by onerror instead</span>\n","\t      <span class=\"code-comment\">// With one exception: request that using file: protocol, most browsers</span>\n","\t      <span class=\"code-comment\">// will return status as 0 even though it's a successful request</span>\n","\t      <span class=\"code-keyword\">if</span> (request.status === <span class=\"code-number\">0</span> &amp;&amp; !(request.responseURL &amp;&amp; request.responseURL.indexOf(<span class=\"code-string\">'file:'</span>) === <span class=\"code-number\">0</span>)) {\n","\t        <span class=\"code-keyword\">return</span>;\n","\t      }\n","\t\n","\t      <span class=\"code-comment\">// Prepare the response</span>\n","\t      <span class=\"code-keyword\">var</span> responseHeaders = <span class=\"code-string\">'getAllResponseHeaders'</span> <span class=\"code-keyword\">in</span> request ? parseHeaders(request.getAllResponseHeaders()) : <span class=\"code-literal\">null</span>;\n","\t      <span class=\"code-keyword\">var</span> responseData = !config.responseType || config.responseType === <span class=\"code-string\">'text'</span> ? request.responseText : request.response;\n","\t      <span class=\"code-keyword\">var</span> response = {\n","\t        data: responseData,\n","\t        status: request.status,\n","\t        statusText: request.statusText,\n","\t        headers: responseHeaders,\n","\t        config: config,\n","\t        request: request\n","\t      };\n","\t\n","\t      settle(resolve, reject, response);\n","\t\n","\t      <span class=\"code-comment\">// Clean up request</span>\n","\t      request = <span class=\"code-literal\">null</span>;\n","\t    };\n","\t\n","\t    <span class=\"code-comment\">// Handle browser request cancellation (as opposed to a manual cancellation)</span>\n","\t    request.onabort = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">handleAbort</span>(<span class=\"code-params\"></span>) </span>{\n","\t      <span class=\"code-keyword\">if</span> (!request) {\n","\t        <span class=\"code-keyword\">return</span>;\n","\t      }\n","\t\n","\t      reject(createError(<span class=\"code-string\">'Request aborted'</span>, config, <span class=\"code-string\">'ECONNABORTED'</span>, request));\n","\t\n","\t      <span class=\"code-comment\">// Clean up request</span>\n","\t      request = <span class=\"code-literal\">null</span>;\n","\t    };\n","\t\n","\t    <span class=\"code-comment\">// Handle low level network errors</span>\n","\t    request.onerror = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">handleError</span>(<span class=\"code-params\"></span>) </span>{\n","\t      <span class=\"code-comment\">// Real errors are hidden from us by the browser</span>\n","\t      <span class=\"code-comment\">// onerror should only fire if it's a network error</span>\n","\t      reject(createError(<span class=\"code-string\">'Network Error'</span>, config, <span class=\"code-literal\">null</span>, request));\n","\t\n","\t      <span class=\"code-comment\">// Clean up request</span>\n","\t      request = <span class=\"code-literal\">null</span>;\n","\t    };\n","\t\n","\t    <span class=\"code-comment\">// Handle timeout</span>\n","\t    request.ontimeout = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">handleTimeout</span>(<span class=\"code-params\"></span>) </span>{\n","\t      <span class=\"code-keyword\">var</span> timeoutErrorMessage = <span class=\"code-string\">'timeout of '</span> + config.timeout + <span class=\"code-string\">'ms exceeded'</span>;\n","\t      <span class=\"code-keyword\">if</span> (config.timeoutErrorMessage) {\n","\t        timeoutErrorMessage = config.timeoutErrorMessage;\n","\t      }\n","\t      reject(createError(timeoutErrorMessage, config, <span class=\"code-string\">'ECONNABORTED'</span>,\n","\t        request));\n","\t\n","\t      <span class=\"code-comment\">// Clean up request</span>\n","\t      request = <span class=\"code-literal\">null</span>;\n","\t    };\n","\t\n","\t    <span class=\"code-comment\">// Add xsrf header</span>\n","\t    <span class=\"code-comment\">// This is only done if running in a standard browser environment.</span>\n","\t    <span class=\"code-comment\">// Specifically not if we're in a web worker, or react-native.</span>\n","\t    <span class=\"code-keyword\">if</span> (utils.isStandardBrowserEnv()) {\n","\t      <span class=\"code-keyword\">var</span> cookies = __webpack_require__(<span class=\"code-number\">22</span>);\n","\t\n","\t      <span class=\"code-comment\">// Add xsrf header</span>\n","\t      <span class=\"code-keyword\">var</span> xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) &amp;&amp; config.xsrfCookieName ?\n","\t        cookies.read(config.xsrfCookieName) :\n","\t        <span class=\"code-literal\">undefined</span>;\n","\t\n","\t      <span class=\"code-keyword\">if</span> (xsrfValue) {\n","\t        requestHeaders[config.xsrfHeaderName] = xsrfValue;\n","\t      }\n","\t    }\n","\t\n","\t    <span class=\"code-comment\">// Add headers to the request</span>\n","\t    <span class=\"code-keyword\">if</span> (<span class=\"code-string\">'setRequestHeader'</span> <span class=\"code-keyword\">in</span> request) {\n","\t      utils.forEach(requestHeaders, <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">setRequestHeader</span>(<span class=\"code-params\">val, key</span>) </span>{\n","\t        <span class=\"code-keyword\">if</span> (<span class=\"code-keyword\">typeof</span> requestData === <span class=\"code-string\">'undefined'</span> &amp;&amp; key.toLowerCase() === <span class=\"code-string\">'content-type'</span>) {\n","\t          <span class=\"code-comment\">// Remove Content-Type if data is undefined</span>\n","\t          <span class=\"code-keyword\">delete</span> requestHeaders[key];\n","\t        } <span class=\"code-keyword\">else</span> {\n","\t          <span class=\"code-comment\">// Otherwise add header to the request</span>\n","\t          request.setRequestHeader(key, val);\n","\t        }\n","\t      });\n","\t    }\n","\t\n","\t    <span class=\"code-comment\">// Add withCredentials to request if needed</span>\n","\t    <span class=\"code-keyword\">if</span> (!utils.isUndefined(config.withCredentials)) {\n","\t      request.withCredentials = !!config.withCredentials;\n","\t    }\n","\t\n","\t    <span class=\"code-comment\">// Add responseType to request if needed</span>\n","\t    <span class=\"code-keyword\">if</span> (config.responseType) {\n","\t      <span class=\"code-keyword\">try</span> {\n","\t        request.responseType = config.responseType;\n","\t      } <span class=\"code-keyword\">catch</span> (e) {\n","\t        <span class=\"code-comment\">// Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.</span>\n","\t        <span class=\"code-comment\">// But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.</span>\n","\t        <span class=\"code-keyword\">if</span> (config.responseType !== <span class=\"code-string\">'json'</span>) {\n","\t          <span class=\"code-keyword\">throw</span> e;\n","\t        }\n","\t      }\n","\t    }\n","\t\n","\t    <span class=\"code-comment\">// Handle progress if needed</span>\n","\t    <span class=\"code-keyword\">if</span> (<span class=\"code-keyword\">typeof</span> config.onDownloadProgress === <span class=\"code-string\">'function'</span>) {\n","\t      request.addEventListener(<span class=\"code-string\">'progress'</span>, config.onDownloadProgress);\n","\t    }\n","\t\n","\t    <span class=\"code-comment\">// Not all browsers support upload events</span>\n","\t    <span class=\"code-keyword\">if</span> (<span class=\"code-keyword\">typeof</span> config.onUploadProgress === <span class=\"code-string\">'function'</span> &amp;&amp; request.upload) {\n","\t      request.upload.addEventListener(<span class=\"code-string\">'progress'</span>, config.onUploadProgress);\n","\t    }\n","\t\n","\t    <span class=\"code-keyword\">if</span> (config.cancelToken) {\n","\t      <span class=\"code-comment\">// Handle cancellation</span>\n","\t      config.cancelToken.promise.then(<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">onCanceled</span>(<span class=\"code-params\">cancel</span>) </span>{\n","\t        <span class=\"code-keyword\">if</span> (!request) {\n","\t          <span class=\"code-keyword\">return</span>;\n","\t        }\n","\t\n","\t        request.abort();\n","\t        reject(cancel);\n","\t        <span class=\"code-comment\">// Clean up request</span>\n","\t        request = <span class=\"code-literal\">null</span>;\n","\t      });\n","\t    }\n","\t\n","\t    <span class=\"code-keyword\">if</span> (requestData === <span class=\"code-literal\">undefined</span>) {\n","\t      requestData = <span class=\"code-literal\">null</span>;\n","\t    }\n","\t\n","\t    <span class=\"code-comment\">// Send the request</span>\n","\t    request.send(requestData);\n","\t  });\n","\t};\n","\n","\n","<span class=\"code-comment\">/***/</span> }),\n","<span class=\"code-comment\">/* 13 */</span>\n","<span class=\"code-comment\">/***/</span> (<span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">module, exports, __webpack_require__</span>) </span>{\n","\n","<span class=\"code-meta\">\t'use strict'</span>;\n","\t\n","\t<span class=\"code-keyword\">var</span> createError = __webpack_require__(<span class=\"code-number\">14</span>);\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Resolve or reject a Promise based on response status.\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Function} resolve A function that resolves the promise.\n</span>","<span class=\"code-comment\">\t * @param {Function} reject A function that rejects the promise.\n</span>","<span class=\"code-comment\">\t * @param {object} response The response.\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-built_in\">module</span>.exports = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">settle</span>(<span class=\"code-params\">resolve, reject, response</span>) </span>{\n","\t  <span class=\"code-keyword\">var</span> validateStatus = response.config.validateStatus;\n","\t  <span class=\"code-keyword\">if</span> (!validateStatus || validateStatus(response.status)) {\n","\t    resolve(response);\n","\t  } <span class=\"code-keyword\">else</span> {\n","\t    reject(createError(\n","\t      <span class=\"code-string\">'Request failed with status code '</span> + response.status,\n","\t      response.config,\n","\t      <span class=\"code-literal\">null</span>,\n","\t      response.request,\n","\t      response\n","\t    ));\n","\t  }\n","\t};\n","\n","\n","<span class=\"code-comment\">/***/</span> }),\n","<span class=\"code-comment\">/* 14 */</span>\n","<span class=\"code-comment\">/***/</span> (<span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">module, exports, __webpack_require__</span>) </span>{\n","\n","<span class=\"code-meta\">\t'use strict'</span>;\n","\t\n","\t<span class=\"code-keyword\">var</span> enhanceError = __webpack_require__(<span class=\"code-number\">15</span>);\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Create an Error with the specified message, config, error code, request and response.\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {string} message The error message.\n</span>","<span class=\"code-comment\">\t * @param {Object} config The config.\n</span>","<span class=\"code-comment\">\t * @param {string} [code] The error code (for example, 'ECONNABORTED').\n</span>","<span class=\"code-comment\">\t * @param {Object} [request] The request.\n</span>","<span class=\"code-comment\">\t * @param {Object} [response] The response.\n</span>","<span class=\"code-comment\">\t * @returns {Error} The created error.\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-built_in\">module</span>.exports = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">createError</span>(<span class=\"code-params\">message, config, code, request, response</span>) </span>{\n","\t  <span class=\"code-keyword\">var</span> error = <span class=\"code-keyword\">new</span> <span class=\"code-built_in\">Error</span>(message);\n","\t  <span class=\"code-keyword\">return</span> enhanceError(error, config, code, request, response);\n","\t};\n","\n","\n","<span class=\"code-comment\">/***/</span> }),\n","<span class=\"code-comment\">/* 15 */</span>\n","<span class=\"code-comment\">/***/</span> (<span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">module, exports</span>) </span>{\n","\n","<span class=\"code-meta\">\t'use strict'</span>;\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Update an Error with the specified config, error code, and response.\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Error} error The error to update.\n</span>","<span class=\"code-comment\">\t * @param {Object} config The config.\n</span>","<span class=\"code-comment\">\t * @param {string} [code] The error code (for example, 'ECONNABORTED').\n</span>","<span class=\"code-comment\">\t * @param {Object} [request] The request.\n</span>","<span class=\"code-comment\">\t * @param {Object} [response] The response.\n</span>","<span class=\"code-comment\">\t * @returns {Error} The error.\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-built_in\">module</span>.exports = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">enhanceError</span>(<span class=\"code-params\">error, config, code, request, response</span>) </span>{\n","\t  error.config = config;\n","\t  <span class=\"code-keyword\">if</span> (code) {\n","\t    error.code = code;\n","\t  }\n","\t\n","\t  error.request = request;\n","\t  error.response = response;\n","\t  error.isAxiosError = <span class=\"code-literal\">true</span>;\n","\t\n","\t  error.toJSON = <span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\"></span>) </span>{\n","\t    <span class=\"code-keyword\">return</span> {\n","\t      <span class=\"code-comment\">// Standard</span>\n","\t      message: <span class=\"code-keyword\">this</span>.message,\n","\t      name: <span class=\"code-keyword\">this</span>.name,\n","\t      <span class=\"code-comment\">// Microsoft</span>\n","\t      description: <span class=\"code-keyword\">this</span>.description,\n","\t      number: <span class=\"code-keyword\">this</span>.number,\n","\t      <span class=\"code-comment\">// Mozilla</span>\n","\t      fileName: <span class=\"code-keyword\">this</span>.fileName,\n","\t      lineNumber: <span class=\"code-keyword\">this</span>.lineNumber,\n","\t      columnNumber: <span class=\"code-keyword\">this</span>.columnNumber,\n","\t      stack: <span class=\"code-keyword\">this</span>.stack,\n","\t      <span class=\"code-comment\">// Axios</span>\n","\t      config: <span class=\"code-keyword\">this</span>.config,\n","\t      code: <span class=\"code-keyword\">this</span>.code\n","\t    };\n","\t  };\n","\t  <span class=\"code-keyword\">return</span> error;\n","\t};\n","\n","\n","<span class=\"code-comment\">/***/</span> }),\n","<span class=\"code-comment\">/* 16 */</span>\n","<span class=\"code-comment\">/***/</span> (<span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">module, exports, __webpack_require__</span>) </span>{\n","\n","<span class=\"code-meta\">\t'use strict'</span>;\n","\t\n","\t<span class=\"code-keyword\">var</span> isAbsoluteURL = __webpack_require__(<span class=\"code-number\">17</span>);\n","\t<span class=\"code-keyword\">var</span> combineURLs = __webpack_require__(<span class=\"code-number\">18</span>);\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Creates a new URL by combining the baseURL with the requestedURL,\n</span>","<span class=\"code-comment\">\t * only when the requestedURL is not already an absolute URL.\n</span>","<span class=\"code-comment\">\t * If the requestURL is absolute, this function returns the requestedURL untouched.\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {string} baseURL The base URL\n</span>","<span class=\"code-comment\">\t * @param {string} requestedURL Absolute or relative URL to combine\n</span>","<span class=\"code-comment\">\t * @returns {string} The combined full path\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-built_in\">module</span>.exports = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">buildFullPath</span>(<span class=\"code-params\">baseURL, requestedURL</span>) </span>{\n","\t  <span class=\"code-keyword\">if</span> (baseURL &amp;&amp; !isAbsoluteURL(requestedURL)) {\n","\t    <span class=\"code-keyword\">return</span> combineURLs(baseURL, requestedURL);\n","\t  }\n","\t  <span class=\"code-keyword\">return</span> requestedURL;\n","\t};\n","\n","\n","<span class=\"code-comment\">/***/</span> }),\n","<span class=\"code-comment\">/* 17 */</span>\n","<span class=\"code-comment\">/***/</span> (<span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">module, exports</span>) </span>{\n","\n","<span class=\"code-meta\">\t'use strict'</span>;\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Determines whether the specified URL is absolute\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {string} url The URL to test\n</span>","<span class=\"code-comment\">\t * @returns {boolean} True if the specified URL is absolute, otherwise false\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-built_in\">module</span>.exports = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">isAbsoluteURL</span>(<span class=\"code-params\">url</span>) </span>{\n","\t  <span class=\"code-comment\">// A URL is considered absolute if it begins with \"&lt;scheme&gt;://\" or \"//\" (protocol-relative URL).</span>\n","\t  <span class=\"code-comment\">// RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed</span>\n","\t  <span class=\"code-comment\">// by any combination of letters, digits, plus, period, or hyphen.</span>\n","\t  <span class=\"code-keyword\">return</span> <span class=\"code-regexp\">/^([a-z][a-z\\d\\+\\-\\.]*:)?\\/\\//i</span>.test(url);\n","\t};\n","\n","\n","<span class=\"code-comment\">/***/</span> }),\n","<span class=\"code-comment\">/* 18 */</span>\n","<span class=\"code-comment\">/***/</span> (<span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">module, exports</span>) </span>{\n","\n","<span class=\"code-meta\">\t'use strict'</span>;\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Creates a new URL by combining the specified URLs\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {string} baseURL The base URL\n</span>","<span class=\"code-comment\">\t * @param {string} relativeURL The relative URL\n</span>","<span class=\"code-comment\">\t * @returns {string} The combined URL\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-built_in\">module</span>.exports = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">combineURLs</span>(<span class=\"code-params\">baseURL, relativeURL</span>) </span>{\n","\t  <span class=\"code-keyword\">return</span> relativeURL\n","\t    ? baseURL.replace(<span class=\"code-regexp\">/\\/+$/</span>, <span class=\"code-string\">''</span>) + <span class=\"code-string\">'/'</span> + relativeURL.replace(<span class=\"code-regexp\">/^\\/+/</span>, <span class=\"code-string\">''</span>)\n","\t    : baseURL;\n","\t};\n","\n","\n","<span class=\"code-comment\">/***/</span> }),\n","<span class=\"code-comment\">/* 19 */</span>\n","<span class=\"code-comment\">/***/</span> (<span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">module, exports, __webpack_require__</span>) </span>{\n","\n","<span class=\"code-meta\">\t'use strict'</span>;\n","\t\n","\t<span class=\"code-keyword\">var</span> utils = __webpack_require__(<span class=\"code-number\">2</span>);\n","\t\n","\t<span class=\"code-comment\">// Headers whose duplicates are ignored by node</span>\n","\t<span class=\"code-comment\">// c.f. https://nodejs.org/api/http.html#http_message_headers</span>\n","\t<span class=\"code-keyword\">var</span> ignoreDuplicateOf = [\n","\t  <span class=\"code-string\">'age'</span>, <span class=\"code-string\">'authorization'</span>, <span class=\"code-string\">'content-length'</span>, <span class=\"code-string\">'content-type'</span>, <span class=\"code-string\">'etag'</span>,\n","\t  <span class=\"code-string\">'expires'</span>, <span class=\"code-string\">'from'</span>, <span class=\"code-string\">'host'</span>, <span class=\"code-string\">'if-modified-since'</span>, <span class=\"code-string\">'if-unmodified-since'</span>,\n","\t  <span class=\"code-string\">'last-modified'</span>, <span class=\"code-string\">'location'</span>, <span class=\"code-string\">'max-forwards'</span>, <span class=\"code-string\">'proxy-authorization'</span>,\n","\t  <span class=\"code-string\">'referer'</span>, <span class=\"code-string\">'retry-after'</span>, <span class=\"code-string\">'user-agent'</span>\n","\t];\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Parse headers into an object\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * ```\n</span>","<span class=\"code-comment\">\t * Date: Wed, 27 Aug 2014 08:58:49 GMT\n</span>","<span class=\"code-comment\">\t * Content-Type: application/json\n</span>","<span class=\"code-comment\">\t * Connection: keep-alive\n</span>","<span class=\"code-comment\">\t * Transfer-Encoding: chunked\n</span>","<span class=\"code-comment\">\t * ```\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {String} headers Headers needing to be parsed\n</span>","<span class=\"code-comment\">\t * @returns {Object} Headers parsed into an object\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-built_in\">module</span>.exports = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">parseHeaders</span>(<span class=\"code-params\">headers</span>) </span>{\n","\t  <span class=\"code-keyword\">var</span> parsed = {};\n","\t  <span class=\"code-keyword\">var</span> key;\n","\t  <span class=\"code-keyword\">var</span> val;\n","\t  <span class=\"code-keyword\">var</span> i;\n","\t\n","\t  <span class=\"code-keyword\">if</span> (!headers) { <span class=\"code-keyword\">return</span> parsed; }\n","\t\n","\t  utils.forEach(headers.split(<span class=\"code-string\">'\\n'</span>), <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">parser</span>(<span class=\"code-params\">line</span>) </span>{\n","\t    i = line.indexOf(<span class=\"code-string\">':'</span>);\n","\t    key = utils.trim(line.substr(<span class=\"code-number\">0</span>, i)).toLowerCase();\n","\t    val = utils.trim(line.substr(i + <span class=\"code-number\">1</span>));\n","\t\n","\t    <span class=\"code-keyword\">if</span> (key) {\n","\t      <span class=\"code-keyword\">if</span> (parsed[key] &amp;&amp; ignoreDuplicateOf.indexOf(key) &gt;= <span class=\"code-number\">0</span>) {\n","\t        <span class=\"code-keyword\">return</span>;\n","\t      }\n","\t      <span class=\"code-keyword\">if</span> (key === <span class=\"code-string\">'set-cookie'</span>) {\n","\t        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);\n","\t      } <span class=\"code-keyword\">else</span> {\n","\t        parsed[key] = parsed[key] ? parsed[key] + <span class=\"code-string\">', '</span> + val : val;\n","\t      }\n","\t    }\n","\t  });\n","\t\n","\t  <span class=\"code-keyword\">return</span> parsed;\n","\t};\n","\n","\n","<span class=\"code-comment\">/***/</span> }),\n","<span class=\"code-comment\">/* 20 */</span>\n","<span class=\"code-comment\">/***/</span> (<span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">module, exports, __webpack_require__</span>) </span>{\n","\n","<span class=\"code-meta\">\t'use strict'</span>;\n","\t\n","\t<span class=\"code-keyword\">var</span> utils = __webpack_require__(<span class=\"code-number\">2</span>);\n","\t<span class=\"code-keyword\">var</span> isValidXss = __webpack_require__(<span class=\"code-number\">21</span>);\n","\t\n","\t<span class=\"code-built_in\">module</span>.exports = (\n","\t  utils.isStandardBrowserEnv() ?\n","\t\n","\t  <span class=\"code-comment\">// Standard browser envs have full support of the APIs needed to test</span>\n","\t  <span class=\"code-comment\">// whether the request URL is of the same origin as current location.</span>\n","\t    (<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">standardBrowserEnv</span>(<span class=\"code-params\"></span>) </span>{\n","\t      <span class=\"code-keyword\">var</span> msie = <span class=\"code-regexp\">/(msie|trident)/i</span>.test(navigator.userAgent);\n","\t      <span class=\"code-keyword\">var</span> urlParsingNode = <span class=\"code-built_in\">document</span>.createElement(<span class=\"code-string\">'a'</span>);\n","\t      <span class=\"code-keyword\">var</span> originURL;\n","\t\n","\t      <span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t    * Parse a URL to discover it's components\n</span>","<span class=\"code-comment\">\t    *\n</span>","<span class=\"code-comment\">\t    * @param {String} url The URL to be parsed\n</span>","<span class=\"code-comment\">\t    * @returns {Object}\n</span>","<span class=\"code-comment\">\t    */</span>\n","\t      <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">resolveURL</span>(<span class=\"code-params\">url</span>) </span>{\n","\t        <span class=\"code-keyword\">var</span> href = url;\n","\t\n","\t        <span class=\"code-keyword\">if</span> (isValidXss(url)) {\n","\t          <span class=\"code-keyword\">throw</span> <span class=\"code-keyword\">new</span> <span class=\"code-built_in\">Error</span>(<span class=\"code-string\">'URL contains XSS injection attempt'</span>);\n","\t        }\n","\t\n","\t        <span class=\"code-keyword\">if</span> (msie) {\n","\t        <span class=\"code-comment\">// IE needs attribute set twice to normalize properties</span>\n","\t          urlParsingNode.setAttribute(<span class=\"code-string\">'href'</span>, href);\n","\t          href = urlParsingNode.href;\n","\t        }\n","\t\n","\t        urlParsingNode.setAttribute(<span class=\"code-string\">'href'</span>, href);\n","\t\n","\t        <span class=\"code-comment\">// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils</span>\n","\t        <span class=\"code-keyword\">return</span> {\n","\t          href: urlParsingNode.href,\n","\t          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(<span class=\"code-regexp\">/:$/</span>, <span class=\"code-string\">''</span>) : <span class=\"code-string\">''</span>,\n","\t          host: urlParsingNode.host,\n","\t          search: urlParsingNode.search ? urlParsingNode.search.replace(<span class=\"code-regexp\">/^\\?/</span>, <span class=\"code-string\">''</span>) : <span class=\"code-string\">''</span>,\n","\t          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(<span class=\"code-regexp\">/^#/</span>, <span class=\"code-string\">''</span>) : <span class=\"code-string\">''</span>,\n","\t          hostname: urlParsingNode.hostname,\n","\t          port: urlParsingNode.port,\n","\t          pathname: (urlParsingNode.pathname.charAt(<span class=\"code-number\">0</span>) === <span class=\"code-string\">'/'</span>) ?\n","\t            urlParsingNode.pathname :\n","\t            <span class=\"code-string\">'/'</span> + urlParsingNode.pathname\n","\t        };\n","\t      }\n","\t\n","\t      originURL = resolveURL(<span class=\"code-built_in\">window</span>.location.href);\n","\t\n","\t      <span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t    * Determine if a URL shares the same origin as the current location\n</span>","<span class=\"code-comment\">\t    *\n</span>","<span class=\"code-comment\">\t    * @param {String} requestURL The URL to test\n</span>","<span class=\"code-comment\">\t    * @returns {boolean} True if URL shares the same origin, otherwise false\n</span>","<span class=\"code-comment\">\t    */</span>\n","\t      <span class=\"code-keyword\">return</span> <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">isURLSameOrigin</span>(<span class=\"code-params\">requestURL</span>) </span>{\n","\t        <span class=\"code-keyword\">var</span> parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;\n","\t        <span class=\"code-keyword\">return</span> (parsed.protocol === originURL.protocol &amp;&amp;\n","\t            parsed.host === originURL.host);\n","\t      };\n","\t    })() :\n","\t\n","\t  <span class=\"code-comment\">// Non standard browser envs (web workers, react-native) lack needed support.</span>\n","\t    (<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">nonStandardBrowserEnv</span>(<span class=\"code-params\"></span>) </span>{\n","\t      <span class=\"code-keyword\">return</span> <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">isURLSameOrigin</span>(<span class=\"code-params\"></span>) </span>{\n","\t        <span class=\"code-keyword\">return</span> <span class=\"code-literal\">true</span>;\n","\t      };\n","\t    })()\n","\t);\n","\n","\n","<span class=\"code-comment\">/***/</span> }),\n","<span class=\"code-comment\">/* 21 */</span>\n","<span class=\"code-comment\">/***/</span> (<span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">module, exports</span>) </span>{\n","\n","<span class=\"code-meta\">\t'use strict'</span>;\n","\t\n","\t<span class=\"code-built_in\">module</span>.exports = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">isValidXss</span>(<span class=\"code-params\">requestURL</span>) </span>{\n","\t  <span class=\"code-keyword\">var</span> xssRegex = <span class=\"code-regexp\">/(\\b)(on\\w+)=|javascript|(&lt;\\s*)(\\/*)script/gi</span>;\n","\t  <span class=\"code-keyword\">return</span> xssRegex.test(requestURL);\n","\t};\n","\t\n","\n","\n","<span class=\"code-comment\">/***/</span> }),\n","<span class=\"code-comment\">/* 22 */</span>\n","<span class=\"code-comment\">/***/</span> (<span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">module, exports, __webpack_require__</span>) </span>{\n","\n","<span class=\"code-meta\">\t'use strict'</span>;\n","\t\n","\t<span class=\"code-keyword\">var</span> utils = __webpack_require__(<span class=\"code-number\">2</span>);\n","\t\n","\t<span class=\"code-built_in\">module</span>.exports = (\n","\t  utils.isStandardBrowserEnv() ?\n","\t\n","\t  <span class=\"code-comment\">// Standard browser envs support document.cookie</span>\n","\t    (<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">standardBrowserEnv</span>(<span class=\"code-params\"></span>) </span>{\n","\t      <span class=\"code-keyword\">return</span> {\n","\t        write: <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">write</span>(<span class=\"code-params\">name, value, expires, path, domain, secure</span>) </span>{\n","\t          <span class=\"code-keyword\">var</span> cookie = [];\n","\t          cookie.push(name + <span class=\"code-string\">'='</span> + <span class=\"code-built_in\">encodeURIComponent</span>(value));\n","\t\n","\t          <span class=\"code-keyword\">if</span> (utils.isNumber(expires)) {\n","\t            cookie.push(<span class=\"code-string\">'expires='</span> + <span class=\"code-keyword\">new</span> <span class=\"code-built_in\">Date</span>(expires).toGMTString());\n","\t          }\n","\t\n","\t          <span class=\"code-keyword\">if</span> (utils.isString(path)) {\n","\t            cookie.push(<span class=\"code-string\">'path='</span> + path);\n","\t          }\n","\t\n","\t          <span class=\"code-keyword\">if</span> (utils.isString(domain)) {\n","\t            cookie.push(<span class=\"code-string\">'domain='</span> + domain);\n","\t          }\n","\t\n","\t          <span class=\"code-keyword\">if</span> (secure === <span class=\"code-literal\">true</span>) {\n","\t            cookie.push(<span class=\"code-string\">'secure'</span>);\n","\t          }\n","\t\n","\t          <span class=\"code-built_in\">document</span>.cookie = cookie.join(<span class=\"code-string\">'; '</span>);\n","\t        },\n","\t\n","\t        read: <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">read</span>(<span class=\"code-params\">name</span>) </span>{\n","\t          <span class=\"code-keyword\">var</span> match = <span class=\"code-built_in\">document</span>.cookie.match(<span class=\"code-keyword\">new</span> <span class=\"code-built_in\">RegExp</span>(<span class=\"code-string\">'(^|;\\\\s*)('</span> + name + <span class=\"code-string\">')=([^;]*)'</span>));\n","\t          <span class=\"code-keyword\">return</span> (match ? <span class=\"code-built_in\">decodeURIComponent</span>(match[<span class=\"code-number\">3</span>]) : <span class=\"code-literal\">null</span>);\n","\t        },\n","\t\n","\t        remove: <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">remove</span>(<span class=\"code-params\">name</span>) </span>{\n","\t          <span class=\"code-keyword\">this</span>.write(name, <span class=\"code-string\">''</span>, <span class=\"code-built_in\">Date</span>.now() - <span class=\"code-number\">86400000</span>);\n","\t        }\n","\t      };\n","\t    })() :\n","\t\n","\t  <span class=\"code-comment\">// Non standard browser env (web workers, react-native) lack needed support.</span>\n","\t    (<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">nonStandardBrowserEnv</span>(<span class=\"code-params\"></span>) </span>{\n","\t      <span class=\"code-keyword\">return</span> {\n","\t        write: <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">write</span>(<span class=\"code-params\"></span>) </span>{},\n","\t        read: <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">read</span>(<span class=\"code-params\"></span>) </span>{ <span class=\"code-keyword\">return</span> <span class=\"code-literal\">null</span>; },\n","\t        remove: <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">remove</span>(<span class=\"code-params\"></span>) </span>{}\n","\t      };\n","\t    })()\n","\t);\n","\n","\n","<span class=\"code-comment\">/***/</span> }),\n","<span class=\"code-comment\">/* 23 */</span>\n","<span class=\"code-comment\">/***/</span> (<span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">module, exports, __webpack_require__</span>) </span>{\n","\n","<span class=\"code-meta\">\t'use strict'</span>;\n","\t\n","\t<span class=\"code-keyword\">var</span> utils = __webpack_require__(<span class=\"code-number\">2</span>);\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Config-specific merge-function which creates a new config-object\n</span>","<span class=\"code-comment\">\t * by merging two configuration objects together.\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Object} config1\n</span>","<span class=\"code-comment\">\t * @param {Object} config2\n</span>","<span class=\"code-comment\">\t * @returns {Object} New object resulting from merging config2 to config1\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-built_in\">module</span>.exports = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">mergeConfig</span>(<span class=\"code-params\">config1, config2</span>) </span>{\n","\t  <span class=\"code-comment\">// eslint-disable-next-line no-param-reassign</span>\n","\t  config2 = config2 || {};\n","\t  <span class=\"code-keyword\">var</span> config = {};\n","\t\n","\t  <span class=\"code-keyword\">var</span> valueFromConfig2Keys = [<span class=\"code-string\">'url'</span>, <span class=\"code-string\">'method'</span>, <span class=\"code-string\">'params'</span>, <span class=\"code-string\">'data'</span>];\n","\t  <span class=\"code-keyword\">var</span> mergeDeepPropertiesKeys = [<span class=\"code-string\">'headers'</span>, <span class=\"code-string\">'auth'</span>, <span class=\"code-string\">'proxy'</span>];\n","\t  <span class=\"code-keyword\">var</span> defaultToConfig2Keys = [\n","\t    <span class=\"code-string\">'baseURL'</span>, <span class=\"code-string\">'url'</span>, <span class=\"code-string\">'transformRequest'</span>, <span class=\"code-string\">'transformResponse'</span>, <span class=\"code-string\">'paramsSerializer'</span>,\n","\t    <span class=\"code-string\">'timeout'</span>, <span class=\"code-string\">'withCredentials'</span>, <span class=\"code-string\">'adapter'</span>, <span class=\"code-string\">'responseType'</span>, <span class=\"code-string\">'xsrfCookieName'</span>,\n","\t    <span class=\"code-string\">'xsrfHeaderName'</span>, <span class=\"code-string\">'onUploadProgress'</span>, <span class=\"code-string\">'onDownloadProgress'</span>,\n","\t    <span class=\"code-string\">'maxContentLength'</span>, <span class=\"code-string\">'validateStatus'</span>, <span class=\"code-string\">'maxRedirects'</span>, <span class=\"code-string\">'httpAgent'</span>,\n","\t    <span class=\"code-string\">'httpsAgent'</span>, <span class=\"code-string\">'cancelToken'</span>, <span class=\"code-string\">'socketPath'</span>\n","\t  ];\n","\t\n","\t  utils.forEach(valueFromConfig2Keys, <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">valueFromConfig2</span>(<span class=\"code-params\">prop</span>) </span>{\n","\t    <span class=\"code-keyword\">if</span> (<span class=\"code-keyword\">typeof</span> config2[prop] !== <span class=\"code-string\">'undefined'</span>) {\n","\t      config[prop] = config2[prop];\n","\t    }\n","\t  });\n","\t\n","\t  utils.forEach(mergeDeepPropertiesKeys, <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">mergeDeepProperties</span>(<span class=\"code-params\">prop</span>) </span>{\n","\t    <span class=\"code-keyword\">if</span> (utils.isObject(config2[prop])) {\n","\t      config[prop] = utils.deepMerge(config1[prop], config2[prop]);\n","\t    } <span class=\"code-keyword\">else</span> <span class=\"code-keyword\">if</span> (<span class=\"code-keyword\">typeof</span> config2[prop] !== <span class=\"code-string\">'undefined'</span>) {\n","\t      config[prop] = config2[prop];\n","\t    } <span class=\"code-keyword\">else</span> <span class=\"code-keyword\">if</span> (utils.isObject(config1[prop])) {\n","\t      config[prop] = utils.deepMerge(config1[prop]);\n","\t    } <span class=\"code-keyword\">else</span> <span class=\"code-keyword\">if</span> (<span class=\"code-keyword\">typeof</span> config1[prop] !== <span class=\"code-string\">'undefined'</span>) {\n","\t      config[prop] = config1[prop];\n","\t    }\n","\t  });\n","\t\n","\t  utils.forEach(defaultToConfig2Keys, <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">defaultToConfig2</span>(<span class=\"code-params\">prop</span>) </span>{\n","\t    <span class=\"code-keyword\">if</span> (<span class=\"code-keyword\">typeof</span> config2[prop] !== <span class=\"code-string\">'undefined'</span>) {\n","\t      config[prop] = config2[prop];\n","\t    } <span class=\"code-keyword\">else</span> <span class=\"code-keyword\">if</span> (<span class=\"code-keyword\">typeof</span> config1[prop] !== <span class=\"code-string\">'undefined'</span>) {\n","\t      config[prop] = config1[prop];\n","\t    }\n","\t  });\n","\t\n","\t  <span class=\"code-keyword\">var</span> axiosKeys = valueFromConfig2Keys\n","\t    .concat(mergeDeepPropertiesKeys)\n","\t    .concat(defaultToConfig2Keys);\n","\t\n","\t  <span class=\"code-keyword\">var</span> otherKeys = <span class=\"code-built_in\">Object</span>\n","\t    .keys(config2)\n","\t    .filter(<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">filterAxiosKeys</span>(<span class=\"code-params\">key</span>) </span>{\n","\t      <span class=\"code-keyword\">return</span> axiosKeys.indexOf(key) === <span class=\"code-number\">-1</span>;\n","\t    });\n","\t\n","\t  utils.forEach(otherKeys, <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">otherKeysDefaultToConfig2</span>(<span class=\"code-params\">prop</span>) </span>{\n","\t    <span class=\"code-keyword\">if</span> (<span class=\"code-keyword\">typeof</span> config2[prop] !== <span class=\"code-string\">'undefined'</span>) {\n","\t      config[prop] = config2[prop];\n","\t    } <span class=\"code-keyword\">else</span> <span class=\"code-keyword\">if</span> (<span class=\"code-keyword\">typeof</span> config1[prop] !== <span class=\"code-string\">'undefined'</span>) {\n","\t      config[prop] = config1[prop];\n","\t    }\n","\t  });\n","\t\n","\t  <span class=\"code-keyword\">return</span> config;\n","\t};\n","\n","\n","<span class=\"code-comment\">/***/</span> }),\n","<span class=\"code-comment\">/* 24 */</span>\n","<span class=\"code-comment\">/***/</span> (<span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">module, exports</span>) </span>{\n","\n","<span class=\"code-meta\">\t'use strict'</span>;\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * A `Cancel` is an object that is thrown when an operation is canceled.\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @class\n</span>","<span class=\"code-comment\">\t * @param {string=} message The message.\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">Cancel</span>(<span class=\"code-params\">message</span>) </span>{\n","\t  <span class=\"code-keyword\">this</span>.message = message;\n","\t}\n","\t\n","\tCancel.prototype.toString = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">toString</span>(<span class=\"code-params\"></span>) </span>{\n","\t  <span class=\"code-keyword\">return</span> <span class=\"code-string\">'Cancel'</span> + (<span class=\"code-keyword\">this</span>.message ? <span class=\"code-string\">': '</span> + <span class=\"code-keyword\">this</span>.message : <span class=\"code-string\">''</span>);\n","\t};\n","\t\n","\tCancel.prototype.__CANCEL__ = <span class=\"code-literal\">true</span>;\n","\t\n","\t<span class=\"code-built_in\">module</span>.exports = Cancel;\n","\n","\n","<span class=\"code-comment\">/***/</span> }),\n","<span class=\"code-comment\">/* 25 */</span>\n","<span class=\"code-comment\">/***/</span> (<span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">module, exports, __webpack_require__</span>) </span>{\n","\n","<span class=\"code-meta\">\t'use strict'</span>;\n","\t\n","\t<span class=\"code-keyword\">var</span> Cancel = __webpack_require__(<span class=\"code-number\">24</span>);\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * A `CancelToken` is an object that can be used to request cancellation of an operation.\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @class\n</span>","<span class=\"code-comment\">\t * @param {Function} executor The executor function.\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">CancelToken</span>(<span class=\"code-params\">executor</span>) </span>{\n","\t  <span class=\"code-keyword\">if</span> (<span class=\"code-keyword\">typeof</span> executor !== <span class=\"code-string\">'function'</span>) {\n","\t    <span class=\"code-keyword\">throw</span> <span class=\"code-keyword\">new</span> <span class=\"code-built_in\">TypeError</span>(<span class=\"code-string\">'executor must be a function.'</span>);\n","\t  }\n","\t\n","\t  <span class=\"code-keyword\">var</span> resolvePromise;\n","\t  <span class=\"code-keyword\">this</span>.promise = <span class=\"code-keyword\">new</span> <span class=\"code-built_in\">Promise</span>(<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">promiseExecutor</span>(<span class=\"code-params\">resolve</span>) </span>{\n","\t    resolvePromise = resolve;\n","\t  });\n","\t\n","\t  <span class=\"code-keyword\">var</span> token = <span class=\"code-keyword\">this</span>;\n","\t  executor(<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">cancel</span>(<span class=\"code-params\">message</span>) </span>{\n","\t    <span class=\"code-keyword\">if</span> (token.reason) {\n","\t      <span class=\"code-comment\">// Cancellation has already been requested</span>\n","\t      <span class=\"code-keyword\">return</span>;\n","\t    }\n","\t\n","\t    token.reason = <span class=\"code-keyword\">new</span> Cancel(message);\n","\t    resolvePromise(token.reason);\n","\t  });\n","\t}\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Throws a `Cancel` if cancellation has been requested.\n</span>","<span class=\"code-comment\">\t */</span>\n","\tCancelToken.prototype.throwIfRequested = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">throwIfRequested</span>(<span class=\"code-params\"></span>) </span>{\n","\t  <span class=\"code-keyword\">if</span> (<span class=\"code-keyword\">this</span>.reason) {\n","\t    <span class=\"code-keyword\">throw</span> <span class=\"code-keyword\">this</span>.reason;\n","\t  }\n","\t};\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Returns an object that contains a new `CancelToken` and a function that, when called,\n</span>","<span class=\"code-comment\">\t * cancels the `CancelToken`.\n</span>","<span class=\"code-comment\">\t */</span>\n","\tCancelToken.source = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">source</span>(<span class=\"code-params\"></span>) </span>{\n","\t  <span class=\"code-keyword\">var</span> cancel;\n","\t  <span class=\"code-keyword\">var</span> token = <span class=\"code-keyword\">new</span> CancelToken(<span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">executor</span>(<span class=\"code-params\">c</span>) </span>{\n","\t    cancel = c;\n","\t  });\n","\t  <span class=\"code-keyword\">return</span> {\n","\t    token: token,\n","\t    cancel: cancel\n","\t  };\n","\t};\n","\t\n","\t<span class=\"code-built_in\">module</span>.exports = CancelToken;\n","\n","\n","<span class=\"code-comment\">/***/</span> }),\n","<span class=\"code-comment\">/* 26 */</span>\n","<span class=\"code-comment\">/***/</span> (<span class=\"code-function\"><span class=\"code-keyword\">function</span>(<span class=\"code-params\">module, exports</span>) </span>{\n","\n","<span class=\"code-meta\">\t'use strict'</span>;\n","\t\n","\t<span class=\"code-comment\">/**\n</span>","<span class=\"code-comment\">\t * Syntactic sugar for invoking a function and expanding an array for arguments.\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * Common use case would be to use `Function.prototype.apply`.\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t *  ```js\n</span>","<span class=\"code-comment\">\t *  function f(x, y, z) {}\n</span>","<span class=\"code-comment\">\t *  var args = [1, 2, 3];\n</span>","<span class=\"code-comment\">\t *  f.apply(null, args);\n</span>","<span class=\"code-comment\">\t *  ```\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * With `spread` this example can be re-written.\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t *  ```js\n</span>","<span class=\"code-comment\">\t *  spread(function(x, y, z) {})([1, 2, 3]);\n</span>","<span class=\"code-comment\">\t *  ```\n</span>","<span class=\"code-comment\">\t *\n</span>","<span class=\"code-comment\">\t * @param {Function} callback\n</span>","<span class=\"code-comment\">\t * @returns {Function}\n</span>","<span class=\"code-comment\">\t */</span>\n","\t<span class=\"code-built_in\">module</span>.exports = <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">spread</span>(<span class=\"code-params\">callback</span>) </span>{\n","\t  <span class=\"code-keyword\">return</span> <span class=\"code-function\"><span class=\"code-keyword\">function</span> <span class=\"code-title\">wrap</span>(<span class=\"code-params\">arr</span>) </span>{\n","\t    <span class=\"code-keyword\">return</span> callback.apply(<span class=\"code-literal\">null</span>, arr);\n","\t  };\n","\t};\n","\n","\n","<span class=\"code-comment\">/***/</span> })\n","<span class=\"code-comment\">/******/</span> ])\n","});\n",";\n","<span class=\"code-comment\">//# sourceMappingURL=axios.map</span>"]}}}</script></head><body><div id="root"><style data-emotion-css="262b4o">html{box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}html,body,#root{height:100%;margin:0;}body{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;font-size:16px;line-height:1.5;background:white;color:black;}code{font-family:Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;}th,td{padding:0;}select{font-size:inherit;}#root{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}</style><style data-emotion-css="1r6h1r6">.code-listing{background:#fbfdff;color:#383a42;}.code-comment,.code-quote{color:#a0a1a7;font-style:italic;}.code-doctag,.code-keyword,.code-link,.code-formula{color:#a626a4;}.code-section,.code-name,.code-selector-tag,.code-deletion,.code-subst{color:#e45649;}.code-literal{color:#0184bb;}.code-string,.code-regexp,.code-addition,.code-attribute,.code-meta-string{color:#50a14f;}.code-built_in,.code-class .code-title{color:#c18401;}.code-attr,.code-variable,.code-template-variable,.code-type,.code-selector-class,.code-selector-attr,.code-selector-pseudo,.code-number{color:#986801;}.code-symbol,.code-bullet,.code-meta,.code-selector-id,.code-title{color:#4078f2;}.code-emphasis{font-style:italic;}.code-strong{font-weight:bold;}</style><style data-emotion-css="1c3h18e">.css-1c3h18e{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;}</style><div class="css-1c3h18e"><style data-emotion-css="1cfuj1t">.css-1cfuj1t{max-width:940px;padding:0 20px;margin:0 auto;}</style><div class="css-1cfuj1t"><style data-emotion-css="xi606m">.css-xi606m{text-align:center;}</style><header class="css-xi606m"><style data-emotion-css="17kjije">.css-17kjije{font-size:3rem;margin-top:2rem;}</style><h1 class="css-17kjije"><style data-emotion-css="1ydg16i">.css-1ydg16i{color:#000;-webkit-text-decoration:none;text-decoration:none;}</style><a href="/" class="css-1ydg16i">UNPKG</a></h1></header><style data-emotion-css="93o42g">.css-93o42g{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media (max-width:700px){.css-93o42g{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}}</style><header class="css-93o42g"><style data-emotion-css="k4kplh">.css-k4kplh{font-size:1.5rem;font-weight:normal;-webkit-flex:1;-ms-flex:1;flex:1;}</style><h1 class="css-k4kplh"><nav><span><style data-emotion-css="xt128v">.css-xt128v{color:#0076ff;-webkit-text-decoration:none;text-decoration:none;}.css-xt128v:hover{-webkit-text-decoration:underline;text-decoration:underline;}</style><a href="/browse/axios@0.19.1/" class="css-xt128v">axios</a></span><span><style data-emotion-css="lllnmq">.css-lllnmq{padding-left:5px;padding-right:5px;}</style><span class="css-lllnmq">/</span><a href="/browse/axios@0.19.1/dist/" class="css-xt128v">dist</a></span><span><span class="css-lllnmq">/</span><strong>axios.js</strong></span></nav></h1><style data-emotion-css="1nr3dab">.css-1nr3dab{margin-left:20px;}@media (max-width:700px){.css-1nr3dab{margin-left:0;margin-bottom:0;}}</style><p class="css-1nr3dab"><label>Version:<!-- --> <style data-emotion-css="un3bt6">.css-un3bt6{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;padding:4px 24px 4px 8px;font-weight:600;font-size:0.9em;color:#24292e;border:1px solid rgba(27,31,35,.2);border-radius:3px;background-color:#eff3f6;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAYAAAC9vt6cAAAAAXNSR0IArs4c6QAAARFJREFUKBVjZAACNS39RhBNKrh17WI9o4quoT3Dn78HSNUMUs/CzOTI/O7Vi4dCYpJ3/jP+92BkYGAlyiBGhm8MjIxJt65e3MQM0vDu9YvLYmISILYZELOBxHABRkaGr0yMzF23r12YDFIDNgDEePv65SEhEXENBkYGFSAXuyGMjF8Z/jOsvX3tYiFIDwgwQSgIaaijnvj/P8M5IO8HsjiY/f//D4b//88A1SQhywG9jQr09PS4v/1mPAeUUPzP8B8cJowMjL+Bqu6xMQmaXL164AuyDgwDQJLa2qYSP//9vARkCoMVMzK8YeVkNbh+9uxzMB+JwGoASF5Vx0jz/98/18BqmZi171w9D2EjaaYKEwAEK00XQLdJuwAAAABJRU5ErkJggg==);background-position:right 8px center;background-repeat:no-repeat;background-size:auto 25%;}.css-un3bt6:hover{background-color:#e6ebf1;border-color:rgba(27,31,35,.35);}.css-un3bt6:active{background-color:#e9ecef;border-color:rgba(27,31,35,.35);box-shadow:inset 0 0.15em 0.3em rgba(27,31,35,.15);}</style><select name="version" class="css-un3bt6"><option value="0.1.0">0.1.0</option><option value="0.2.0">0.2.0</option><option value="0.2.1">0.2.1</option><option value="0.2.2">0.2.2</option><option value="0.3.0">0.3.0</option><option value="0.3.1">0.3.1</option><option value="0.4.0">0.4.0</option><option value="0.4.1">0.4.1</option><option value="0.4.2">0.4.2</option><option value="0.5.0">0.5.0</option><option value="0.5.1">0.5.1</option><option value="0.5.2">0.5.2</option><option value="0.5.3">0.5.3</option><option value="0.5.4">0.5.4</option><option value="0.6.0">0.6.0</option><option value="0.7.0">0.7.0</option><option value="0.8.0">0.8.0</option><option value="0.8.1">0.8.1</option><option value="0.9.0">0.9.0</option><option value="0.9.1">0.9.1</option><option value="0.10.0">0.10.0</option><option value="0.11.0">0.11.0</option><option value="0.11.1">0.11.1</option><option value="0.12.0">0.12.0</option><option value="0.13.0">0.13.0</option><option value="0.13.1">0.13.1</option><option value="0.14.0">0.14.0</option><option value="0.15.0">0.15.0</option><option value="0.15.1">0.15.1</option><option value="0.15.2">0.15.2</option><option value="0.15.3">0.15.3</option><option value="0.16.0">0.16.0</option><option value="0.16.1">0.16.1</option><option value="0.16.2">0.16.2</option><option value="0.17.0">0.17.0</option><option value="0.17.1">0.17.1</option><option value="0.18.0">0.18.0</option><option value="0.18.1">0.18.1</option><option value="0.19.0-beta.1">0.19.0-beta.1</option><option value="0.19.0">0.19.0</option><option selected="" value="0.19.1">0.19.1</option></select></label></p></header></div><style data-emotion-css="107j3ms">.css-107j3ms{max-width:940px;padding:0 20px;margin:0 auto;}@media (max-width:700px){.css-107j3ms{padding:0;margin:0;}}</style><div class="css-107j3ms"><style data-emotion-css="q3frg4">.css-q3frg4{border:1px solid #dfe2e5;border-radius:3px;}@media (max-width:700px){.css-q3frg4{border-right-width:0;border-left-width:0;}}</style><div class="css-q3frg4"><style data-emotion-css="10o5omr">.css-10o5omr{padding:10px;background:#f6f8fa;color:#424242;border:1px solid #d1d5da;border-top-left-radius:3px;border-top-right-radius:3px;margin:-1px -1px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}@media (max-width:700px){.css-10o5omr{padding-right:20px;padding-left:20px;}}</style><div class="css-10o5omr"><span>46.6 kB</span> <span>JavaScript</span> <style data-emotion-css="12cxnkg">.css-12cxnkg{display:inline-block;-webkit-text-decoration:none;text-decoration:none;padding:2px 8px;font-weight:600;font-size:0.9rem;color:#24292e;background-color:#eff3f6;border:1px solid rgba(27,31,35,.2);border-radius:3px;}.css-12cxnkg:hover{background-color:#e6ebf1;border-color:rgba(27,31,35,.35);}.css-12cxnkg:active{background-color:#e9ecef;border-color:rgba(27,31,35,.35);box-shadow:inset 0 0.15em 0.3em rgba(27,31,35,.15);}</style><a title="axios.js" href="/axios@0.19.1/dist/axios.js" class="css-12cxnkg">View Raw</a></div><style data-emotion-css="1i31ihw">.css-1i31ihw{overflow-x:auto;overflow-y:hidden;padding-top:5px;padding-bottom:5px;}</style><div class="code-listing css-1i31ihw"><style data-emotion-css="173nir8">.css-173nir8{border:none;border-collapse:collapse;border-spacing:0;}</style><table class="css-173nir8"><tbody><tr><style data-emotion-css="a4x74f">.css-a4x74f{padding-left:10px;padding-right:10px;color:rgba(27,31,35,.3);text-align:right;vertical-align:top;width:1%;min-width:50px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}</style><td id="L1" class="css-a4x74f"><span>1</span></td><style data-emotion-css="1dcdqdg">.css-1dcdqdg{padding-left:10px;padding-right:10px;color:#24292e;white-space:pre;}</style><td id="LC1" class="css-1dcdqdg"><code><span class="code-comment">/* axios v0.19.1 | (c) 2020 by Matt Zabriskie */</span>
</code></td></tr><tr><td id="L2" class="css-a4x74f"><span>2</span></td><td id="LC2" class="css-1dcdqdg"><code>(<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">webpackUniversalModuleDefinition</span>(<span class="code-params">root, factory</span>) </span>{
</code></td></tr><tr><td id="L3" class="css-a4x74f"><span>3</span></td><td id="LC3" class="css-1dcdqdg"><code>	<span class="code-keyword">if</span>(<span class="code-keyword">typeof</span> exports === <span class="code-string">'object'</span> &amp;&amp; <span class="code-keyword">typeof</span> <span class="code-built_in">module</span> === <span class="code-string">'object'</span>)
</code></td></tr><tr><td id="L4" class="css-a4x74f"><span>4</span></td><td id="LC4" class="css-1dcdqdg"><code>		<span class="code-built_in">module</span>.exports = factory();
</code></td></tr><tr><td id="L5" class="css-a4x74f"><span>5</span></td><td id="LC5" class="css-1dcdqdg"><code>	<span class="code-keyword">else</span> <span class="code-keyword">if</span>(<span class="code-keyword">typeof</span> define === <span class="code-string">'function'</span> &amp;&amp; define.amd)
</code></td></tr><tr><td id="L6" class="css-a4x74f"><span>6</span></td><td id="LC6" class="css-1dcdqdg"><code>		define([], factory);
</code></td></tr><tr><td id="L7" class="css-a4x74f"><span>7</span></td><td id="LC7" class="css-1dcdqdg"><code>	<span class="code-keyword">else</span> <span class="code-keyword">if</span>(<span class="code-keyword">typeof</span> exports === <span class="code-string">'object'</span>)
</code></td></tr><tr><td id="L8" class="css-a4x74f"><span>8</span></td><td id="LC8" class="css-1dcdqdg"><code>		exports[<span class="code-string">"axios"</span>] = factory();
</code></td></tr><tr><td id="L9" class="css-a4x74f"><span>9</span></td><td id="LC9" class="css-1dcdqdg"><code>	<span class="code-keyword">else</span>
</code></td></tr><tr><td id="L10" class="css-a4x74f"><span>10</span></td><td id="LC10" class="css-1dcdqdg"><code>		root[<span class="code-string">"axios"</span>] = factory();
</code></td></tr><tr><td id="L11" class="css-a4x74f"><span>11</span></td><td id="LC11" class="css-1dcdqdg"><code>})(<span class="code-keyword">this</span>, <span class="code-function"><span class="code-keyword">function</span>(<span class="code-params"></span>) </span>{
</code></td></tr><tr><td id="L12" class="css-a4x74f"><span>12</span></td><td id="LC12" class="css-1dcdqdg"><code><span class="code-keyword">return</span> <span class="code-comment">/******/</span> (<span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">modules</span>) </span>{ <span class="code-comment">// webpackBootstrap</span>
</code></td></tr><tr><td id="L13" class="css-a4x74f"><span>13</span></td><td id="LC13" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> 	<span class="code-comment">// The module cache</span>
</code></td></tr><tr><td id="L14" class="css-a4x74f"><span>14</span></td><td id="LC14" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> 	<span class="code-keyword">var</span> installedModules = {};
</code></td></tr><tr><td id="L15" class="css-a4x74f"><span>15</span></td><td id="LC15" class="css-1dcdqdg"><code><span class="code-comment">/******/</span>
</code></td></tr><tr><td id="L16" class="css-a4x74f"><span>16</span></td><td id="LC16" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> 	<span class="code-comment">// The require function</span>
</code></td></tr><tr><td id="L17" class="css-a4x74f"><span>17</span></td><td id="LC17" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> 	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">__webpack_require__</span>(<span class="code-params">moduleId</span>) </span>{
</code></td></tr><tr><td id="L18" class="css-a4x74f"><span>18</span></td><td id="LC18" class="css-1dcdqdg"><code><span class="code-comment">/******/</span>
</code></td></tr><tr><td id="L19" class="css-a4x74f"><span>19</span></td><td id="LC19" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> 		<span class="code-comment">// Check if module is in cache</span>
</code></td></tr><tr><td id="L20" class="css-a4x74f"><span>20</span></td><td id="LC20" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> 		<span class="code-keyword">if</span>(installedModules[moduleId])
</code></td></tr><tr><td id="L21" class="css-a4x74f"><span>21</span></td><td id="LC21" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> 			<span class="code-keyword">return</span> installedModules[moduleId].exports;
</code></td></tr><tr><td id="L22" class="css-a4x74f"><span>22</span></td><td id="LC22" class="css-1dcdqdg"><code><span class="code-comment">/******/</span>
</code></td></tr><tr><td id="L23" class="css-a4x74f"><span>23</span></td><td id="LC23" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> 		<span class="code-comment">// Create a new module (and put it into the cache)</span>
</code></td></tr><tr><td id="L24" class="css-a4x74f"><span>24</span></td><td id="LC24" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> 		<span class="code-keyword">var</span> <span class="code-built_in">module</span> = installedModules[moduleId] = {
</code></td></tr><tr><td id="L25" class="css-a4x74f"><span>25</span></td><td id="LC25" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> 			exports: {},
</code></td></tr><tr><td id="L26" class="css-a4x74f"><span>26</span></td><td id="LC26" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> 			id: moduleId,
</code></td></tr><tr><td id="L27" class="css-a4x74f"><span>27</span></td><td id="LC27" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> 			loaded: <span class="code-literal">false</span>
</code></td></tr><tr><td id="L28" class="css-a4x74f"><span>28</span></td><td id="LC28" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> 		};
</code></td></tr><tr><td id="L29" class="css-a4x74f"><span>29</span></td><td id="LC29" class="css-1dcdqdg"><code><span class="code-comment">/******/</span>
</code></td></tr><tr><td id="L30" class="css-a4x74f"><span>30</span></td><td id="LC30" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> 		<span class="code-comment">// Execute the module function</span>
</code></td></tr><tr><td id="L31" class="css-a4x74f"><span>31</span></td><td id="LC31" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> 		modules[moduleId].call(<span class="code-built_in">module</span>.exports, <span class="code-built_in">module</span>, <span class="code-built_in">module</span>.exports, __webpack_require__);
</code></td></tr><tr><td id="L32" class="css-a4x74f"><span>32</span></td><td id="LC32" class="css-1dcdqdg"><code><span class="code-comment">/******/</span>
</code></td></tr><tr><td id="L33" class="css-a4x74f"><span>33</span></td><td id="LC33" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> 		<span class="code-comment">// Flag the module as loaded</span>
</code></td></tr><tr><td id="L34" class="css-a4x74f"><span>34</span></td><td id="LC34" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> 		<span class="code-built_in">module</span>.loaded = <span class="code-literal">true</span>;
</code></td></tr><tr><td id="L35" class="css-a4x74f"><span>35</span></td><td id="LC35" class="css-1dcdqdg"><code><span class="code-comment">/******/</span>
</code></td></tr><tr><td id="L36" class="css-a4x74f"><span>36</span></td><td id="LC36" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> 		<span class="code-comment">// Return the exports of the module</span>
</code></td></tr><tr><td id="L37" class="css-a4x74f"><span>37</span></td><td id="LC37" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> 		<span class="code-keyword">return</span> <span class="code-built_in">module</span>.exports;
</code></td></tr><tr><td id="L38" class="css-a4x74f"><span>38</span></td><td id="LC38" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> 	}
</code></td></tr><tr><td id="L39" class="css-a4x74f"><span>39</span></td><td id="LC39" class="css-1dcdqdg"><code><span class="code-comment">/******/</span>
</code></td></tr><tr><td id="L40" class="css-a4x74f"><span>40</span></td><td id="LC40" class="css-1dcdqdg"><code><span class="code-comment">/******/</span>
</code></td></tr><tr><td id="L41" class="css-a4x74f"><span>41</span></td><td id="LC41" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> 	<span class="code-comment">// expose the modules object (__webpack_modules__)</span>
</code></td></tr><tr><td id="L42" class="css-a4x74f"><span>42</span></td><td id="LC42" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> 	__webpack_require__.m = modules;
</code></td></tr><tr><td id="L43" class="css-a4x74f"><span>43</span></td><td id="LC43" class="css-1dcdqdg"><code><span class="code-comment">/******/</span>
</code></td></tr><tr><td id="L44" class="css-a4x74f"><span>44</span></td><td id="LC44" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> 	<span class="code-comment">// expose the module cache</span>
</code></td></tr><tr><td id="L45" class="css-a4x74f"><span>45</span></td><td id="LC45" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> 	__webpack_require__.c = installedModules;
</code></td></tr><tr><td id="L46" class="css-a4x74f"><span>46</span></td><td id="LC46" class="css-1dcdqdg"><code><span class="code-comment">/******/</span>
</code></td></tr><tr><td id="L47" class="css-a4x74f"><span>47</span></td><td id="LC47" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> 	<span class="code-comment">// __webpack_public_path__</span>
</code></td></tr><tr><td id="L48" class="css-a4x74f"><span>48</span></td><td id="LC48" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> 	__webpack_require__.p = <span class="code-string">""</span>;
</code></td></tr><tr><td id="L49" class="css-a4x74f"><span>49</span></td><td id="LC49" class="css-1dcdqdg"><code><span class="code-comment">/******/</span>
</code></td></tr><tr><td id="L50" class="css-a4x74f"><span>50</span></td><td id="LC50" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> 	<span class="code-comment">// Load entry module and return exports</span>
</code></td></tr><tr><td id="L51" class="css-a4x74f"><span>51</span></td><td id="LC51" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> 	<span class="code-keyword">return</span> __webpack_require__(<span class="code-number">0</span>);
</code></td></tr><tr><td id="L52" class="css-a4x74f"><span>52</span></td><td id="LC52" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> })
</code></td></tr><tr><td id="L53" class="css-a4x74f"><span>53</span></td><td id="LC53" class="css-1dcdqdg"><code><span class="code-comment">/************************************************************************/</span>
</code></td></tr><tr><td id="L54" class="css-a4x74f"><span>54</span></td><td id="LC54" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> ([
</code></td></tr><tr><td id="L55" class="css-a4x74f"><span>55</span></td><td id="LC55" class="css-1dcdqdg"><code><span class="code-comment">/* 0 */</span>
</code></td></tr><tr><td id="L56" class="css-a4x74f"><span>56</span></td><td id="LC56" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> (<span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">module, exports, __webpack_require__</span>) </span>{
</code></td></tr><tr><td id="L57" class="css-a4x74f"><span>57</span></td><td id="LC57" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L58" class="css-a4x74f"><span>58</span></td><td id="LC58" class="css-1dcdqdg"><code>	<span class="code-built_in">module</span>.exports = __webpack_require__(<span class="code-number">1</span>);
</code></td></tr><tr><td id="L59" class="css-a4x74f"><span>59</span></td><td id="LC59" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L60" class="css-a4x74f"><span>60</span></td><td id="LC60" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> }),
</code></td></tr><tr><td id="L61" class="css-a4x74f"><span>61</span></td><td id="LC61" class="css-1dcdqdg"><code><span class="code-comment">/* 1 */</span>
</code></td></tr><tr><td id="L62" class="css-a4x74f"><span>62</span></td><td id="LC62" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> (<span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">module, exports, __webpack_require__</span>) </span>{
</code></td></tr><tr><td id="L63" class="css-a4x74f"><span>63</span></td><td id="LC63" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L64" class="css-a4x74f"><span>64</span></td><td id="LC64" class="css-1dcdqdg"><code><span class="code-meta">	'use strict'</span>;
</code></td></tr><tr><td id="L65" class="css-a4x74f"><span>65</span></td><td id="LC65" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L66" class="css-a4x74f"><span>66</span></td><td id="LC66" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> utils = __webpack_require__(<span class="code-number">2</span>);
</code></td></tr><tr><td id="L67" class="css-a4x74f"><span>67</span></td><td id="LC67" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> bind = __webpack_require__(<span class="code-number">3</span>);
</code></td></tr><tr><td id="L68" class="css-a4x74f"><span>68</span></td><td id="LC68" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> Axios = __webpack_require__(<span class="code-number">4</span>);
</code></td></tr><tr><td id="L69" class="css-a4x74f"><span>69</span></td><td id="LC69" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> mergeConfig = __webpack_require__(<span class="code-number">23</span>);
</code></td></tr><tr><td id="L70" class="css-a4x74f"><span>70</span></td><td id="LC70" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> defaults = __webpack_require__(<span class="code-number">10</span>);
</code></td></tr><tr><td id="L71" class="css-a4x74f"><span>71</span></td><td id="LC71" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L72" class="css-a4x74f"><span>72</span></td><td id="LC72" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L73" class="css-a4x74f"><span>73</span></td><td id="LC73" class="css-1dcdqdg"><code><span class="code-comment">	 * Create an instance of Axios
</span></code></td></tr><tr><td id="L74" class="css-a4x74f"><span>74</span></td><td id="LC74" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L75" class="css-a4x74f"><span>75</span></td><td id="LC75" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} defaultConfig The default config for the instance
</span></code></td></tr><tr><td id="L76" class="css-a4x74f"><span>76</span></td><td id="LC76" class="css-1dcdqdg"><code><span class="code-comment">	 * @return {Axios} A new instance of Axios
</span></code></td></tr><tr><td id="L77" class="css-a4x74f"><span>77</span></td><td id="LC77" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L78" class="css-a4x74f"><span>78</span></td><td id="LC78" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">createInstance</span>(<span class="code-params">defaultConfig</span>) </span>{
</code></td></tr><tr><td id="L79" class="css-a4x74f"><span>79</span></td><td id="LC79" class="css-1dcdqdg"><code>	  <span class="code-keyword">var</span> context = <span class="code-keyword">new</span> Axios(defaultConfig);
</code></td></tr><tr><td id="L80" class="css-a4x74f"><span>80</span></td><td id="LC80" class="css-1dcdqdg"><code>	  <span class="code-keyword">var</span> instance = bind(Axios.prototype.request, context);
</code></td></tr><tr><td id="L81" class="css-a4x74f"><span>81</span></td><td id="LC81" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L82" class="css-a4x74f"><span>82</span></td><td id="LC82" class="css-1dcdqdg"><code>	  <span class="code-comment">// Copy axios.prototype to instance</span>
</code></td></tr><tr><td id="L83" class="css-a4x74f"><span>83</span></td><td id="LC83" class="css-1dcdqdg"><code>	  utils.extend(instance, Axios.prototype, context);
</code></td></tr><tr><td id="L84" class="css-a4x74f"><span>84</span></td><td id="LC84" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L85" class="css-a4x74f"><span>85</span></td><td id="LC85" class="css-1dcdqdg"><code>	  <span class="code-comment">// Copy context to instance</span>
</code></td></tr><tr><td id="L86" class="css-a4x74f"><span>86</span></td><td id="LC86" class="css-1dcdqdg"><code>	  utils.extend(instance, context);
</code></td></tr><tr><td id="L87" class="css-a4x74f"><span>87</span></td><td id="LC87" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L88" class="css-a4x74f"><span>88</span></td><td id="LC88" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> instance;
</code></td></tr><tr><td id="L89" class="css-a4x74f"><span>89</span></td><td id="LC89" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L90" class="css-a4x74f"><span>90</span></td><td id="LC90" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L91" class="css-a4x74f"><span>91</span></td><td id="LC91" class="css-1dcdqdg"><code>	<span class="code-comment">// Create the default instance to be exported</span>
</code></td></tr><tr><td id="L92" class="css-a4x74f"><span>92</span></td><td id="LC92" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> axios = createInstance(defaults);
</code></td></tr><tr><td id="L93" class="css-a4x74f"><span>93</span></td><td id="LC93" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L94" class="css-a4x74f"><span>94</span></td><td id="LC94" class="css-1dcdqdg"><code>	<span class="code-comment">// Expose Axios class to allow class inheritance</span>
</code></td></tr><tr><td id="L95" class="css-a4x74f"><span>95</span></td><td id="LC95" class="css-1dcdqdg"><code>	axios.Axios = Axios;
</code></td></tr><tr><td id="L96" class="css-a4x74f"><span>96</span></td><td id="LC96" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L97" class="css-a4x74f"><span>97</span></td><td id="LC97" class="css-1dcdqdg"><code>	<span class="code-comment">// Factory for creating new instances</span>
</code></td></tr><tr><td id="L98" class="css-a4x74f"><span>98</span></td><td id="LC98" class="css-1dcdqdg"><code>	axios.create = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">create</span>(<span class="code-params">instanceConfig</span>) </span>{
</code></td></tr><tr><td id="L99" class="css-a4x74f"><span>99</span></td><td id="LC99" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> createInstance(mergeConfig(axios.defaults, instanceConfig));
</code></td></tr><tr><td id="L100" class="css-a4x74f"><span>100</span></td><td id="LC100" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L101" class="css-a4x74f"><span>101</span></td><td id="LC101" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L102" class="css-a4x74f"><span>102</span></td><td id="LC102" class="css-1dcdqdg"><code>	<span class="code-comment">// Expose Cancel &amp; CancelToken</span>
</code></td></tr><tr><td id="L103" class="css-a4x74f"><span>103</span></td><td id="LC103" class="css-1dcdqdg"><code>	axios.Cancel = __webpack_require__(<span class="code-number">24</span>);
</code></td></tr><tr><td id="L104" class="css-a4x74f"><span>104</span></td><td id="LC104" class="css-1dcdqdg"><code>	axios.CancelToken = __webpack_require__(<span class="code-number">25</span>);
</code></td></tr><tr><td id="L105" class="css-a4x74f"><span>105</span></td><td id="LC105" class="css-1dcdqdg"><code>	axios.isCancel = __webpack_require__(<span class="code-number">9</span>);
</code></td></tr><tr><td id="L106" class="css-a4x74f"><span>106</span></td><td id="LC106" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L107" class="css-a4x74f"><span>107</span></td><td id="LC107" class="css-1dcdqdg"><code>	<span class="code-comment">// Expose all/spread</span>
</code></td></tr><tr><td id="L108" class="css-a4x74f"><span>108</span></td><td id="LC108" class="css-1dcdqdg"><code>	axios.all = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">all</span>(<span class="code-params">promises</span>) </span>{
</code></td></tr><tr><td id="L109" class="css-a4x74f"><span>109</span></td><td id="LC109" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> <span class="code-built_in">Promise</span>.all(promises);
</code></td></tr><tr><td id="L110" class="css-a4x74f"><span>110</span></td><td id="LC110" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L111" class="css-a4x74f"><span>111</span></td><td id="LC111" class="css-1dcdqdg"><code>	axios.spread = __webpack_require__(<span class="code-number">26</span>);
</code></td></tr><tr><td id="L112" class="css-a4x74f"><span>112</span></td><td id="LC112" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L113" class="css-a4x74f"><span>113</span></td><td id="LC113" class="css-1dcdqdg"><code>	<span class="code-built_in">module</span>.exports = axios;
</code></td></tr><tr><td id="L114" class="css-a4x74f"><span>114</span></td><td id="LC114" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L115" class="css-a4x74f"><span>115</span></td><td id="LC115" class="css-1dcdqdg"><code>	<span class="code-comment">// Allow use of default import syntax in TypeScript</span>
</code></td></tr><tr><td id="L116" class="css-a4x74f"><span>116</span></td><td id="LC116" class="css-1dcdqdg"><code>	<span class="code-built_in">module</span>.exports.default = axios;
</code></td></tr><tr><td id="L117" class="css-a4x74f"><span>117</span></td><td id="LC117" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L118" class="css-a4x74f"><span>118</span></td><td id="LC118" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L119" class="css-a4x74f"><span>119</span></td><td id="LC119" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> }),
</code></td></tr><tr><td id="L120" class="css-a4x74f"><span>120</span></td><td id="LC120" class="css-1dcdqdg"><code><span class="code-comment">/* 2 */</span>
</code></td></tr><tr><td id="L121" class="css-a4x74f"><span>121</span></td><td id="LC121" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> (<span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">module, exports, __webpack_require__</span>) </span>{
</code></td></tr><tr><td id="L122" class="css-a4x74f"><span>122</span></td><td id="LC122" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L123" class="css-a4x74f"><span>123</span></td><td id="LC123" class="css-1dcdqdg"><code><span class="code-meta">	'use strict'</span>;
</code></td></tr><tr><td id="L124" class="css-a4x74f"><span>124</span></td><td id="LC124" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L125" class="css-a4x74f"><span>125</span></td><td id="LC125" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> bind = __webpack_require__(<span class="code-number">3</span>);
</code></td></tr><tr><td id="L126" class="css-a4x74f"><span>126</span></td><td id="LC126" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L127" class="css-a4x74f"><span>127</span></td><td id="LC127" class="css-1dcdqdg"><code>	<span class="code-comment">/*global toString:true*/</span>
</code></td></tr><tr><td id="L128" class="css-a4x74f"><span>128</span></td><td id="LC128" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L129" class="css-a4x74f"><span>129</span></td><td id="LC129" class="css-1dcdqdg"><code>	<span class="code-comment">// utils is a library of generic helper functions non-specific to axios</span>
</code></td></tr><tr><td id="L130" class="css-a4x74f"><span>130</span></td><td id="LC130" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L131" class="css-a4x74f"><span>131</span></td><td id="LC131" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> toString = <span class="code-built_in">Object</span>.prototype.toString;
</code></td></tr><tr><td id="L132" class="css-a4x74f"><span>132</span></td><td id="LC132" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L133" class="css-a4x74f"><span>133</span></td><td id="LC133" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L134" class="css-a4x74f"><span>134</span></td><td id="LC134" class="css-1dcdqdg"><code><span class="code-comment">	 * Determine if a value is an Array
</span></code></td></tr><tr><td id="L135" class="css-a4x74f"><span>135</span></td><td id="LC135" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L136" class="css-a4x74f"><span>136</span></td><td id="LC136" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} val The value to test
</span></code></td></tr><tr><td id="L137" class="css-a4x74f"><span>137</span></td><td id="LC137" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {boolean} True if value is an Array, otherwise false
</span></code></td></tr><tr><td id="L138" class="css-a4x74f"><span>138</span></td><td id="LC138" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L139" class="css-a4x74f"><span>139</span></td><td id="LC139" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">isArray</span>(<span class="code-params">val</span>) </span>{
</code></td></tr><tr><td id="L140" class="css-a4x74f"><span>140</span></td><td id="LC140" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> toString.call(val) === <span class="code-string">'[object Array]'</span>;
</code></td></tr><tr><td id="L141" class="css-a4x74f"><span>141</span></td><td id="LC141" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L142" class="css-a4x74f"><span>142</span></td><td id="LC142" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L143" class="css-a4x74f"><span>143</span></td><td id="LC143" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L144" class="css-a4x74f"><span>144</span></td><td id="LC144" class="css-1dcdqdg"><code><span class="code-comment">	 * Determine if a value is undefined
</span></code></td></tr><tr><td id="L145" class="css-a4x74f"><span>145</span></td><td id="LC145" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L146" class="css-a4x74f"><span>146</span></td><td id="LC146" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} val The value to test
</span></code></td></tr><tr><td id="L147" class="css-a4x74f"><span>147</span></td><td id="LC147" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {boolean} True if the value is undefined, otherwise false
</span></code></td></tr><tr><td id="L148" class="css-a4x74f"><span>148</span></td><td id="LC148" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L149" class="css-a4x74f"><span>149</span></td><td id="LC149" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">isUndefined</span>(<span class="code-params">val</span>) </span>{
</code></td></tr><tr><td id="L150" class="css-a4x74f"><span>150</span></td><td id="LC150" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> <span class="code-keyword">typeof</span> val === <span class="code-string">'undefined'</span>;
</code></td></tr><tr><td id="L151" class="css-a4x74f"><span>151</span></td><td id="LC151" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L152" class="css-a4x74f"><span>152</span></td><td id="LC152" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L153" class="css-a4x74f"><span>153</span></td><td id="LC153" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L154" class="css-a4x74f"><span>154</span></td><td id="LC154" class="css-1dcdqdg"><code><span class="code-comment">	 * Determine if a value is a Buffer
</span></code></td></tr><tr><td id="L155" class="css-a4x74f"><span>155</span></td><td id="LC155" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L156" class="css-a4x74f"><span>156</span></td><td id="LC156" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} val The value to test
</span></code></td></tr><tr><td id="L157" class="css-a4x74f"><span>157</span></td><td id="LC157" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {boolean} True if value is a Buffer, otherwise false
</span></code></td></tr><tr><td id="L158" class="css-a4x74f"><span>158</span></td><td id="LC158" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L159" class="css-a4x74f"><span>159</span></td><td id="LC159" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">isBuffer</span>(<span class="code-params">val</span>) </span>{
</code></td></tr><tr><td id="L160" class="css-a4x74f"><span>160</span></td><td id="LC160" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> val !== <span class="code-literal">null</span> &amp;&amp; !isUndefined(val) &amp;&amp; val.constructor !== <span class="code-literal">null</span> &amp;&amp; !isUndefined(val.constructor)
</code></td></tr><tr><td id="L161" class="css-a4x74f"><span>161</span></td><td id="LC161" class="css-1dcdqdg"><code>	    &amp;&amp; <span class="code-keyword">typeof</span> val.constructor.isBuffer === <span class="code-string">'function'</span> &amp;&amp; val.constructor.isBuffer(val);
</code></td></tr><tr><td id="L162" class="css-a4x74f"><span>162</span></td><td id="LC162" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L163" class="css-a4x74f"><span>163</span></td><td id="LC163" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L164" class="css-a4x74f"><span>164</span></td><td id="LC164" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L165" class="css-a4x74f"><span>165</span></td><td id="LC165" class="css-1dcdqdg"><code><span class="code-comment">	 * Determine if a value is an ArrayBuffer
</span></code></td></tr><tr><td id="L166" class="css-a4x74f"><span>166</span></td><td id="LC166" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L167" class="css-a4x74f"><span>167</span></td><td id="LC167" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} val The value to test
</span></code></td></tr><tr><td id="L168" class="css-a4x74f"><span>168</span></td><td id="LC168" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
</span></code></td></tr><tr><td id="L169" class="css-a4x74f"><span>169</span></td><td id="LC169" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L170" class="css-a4x74f"><span>170</span></td><td id="LC170" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">isArrayBuffer</span>(<span class="code-params">val</span>) </span>{
</code></td></tr><tr><td id="L171" class="css-a4x74f"><span>171</span></td><td id="LC171" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> toString.call(val) === <span class="code-string">'[object ArrayBuffer]'</span>;
</code></td></tr><tr><td id="L172" class="css-a4x74f"><span>172</span></td><td id="LC172" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L173" class="css-a4x74f"><span>173</span></td><td id="LC173" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L174" class="css-a4x74f"><span>174</span></td><td id="LC174" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L175" class="css-a4x74f"><span>175</span></td><td id="LC175" class="css-1dcdqdg"><code><span class="code-comment">	 * Determine if a value is a FormData
</span></code></td></tr><tr><td id="L176" class="css-a4x74f"><span>176</span></td><td id="LC176" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L177" class="css-a4x74f"><span>177</span></td><td id="LC177" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} val The value to test
</span></code></td></tr><tr><td id="L178" class="css-a4x74f"><span>178</span></td><td id="LC178" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {boolean} True if value is an FormData, otherwise false
</span></code></td></tr><tr><td id="L179" class="css-a4x74f"><span>179</span></td><td id="LC179" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L180" class="css-a4x74f"><span>180</span></td><td id="LC180" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">isFormData</span>(<span class="code-params">val</span>) </span>{
</code></td></tr><tr><td id="L181" class="css-a4x74f"><span>181</span></td><td id="LC181" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> (<span class="code-keyword">typeof</span> FormData !== <span class="code-string">'undefined'</span>) &amp;&amp; (val <span class="code-keyword">instanceof</span> FormData);
</code></td></tr><tr><td id="L182" class="css-a4x74f"><span>182</span></td><td id="LC182" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L183" class="css-a4x74f"><span>183</span></td><td id="LC183" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L184" class="css-a4x74f"><span>184</span></td><td id="LC184" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L185" class="css-a4x74f"><span>185</span></td><td id="LC185" class="css-1dcdqdg"><code><span class="code-comment">	 * Determine if a value is a view on an ArrayBuffer
</span></code></td></tr><tr><td id="L186" class="css-a4x74f"><span>186</span></td><td id="LC186" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L187" class="css-a4x74f"><span>187</span></td><td id="LC187" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} val The value to test
</span></code></td></tr><tr><td id="L188" class="css-a4x74f"><span>188</span></td><td id="LC188" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
</span></code></td></tr><tr><td id="L189" class="css-a4x74f"><span>189</span></td><td id="LC189" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L190" class="css-a4x74f"><span>190</span></td><td id="LC190" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">isArrayBufferView</span>(<span class="code-params">val</span>) </span>{
</code></td></tr><tr><td id="L191" class="css-a4x74f"><span>191</span></td><td id="LC191" class="css-1dcdqdg"><code>	  <span class="code-keyword">var</span> result;
</code></td></tr><tr><td id="L192" class="css-a4x74f"><span>192</span></td><td id="LC192" class="css-1dcdqdg"><code>	  <span class="code-keyword">if</span> ((<span class="code-keyword">typeof</span> <span class="code-built_in">ArrayBuffer</span> !== <span class="code-string">'undefined'</span>) &amp;&amp; (<span class="code-built_in">ArrayBuffer</span>.isView)) {
</code></td></tr><tr><td id="L193" class="css-a4x74f"><span>193</span></td><td id="LC193" class="css-1dcdqdg"><code>	    result = <span class="code-built_in">ArrayBuffer</span>.isView(val);
</code></td></tr><tr><td id="L194" class="css-a4x74f"><span>194</span></td><td id="LC194" class="css-1dcdqdg"><code>	  } <span class="code-keyword">else</span> {
</code></td></tr><tr><td id="L195" class="css-a4x74f"><span>195</span></td><td id="LC195" class="css-1dcdqdg"><code>	    result = (val) &amp;&amp; (val.buffer) &amp;&amp; (val.buffer <span class="code-keyword">instanceof</span> <span class="code-built_in">ArrayBuffer</span>);
</code></td></tr><tr><td id="L196" class="css-a4x74f"><span>196</span></td><td id="LC196" class="css-1dcdqdg"><code>	  }
</code></td></tr><tr><td id="L197" class="css-a4x74f"><span>197</span></td><td id="LC197" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> result;
</code></td></tr><tr><td id="L198" class="css-a4x74f"><span>198</span></td><td id="LC198" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L199" class="css-a4x74f"><span>199</span></td><td id="LC199" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L200" class="css-a4x74f"><span>200</span></td><td id="LC200" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L201" class="css-a4x74f"><span>201</span></td><td id="LC201" class="css-1dcdqdg"><code><span class="code-comment">	 * Determine if a value is a String
</span></code></td></tr><tr><td id="L202" class="css-a4x74f"><span>202</span></td><td id="LC202" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L203" class="css-a4x74f"><span>203</span></td><td id="LC203" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} val The value to test
</span></code></td></tr><tr><td id="L204" class="css-a4x74f"><span>204</span></td><td id="LC204" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {boolean} True if value is a String, otherwise false
</span></code></td></tr><tr><td id="L205" class="css-a4x74f"><span>205</span></td><td id="LC205" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L206" class="css-a4x74f"><span>206</span></td><td id="LC206" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">isString</span>(<span class="code-params">val</span>) </span>{
</code></td></tr><tr><td id="L207" class="css-a4x74f"><span>207</span></td><td id="LC207" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> <span class="code-keyword">typeof</span> val === <span class="code-string">'string'</span>;
</code></td></tr><tr><td id="L208" class="css-a4x74f"><span>208</span></td><td id="LC208" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L209" class="css-a4x74f"><span>209</span></td><td id="LC209" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L210" class="css-a4x74f"><span>210</span></td><td id="LC210" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L211" class="css-a4x74f"><span>211</span></td><td id="LC211" class="css-1dcdqdg"><code><span class="code-comment">	 * Determine if a value is a Number
</span></code></td></tr><tr><td id="L212" class="css-a4x74f"><span>212</span></td><td id="LC212" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L213" class="css-a4x74f"><span>213</span></td><td id="LC213" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} val The value to test
</span></code></td></tr><tr><td id="L214" class="css-a4x74f"><span>214</span></td><td id="LC214" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {boolean} True if value is a Number, otherwise false
</span></code></td></tr><tr><td id="L215" class="css-a4x74f"><span>215</span></td><td id="LC215" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L216" class="css-a4x74f"><span>216</span></td><td id="LC216" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">isNumber</span>(<span class="code-params">val</span>) </span>{
</code></td></tr><tr><td id="L217" class="css-a4x74f"><span>217</span></td><td id="LC217" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> <span class="code-keyword">typeof</span> val === <span class="code-string">'number'</span>;
</code></td></tr><tr><td id="L218" class="css-a4x74f"><span>218</span></td><td id="LC218" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L219" class="css-a4x74f"><span>219</span></td><td id="LC219" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L220" class="css-a4x74f"><span>220</span></td><td id="LC220" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L221" class="css-a4x74f"><span>221</span></td><td id="LC221" class="css-1dcdqdg"><code><span class="code-comment">	 * Determine if a value is an Object
</span></code></td></tr><tr><td id="L222" class="css-a4x74f"><span>222</span></td><td id="LC222" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L223" class="css-a4x74f"><span>223</span></td><td id="LC223" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} val The value to test
</span></code></td></tr><tr><td id="L224" class="css-a4x74f"><span>224</span></td><td id="LC224" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {boolean} True if value is an Object, otherwise false
</span></code></td></tr><tr><td id="L225" class="css-a4x74f"><span>225</span></td><td id="LC225" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L226" class="css-a4x74f"><span>226</span></td><td id="LC226" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">isObject</span>(<span class="code-params">val</span>) </span>{
</code></td></tr><tr><td id="L227" class="css-a4x74f"><span>227</span></td><td id="LC227" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> val !== <span class="code-literal">null</span> &amp;&amp; <span class="code-keyword">typeof</span> val === <span class="code-string">'object'</span>;
</code></td></tr><tr><td id="L228" class="css-a4x74f"><span>228</span></td><td id="LC228" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L229" class="css-a4x74f"><span>229</span></td><td id="LC229" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L230" class="css-a4x74f"><span>230</span></td><td id="LC230" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L231" class="css-a4x74f"><span>231</span></td><td id="LC231" class="css-1dcdqdg"><code><span class="code-comment">	 * Determine if a value is a Date
</span></code></td></tr><tr><td id="L232" class="css-a4x74f"><span>232</span></td><td id="LC232" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L233" class="css-a4x74f"><span>233</span></td><td id="LC233" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} val The value to test
</span></code></td></tr><tr><td id="L234" class="css-a4x74f"><span>234</span></td><td id="LC234" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {boolean} True if value is a Date, otherwise false
</span></code></td></tr><tr><td id="L235" class="css-a4x74f"><span>235</span></td><td id="LC235" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L236" class="css-a4x74f"><span>236</span></td><td id="LC236" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">isDate</span>(<span class="code-params">val</span>) </span>{
</code></td></tr><tr><td id="L237" class="css-a4x74f"><span>237</span></td><td id="LC237" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> toString.call(val) === <span class="code-string">'[object Date]'</span>;
</code></td></tr><tr><td id="L238" class="css-a4x74f"><span>238</span></td><td id="LC238" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L239" class="css-a4x74f"><span>239</span></td><td id="LC239" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L240" class="css-a4x74f"><span>240</span></td><td id="LC240" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L241" class="css-a4x74f"><span>241</span></td><td id="LC241" class="css-1dcdqdg"><code><span class="code-comment">	 * Determine if a value is a File
</span></code></td></tr><tr><td id="L242" class="css-a4x74f"><span>242</span></td><td id="LC242" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L243" class="css-a4x74f"><span>243</span></td><td id="LC243" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} val The value to test
</span></code></td></tr><tr><td id="L244" class="css-a4x74f"><span>244</span></td><td id="LC244" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {boolean} True if value is a File, otherwise false
</span></code></td></tr><tr><td id="L245" class="css-a4x74f"><span>245</span></td><td id="LC245" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L246" class="css-a4x74f"><span>246</span></td><td id="LC246" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">isFile</span>(<span class="code-params">val</span>) </span>{
</code></td></tr><tr><td id="L247" class="css-a4x74f"><span>247</span></td><td id="LC247" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> toString.call(val) === <span class="code-string">'[object File]'</span>;
</code></td></tr><tr><td id="L248" class="css-a4x74f"><span>248</span></td><td id="LC248" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L249" class="css-a4x74f"><span>249</span></td><td id="LC249" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L250" class="css-a4x74f"><span>250</span></td><td id="LC250" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L251" class="css-a4x74f"><span>251</span></td><td id="LC251" class="css-1dcdqdg"><code><span class="code-comment">	 * Determine if a value is a Blob
</span></code></td></tr><tr><td id="L252" class="css-a4x74f"><span>252</span></td><td id="LC252" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L253" class="css-a4x74f"><span>253</span></td><td id="LC253" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} val The value to test
</span></code></td></tr><tr><td id="L254" class="css-a4x74f"><span>254</span></td><td id="LC254" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {boolean} True if value is a Blob, otherwise false
</span></code></td></tr><tr><td id="L255" class="css-a4x74f"><span>255</span></td><td id="LC255" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L256" class="css-a4x74f"><span>256</span></td><td id="LC256" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">isBlob</span>(<span class="code-params">val</span>) </span>{
</code></td></tr><tr><td id="L257" class="css-a4x74f"><span>257</span></td><td id="LC257" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> toString.call(val) === <span class="code-string">'[object Blob]'</span>;
</code></td></tr><tr><td id="L258" class="css-a4x74f"><span>258</span></td><td id="LC258" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L259" class="css-a4x74f"><span>259</span></td><td id="LC259" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L260" class="css-a4x74f"><span>260</span></td><td id="LC260" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L261" class="css-a4x74f"><span>261</span></td><td id="LC261" class="css-1dcdqdg"><code><span class="code-comment">	 * Determine if a value is a Function
</span></code></td></tr><tr><td id="L262" class="css-a4x74f"><span>262</span></td><td id="LC262" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L263" class="css-a4x74f"><span>263</span></td><td id="LC263" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} val The value to test
</span></code></td></tr><tr><td id="L264" class="css-a4x74f"><span>264</span></td><td id="LC264" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {boolean} True if value is a Function, otherwise false
</span></code></td></tr><tr><td id="L265" class="css-a4x74f"><span>265</span></td><td id="LC265" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L266" class="css-a4x74f"><span>266</span></td><td id="LC266" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">isFunction</span>(<span class="code-params">val</span>) </span>{
</code></td></tr><tr><td id="L267" class="css-a4x74f"><span>267</span></td><td id="LC267" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> toString.call(val) === <span class="code-string">'[object Function]'</span>;
</code></td></tr><tr><td id="L268" class="css-a4x74f"><span>268</span></td><td id="LC268" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L269" class="css-a4x74f"><span>269</span></td><td id="LC269" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L270" class="css-a4x74f"><span>270</span></td><td id="LC270" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L271" class="css-a4x74f"><span>271</span></td><td id="LC271" class="css-1dcdqdg"><code><span class="code-comment">	 * Determine if a value is a Stream
</span></code></td></tr><tr><td id="L272" class="css-a4x74f"><span>272</span></td><td id="LC272" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L273" class="css-a4x74f"><span>273</span></td><td id="LC273" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} val The value to test
</span></code></td></tr><tr><td id="L274" class="css-a4x74f"><span>274</span></td><td id="LC274" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {boolean} True if value is a Stream, otherwise false
</span></code></td></tr><tr><td id="L275" class="css-a4x74f"><span>275</span></td><td id="LC275" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L276" class="css-a4x74f"><span>276</span></td><td id="LC276" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">isStream</span>(<span class="code-params">val</span>) </span>{
</code></td></tr><tr><td id="L277" class="css-a4x74f"><span>277</span></td><td id="LC277" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> isObject(val) &amp;&amp; isFunction(val.pipe);
</code></td></tr><tr><td id="L278" class="css-a4x74f"><span>278</span></td><td id="LC278" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L279" class="css-a4x74f"><span>279</span></td><td id="LC279" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L280" class="css-a4x74f"><span>280</span></td><td id="LC280" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L281" class="css-a4x74f"><span>281</span></td><td id="LC281" class="css-1dcdqdg"><code><span class="code-comment">	 * Determine if a value is a URLSearchParams object
</span></code></td></tr><tr><td id="L282" class="css-a4x74f"><span>282</span></td><td id="LC282" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L283" class="css-a4x74f"><span>283</span></td><td id="LC283" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} val The value to test
</span></code></td></tr><tr><td id="L284" class="css-a4x74f"><span>284</span></td><td id="LC284" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
</span></code></td></tr><tr><td id="L285" class="css-a4x74f"><span>285</span></td><td id="LC285" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L286" class="css-a4x74f"><span>286</span></td><td id="LC286" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">isURLSearchParams</span>(<span class="code-params">val</span>) </span>{
</code></td></tr><tr><td id="L287" class="css-a4x74f"><span>287</span></td><td id="LC287" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> <span class="code-keyword">typeof</span> URLSearchParams !== <span class="code-string">'undefined'</span> &amp;&amp; val <span class="code-keyword">instanceof</span> URLSearchParams;
</code></td></tr><tr><td id="L288" class="css-a4x74f"><span>288</span></td><td id="LC288" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L289" class="css-a4x74f"><span>289</span></td><td id="LC289" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L290" class="css-a4x74f"><span>290</span></td><td id="LC290" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L291" class="css-a4x74f"><span>291</span></td><td id="LC291" class="css-1dcdqdg"><code><span class="code-comment">	 * Trim excess whitespace off the beginning and end of a string
</span></code></td></tr><tr><td id="L292" class="css-a4x74f"><span>292</span></td><td id="LC292" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L293" class="css-a4x74f"><span>293</span></td><td id="LC293" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {String} str The String to trim
</span></code></td></tr><tr><td id="L294" class="css-a4x74f"><span>294</span></td><td id="LC294" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {String} The String freed of excess whitespace
</span></code></td></tr><tr><td id="L295" class="css-a4x74f"><span>295</span></td><td id="LC295" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L296" class="css-a4x74f"><span>296</span></td><td id="LC296" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">trim</span>(<span class="code-params">str</span>) </span>{
</code></td></tr><tr><td id="L297" class="css-a4x74f"><span>297</span></td><td id="LC297" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> str.replace(<span class="code-regexp">/^\s*/</span>, <span class="code-string">''</span>).replace(<span class="code-regexp">/\s*$/</span>, <span class="code-string">''</span>);
</code></td></tr><tr><td id="L298" class="css-a4x74f"><span>298</span></td><td id="LC298" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L299" class="css-a4x74f"><span>299</span></td><td id="LC299" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L300" class="css-a4x74f"><span>300</span></td><td id="LC300" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L301" class="css-a4x74f"><span>301</span></td><td id="LC301" class="css-1dcdqdg"><code><span class="code-comment">	 * Determine if we're running in a standard browser environment
</span></code></td></tr><tr><td id="L302" class="css-a4x74f"><span>302</span></td><td id="LC302" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L303" class="css-a4x74f"><span>303</span></td><td id="LC303" class="css-1dcdqdg"><code><span class="code-comment">	 * This allows axios to run in a web worker, and react-native.
</span></code></td></tr><tr><td id="L304" class="css-a4x74f"><span>304</span></td><td id="LC304" class="css-1dcdqdg"><code><span class="code-comment">	 * Both environments support XMLHttpRequest, but not fully standard globals.
</span></code></td></tr><tr><td id="L305" class="css-a4x74f"><span>305</span></td><td id="LC305" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L306" class="css-a4x74f"><span>306</span></td><td id="LC306" class="css-1dcdqdg"><code><span class="code-comment">	 * web workers:
</span></code></td></tr><tr><td id="L307" class="css-a4x74f"><span>307</span></td><td id="LC307" class="css-1dcdqdg"><code><span class="code-comment">	 *  typeof window -&gt; undefined
</span></code></td></tr><tr><td id="L308" class="css-a4x74f"><span>308</span></td><td id="LC308" class="css-1dcdqdg"><code><span class="code-comment">	 *  typeof document -&gt; undefined
</span></code></td></tr><tr><td id="L309" class="css-a4x74f"><span>309</span></td><td id="LC309" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L310" class="css-a4x74f"><span>310</span></td><td id="LC310" class="css-1dcdqdg"><code><span class="code-comment">	 * react-native:
</span></code></td></tr><tr><td id="L311" class="css-a4x74f"><span>311</span></td><td id="LC311" class="css-1dcdqdg"><code><span class="code-comment">	 *  navigator.product -&gt; 'ReactNative'
</span></code></td></tr><tr><td id="L312" class="css-a4x74f"><span>312</span></td><td id="LC312" class="css-1dcdqdg"><code><span class="code-comment">	 * nativescript
</span></code></td></tr><tr><td id="L313" class="css-a4x74f"><span>313</span></td><td id="LC313" class="css-1dcdqdg"><code><span class="code-comment">	 *  navigator.product -&gt; 'NativeScript' or 'NS'
</span></code></td></tr><tr><td id="L314" class="css-a4x74f"><span>314</span></td><td id="LC314" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L315" class="css-a4x74f"><span>315</span></td><td id="LC315" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">isStandardBrowserEnv</span>(<span class="code-params"></span>) </span>{
</code></td></tr><tr><td id="L316" class="css-a4x74f"><span>316</span></td><td id="LC316" class="css-1dcdqdg"><code>	  <span class="code-keyword">if</span> (<span class="code-keyword">typeof</span> navigator !== <span class="code-string">'undefined'</span> &amp;&amp; (navigator.product === <span class="code-string">'ReactNative'</span> ||
</code></td></tr><tr><td id="L317" class="css-a4x74f"><span>317</span></td><td id="LC317" class="css-1dcdqdg"><code>	                                           navigator.product === <span class="code-string">'NativeScript'</span> ||
</code></td></tr><tr><td id="L318" class="css-a4x74f"><span>318</span></td><td id="LC318" class="css-1dcdqdg"><code>	                                           navigator.product === <span class="code-string">'NS'</span>)) {
</code></td></tr><tr><td id="L319" class="css-a4x74f"><span>319</span></td><td id="LC319" class="css-1dcdqdg"><code>	    <span class="code-keyword">return</span> <span class="code-literal">false</span>;
</code></td></tr><tr><td id="L320" class="css-a4x74f"><span>320</span></td><td id="LC320" class="css-1dcdqdg"><code>	  }
</code></td></tr><tr><td id="L321" class="css-a4x74f"><span>321</span></td><td id="LC321" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> (
</code></td></tr><tr><td id="L322" class="css-a4x74f"><span>322</span></td><td id="LC322" class="css-1dcdqdg"><code>	    <span class="code-keyword">typeof</span> <span class="code-built_in">window</span> !== <span class="code-string">'undefined'</span> &amp;&amp;
</code></td></tr><tr><td id="L323" class="css-a4x74f"><span>323</span></td><td id="LC323" class="css-1dcdqdg"><code>	    <span class="code-keyword">typeof</span> <span class="code-built_in">document</span> !== <span class="code-string">'undefined'</span>
</code></td></tr><tr><td id="L324" class="css-a4x74f"><span>324</span></td><td id="LC324" class="css-1dcdqdg"><code>	  );
</code></td></tr><tr><td id="L325" class="css-a4x74f"><span>325</span></td><td id="LC325" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L326" class="css-a4x74f"><span>326</span></td><td id="LC326" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L327" class="css-a4x74f"><span>327</span></td><td id="LC327" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L328" class="css-a4x74f"><span>328</span></td><td id="LC328" class="css-1dcdqdg"><code><span class="code-comment">	 * Iterate over an Array or an Object invoking a function for each item.
</span></code></td></tr><tr><td id="L329" class="css-a4x74f"><span>329</span></td><td id="LC329" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L330" class="css-a4x74f"><span>330</span></td><td id="LC330" class="css-1dcdqdg"><code><span class="code-comment">	 * If `obj` is an Array callback will be called passing
</span></code></td></tr><tr><td id="L331" class="css-a4x74f"><span>331</span></td><td id="LC331" class="css-1dcdqdg"><code><span class="code-comment">	 * the value, index, and complete array for each item.
</span></code></td></tr><tr><td id="L332" class="css-a4x74f"><span>332</span></td><td id="LC332" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L333" class="css-a4x74f"><span>333</span></td><td id="LC333" class="css-1dcdqdg"><code><span class="code-comment">	 * If 'obj' is an Object callback will be called passing
</span></code></td></tr><tr><td id="L334" class="css-a4x74f"><span>334</span></td><td id="LC334" class="css-1dcdqdg"><code><span class="code-comment">	 * the value, key, and complete object for each property.
</span></code></td></tr><tr><td id="L335" class="css-a4x74f"><span>335</span></td><td id="LC335" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L336" class="css-a4x74f"><span>336</span></td><td id="LC336" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object|Array} obj The object to iterate
</span></code></td></tr><tr><td id="L337" class="css-a4x74f"><span>337</span></td><td id="LC337" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Function} fn The callback to invoke for each item
</span></code></td></tr><tr><td id="L338" class="css-a4x74f"><span>338</span></td><td id="LC338" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L339" class="css-a4x74f"><span>339</span></td><td id="LC339" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">forEach</span>(<span class="code-params">obj, fn</span>) </span>{
</code></td></tr><tr><td id="L340" class="css-a4x74f"><span>340</span></td><td id="LC340" class="css-1dcdqdg"><code>	  <span class="code-comment">// Don't bother if no value provided</span>
</code></td></tr><tr><td id="L341" class="css-a4x74f"><span>341</span></td><td id="LC341" class="css-1dcdqdg"><code>	  <span class="code-keyword">if</span> (obj === <span class="code-literal">null</span> || <span class="code-keyword">typeof</span> obj === <span class="code-string">'undefined'</span>) {
</code></td></tr><tr><td id="L342" class="css-a4x74f"><span>342</span></td><td id="LC342" class="css-1dcdqdg"><code>	    <span class="code-keyword">return</span>;
</code></td></tr><tr><td id="L343" class="css-a4x74f"><span>343</span></td><td id="LC343" class="css-1dcdqdg"><code>	  }
</code></td></tr><tr><td id="L344" class="css-a4x74f"><span>344</span></td><td id="LC344" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L345" class="css-a4x74f"><span>345</span></td><td id="LC345" class="css-1dcdqdg"><code>	  <span class="code-comment">// Force an array if not already something iterable</span>
</code></td></tr><tr><td id="L346" class="css-a4x74f"><span>346</span></td><td id="LC346" class="css-1dcdqdg"><code>	  <span class="code-keyword">if</span> (<span class="code-keyword">typeof</span> obj !== <span class="code-string">'object'</span>) {
</code></td></tr><tr><td id="L347" class="css-a4x74f"><span>347</span></td><td id="LC347" class="css-1dcdqdg"><code>	    <span class="code-comment">/*eslint no-param-reassign:0*/</span>
</code></td></tr><tr><td id="L348" class="css-a4x74f"><span>348</span></td><td id="LC348" class="css-1dcdqdg"><code>	    obj = [obj];
</code></td></tr><tr><td id="L349" class="css-a4x74f"><span>349</span></td><td id="LC349" class="css-1dcdqdg"><code>	  }
</code></td></tr><tr><td id="L350" class="css-a4x74f"><span>350</span></td><td id="LC350" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L351" class="css-a4x74f"><span>351</span></td><td id="LC351" class="css-1dcdqdg"><code>	  <span class="code-keyword">if</span> (isArray(obj)) {
</code></td></tr><tr><td id="L352" class="css-a4x74f"><span>352</span></td><td id="LC352" class="css-1dcdqdg"><code>	    <span class="code-comment">// Iterate over array values</span>
</code></td></tr><tr><td id="L353" class="css-a4x74f"><span>353</span></td><td id="LC353" class="css-1dcdqdg"><code>	    <span class="code-keyword">for</span> (<span class="code-keyword">var</span> i = <span class="code-number">0</span>, l = obj.length; i &lt; l; i++) {
</code></td></tr><tr><td id="L354" class="css-a4x74f"><span>354</span></td><td id="LC354" class="css-1dcdqdg"><code>	      fn.call(<span class="code-literal">null</span>, obj[i], i, obj);
</code></td></tr><tr><td id="L355" class="css-a4x74f"><span>355</span></td><td id="LC355" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L356" class="css-a4x74f"><span>356</span></td><td id="LC356" class="css-1dcdqdg"><code>	  } <span class="code-keyword">else</span> {
</code></td></tr><tr><td id="L357" class="css-a4x74f"><span>357</span></td><td id="LC357" class="css-1dcdqdg"><code>	    <span class="code-comment">// Iterate over object keys</span>
</code></td></tr><tr><td id="L358" class="css-a4x74f"><span>358</span></td><td id="LC358" class="css-1dcdqdg"><code>	    <span class="code-keyword">for</span> (<span class="code-keyword">var</span> key <span class="code-keyword">in</span> obj) {
</code></td></tr><tr><td id="L359" class="css-a4x74f"><span>359</span></td><td id="LC359" class="css-1dcdqdg"><code>	      <span class="code-keyword">if</span> (<span class="code-built_in">Object</span>.prototype.hasOwnProperty.call(obj, key)) {
</code></td></tr><tr><td id="L360" class="css-a4x74f"><span>360</span></td><td id="LC360" class="css-1dcdqdg"><code>	        fn.call(<span class="code-literal">null</span>, obj[key], key, obj);
</code></td></tr><tr><td id="L361" class="css-a4x74f"><span>361</span></td><td id="LC361" class="css-1dcdqdg"><code>	      }
</code></td></tr><tr><td id="L362" class="css-a4x74f"><span>362</span></td><td id="LC362" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L363" class="css-a4x74f"><span>363</span></td><td id="LC363" class="css-1dcdqdg"><code>	  }
</code></td></tr><tr><td id="L364" class="css-a4x74f"><span>364</span></td><td id="LC364" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L365" class="css-a4x74f"><span>365</span></td><td id="LC365" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L366" class="css-a4x74f"><span>366</span></td><td id="LC366" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L367" class="css-a4x74f"><span>367</span></td><td id="LC367" class="css-1dcdqdg"><code><span class="code-comment">	 * Accepts varargs expecting each argument to be an object, then
</span></code></td></tr><tr><td id="L368" class="css-a4x74f"><span>368</span></td><td id="LC368" class="css-1dcdqdg"><code><span class="code-comment">	 * immutably merges the properties of each object and returns result.
</span></code></td></tr><tr><td id="L369" class="css-a4x74f"><span>369</span></td><td id="LC369" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L370" class="css-a4x74f"><span>370</span></td><td id="LC370" class="css-1dcdqdg"><code><span class="code-comment">	 * When multiple objects contain the same key the later object in
</span></code></td></tr><tr><td id="L371" class="css-a4x74f"><span>371</span></td><td id="LC371" class="css-1dcdqdg"><code><span class="code-comment">	 * the arguments list will take precedence.
</span></code></td></tr><tr><td id="L372" class="css-a4x74f"><span>372</span></td><td id="LC372" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L373" class="css-a4x74f"><span>373</span></td><td id="LC373" class="css-1dcdqdg"><code><span class="code-comment">	 * Example:
</span></code></td></tr><tr><td id="L374" class="css-a4x74f"><span>374</span></td><td id="LC374" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L375" class="css-a4x74f"><span>375</span></td><td id="LC375" class="css-1dcdqdg"><code><span class="code-comment">	 * ```js
</span></code></td></tr><tr><td id="L376" class="css-a4x74f"><span>376</span></td><td id="LC376" class="css-1dcdqdg"><code><span class="code-comment">	 * var result = merge({foo: 123}, {foo: 456});
</span></code></td></tr><tr><td id="L377" class="css-a4x74f"><span>377</span></td><td id="LC377" class="css-1dcdqdg"><code><span class="code-comment">	 * console.log(result.foo); // outputs 456
</span></code></td></tr><tr><td id="L378" class="css-a4x74f"><span>378</span></td><td id="LC378" class="css-1dcdqdg"><code><span class="code-comment">	 * ```
</span></code></td></tr><tr><td id="L379" class="css-a4x74f"><span>379</span></td><td id="LC379" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L380" class="css-a4x74f"><span>380</span></td><td id="LC380" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} obj1 Object to merge
</span></code></td></tr><tr><td id="L381" class="css-a4x74f"><span>381</span></td><td id="LC381" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {Object} Result of all merge properties
</span></code></td></tr><tr><td id="L382" class="css-a4x74f"><span>382</span></td><td id="LC382" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L383" class="css-a4x74f"><span>383</span></td><td id="LC383" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">merge</span>(<span class="code-params"><span class="code-regexp">/* obj1, obj2, obj3, ... */</span></span>) </span>{
</code></td></tr><tr><td id="L384" class="css-a4x74f"><span>384</span></td><td id="LC384" class="css-1dcdqdg"><code>	  <span class="code-keyword">var</span> result = {};
</code></td></tr><tr><td id="L385" class="css-a4x74f"><span>385</span></td><td id="LC385" class="css-1dcdqdg"><code>	  <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">assignValue</span>(<span class="code-params">val, key</span>) </span>{
</code></td></tr><tr><td id="L386" class="css-a4x74f"><span>386</span></td><td id="LC386" class="css-1dcdqdg"><code>	    <span class="code-keyword">if</span> (<span class="code-keyword">typeof</span> result[key] === <span class="code-string">'object'</span> &amp;&amp; <span class="code-keyword">typeof</span> val === <span class="code-string">'object'</span>) {
</code></td></tr><tr><td id="L387" class="css-a4x74f"><span>387</span></td><td id="LC387" class="css-1dcdqdg"><code>	      result[key] = merge(result[key], val);
</code></td></tr><tr><td id="L388" class="css-a4x74f"><span>388</span></td><td id="LC388" class="css-1dcdqdg"><code>	    } <span class="code-keyword">else</span> {
</code></td></tr><tr><td id="L389" class="css-a4x74f"><span>389</span></td><td id="LC389" class="css-1dcdqdg"><code>	      result[key] = val;
</code></td></tr><tr><td id="L390" class="css-a4x74f"><span>390</span></td><td id="LC390" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L391" class="css-a4x74f"><span>391</span></td><td id="LC391" class="css-1dcdqdg"><code>	  }
</code></td></tr><tr><td id="L392" class="css-a4x74f"><span>392</span></td><td id="LC392" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L393" class="css-a4x74f"><span>393</span></td><td id="LC393" class="css-1dcdqdg"><code>	  <span class="code-keyword">for</span> (<span class="code-keyword">var</span> i = <span class="code-number">0</span>, l = <span class="code-built_in">arguments</span>.length; i &lt; l; i++) {
</code></td></tr><tr><td id="L394" class="css-a4x74f"><span>394</span></td><td id="LC394" class="css-1dcdqdg"><code>	    forEach(<span class="code-built_in">arguments</span>[i], assignValue);
</code></td></tr><tr><td id="L395" class="css-a4x74f"><span>395</span></td><td id="LC395" class="css-1dcdqdg"><code>	  }
</code></td></tr><tr><td id="L396" class="css-a4x74f"><span>396</span></td><td id="LC396" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> result;
</code></td></tr><tr><td id="L397" class="css-a4x74f"><span>397</span></td><td id="LC397" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L398" class="css-a4x74f"><span>398</span></td><td id="LC398" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L399" class="css-a4x74f"><span>399</span></td><td id="LC399" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L400" class="css-a4x74f"><span>400</span></td><td id="LC400" class="css-1dcdqdg"><code><span class="code-comment">	 * Function equal to merge with the difference being that no reference
</span></code></td></tr><tr><td id="L401" class="css-a4x74f"><span>401</span></td><td id="LC401" class="css-1dcdqdg"><code><span class="code-comment">	 * to original objects is kept.
</span></code></td></tr><tr><td id="L402" class="css-a4x74f"><span>402</span></td><td id="LC402" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L403" class="css-a4x74f"><span>403</span></td><td id="LC403" class="css-1dcdqdg"><code><span class="code-comment">	 * @see merge
</span></code></td></tr><tr><td id="L404" class="css-a4x74f"><span>404</span></td><td id="LC404" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} obj1 Object to merge
</span></code></td></tr><tr><td id="L405" class="css-a4x74f"><span>405</span></td><td id="LC405" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {Object} Result of all merge properties
</span></code></td></tr><tr><td id="L406" class="css-a4x74f"><span>406</span></td><td id="LC406" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L407" class="css-a4x74f"><span>407</span></td><td id="LC407" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">deepMerge</span>(<span class="code-params"><span class="code-regexp">/* obj1, obj2, obj3, ... */</span></span>) </span>{
</code></td></tr><tr><td id="L408" class="css-a4x74f"><span>408</span></td><td id="LC408" class="css-1dcdqdg"><code>	  <span class="code-keyword">var</span> result = {};
</code></td></tr><tr><td id="L409" class="css-a4x74f"><span>409</span></td><td id="LC409" class="css-1dcdqdg"><code>	  <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">assignValue</span>(<span class="code-params">val, key</span>) </span>{
</code></td></tr><tr><td id="L410" class="css-a4x74f"><span>410</span></td><td id="LC410" class="css-1dcdqdg"><code>	    <span class="code-keyword">if</span> (<span class="code-keyword">typeof</span> result[key] === <span class="code-string">'object'</span> &amp;&amp; <span class="code-keyword">typeof</span> val === <span class="code-string">'object'</span>) {
</code></td></tr><tr><td id="L411" class="css-a4x74f"><span>411</span></td><td id="LC411" class="css-1dcdqdg"><code>	      result[key] = deepMerge(result[key], val);
</code></td></tr><tr><td id="L412" class="css-a4x74f"><span>412</span></td><td id="LC412" class="css-1dcdqdg"><code>	    } <span class="code-keyword">else</span> <span class="code-keyword">if</span> (<span class="code-keyword">typeof</span> val === <span class="code-string">'object'</span>) {
</code></td></tr><tr><td id="L413" class="css-a4x74f"><span>413</span></td><td id="LC413" class="css-1dcdqdg"><code>	      result[key] = deepMerge({}, val);
</code></td></tr><tr><td id="L414" class="css-a4x74f"><span>414</span></td><td id="LC414" class="css-1dcdqdg"><code>	    } <span class="code-keyword">else</span> {
</code></td></tr><tr><td id="L415" class="css-a4x74f"><span>415</span></td><td id="LC415" class="css-1dcdqdg"><code>	      result[key] = val;
</code></td></tr><tr><td id="L416" class="css-a4x74f"><span>416</span></td><td id="LC416" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L417" class="css-a4x74f"><span>417</span></td><td id="LC417" class="css-1dcdqdg"><code>	  }
</code></td></tr><tr><td id="L418" class="css-a4x74f"><span>418</span></td><td id="LC418" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L419" class="css-a4x74f"><span>419</span></td><td id="LC419" class="css-1dcdqdg"><code>	  <span class="code-keyword">for</span> (<span class="code-keyword">var</span> i = <span class="code-number">0</span>, l = <span class="code-built_in">arguments</span>.length; i &lt; l; i++) {
</code></td></tr><tr><td id="L420" class="css-a4x74f"><span>420</span></td><td id="LC420" class="css-1dcdqdg"><code>	    forEach(<span class="code-built_in">arguments</span>[i], assignValue);
</code></td></tr><tr><td id="L421" class="css-a4x74f"><span>421</span></td><td id="LC421" class="css-1dcdqdg"><code>	  }
</code></td></tr><tr><td id="L422" class="css-a4x74f"><span>422</span></td><td id="LC422" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> result;
</code></td></tr><tr><td id="L423" class="css-a4x74f"><span>423</span></td><td id="LC423" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L424" class="css-a4x74f"><span>424</span></td><td id="LC424" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L425" class="css-a4x74f"><span>425</span></td><td id="LC425" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L426" class="css-a4x74f"><span>426</span></td><td id="LC426" class="css-1dcdqdg"><code><span class="code-comment">	 * Extends object a by mutably adding to it the properties of object b.
</span></code></td></tr><tr><td id="L427" class="css-a4x74f"><span>427</span></td><td id="LC427" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L428" class="css-a4x74f"><span>428</span></td><td id="LC428" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} a The object to be extended
</span></code></td></tr><tr><td id="L429" class="css-a4x74f"><span>429</span></td><td id="LC429" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} b The object to copy properties from
</span></code></td></tr><tr><td id="L430" class="css-a4x74f"><span>430</span></td><td id="LC430" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} thisArg The object to bind function to
</span></code></td></tr><tr><td id="L431" class="css-a4x74f"><span>431</span></td><td id="LC431" class="css-1dcdqdg"><code><span class="code-comment">	 * @return {Object} The resulting value of object a
</span></code></td></tr><tr><td id="L432" class="css-a4x74f"><span>432</span></td><td id="LC432" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L433" class="css-a4x74f"><span>433</span></td><td id="LC433" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">extend</span>(<span class="code-params">a, b, thisArg</span>) </span>{
</code></td></tr><tr><td id="L434" class="css-a4x74f"><span>434</span></td><td id="LC434" class="css-1dcdqdg"><code>	  forEach(b, <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">assignValue</span>(<span class="code-params">val, key</span>) </span>{
</code></td></tr><tr><td id="L435" class="css-a4x74f"><span>435</span></td><td id="LC435" class="css-1dcdqdg"><code>	    <span class="code-keyword">if</span> (thisArg &amp;&amp; <span class="code-keyword">typeof</span> val === <span class="code-string">'function'</span>) {
</code></td></tr><tr><td id="L436" class="css-a4x74f"><span>436</span></td><td id="LC436" class="css-1dcdqdg"><code>	      a[key] = bind(val, thisArg);
</code></td></tr><tr><td id="L437" class="css-a4x74f"><span>437</span></td><td id="LC437" class="css-1dcdqdg"><code>	    } <span class="code-keyword">else</span> {
</code></td></tr><tr><td id="L438" class="css-a4x74f"><span>438</span></td><td id="LC438" class="css-1dcdqdg"><code>	      a[key] = val;
</code></td></tr><tr><td id="L439" class="css-a4x74f"><span>439</span></td><td id="LC439" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L440" class="css-a4x74f"><span>440</span></td><td id="LC440" class="css-1dcdqdg"><code>	  });
</code></td></tr><tr><td id="L441" class="css-a4x74f"><span>441</span></td><td id="LC441" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> a;
</code></td></tr><tr><td id="L442" class="css-a4x74f"><span>442</span></td><td id="LC442" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L443" class="css-a4x74f"><span>443</span></td><td id="LC443" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L444" class="css-a4x74f"><span>444</span></td><td id="LC444" class="css-1dcdqdg"><code>	<span class="code-built_in">module</span>.exports = {
</code></td></tr><tr><td id="L445" class="css-a4x74f"><span>445</span></td><td id="LC445" class="css-1dcdqdg"><code>	  isArray: isArray,
</code></td></tr><tr><td id="L446" class="css-a4x74f"><span>446</span></td><td id="LC446" class="css-1dcdqdg"><code>	  isArrayBuffer: isArrayBuffer,
</code></td></tr><tr><td id="L447" class="css-a4x74f"><span>447</span></td><td id="LC447" class="css-1dcdqdg"><code>	  isBuffer: isBuffer,
</code></td></tr><tr><td id="L448" class="css-a4x74f"><span>448</span></td><td id="LC448" class="css-1dcdqdg"><code>	  isFormData: isFormData,
</code></td></tr><tr><td id="L449" class="css-a4x74f"><span>449</span></td><td id="LC449" class="css-1dcdqdg"><code>	  isArrayBufferView: isArrayBufferView,
</code></td></tr><tr><td id="L450" class="css-a4x74f"><span>450</span></td><td id="LC450" class="css-1dcdqdg"><code>	  isString: isString,
</code></td></tr><tr><td id="L451" class="css-a4x74f"><span>451</span></td><td id="LC451" class="css-1dcdqdg"><code>	  isNumber: isNumber,
</code></td></tr><tr><td id="L452" class="css-a4x74f"><span>452</span></td><td id="LC452" class="css-1dcdqdg"><code>	  isObject: isObject,
</code></td></tr><tr><td id="L453" class="css-a4x74f"><span>453</span></td><td id="LC453" class="css-1dcdqdg"><code>	  isUndefined: isUndefined,
</code></td></tr><tr><td id="L454" class="css-a4x74f"><span>454</span></td><td id="LC454" class="css-1dcdqdg"><code>	  isDate: isDate,
</code></td></tr><tr><td id="L455" class="css-a4x74f"><span>455</span></td><td id="LC455" class="css-1dcdqdg"><code>	  isFile: isFile,
</code></td></tr><tr><td id="L456" class="css-a4x74f"><span>456</span></td><td id="LC456" class="css-1dcdqdg"><code>	  isBlob: isBlob,
</code></td></tr><tr><td id="L457" class="css-a4x74f"><span>457</span></td><td id="LC457" class="css-1dcdqdg"><code>	  isFunction: isFunction,
</code></td></tr><tr><td id="L458" class="css-a4x74f"><span>458</span></td><td id="LC458" class="css-1dcdqdg"><code>	  isStream: isStream,
</code></td></tr><tr><td id="L459" class="css-a4x74f"><span>459</span></td><td id="LC459" class="css-1dcdqdg"><code>	  isURLSearchParams: isURLSearchParams,
</code></td></tr><tr><td id="L460" class="css-a4x74f"><span>460</span></td><td id="LC460" class="css-1dcdqdg"><code>	  isStandardBrowserEnv: isStandardBrowserEnv,
</code></td></tr><tr><td id="L461" class="css-a4x74f"><span>461</span></td><td id="LC461" class="css-1dcdqdg"><code>	  forEach: forEach,
</code></td></tr><tr><td id="L462" class="css-a4x74f"><span>462</span></td><td id="LC462" class="css-1dcdqdg"><code>	  merge: merge,
</code></td></tr><tr><td id="L463" class="css-a4x74f"><span>463</span></td><td id="LC463" class="css-1dcdqdg"><code>	  deepMerge: deepMerge,
</code></td></tr><tr><td id="L464" class="css-a4x74f"><span>464</span></td><td id="LC464" class="css-1dcdqdg"><code>	  extend: extend,
</code></td></tr><tr><td id="L465" class="css-a4x74f"><span>465</span></td><td id="LC465" class="css-1dcdqdg"><code>	  trim: trim
</code></td></tr><tr><td id="L466" class="css-a4x74f"><span>466</span></td><td id="LC466" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L467" class="css-a4x74f"><span>467</span></td><td id="LC467" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L468" class="css-a4x74f"><span>468</span></td><td id="LC468" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L469" class="css-a4x74f"><span>469</span></td><td id="LC469" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> }),
</code></td></tr><tr><td id="L470" class="css-a4x74f"><span>470</span></td><td id="LC470" class="css-1dcdqdg"><code><span class="code-comment">/* 3 */</span>
</code></td></tr><tr><td id="L471" class="css-a4x74f"><span>471</span></td><td id="LC471" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> (<span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">module, exports</span>) </span>{
</code></td></tr><tr><td id="L472" class="css-a4x74f"><span>472</span></td><td id="LC472" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L473" class="css-a4x74f"><span>473</span></td><td id="LC473" class="css-1dcdqdg"><code><span class="code-meta">	'use strict'</span>;
</code></td></tr><tr><td id="L474" class="css-a4x74f"><span>474</span></td><td id="LC474" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L475" class="css-a4x74f"><span>475</span></td><td id="LC475" class="css-1dcdqdg"><code>	<span class="code-built_in">module</span>.exports = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">bind</span>(<span class="code-params">fn, thisArg</span>) </span>{
</code></td></tr><tr><td id="L476" class="css-a4x74f"><span>476</span></td><td id="LC476" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">wrap</span>(<span class="code-params"></span>) </span>{
</code></td></tr><tr><td id="L477" class="css-a4x74f"><span>477</span></td><td id="LC477" class="css-1dcdqdg"><code>	    <span class="code-keyword">var</span> args = <span class="code-keyword">new</span> <span class="code-built_in">Array</span>(<span class="code-built_in">arguments</span>.length);
</code></td></tr><tr><td id="L478" class="css-a4x74f"><span>478</span></td><td id="LC478" class="css-1dcdqdg"><code>	    <span class="code-keyword">for</span> (<span class="code-keyword">var</span> i = <span class="code-number">0</span>; i &lt; args.length; i++) {
</code></td></tr><tr><td id="L479" class="css-a4x74f"><span>479</span></td><td id="LC479" class="css-1dcdqdg"><code>	      args[i] = <span class="code-built_in">arguments</span>[i];
</code></td></tr><tr><td id="L480" class="css-a4x74f"><span>480</span></td><td id="LC480" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L481" class="css-a4x74f"><span>481</span></td><td id="LC481" class="css-1dcdqdg"><code>	    <span class="code-keyword">return</span> fn.apply(thisArg, args);
</code></td></tr><tr><td id="L482" class="css-a4x74f"><span>482</span></td><td id="LC482" class="css-1dcdqdg"><code>	  };
</code></td></tr><tr><td id="L483" class="css-a4x74f"><span>483</span></td><td id="LC483" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L484" class="css-a4x74f"><span>484</span></td><td id="LC484" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L485" class="css-a4x74f"><span>485</span></td><td id="LC485" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L486" class="css-a4x74f"><span>486</span></td><td id="LC486" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> }),
</code></td></tr><tr><td id="L487" class="css-a4x74f"><span>487</span></td><td id="LC487" class="css-1dcdqdg"><code><span class="code-comment">/* 4 */</span>
</code></td></tr><tr><td id="L488" class="css-a4x74f"><span>488</span></td><td id="LC488" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> (<span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">module, exports, __webpack_require__</span>) </span>{
</code></td></tr><tr><td id="L489" class="css-a4x74f"><span>489</span></td><td id="LC489" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L490" class="css-a4x74f"><span>490</span></td><td id="LC490" class="css-1dcdqdg"><code><span class="code-meta">	'use strict'</span>;
</code></td></tr><tr><td id="L491" class="css-a4x74f"><span>491</span></td><td id="LC491" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L492" class="css-a4x74f"><span>492</span></td><td id="LC492" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> utils = __webpack_require__(<span class="code-number">2</span>);
</code></td></tr><tr><td id="L493" class="css-a4x74f"><span>493</span></td><td id="LC493" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> buildURL = __webpack_require__(<span class="code-number">5</span>);
</code></td></tr><tr><td id="L494" class="css-a4x74f"><span>494</span></td><td id="LC494" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> InterceptorManager = __webpack_require__(<span class="code-number">6</span>);
</code></td></tr><tr><td id="L495" class="css-a4x74f"><span>495</span></td><td id="LC495" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> dispatchRequest = __webpack_require__(<span class="code-number">7</span>);
</code></td></tr><tr><td id="L496" class="css-a4x74f"><span>496</span></td><td id="LC496" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> mergeConfig = __webpack_require__(<span class="code-number">23</span>);
</code></td></tr><tr><td id="L497" class="css-a4x74f"><span>497</span></td><td id="LC497" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L498" class="css-a4x74f"><span>498</span></td><td id="LC498" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L499" class="css-a4x74f"><span>499</span></td><td id="LC499" class="css-1dcdqdg"><code><span class="code-comment">	 * Create a new instance of Axios
</span></code></td></tr><tr><td id="L500" class="css-a4x74f"><span>500</span></td><td id="LC500" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L501" class="css-a4x74f"><span>501</span></td><td id="LC501" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} instanceConfig The default config for the instance
</span></code></td></tr><tr><td id="L502" class="css-a4x74f"><span>502</span></td><td id="LC502" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L503" class="css-a4x74f"><span>503</span></td><td id="LC503" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">Axios</span>(<span class="code-params">instanceConfig</span>) </span>{
</code></td></tr><tr><td id="L504" class="css-a4x74f"><span>504</span></td><td id="LC504" class="css-1dcdqdg"><code>	  <span class="code-keyword">this</span>.defaults = instanceConfig;
</code></td></tr><tr><td id="L505" class="css-a4x74f"><span>505</span></td><td id="LC505" class="css-1dcdqdg"><code>	  <span class="code-keyword">this</span>.interceptors = {
</code></td></tr><tr><td id="L506" class="css-a4x74f"><span>506</span></td><td id="LC506" class="css-1dcdqdg"><code>	    request: <span class="code-keyword">new</span> InterceptorManager(),
</code></td></tr><tr><td id="L507" class="css-a4x74f"><span>507</span></td><td id="LC507" class="css-1dcdqdg"><code>	    response: <span class="code-keyword">new</span> InterceptorManager()
</code></td></tr><tr><td id="L508" class="css-a4x74f"><span>508</span></td><td id="LC508" class="css-1dcdqdg"><code>	  };
</code></td></tr><tr><td id="L509" class="css-a4x74f"><span>509</span></td><td id="LC509" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L510" class="css-a4x74f"><span>510</span></td><td id="LC510" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L511" class="css-a4x74f"><span>511</span></td><td id="LC511" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L512" class="css-a4x74f"><span>512</span></td><td id="LC512" class="css-1dcdqdg"><code><span class="code-comment">	 * Dispatch a request
</span></code></td></tr><tr><td id="L513" class="css-a4x74f"><span>513</span></td><td id="LC513" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L514" class="css-a4x74f"><span>514</span></td><td id="LC514" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} config The config specific for this request (merged with this.defaults)
</span></code></td></tr><tr><td id="L515" class="css-a4x74f"><span>515</span></td><td id="LC515" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L516" class="css-a4x74f"><span>516</span></td><td id="LC516" class="css-1dcdqdg"><code>	Axios.prototype.request = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">request</span>(<span class="code-params">config</span>) </span>{
</code></td></tr><tr><td id="L517" class="css-a4x74f"><span>517</span></td><td id="LC517" class="css-1dcdqdg"><code>	  <span class="code-comment">/*eslint no-param-reassign:0*/</span>
</code></td></tr><tr><td id="L518" class="css-a4x74f"><span>518</span></td><td id="LC518" class="css-1dcdqdg"><code>	  <span class="code-comment">// Allow for axios('example/url'[, config]) a la fetch API</span>
</code></td></tr><tr><td id="L519" class="css-a4x74f"><span>519</span></td><td id="LC519" class="css-1dcdqdg"><code>	  <span class="code-keyword">if</span> (<span class="code-keyword">typeof</span> config === <span class="code-string">'string'</span>) {
</code></td></tr><tr><td id="L520" class="css-a4x74f"><span>520</span></td><td id="LC520" class="css-1dcdqdg"><code>	    config = <span class="code-built_in">arguments</span>[<span class="code-number">1</span>] || {};
</code></td></tr><tr><td id="L521" class="css-a4x74f"><span>521</span></td><td id="LC521" class="css-1dcdqdg"><code>	    config.url = <span class="code-built_in">arguments</span>[<span class="code-number">0</span>];
</code></td></tr><tr><td id="L522" class="css-a4x74f"><span>522</span></td><td id="LC522" class="css-1dcdqdg"><code>	  } <span class="code-keyword">else</span> {
</code></td></tr><tr><td id="L523" class="css-a4x74f"><span>523</span></td><td id="LC523" class="css-1dcdqdg"><code>	    config = config || {};
</code></td></tr><tr><td id="L524" class="css-a4x74f"><span>524</span></td><td id="LC524" class="css-1dcdqdg"><code>	  }
</code></td></tr><tr><td id="L525" class="css-a4x74f"><span>525</span></td><td id="LC525" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L526" class="css-a4x74f"><span>526</span></td><td id="LC526" class="css-1dcdqdg"><code>	  config = mergeConfig(<span class="code-keyword">this</span>.defaults, config);
</code></td></tr><tr><td id="L527" class="css-a4x74f"><span>527</span></td><td id="LC527" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L528" class="css-a4x74f"><span>528</span></td><td id="LC528" class="css-1dcdqdg"><code>	  <span class="code-comment">// Set config.method</span>
</code></td></tr><tr><td id="L529" class="css-a4x74f"><span>529</span></td><td id="LC529" class="css-1dcdqdg"><code>	  <span class="code-keyword">if</span> (config.method) {
</code></td></tr><tr><td id="L530" class="css-a4x74f"><span>530</span></td><td id="LC530" class="css-1dcdqdg"><code>	    config.method = config.method.toLowerCase();
</code></td></tr><tr><td id="L531" class="css-a4x74f"><span>531</span></td><td id="LC531" class="css-1dcdqdg"><code>	  } <span class="code-keyword">else</span> <span class="code-keyword">if</span> (<span class="code-keyword">this</span>.defaults.method) {
</code></td></tr><tr><td id="L532" class="css-a4x74f"><span>532</span></td><td id="LC532" class="css-1dcdqdg"><code>	    config.method = <span class="code-keyword">this</span>.defaults.method.toLowerCase();
</code></td></tr><tr><td id="L533" class="css-a4x74f"><span>533</span></td><td id="LC533" class="css-1dcdqdg"><code>	  } <span class="code-keyword">else</span> {
</code></td></tr><tr><td id="L534" class="css-a4x74f"><span>534</span></td><td id="LC534" class="css-1dcdqdg"><code>	    config.method = <span class="code-string">'get'</span>;
</code></td></tr><tr><td id="L535" class="css-a4x74f"><span>535</span></td><td id="LC535" class="css-1dcdqdg"><code>	  }
</code></td></tr><tr><td id="L536" class="css-a4x74f"><span>536</span></td><td id="LC536" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L537" class="css-a4x74f"><span>537</span></td><td id="LC537" class="css-1dcdqdg"><code>	  <span class="code-comment">// Hook up interceptors middleware</span>
</code></td></tr><tr><td id="L538" class="css-a4x74f"><span>538</span></td><td id="LC538" class="css-1dcdqdg"><code>	  <span class="code-keyword">var</span> chain = [dispatchRequest, <span class="code-literal">undefined</span>];
</code></td></tr><tr><td id="L539" class="css-a4x74f"><span>539</span></td><td id="LC539" class="css-1dcdqdg"><code>	  <span class="code-keyword">var</span> promise = <span class="code-built_in">Promise</span>.resolve(config);
</code></td></tr><tr><td id="L540" class="css-a4x74f"><span>540</span></td><td id="LC540" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L541" class="css-a4x74f"><span>541</span></td><td id="LC541" class="css-1dcdqdg"><code>	  <span class="code-keyword">this</span>.interceptors.request.forEach(<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">unshiftRequestInterceptors</span>(<span class="code-params">interceptor</span>) </span>{
</code></td></tr><tr><td id="L542" class="css-a4x74f"><span>542</span></td><td id="LC542" class="css-1dcdqdg"><code>	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
</code></td></tr><tr><td id="L543" class="css-a4x74f"><span>543</span></td><td id="LC543" class="css-1dcdqdg"><code>	  });
</code></td></tr><tr><td id="L544" class="css-a4x74f"><span>544</span></td><td id="LC544" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L545" class="css-a4x74f"><span>545</span></td><td id="LC545" class="css-1dcdqdg"><code>	  <span class="code-keyword">this</span>.interceptors.response.forEach(<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">pushResponseInterceptors</span>(<span class="code-params">interceptor</span>) </span>{
</code></td></tr><tr><td id="L546" class="css-a4x74f"><span>546</span></td><td id="LC546" class="css-1dcdqdg"><code>	    chain.push(interceptor.fulfilled, interceptor.rejected);
</code></td></tr><tr><td id="L547" class="css-a4x74f"><span>547</span></td><td id="LC547" class="css-1dcdqdg"><code>	  });
</code></td></tr><tr><td id="L548" class="css-a4x74f"><span>548</span></td><td id="LC548" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L549" class="css-a4x74f"><span>549</span></td><td id="LC549" class="css-1dcdqdg"><code>	  <span class="code-keyword">while</span> (chain.length) {
</code></td></tr><tr><td id="L550" class="css-a4x74f"><span>550</span></td><td id="LC550" class="css-1dcdqdg"><code>	    promise = promise.then(chain.shift(), chain.shift());
</code></td></tr><tr><td id="L551" class="css-a4x74f"><span>551</span></td><td id="LC551" class="css-1dcdqdg"><code>	  }
</code></td></tr><tr><td id="L552" class="css-a4x74f"><span>552</span></td><td id="LC552" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L553" class="css-a4x74f"><span>553</span></td><td id="LC553" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> promise;
</code></td></tr><tr><td id="L554" class="css-a4x74f"><span>554</span></td><td id="LC554" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L555" class="css-a4x74f"><span>555</span></td><td id="LC555" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L556" class="css-a4x74f"><span>556</span></td><td id="LC556" class="css-1dcdqdg"><code>	Axios.prototype.getUri = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">getUri</span>(<span class="code-params">config</span>) </span>{
</code></td></tr><tr><td id="L557" class="css-a4x74f"><span>557</span></td><td id="LC557" class="css-1dcdqdg"><code>	  config = mergeConfig(<span class="code-keyword">this</span>.defaults, config);
</code></td></tr><tr><td id="L558" class="css-a4x74f"><span>558</span></td><td id="LC558" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> buildURL(config.url, config.params, config.paramsSerializer).replace(<span class="code-regexp">/^\?/</span>, <span class="code-string">''</span>);
</code></td></tr><tr><td id="L559" class="css-a4x74f"><span>559</span></td><td id="LC559" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L560" class="css-a4x74f"><span>560</span></td><td id="LC560" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L561" class="css-a4x74f"><span>561</span></td><td id="LC561" class="css-1dcdqdg"><code>	<span class="code-comment">// Provide aliases for supported request methods</span>
</code></td></tr><tr><td id="L562" class="css-a4x74f"><span>562</span></td><td id="LC562" class="css-1dcdqdg"><code>	utils.forEach([<span class="code-string">'delete'</span>, <span class="code-string">'get'</span>, <span class="code-string">'head'</span>, <span class="code-string">'options'</span>], <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">forEachMethodNoData</span>(<span class="code-params">method</span>) </span>{
</code></td></tr><tr><td id="L563" class="css-a4x74f"><span>563</span></td><td id="LC563" class="css-1dcdqdg"><code>	  <span class="code-comment">/*eslint func-names:0*/</span>
</code></td></tr><tr><td id="L564" class="css-a4x74f"><span>564</span></td><td id="LC564" class="css-1dcdqdg"><code>	  Axios.prototype[method] = <span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">url, config</span>) </span>{
</code></td></tr><tr><td id="L565" class="css-a4x74f"><span>565</span></td><td id="LC565" class="css-1dcdqdg"><code>	    <span class="code-keyword">return</span> <span class="code-keyword">this</span>.request(utils.merge(config || {}, {
</code></td></tr><tr><td id="L566" class="css-a4x74f"><span>566</span></td><td id="LC566" class="css-1dcdqdg"><code>	      method: method,
</code></td></tr><tr><td id="L567" class="css-a4x74f"><span>567</span></td><td id="LC567" class="css-1dcdqdg"><code>	      url: url
</code></td></tr><tr><td id="L568" class="css-a4x74f"><span>568</span></td><td id="LC568" class="css-1dcdqdg"><code>	    }));
</code></td></tr><tr><td id="L569" class="css-a4x74f"><span>569</span></td><td id="LC569" class="css-1dcdqdg"><code>	  };
</code></td></tr><tr><td id="L570" class="css-a4x74f"><span>570</span></td><td id="LC570" class="css-1dcdqdg"><code>	});
</code></td></tr><tr><td id="L571" class="css-a4x74f"><span>571</span></td><td id="LC571" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L572" class="css-a4x74f"><span>572</span></td><td id="LC572" class="css-1dcdqdg"><code>	utils.forEach([<span class="code-string">'post'</span>, <span class="code-string">'put'</span>, <span class="code-string">'patch'</span>], <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">forEachMethodWithData</span>(<span class="code-params">method</span>) </span>{
</code></td></tr><tr><td id="L573" class="css-a4x74f"><span>573</span></td><td id="LC573" class="css-1dcdqdg"><code>	  <span class="code-comment">/*eslint func-names:0*/</span>
</code></td></tr><tr><td id="L574" class="css-a4x74f"><span>574</span></td><td id="LC574" class="css-1dcdqdg"><code>	  Axios.prototype[method] = <span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">url, data, config</span>) </span>{
</code></td></tr><tr><td id="L575" class="css-a4x74f"><span>575</span></td><td id="LC575" class="css-1dcdqdg"><code>	    <span class="code-keyword">return</span> <span class="code-keyword">this</span>.request(utils.merge(config || {}, {
</code></td></tr><tr><td id="L576" class="css-a4x74f"><span>576</span></td><td id="LC576" class="css-1dcdqdg"><code>	      method: method,
</code></td></tr><tr><td id="L577" class="css-a4x74f"><span>577</span></td><td id="LC577" class="css-1dcdqdg"><code>	      url: url,
</code></td></tr><tr><td id="L578" class="css-a4x74f"><span>578</span></td><td id="LC578" class="css-1dcdqdg"><code>	      data: data
</code></td></tr><tr><td id="L579" class="css-a4x74f"><span>579</span></td><td id="LC579" class="css-1dcdqdg"><code>	    }));
</code></td></tr><tr><td id="L580" class="css-a4x74f"><span>580</span></td><td id="LC580" class="css-1dcdqdg"><code>	  };
</code></td></tr><tr><td id="L581" class="css-a4x74f"><span>581</span></td><td id="LC581" class="css-1dcdqdg"><code>	});
</code></td></tr><tr><td id="L582" class="css-a4x74f"><span>582</span></td><td id="LC582" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L583" class="css-a4x74f"><span>583</span></td><td id="LC583" class="css-1dcdqdg"><code>	<span class="code-built_in">module</span>.exports = Axios;
</code></td></tr><tr><td id="L584" class="css-a4x74f"><span>584</span></td><td id="LC584" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L585" class="css-a4x74f"><span>585</span></td><td id="LC585" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L586" class="css-a4x74f"><span>586</span></td><td id="LC586" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> }),
</code></td></tr><tr><td id="L587" class="css-a4x74f"><span>587</span></td><td id="LC587" class="css-1dcdqdg"><code><span class="code-comment">/* 5 */</span>
</code></td></tr><tr><td id="L588" class="css-a4x74f"><span>588</span></td><td id="LC588" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> (<span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">module, exports, __webpack_require__</span>) </span>{
</code></td></tr><tr><td id="L589" class="css-a4x74f"><span>589</span></td><td id="LC589" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L590" class="css-a4x74f"><span>590</span></td><td id="LC590" class="css-1dcdqdg"><code><span class="code-meta">	'use strict'</span>;
</code></td></tr><tr><td id="L591" class="css-a4x74f"><span>591</span></td><td id="LC591" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L592" class="css-a4x74f"><span>592</span></td><td id="LC592" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> utils = __webpack_require__(<span class="code-number">2</span>);
</code></td></tr><tr><td id="L593" class="css-a4x74f"><span>593</span></td><td id="LC593" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L594" class="css-a4x74f"><span>594</span></td><td id="LC594" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">encode</span>(<span class="code-params">val</span>) </span>{
</code></td></tr><tr><td id="L595" class="css-a4x74f"><span>595</span></td><td id="LC595" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> <span class="code-built_in">encodeURIComponent</span>(val).
</code></td></tr><tr><td id="L596" class="css-a4x74f"><span>596</span></td><td id="LC596" class="css-1dcdqdg"><code>	    replace(<span class="code-regexp">/%40/gi</span>, <span class="code-string">'@'</span>).
</code></td></tr><tr><td id="L597" class="css-a4x74f"><span>597</span></td><td id="LC597" class="css-1dcdqdg"><code>	    replace(<span class="code-regexp">/%3A/gi</span>, <span class="code-string">':'</span>).
</code></td></tr><tr><td id="L598" class="css-a4x74f"><span>598</span></td><td id="LC598" class="css-1dcdqdg"><code>	    replace(<span class="code-regexp">/%24/g</span>, <span class="code-string">'$'</span>).
</code></td></tr><tr><td id="L599" class="css-a4x74f"><span>599</span></td><td id="LC599" class="css-1dcdqdg"><code>	    replace(<span class="code-regexp">/%2C/gi</span>, <span class="code-string">','</span>).
</code></td></tr><tr><td id="L600" class="css-a4x74f"><span>600</span></td><td id="LC600" class="css-1dcdqdg"><code>	    replace(<span class="code-regexp">/%20/g</span>, <span class="code-string">'+'</span>).
</code></td></tr><tr><td id="L601" class="css-a4x74f"><span>601</span></td><td id="LC601" class="css-1dcdqdg"><code>	    replace(<span class="code-regexp">/%5B/gi</span>, <span class="code-string">'['</span>).
</code></td></tr><tr><td id="L602" class="css-a4x74f"><span>602</span></td><td id="LC602" class="css-1dcdqdg"><code>	    replace(<span class="code-regexp">/%5D/gi</span>, <span class="code-string">']'</span>);
</code></td></tr><tr><td id="L603" class="css-a4x74f"><span>603</span></td><td id="LC603" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L604" class="css-a4x74f"><span>604</span></td><td id="LC604" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L605" class="css-a4x74f"><span>605</span></td><td id="LC605" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L606" class="css-a4x74f"><span>606</span></td><td id="LC606" class="css-1dcdqdg"><code><span class="code-comment">	 * Build a URL by appending params to the end
</span></code></td></tr><tr><td id="L607" class="css-a4x74f"><span>607</span></td><td id="LC607" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L608" class="css-a4x74f"><span>608</span></td><td id="LC608" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {string} url The base of the url (e.g., http://www.google.com)
</span></code></td></tr><tr><td id="L609" class="css-a4x74f"><span>609</span></td><td id="LC609" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {object} [params] The params to be appended
</span></code></td></tr><tr><td id="L610" class="css-a4x74f"><span>610</span></td><td id="LC610" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {string} The formatted url
</span></code></td></tr><tr><td id="L611" class="css-a4x74f"><span>611</span></td><td id="LC611" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L612" class="css-a4x74f"><span>612</span></td><td id="LC612" class="css-1dcdqdg"><code>	<span class="code-built_in">module</span>.exports = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">buildURL</span>(<span class="code-params">url, params, paramsSerializer</span>) </span>{
</code></td></tr><tr><td id="L613" class="css-a4x74f"><span>613</span></td><td id="LC613" class="css-1dcdqdg"><code>	  <span class="code-comment">/*eslint no-param-reassign:0*/</span>
</code></td></tr><tr><td id="L614" class="css-a4x74f"><span>614</span></td><td id="LC614" class="css-1dcdqdg"><code>	  <span class="code-keyword">if</span> (!params) {
</code></td></tr><tr><td id="L615" class="css-a4x74f"><span>615</span></td><td id="LC615" class="css-1dcdqdg"><code>	    <span class="code-keyword">return</span> url;
</code></td></tr><tr><td id="L616" class="css-a4x74f"><span>616</span></td><td id="LC616" class="css-1dcdqdg"><code>	  }
</code></td></tr><tr><td id="L617" class="css-a4x74f"><span>617</span></td><td id="LC617" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L618" class="css-a4x74f"><span>618</span></td><td id="LC618" class="css-1dcdqdg"><code>	  <span class="code-keyword">var</span> serializedParams;
</code></td></tr><tr><td id="L619" class="css-a4x74f"><span>619</span></td><td id="LC619" class="css-1dcdqdg"><code>	  <span class="code-keyword">if</span> (paramsSerializer) {
</code></td></tr><tr><td id="L620" class="css-a4x74f"><span>620</span></td><td id="LC620" class="css-1dcdqdg"><code>	    serializedParams = paramsSerializer(params);
</code></td></tr><tr><td id="L621" class="css-a4x74f"><span>621</span></td><td id="LC621" class="css-1dcdqdg"><code>	  } <span class="code-keyword">else</span> <span class="code-keyword">if</span> (utils.isURLSearchParams(params)) {
</code></td></tr><tr><td id="L622" class="css-a4x74f"><span>622</span></td><td id="LC622" class="css-1dcdqdg"><code>	    serializedParams = params.toString();
</code></td></tr><tr><td id="L623" class="css-a4x74f"><span>623</span></td><td id="LC623" class="css-1dcdqdg"><code>	  } <span class="code-keyword">else</span> {
</code></td></tr><tr><td id="L624" class="css-a4x74f"><span>624</span></td><td id="LC624" class="css-1dcdqdg"><code>	    <span class="code-keyword">var</span> parts = [];
</code></td></tr><tr><td id="L625" class="css-a4x74f"><span>625</span></td><td id="LC625" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L626" class="css-a4x74f"><span>626</span></td><td id="LC626" class="css-1dcdqdg"><code>	    utils.forEach(params, <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">serialize</span>(<span class="code-params">val, key</span>) </span>{
</code></td></tr><tr><td id="L627" class="css-a4x74f"><span>627</span></td><td id="LC627" class="css-1dcdqdg"><code>	      <span class="code-keyword">if</span> (val === <span class="code-literal">null</span> || <span class="code-keyword">typeof</span> val === <span class="code-string">'undefined'</span>) {
</code></td></tr><tr><td id="L628" class="css-a4x74f"><span>628</span></td><td id="LC628" class="css-1dcdqdg"><code>	        <span class="code-keyword">return</span>;
</code></td></tr><tr><td id="L629" class="css-a4x74f"><span>629</span></td><td id="LC629" class="css-1dcdqdg"><code>	      }
</code></td></tr><tr><td id="L630" class="css-a4x74f"><span>630</span></td><td id="LC630" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L631" class="css-a4x74f"><span>631</span></td><td id="LC631" class="css-1dcdqdg"><code>	      <span class="code-keyword">if</span> (utils.isArray(val)) {
</code></td></tr><tr><td id="L632" class="css-a4x74f"><span>632</span></td><td id="LC632" class="css-1dcdqdg"><code>	        key = key + <span class="code-string">'[]'</span>;
</code></td></tr><tr><td id="L633" class="css-a4x74f"><span>633</span></td><td id="LC633" class="css-1dcdqdg"><code>	      } <span class="code-keyword">else</span> {
</code></td></tr><tr><td id="L634" class="css-a4x74f"><span>634</span></td><td id="LC634" class="css-1dcdqdg"><code>	        val = [val];
</code></td></tr><tr><td id="L635" class="css-a4x74f"><span>635</span></td><td id="LC635" class="css-1dcdqdg"><code>	      }
</code></td></tr><tr><td id="L636" class="css-a4x74f"><span>636</span></td><td id="LC636" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L637" class="css-a4x74f"><span>637</span></td><td id="LC637" class="css-1dcdqdg"><code>	      utils.forEach(val, <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">parseValue</span>(<span class="code-params">v</span>) </span>{
</code></td></tr><tr><td id="L638" class="css-a4x74f"><span>638</span></td><td id="LC638" class="css-1dcdqdg"><code>	        <span class="code-keyword">if</span> (utils.isDate(v)) {
</code></td></tr><tr><td id="L639" class="css-a4x74f"><span>639</span></td><td id="LC639" class="css-1dcdqdg"><code>	          v = v.toISOString();
</code></td></tr><tr><td id="L640" class="css-a4x74f"><span>640</span></td><td id="LC640" class="css-1dcdqdg"><code>	        } <span class="code-keyword">else</span> <span class="code-keyword">if</span> (utils.isObject(v)) {
</code></td></tr><tr><td id="L641" class="css-a4x74f"><span>641</span></td><td id="LC641" class="css-1dcdqdg"><code>	          v = <span class="code-built_in">JSON</span>.stringify(v);
</code></td></tr><tr><td id="L642" class="css-a4x74f"><span>642</span></td><td id="LC642" class="css-1dcdqdg"><code>	        }
</code></td></tr><tr><td id="L643" class="css-a4x74f"><span>643</span></td><td id="LC643" class="css-1dcdqdg"><code>	        parts.push(encode(key) + <span class="code-string">'='</span> + encode(v));
</code></td></tr><tr><td id="L644" class="css-a4x74f"><span>644</span></td><td id="LC644" class="css-1dcdqdg"><code>	      });
</code></td></tr><tr><td id="L645" class="css-a4x74f"><span>645</span></td><td id="LC645" class="css-1dcdqdg"><code>	    });
</code></td></tr><tr><td id="L646" class="css-a4x74f"><span>646</span></td><td id="LC646" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L647" class="css-a4x74f"><span>647</span></td><td id="LC647" class="css-1dcdqdg"><code>	    serializedParams = parts.join(<span class="code-string">'&amp;'</span>);
</code></td></tr><tr><td id="L648" class="css-a4x74f"><span>648</span></td><td id="LC648" class="css-1dcdqdg"><code>	  }
</code></td></tr><tr><td id="L649" class="css-a4x74f"><span>649</span></td><td id="LC649" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L650" class="css-a4x74f"><span>650</span></td><td id="LC650" class="css-1dcdqdg"><code>	  <span class="code-keyword">if</span> (serializedParams) {
</code></td></tr><tr><td id="L651" class="css-a4x74f"><span>651</span></td><td id="LC651" class="css-1dcdqdg"><code>	    <span class="code-keyword">var</span> hashmarkIndex = url.indexOf(<span class="code-string">'#'</span>);
</code></td></tr><tr><td id="L652" class="css-a4x74f"><span>652</span></td><td id="LC652" class="css-1dcdqdg"><code>	    <span class="code-keyword">if</span> (hashmarkIndex !== <span class="code-number">-1</span>) {
</code></td></tr><tr><td id="L653" class="css-a4x74f"><span>653</span></td><td id="LC653" class="css-1dcdqdg"><code>	      url = url.slice(<span class="code-number">0</span>, hashmarkIndex);
</code></td></tr><tr><td id="L654" class="css-a4x74f"><span>654</span></td><td id="LC654" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L655" class="css-a4x74f"><span>655</span></td><td id="LC655" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L656" class="css-a4x74f"><span>656</span></td><td id="LC656" class="css-1dcdqdg"><code>	    url += (url.indexOf(<span class="code-string">'?'</span>) === <span class="code-number">-1</span> ? <span class="code-string">'?'</span> : <span class="code-string">'&amp;'</span>) + serializedParams;
</code></td></tr><tr><td id="L657" class="css-a4x74f"><span>657</span></td><td id="LC657" class="css-1dcdqdg"><code>	  }
</code></td></tr><tr><td id="L658" class="css-a4x74f"><span>658</span></td><td id="LC658" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L659" class="css-a4x74f"><span>659</span></td><td id="LC659" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> url;
</code></td></tr><tr><td id="L660" class="css-a4x74f"><span>660</span></td><td id="LC660" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L661" class="css-a4x74f"><span>661</span></td><td id="LC661" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L662" class="css-a4x74f"><span>662</span></td><td id="LC662" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L663" class="css-a4x74f"><span>663</span></td><td id="LC663" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> }),
</code></td></tr><tr><td id="L664" class="css-a4x74f"><span>664</span></td><td id="LC664" class="css-1dcdqdg"><code><span class="code-comment">/* 6 */</span>
</code></td></tr><tr><td id="L665" class="css-a4x74f"><span>665</span></td><td id="LC665" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> (<span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">module, exports, __webpack_require__</span>) </span>{
</code></td></tr><tr><td id="L666" class="css-a4x74f"><span>666</span></td><td id="LC666" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L667" class="css-a4x74f"><span>667</span></td><td id="LC667" class="css-1dcdqdg"><code><span class="code-meta">	'use strict'</span>;
</code></td></tr><tr><td id="L668" class="css-a4x74f"><span>668</span></td><td id="LC668" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L669" class="css-a4x74f"><span>669</span></td><td id="LC669" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> utils = __webpack_require__(<span class="code-number">2</span>);
</code></td></tr><tr><td id="L670" class="css-a4x74f"><span>670</span></td><td id="LC670" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L671" class="css-a4x74f"><span>671</span></td><td id="LC671" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">InterceptorManager</span>(<span class="code-params"></span>) </span>{
</code></td></tr><tr><td id="L672" class="css-a4x74f"><span>672</span></td><td id="LC672" class="css-1dcdqdg"><code>	  <span class="code-keyword">this</span>.handlers = [];
</code></td></tr><tr><td id="L673" class="css-a4x74f"><span>673</span></td><td id="LC673" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L674" class="css-a4x74f"><span>674</span></td><td id="LC674" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L675" class="css-a4x74f"><span>675</span></td><td id="LC675" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L676" class="css-a4x74f"><span>676</span></td><td id="LC676" class="css-1dcdqdg"><code><span class="code-comment">	 * Add a new interceptor to the stack
</span></code></td></tr><tr><td id="L677" class="css-a4x74f"><span>677</span></td><td id="LC677" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L678" class="css-a4x74f"><span>678</span></td><td id="LC678" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
</span></code></td></tr><tr><td id="L679" class="css-a4x74f"><span>679</span></td><td id="LC679" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Function} rejected The function to handle `reject` for a `Promise`
</span></code></td></tr><tr><td id="L680" class="css-a4x74f"><span>680</span></td><td id="LC680" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L681" class="css-a4x74f"><span>681</span></td><td id="LC681" class="css-1dcdqdg"><code><span class="code-comment">	 * @return {Number} An ID used to remove interceptor later
</span></code></td></tr><tr><td id="L682" class="css-a4x74f"><span>682</span></td><td id="LC682" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L683" class="css-a4x74f"><span>683</span></td><td id="LC683" class="css-1dcdqdg"><code>	InterceptorManager.prototype.use = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">use</span>(<span class="code-params">fulfilled, rejected</span>) </span>{
</code></td></tr><tr><td id="L684" class="css-a4x74f"><span>684</span></td><td id="LC684" class="css-1dcdqdg"><code>	  <span class="code-keyword">this</span>.handlers.push({
</code></td></tr><tr><td id="L685" class="css-a4x74f"><span>685</span></td><td id="LC685" class="css-1dcdqdg"><code>	    fulfilled: fulfilled,
</code></td></tr><tr><td id="L686" class="css-a4x74f"><span>686</span></td><td id="LC686" class="css-1dcdqdg"><code>	    rejected: rejected
</code></td></tr><tr><td id="L687" class="css-a4x74f"><span>687</span></td><td id="LC687" class="css-1dcdqdg"><code>	  });
</code></td></tr><tr><td id="L688" class="css-a4x74f"><span>688</span></td><td id="LC688" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> <span class="code-keyword">this</span>.handlers.length - <span class="code-number">1</span>;
</code></td></tr><tr><td id="L689" class="css-a4x74f"><span>689</span></td><td id="LC689" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L690" class="css-a4x74f"><span>690</span></td><td id="LC690" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L691" class="css-a4x74f"><span>691</span></td><td id="LC691" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L692" class="css-a4x74f"><span>692</span></td><td id="LC692" class="css-1dcdqdg"><code><span class="code-comment">	 * Remove an interceptor from the stack
</span></code></td></tr><tr><td id="L693" class="css-a4x74f"><span>693</span></td><td id="LC693" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L694" class="css-a4x74f"><span>694</span></td><td id="LC694" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Number} id The ID that was returned by `use`
</span></code></td></tr><tr><td id="L695" class="css-a4x74f"><span>695</span></td><td id="LC695" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L696" class="css-a4x74f"><span>696</span></td><td id="LC696" class="css-1dcdqdg"><code>	InterceptorManager.prototype.eject = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">eject</span>(<span class="code-params">id</span>) </span>{
</code></td></tr><tr><td id="L697" class="css-a4x74f"><span>697</span></td><td id="LC697" class="css-1dcdqdg"><code>	  <span class="code-keyword">if</span> (<span class="code-keyword">this</span>.handlers[id]) {
</code></td></tr><tr><td id="L698" class="css-a4x74f"><span>698</span></td><td id="LC698" class="css-1dcdqdg"><code>	    <span class="code-keyword">this</span>.handlers[id] = <span class="code-literal">null</span>;
</code></td></tr><tr><td id="L699" class="css-a4x74f"><span>699</span></td><td id="LC699" class="css-1dcdqdg"><code>	  }
</code></td></tr><tr><td id="L700" class="css-a4x74f"><span>700</span></td><td id="LC700" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L701" class="css-a4x74f"><span>701</span></td><td id="LC701" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L702" class="css-a4x74f"><span>702</span></td><td id="LC702" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L703" class="css-a4x74f"><span>703</span></td><td id="LC703" class="css-1dcdqdg"><code><span class="code-comment">	 * Iterate over all the registered interceptors
</span></code></td></tr><tr><td id="L704" class="css-a4x74f"><span>704</span></td><td id="LC704" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L705" class="css-a4x74f"><span>705</span></td><td id="LC705" class="css-1dcdqdg"><code><span class="code-comment">	 * This method is particularly useful for skipping over any
</span></code></td></tr><tr><td id="L706" class="css-a4x74f"><span>706</span></td><td id="LC706" class="css-1dcdqdg"><code><span class="code-comment">	 * interceptors that may have become `null` calling `eject`.
</span></code></td></tr><tr><td id="L707" class="css-a4x74f"><span>707</span></td><td id="LC707" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L708" class="css-a4x74f"><span>708</span></td><td id="LC708" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Function} fn The function to call for each interceptor
</span></code></td></tr><tr><td id="L709" class="css-a4x74f"><span>709</span></td><td id="LC709" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L710" class="css-a4x74f"><span>710</span></td><td id="LC710" class="css-1dcdqdg"><code>	InterceptorManager.prototype.forEach = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">forEach</span>(<span class="code-params">fn</span>) </span>{
</code></td></tr><tr><td id="L711" class="css-a4x74f"><span>711</span></td><td id="LC711" class="css-1dcdqdg"><code>	  utils.forEach(<span class="code-keyword">this</span>.handlers, <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">forEachHandler</span>(<span class="code-params">h</span>) </span>{
</code></td></tr><tr><td id="L712" class="css-a4x74f"><span>712</span></td><td id="LC712" class="css-1dcdqdg"><code>	    <span class="code-keyword">if</span> (h !== <span class="code-literal">null</span>) {
</code></td></tr><tr><td id="L713" class="css-a4x74f"><span>713</span></td><td id="LC713" class="css-1dcdqdg"><code>	      fn(h);
</code></td></tr><tr><td id="L714" class="css-a4x74f"><span>714</span></td><td id="LC714" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L715" class="css-a4x74f"><span>715</span></td><td id="LC715" class="css-1dcdqdg"><code>	  });
</code></td></tr><tr><td id="L716" class="css-a4x74f"><span>716</span></td><td id="LC716" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L717" class="css-a4x74f"><span>717</span></td><td id="LC717" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L718" class="css-a4x74f"><span>718</span></td><td id="LC718" class="css-1dcdqdg"><code>	<span class="code-built_in">module</span>.exports = InterceptorManager;
</code></td></tr><tr><td id="L719" class="css-a4x74f"><span>719</span></td><td id="LC719" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L720" class="css-a4x74f"><span>720</span></td><td id="LC720" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L721" class="css-a4x74f"><span>721</span></td><td id="LC721" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> }),
</code></td></tr><tr><td id="L722" class="css-a4x74f"><span>722</span></td><td id="LC722" class="css-1dcdqdg"><code><span class="code-comment">/* 7 */</span>
</code></td></tr><tr><td id="L723" class="css-a4x74f"><span>723</span></td><td id="LC723" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> (<span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">module, exports, __webpack_require__</span>) </span>{
</code></td></tr><tr><td id="L724" class="css-a4x74f"><span>724</span></td><td id="LC724" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L725" class="css-a4x74f"><span>725</span></td><td id="LC725" class="css-1dcdqdg"><code><span class="code-meta">	'use strict'</span>;
</code></td></tr><tr><td id="L726" class="css-a4x74f"><span>726</span></td><td id="LC726" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L727" class="css-a4x74f"><span>727</span></td><td id="LC727" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> utils = __webpack_require__(<span class="code-number">2</span>);
</code></td></tr><tr><td id="L728" class="css-a4x74f"><span>728</span></td><td id="LC728" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> transformData = __webpack_require__(<span class="code-number">8</span>);
</code></td></tr><tr><td id="L729" class="css-a4x74f"><span>729</span></td><td id="LC729" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> isCancel = __webpack_require__(<span class="code-number">9</span>);
</code></td></tr><tr><td id="L730" class="css-a4x74f"><span>730</span></td><td id="LC730" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> defaults = __webpack_require__(<span class="code-number">10</span>);
</code></td></tr><tr><td id="L731" class="css-a4x74f"><span>731</span></td><td id="LC731" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L732" class="css-a4x74f"><span>732</span></td><td id="LC732" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L733" class="css-a4x74f"><span>733</span></td><td id="LC733" class="css-1dcdqdg"><code><span class="code-comment">	 * Throws a `Cancel` if cancellation has been requested.
</span></code></td></tr><tr><td id="L734" class="css-a4x74f"><span>734</span></td><td id="LC734" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L735" class="css-a4x74f"><span>735</span></td><td id="LC735" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">throwIfCancellationRequested</span>(<span class="code-params">config</span>) </span>{
</code></td></tr><tr><td id="L736" class="css-a4x74f"><span>736</span></td><td id="LC736" class="css-1dcdqdg"><code>	  <span class="code-keyword">if</span> (config.cancelToken) {
</code></td></tr><tr><td id="L737" class="css-a4x74f"><span>737</span></td><td id="LC737" class="css-1dcdqdg"><code>	    config.cancelToken.throwIfRequested();
</code></td></tr><tr><td id="L738" class="css-a4x74f"><span>738</span></td><td id="LC738" class="css-1dcdqdg"><code>	  }
</code></td></tr><tr><td id="L739" class="css-a4x74f"><span>739</span></td><td id="LC739" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L740" class="css-a4x74f"><span>740</span></td><td id="LC740" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L741" class="css-a4x74f"><span>741</span></td><td id="LC741" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L742" class="css-a4x74f"><span>742</span></td><td id="LC742" class="css-1dcdqdg"><code><span class="code-comment">	 * Dispatch a request to the server using the configured adapter.
</span></code></td></tr><tr><td id="L743" class="css-a4x74f"><span>743</span></td><td id="LC743" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L744" class="css-a4x74f"><span>744</span></td><td id="LC744" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {object} config The config that is to be used for the request
</span></code></td></tr><tr><td id="L745" class="css-a4x74f"><span>745</span></td><td id="LC745" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {Promise} The Promise to be fulfilled
</span></code></td></tr><tr><td id="L746" class="css-a4x74f"><span>746</span></td><td id="LC746" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L747" class="css-a4x74f"><span>747</span></td><td id="LC747" class="css-1dcdqdg"><code>	<span class="code-built_in">module</span>.exports = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">dispatchRequest</span>(<span class="code-params">config</span>) </span>{
</code></td></tr><tr><td id="L748" class="css-a4x74f"><span>748</span></td><td id="LC748" class="css-1dcdqdg"><code>	  throwIfCancellationRequested(config);
</code></td></tr><tr><td id="L749" class="css-a4x74f"><span>749</span></td><td id="LC749" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L750" class="css-a4x74f"><span>750</span></td><td id="LC750" class="css-1dcdqdg"><code>	  <span class="code-comment">// Ensure headers exist</span>
</code></td></tr><tr><td id="L751" class="css-a4x74f"><span>751</span></td><td id="LC751" class="css-1dcdqdg"><code>	  config.headers = config.headers || {};
</code></td></tr><tr><td id="L752" class="css-a4x74f"><span>752</span></td><td id="LC752" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L753" class="css-a4x74f"><span>753</span></td><td id="LC753" class="css-1dcdqdg"><code>	  <span class="code-comment">// Transform request data</span>
</code></td></tr><tr><td id="L754" class="css-a4x74f"><span>754</span></td><td id="LC754" class="css-1dcdqdg"><code>	  config.data = transformData(
</code></td></tr><tr><td id="L755" class="css-a4x74f"><span>755</span></td><td id="LC755" class="css-1dcdqdg"><code>	    config.data,
</code></td></tr><tr><td id="L756" class="css-a4x74f"><span>756</span></td><td id="LC756" class="css-1dcdqdg"><code>	    config.headers,
</code></td></tr><tr><td id="L757" class="css-a4x74f"><span>757</span></td><td id="LC757" class="css-1dcdqdg"><code>	    config.transformRequest
</code></td></tr><tr><td id="L758" class="css-a4x74f"><span>758</span></td><td id="LC758" class="css-1dcdqdg"><code>	  );
</code></td></tr><tr><td id="L759" class="css-a4x74f"><span>759</span></td><td id="LC759" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L760" class="css-a4x74f"><span>760</span></td><td id="LC760" class="css-1dcdqdg"><code>	  <span class="code-comment">// Flatten headers</span>
</code></td></tr><tr><td id="L761" class="css-a4x74f"><span>761</span></td><td id="LC761" class="css-1dcdqdg"><code>	  config.headers = utils.merge(
</code></td></tr><tr><td id="L762" class="css-a4x74f"><span>762</span></td><td id="LC762" class="css-1dcdqdg"><code>	    config.headers.common || {},
</code></td></tr><tr><td id="L763" class="css-a4x74f"><span>763</span></td><td id="LC763" class="css-1dcdqdg"><code>	    config.headers[config.method] || {},
</code></td></tr><tr><td id="L764" class="css-a4x74f"><span>764</span></td><td id="LC764" class="css-1dcdqdg"><code>	    config.headers
</code></td></tr><tr><td id="L765" class="css-a4x74f"><span>765</span></td><td id="LC765" class="css-1dcdqdg"><code>	  );
</code></td></tr><tr><td id="L766" class="css-a4x74f"><span>766</span></td><td id="LC766" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L767" class="css-a4x74f"><span>767</span></td><td id="LC767" class="css-1dcdqdg"><code>	  utils.forEach(
</code></td></tr><tr><td id="L768" class="css-a4x74f"><span>768</span></td><td id="LC768" class="css-1dcdqdg"><code>	    [<span class="code-string">'delete'</span>, <span class="code-string">'get'</span>, <span class="code-string">'head'</span>, <span class="code-string">'post'</span>, <span class="code-string">'put'</span>, <span class="code-string">'patch'</span>, <span class="code-string">'common'</span>],
</code></td></tr><tr><td id="L769" class="css-a4x74f"><span>769</span></td><td id="LC769" class="css-1dcdqdg"><code>	    <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">cleanHeaderConfig</span>(<span class="code-params">method</span>) </span>{
</code></td></tr><tr><td id="L770" class="css-a4x74f"><span>770</span></td><td id="LC770" class="css-1dcdqdg"><code>	      <span class="code-keyword">delete</span> config.headers[method];
</code></td></tr><tr><td id="L771" class="css-a4x74f"><span>771</span></td><td id="LC771" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L772" class="css-a4x74f"><span>772</span></td><td id="LC772" class="css-1dcdqdg"><code>	  );
</code></td></tr><tr><td id="L773" class="css-a4x74f"><span>773</span></td><td id="LC773" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L774" class="css-a4x74f"><span>774</span></td><td id="LC774" class="css-1dcdqdg"><code>	  <span class="code-keyword">var</span> adapter = config.adapter || defaults.adapter;
</code></td></tr><tr><td id="L775" class="css-a4x74f"><span>775</span></td><td id="LC775" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L776" class="css-a4x74f"><span>776</span></td><td id="LC776" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> adapter(config).then(<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">onAdapterResolution</span>(<span class="code-params">response</span>) </span>{
</code></td></tr><tr><td id="L777" class="css-a4x74f"><span>777</span></td><td id="LC777" class="css-1dcdqdg"><code>	    throwIfCancellationRequested(config);
</code></td></tr><tr><td id="L778" class="css-a4x74f"><span>778</span></td><td id="LC778" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L779" class="css-a4x74f"><span>779</span></td><td id="LC779" class="css-1dcdqdg"><code>	    <span class="code-comment">// Transform response data</span>
</code></td></tr><tr><td id="L780" class="css-a4x74f"><span>780</span></td><td id="LC780" class="css-1dcdqdg"><code>	    response.data = transformData(
</code></td></tr><tr><td id="L781" class="css-a4x74f"><span>781</span></td><td id="LC781" class="css-1dcdqdg"><code>	      response.data,
</code></td></tr><tr><td id="L782" class="css-a4x74f"><span>782</span></td><td id="LC782" class="css-1dcdqdg"><code>	      response.headers,
</code></td></tr><tr><td id="L783" class="css-a4x74f"><span>783</span></td><td id="LC783" class="css-1dcdqdg"><code>	      config.transformResponse
</code></td></tr><tr><td id="L784" class="css-a4x74f"><span>784</span></td><td id="LC784" class="css-1dcdqdg"><code>	    );
</code></td></tr><tr><td id="L785" class="css-a4x74f"><span>785</span></td><td id="LC785" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L786" class="css-a4x74f"><span>786</span></td><td id="LC786" class="css-1dcdqdg"><code>	    <span class="code-keyword">return</span> response;
</code></td></tr><tr><td id="L787" class="css-a4x74f"><span>787</span></td><td id="LC787" class="css-1dcdqdg"><code>	  }, <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">onAdapterRejection</span>(<span class="code-params">reason</span>) </span>{
</code></td></tr><tr><td id="L788" class="css-a4x74f"><span>788</span></td><td id="LC788" class="css-1dcdqdg"><code>	    <span class="code-keyword">if</span> (!isCancel(reason)) {
</code></td></tr><tr><td id="L789" class="css-a4x74f"><span>789</span></td><td id="LC789" class="css-1dcdqdg"><code>	      throwIfCancellationRequested(config);
</code></td></tr><tr><td id="L790" class="css-a4x74f"><span>790</span></td><td id="LC790" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L791" class="css-a4x74f"><span>791</span></td><td id="LC791" class="css-1dcdqdg"><code>	      <span class="code-comment">// Transform response data</span>
</code></td></tr><tr><td id="L792" class="css-a4x74f"><span>792</span></td><td id="LC792" class="css-1dcdqdg"><code>	      <span class="code-keyword">if</span> (reason &amp;&amp; reason.response) {
</code></td></tr><tr><td id="L793" class="css-a4x74f"><span>793</span></td><td id="LC793" class="css-1dcdqdg"><code>	        reason.response.data = transformData(
</code></td></tr><tr><td id="L794" class="css-a4x74f"><span>794</span></td><td id="LC794" class="css-1dcdqdg"><code>	          reason.response.data,
</code></td></tr><tr><td id="L795" class="css-a4x74f"><span>795</span></td><td id="LC795" class="css-1dcdqdg"><code>	          reason.response.headers,
</code></td></tr><tr><td id="L796" class="css-a4x74f"><span>796</span></td><td id="LC796" class="css-1dcdqdg"><code>	          config.transformResponse
</code></td></tr><tr><td id="L797" class="css-a4x74f"><span>797</span></td><td id="LC797" class="css-1dcdqdg"><code>	        );
</code></td></tr><tr><td id="L798" class="css-a4x74f"><span>798</span></td><td id="LC798" class="css-1dcdqdg"><code>	      }
</code></td></tr><tr><td id="L799" class="css-a4x74f"><span>799</span></td><td id="LC799" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L800" class="css-a4x74f"><span>800</span></td><td id="LC800" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L801" class="css-a4x74f"><span>801</span></td><td id="LC801" class="css-1dcdqdg"><code>	    <span class="code-keyword">return</span> <span class="code-built_in">Promise</span>.reject(reason);
</code></td></tr><tr><td id="L802" class="css-a4x74f"><span>802</span></td><td id="LC802" class="css-1dcdqdg"><code>	  });
</code></td></tr><tr><td id="L803" class="css-a4x74f"><span>803</span></td><td id="LC803" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L804" class="css-a4x74f"><span>804</span></td><td id="LC804" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L805" class="css-a4x74f"><span>805</span></td><td id="LC805" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L806" class="css-a4x74f"><span>806</span></td><td id="LC806" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> }),
</code></td></tr><tr><td id="L807" class="css-a4x74f"><span>807</span></td><td id="LC807" class="css-1dcdqdg"><code><span class="code-comment">/* 8 */</span>
</code></td></tr><tr><td id="L808" class="css-a4x74f"><span>808</span></td><td id="LC808" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> (<span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">module, exports, __webpack_require__</span>) </span>{
</code></td></tr><tr><td id="L809" class="css-a4x74f"><span>809</span></td><td id="LC809" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L810" class="css-a4x74f"><span>810</span></td><td id="LC810" class="css-1dcdqdg"><code><span class="code-meta">	'use strict'</span>;
</code></td></tr><tr><td id="L811" class="css-a4x74f"><span>811</span></td><td id="LC811" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L812" class="css-a4x74f"><span>812</span></td><td id="LC812" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> utils = __webpack_require__(<span class="code-number">2</span>);
</code></td></tr><tr><td id="L813" class="css-a4x74f"><span>813</span></td><td id="LC813" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L814" class="css-a4x74f"><span>814</span></td><td id="LC814" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L815" class="css-a4x74f"><span>815</span></td><td id="LC815" class="css-1dcdqdg"><code><span class="code-comment">	 * Transform the data for a request or a response
</span></code></td></tr><tr><td id="L816" class="css-a4x74f"><span>816</span></td><td id="LC816" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L817" class="css-a4x74f"><span>817</span></td><td id="LC817" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object|String} data The data to be transformed
</span></code></td></tr><tr><td id="L818" class="css-a4x74f"><span>818</span></td><td id="LC818" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Array} headers The headers for the request or response
</span></code></td></tr><tr><td id="L819" class="css-a4x74f"><span>819</span></td><td id="LC819" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Array|Function} fns A single function or Array of functions
</span></code></td></tr><tr><td id="L820" class="css-a4x74f"><span>820</span></td><td id="LC820" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {*} The resulting transformed data
</span></code></td></tr><tr><td id="L821" class="css-a4x74f"><span>821</span></td><td id="LC821" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L822" class="css-a4x74f"><span>822</span></td><td id="LC822" class="css-1dcdqdg"><code>	<span class="code-built_in">module</span>.exports = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">transformData</span>(<span class="code-params">data, headers, fns</span>) </span>{
</code></td></tr><tr><td id="L823" class="css-a4x74f"><span>823</span></td><td id="LC823" class="css-1dcdqdg"><code>	  <span class="code-comment">/*eslint no-param-reassign:0*/</span>
</code></td></tr><tr><td id="L824" class="css-a4x74f"><span>824</span></td><td id="LC824" class="css-1dcdqdg"><code>	  utils.forEach(fns, <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">transform</span>(<span class="code-params">fn</span>) </span>{
</code></td></tr><tr><td id="L825" class="css-a4x74f"><span>825</span></td><td id="LC825" class="css-1dcdqdg"><code>	    data = fn(data, headers);
</code></td></tr><tr><td id="L826" class="css-a4x74f"><span>826</span></td><td id="LC826" class="css-1dcdqdg"><code>	  });
</code></td></tr><tr><td id="L827" class="css-a4x74f"><span>827</span></td><td id="LC827" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L828" class="css-a4x74f"><span>828</span></td><td id="LC828" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> data;
</code></td></tr><tr><td id="L829" class="css-a4x74f"><span>829</span></td><td id="LC829" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L830" class="css-a4x74f"><span>830</span></td><td id="LC830" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L831" class="css-a4x74f"><span>831</span></td><td id="LC831" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L832" class="css-a4x74f"><span>832</span></td><td id="LC832" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> }),
</code></td></tr><tr><td id="L833" class="css-a4x74f"><span>833</span></td><td id="LC833" class="css-1dcdqdg"><code><span class="code-comment">/* 9 */</span>
</code></td></tr><tr><td id="L834" class="css-a4x74f"><span>834</span></td><td id="LC834" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> (<span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">module, exports</span>) </span>{
</code></td></tr><tr><td id="L835" class="css-a4x74f"><span>835</span></td><td id="LC835" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L836" class="css-a4x74f"><span>836</span></td><td id="LC836" class="css-1dcdqdg"><code><span class="code-meta">	'use strict'</span>;
</code></td></tr><tr><td id="L837" class="css-a4x74f"><span>837</span></td><td id="LC837" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L838" class="css-a4x74f"><span>838</span></td><td id="LC838" class="css-1dcdqdg"><code>	<span class="code-built_in">module</span>.exports = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">isCancel</span>(<span class="code-params">value</span>) </span>{
</code></td></tr><tr><td id="L839" class="css-a4x74f"><span>839</span></td><td id="LC839" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> !!(value &amp;&amp; value.__CANCEL__);
</code></td></tr><tr><td id="L840" class="css-a4x74f"><span>840</span></td><td id="LC840" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L841" class="css-a4x74f"><span>841</span></td><td id="LC841" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L842" class="css-a4x74f"><span>842</span></td><td id="LC842" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L843" class="css-a4x74f"><span>843</span></td><td id="LC843" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> }),
</code></td></tr><tr><td id="L844" class="css-a4x74f"><span>844</span></td><td id="LC844" class="css-1dcdqdg"><code><span class="code-comment">/* 10 */</span>
</code></td></tr><tr><td id="L845" class="css-a4x74f"><span>845</span></td><td id="LC845" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> (<span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">module, exports, __webpack_require__</span>) </span>{
</code></td></tr><tr><td id="L846" class="css-a4x74f"><span>846</span></td><td id="LC846" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L847" class="css-a4x74f"><span>847</span></td><td id="LC847" class="css-1dcdqdg"><code><span class="code-meta">	'use strict'</span>;
</code></td></tr><tr><td id="L848" class="css-a4x74f"><span>848</span></td><td id="LC848" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L849" class="css-a4x74f"><span>849</span></td><td id="LC849" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> utils = __webpack_require__(<span class="code-number">2</span>);
</code></td></tr><tr><td id="L850" class="css-a4x74f"><span>850</span></td><td id="LC850" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> normalizeHeaderName = __webpack_require__(<span class="code-number">11</span>);
</code></td></tr><tr><td id="L851" class="css-a4x74f"><span>851</span></td><td id="LC851" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L852" class="css-a4x74f"><span>852</span></td><td id="LC852" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> DEFAULT_CONTENT_TYPE = {
</code></td></tr><tr><td id="L853" class="css-a4x74f"><span>853</span></td><td id="LC853" class="css-1dcdqdg"><code>	  <span class="code-string">'Content-Type'</span>: <span class="code-string">'application/x-www-form-urlencoded'</span>
</code></td></tr><tr><td id="L854" class="css-a4x74f"><span>854</span></td><td id="LC854" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L855" class="css-a4x74f"><span>855</span></td><td id="LC855" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L856" class="css-a4x74f"><span>856</span></td><td id="LC856" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">setContentTypeIfUnset</span>(<span class="code-params">headers, value</span>) </span>{
</code></td></tr><tr><td id="L857" class="css-a4x74f"><span>857</span></td><td id="LC857" class="css-1dcdqdg"><code>	  <span class="code-keyword">if</span> (!utils.isUndefined(headers) &amp;&amp; utils.isUndefined(headers[<span class="code-string">'Content-Type'</span>])) {
</code></td></tr><tr><td id="L858" class="css-a4x74f"><span>858</span></td><td id="LC858" class="css-1dcdqdg"><code>	    headers[<span class="code-string">'Content-Type'</span>] = value;
</code></td></tr><tr><td id="L859" class="css-a4x74f"><span>859</span></td><td id="LC859" class="css-1dcdqdg"><code>	  }
</code></td></tr><tr><td id="L860" class="css-a4x74f"><span>860</span></td><td id="LC860" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L861" class="css-a4x74f"><span>861</span></td><td id="LC861" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L862" class="css-a4x74f"><span>862</span></td><td id="LC862" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">getDefaultAdapter</span>(<span class="code-params"></span>) </span>{
</code></td></tr><tr><td id="L863" class="css-a4x74f"><span>863</span></td><td id="LC863" class="css-1dcdqdg"><code>	  <span class="code-keyword">var</span> adapter;
</code></td></tr><tr><td id="L864" class="css-a4x74f"><span>864</span></td><td id="LC864" class="css-1dcdqdg"><code>	  <span class="code-keyword">if</span> (<span class="code-keyword">typeof</span> XMLHttpRequest !== <span class="code-string">'undefined'</span>) {
</code></td></tr><tr><td id="L865" class="css-a4x74f"><span>865</span></td><td id="LC865" class="css-1dcdqdg"><code>	    <span class="code-comment">// For browsers use XHR adapter</span>
</code></td></tr><tr><td id="L866" class="css-a4x74f"><span>866</span></td><td id="LC866" class="css-1dcdqdg"><code>	    adapter = __webpack_require__(<span class="code-number">12</span>);
</code></td></tr><tr><td id="L867" class="css-a4x74f"><span>867</span></td><td id="LC867" class="css-1dcdqdg"><code>	  } <span class="code-keyword">else</span> <span class="code-keyword">if</span> (<span class="code-keyword">typeof</span> process !== <span class="code-string">'undefined'</span> &amp;&amp; <span class="code-built_in">Object</span>.prototype.toString.call(process) === <span class="code-string">'[object process]'</span>) {
</code></td></tr><tr><td id="L868" class="css-a4x74f"><span>868</span></td><td id="LC868" class="css-1dcdqdg"><code>	    <span class="code-comment">// For node use HTTP adapter</span>
</code></td></tr><tr><td id="L869" class="css-a4x74f"><span>869</span></td><td id="LC869" class="css-1dcdqdg"><code>	    adapter = __webpack_require__(<span class="code-number">12</span>);
</code></td></tr><tr><td id="L870" class="css-a4x74f"><span>870</span></td><td id="LC870" class="css-1dcdqdg"><code>	  }
</code></td></tr><tr><td id="L871" class="css-a4x74f"><span>871</span></td><td id="LC871" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> adapter;
</code></td></tr><tr><td id="L872" class="css-a4x74f"><span>872</span></td><td id="LC872" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L873" class="css-a4x74f"><span>873</span></td><td id="LC873" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L874" class="css-a4x74f"><span>874</span></td><td id="LC874" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> defaults = {
</code></td></tr><tr><td id="L875" class="css-a4x74f"><span>875</span></td><td id="LC875" class="css-1dcdqdg"><code>	  adapter: getDefaultAdapter(),
</code></td></tr><tr><td id="L876" class="css-a4x74f"><span>876</span></td><td id="LC876" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L877" class="css-a4x74f"><span>877</span></td><td id="LC877" class="css-1dcdqdg"><code>	  transformRequest: [<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">transformRequest</span>(<span class="code-params">data, headers</span>) </span>{
</code></td></tr><tr><td id="L878" class="css-a4x74f"><span>878</span></td><td id="LC878" class="css-1dcdqdg"><code>	    normalizeHeaderName(headers, <span class="code-string">'Accept'</span>);
</code></td></tr><tr><td id="L879" class="css-a4x74f"><span>879</span></td><td id="LC879" class="css-1dcdqdg"><code>	    normalizeHeaderName(headers, <span class="code-string">'Content-Type'</span>);
</code></td></tr><tr><td id="L880" class="css-a4x74f"><span>880</span></td><td id="LC880" class="css-1dcdqdg"><code>	    <span class="code-keyword">if</span> (utils.isFormData(data) ||
</code></td></tr><tr><td id="L881" class="css-a4x74f"><span>881</span></td><td id="LC881" class="css-1dcdqdg"><code>	      utils.isArrayBuffer(data) ||
</code></td></tr><tr><td id="L882" class="css-a4x74f"><span>882</span></td><td id="LC882" class="css-1dcdqdg"><code>	      utils.isBuffer(data) ||
</code></td></tr><tr><td id="L883" class="css-a4x74f"><span>883</span></td><td id="LC883" class="css-1dcdqdg"><code>	      utils.isStream(data) ||
</code></td></tr><tr><td id="L884" class="css-a4x74f"><span>884</span></td><td id="LC884" class="css-1dcdqdg"><code>	      utils.isFile(data) ||
</code></td></tr><tr><td id="L885" class="css-a4x74f"><span>885</span></td><td id="LC885" class="css-1dcdqdg"><code>	      utils.isBlob(data)
</code></td></tr><tr><td id="L886" class="css-a4x74f"><span>886</span></td><td id="LC886" class="css-1dcdqdg"><code>	    ) {
</code></td></tr><tr><td id="L887" class="css-a4x74f"><span>887</span></td><td id="LC887" class="css-1dcdqdg"><code>	      <span class="code-keyword">return</span> data;
</code></td></tr><tr><td id="L888" class="css-a4x74f"><span>888</span></td><td id="LC888" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L889" class="css-a4x74f"><span>889</span></td><td id="LC889" class="css-1dcdqdg"><code>	    <span class="code-keyword">if</span> (utils.isArrayBufferView(data)) {
</code></td></tr><tr><td id="L890" class="css-a4x74f"><span>890</span></td><td id="LC890" class="css-1dcdqdg"><code>	      <span class="code-keyword">return</span> data.buffer;
</code></td></tr><tr><td id="L891" class="css-a4x74f"><span>891</span></td><td id="LC891" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L892" class="css-a4x74f"><span>892</span></td><td id="LC892" class="css-1dcdqdg"><code>	    <span class="code-keyword">if</span> (utils.isURLSearchParams(data)) {
</code></td></tr><tr><td id="L893" class="css-a4x74f"><span>893</span></td><td id="LC893" class="css-1dcdqdg"><code>	      setContentTypeIfUnset(headers, <span class="code-string">'application/x-www-form-urlencoded;charset=utf-8'</span>);
</code></td></tr><tr><td id="L894" class="css-a4x74f"><span>894</span></td><td id="LC894" class="css-1dcdqdg"><code>	      <span class="code-keyword">return</span> data.toString();
</code></td></tr><tr><td id="L895" class="css-a4x74f"><span>895</span></td><td id="LC895" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L896" class="css-a4x74f"><span>896</span></td><td id="LC896" class="css-1dcdqdg"><code>	    <span class="code-keyword">if</span> (utils.isObject(data)) {
</code></td></tr><tr><td id="L897" class="css-a4x74f"><span>897</span></td><td id="LC897" class="css-1dcdqdg"><code>	      setContentTypeIfUnset(headers, <span class="code-string">'application/json;charset=utf-8'</span>);
</code></td></tr><tr><td id="L898" class="css-a4x74f"><span>898</span></td><td id="LC898" class="css-1dcdqdg"><code>	      <span class="code-keyword">return</span> <span class="code-built_in">JSON</span>.stringify(data);
</code></td></tr><tr><td id="L899" class="css-a4x74f"><span>899</span></td><td id="LC899" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L900" class="css-a4x74f"><span>900</span></td><td id="LC900" class="css-1dcdqdg"><code>	    <span class="code-keyword">return</span> data;
</code></td></tr><tr><td id="L901" class="css-a4x74f"><span>901</span></td><td id="LC901" class="css-1dcdqdg"><code>	  }],
</code></td></tr><tr><td id="L902" class="css-a4x74f"><span>902</span></td><td id="LC902" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L903" class="css-a4x74f"><span>903</span></td><td id="LC903" class="css-1dcdqdg"><code>	  transformResponse: [<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">transformResponse</span>(<span class="code-params">data</span>) </span>{
</code></td></tr><tr><td id="L904" class="css-a4x74f"><span>904</span></td><td id="LC904" class="css-1dcdqdg"><code>	    <span class="code-comment">/*eslint no-param-reassign:0*/</span>
</code></td></tr><tr><td id="L905" class="css-a4x74f"><span>905</span></td><td id="LC905" class="css-1dcdqdg"><code>	    <span class="code-keyword">if</span> (<span class="code-keyword">typeof</span> data === <span class="code-string">'string'</span>) {
</code></td></tr><tr><td id="L906" class="css-a4x74f"><span>906</span></td><td id="LC906" class="css-1dcdqdg"><code>	      <span class="code-keyword">try</span> {
</code></td></tr><tr><td id="L907" class="css-a4x74f"><span>907</span></td><td id="LC907" class="css-1dcdqdg"><code>	        data = <span class="code-built_in">JSON</span>.parse(data);
</code></td></tr><tr><td id="L908" class="css-a4x74f"><span>908</span></td><td id="LC908" class="css-1dcdqdg"><code>	      } <span class="code-keyword">catch</span> (e) { <span class="code-comment">/* Ignore */</span> }
</code></td></tr><tr><td id="L909" class="css-a4x74f"><span>909</span></td><td id="LC909" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L910" class="css-a4x74f"><span>910</span></td><td id="LC910" class="css-1dcdqdg"><code>	    <span class="code-keyword">return</span> data;
</code></td></tr><tr><td id="L911" class="css-a4x74f"><span>911</span></td><td id="LC911" class="css-1dcdqdg"><code>	  }],
</code></td></tr><tr><td id="L912" class="css-a4x74f"><span>912</span></td><td id="LC912" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L913" class="css-a4x74f"><span>913</span></td><td id="LC913" class="css-1dcdqdg"><code>	  <span class="code-comment">/**
</span></code></td></tr><tr><td id="L914" class="css-a4x74f"><span>914</span></td><td id="LC914" class="css-1dcdqdg"><code><span class="code-comment">	   * A timeout in milliseconds to abort a request. If set to 0 (default) a
</span></code></td></tr><tr><td id="L915" class="css-a4x74f"><span>915</span></td><td id="LC915" class="css-1dcdqdg"><code><span class="code-comment">	   * timeout is not created.
</span></code></td></tr><tr><td id="L916" class="css-a4x74f"><span>916</span></td><td id="LC916" class="css-1dcdqdg"><code><span class="code-comment">	   */</span>
</code></td></tr><tr><td id="L917" class="css-a4x74f"><span>917</span></td><td id="LC917" class="css-1dcdqdg"><code>	  timeout: <span class="code-number">0</span>,
</code></td></tr><tr><td id="L918" class="css-a4x74f"><span>918</span></td><td id="LC918" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L919" class="css-a4x74f"><span>919</span></td><td id="LC919" class="css-1dcdqdg"><code>	  xsrfCookieName: <span class="code-string">'XSRF-TOKEN'</span>,
</code></td></tr><tr><td id="L920" class="css-a4x74f"><span>920</span></td><td id="LC920" class="css-1dcdqdg"><code>	  xsrfHeaderName: <span class="code-string">'X-XSRF-TOKEN'</span>,
</code></td></tr><tr><td id="L921" class="css-a4x74f"><span>921</span></td><td id="LC921" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L922" class="css-a4x74f"><span>922</span></td><td id="LC922" class="css-1dcdqdg"><code>	  maxContentLength: <span class="code-number">-1</span>,
</code></td></tr><tr><td id="L923" class="css-a4x74f"><span>923</span></td><td id="LC923" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L924" class="css-a4x74f"><span>924</span></td><td id="LC924" class="css-1dcdqdg"><code>	  validateStatus: <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">validateStatus</span>(<span class="code-params">status</span>) </span>{
</code></td></tr><tr><td id="L925" class="css-a4x74f"><span>925</span></td><td id="LC925" class="css-1dcdqdg"><code>	    <span class="code-keyword">return</span> status &gt;= <span class="code-number">200</span> &amp;&amp; status &lt; <span class="code-number">300</span>;
</code></td></tr><tr><td id="L926" class="css-a4x74f"><span>926</span></td><td id="LC926" class="css-1dcdqdg"><code>	  }
</code></td></tr><tr><td id="L927" class="css-a4x74f"><span>927</span></td><td id="LC927" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L928" class="css-a4x74f"><span>928</span></td><td id="LC928" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L929" class="css-a4x74f"><span>929</span></td><td id="LC929" class="css-1dcdqdg"><code>	defaults.headers = {
</code></td></tr><tr><td id="L930" class="css-a4x74f"><span>930</span></td><td id="LC930" class="css-1dcdqdg"><code>	  common: {
</code></td></tr><tr><td id="L931" class="css-a4x74f"><span>931</span></td><td id="LC931" class="css-1dcdqdg"><code>	    <span class="code-string">'Accept'</span>: <span class="code-string">'application/json, text/plain, */*'</span>
</code></td></tr><tr><td id="L932" class="css-a4x74f"><span>932</span></td><td id="LC932" class="css-1dcdqdg"><code>	  }
</code></td></tr><tr><td id="L933" class="css-a4x74f"><span>933</span></td><td id="LC933" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L934" class="css-a4x74f"><span>934</span></td><td id="LC934" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L935" class="css-a4x74f"><span>935</span></td><td id="LC935" class="css-1dcdqdg"><code>	utils.forEach([<span class="code-string">'delete'</span>, <span class="code-string">'get'</span>, <span class="code-string">'head'</span>], <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">forEachMethodNoData</span>(<span class="code-params">method</span>) </span>{
</code></td></tr><tr><td id="L936" class="css-a4x74f"><span>936</span></td><td id="LC936" class="css-1dcdqdg"><code>	  defaults.headers[method] = {};
</code></td></tr><tr><td id="L937" class="css-a4x74f"><span>937</span></td><td id="LC937" class="css-1dcdqdg"><code>	});
</code></td></tr><tr><td id="L938" class="css-a4x74f"><span>938</span></td><td id="LC938" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L939" class="css-a4x74f"><span>939</span></td><td id="LC939" class="css-1dcdqdg"><code>	utils.forEach([<span class="code-string">'post'</span>, <span class="code-string">'put'</span>, <span class="code-string">'patch'</span>], <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">forEachMethodWithData</span>(<span class="code-params">method</span>) </span>{
</code></td></tr><tr><td id="L940" class="css-a4x74f"><span>940</span></td><td id="LC940" class="css-1dcdqdg"><code>	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
</code></td></tr><tr><td id="L941" class="css-a4x74f"><span>941</span></td><td id="LC941" class="css-1dcdqdg"><code>	});
</code></td></tr><tr><td id="L942" class="css-a4x74f"><span>942</span></td><td id="LC942" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L943" class="css-a4x74f"><span>943</span></td><td id="LC943" class="css-1dcdqdg"><code>	<span class="code-built_in">module</span>.exports = defaults;
</code></td></tr><tr><td id="L944" class="css-a4x74f"><span>944</span></td><td id="LC944" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L945" class="css-a4x74f"><span>945</span></td><td id="LC945" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L946" class="css-a4x74f"><span>946</span></td><td id="LC946" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> }),
</code></td></tr><tr><td id="L947" class="css-a4x74f"><span>947</span></td><td id="LC947" class="css-1dcdqdg"><code><span class="code-comment">/* 11 */</span>
</code></td></tr><tr><td id="L948" class="css-a4x74f"><span>948</span></td><td id="LC948" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> (<span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">module, exports, __webpack_require__</span>) </span>{
</code></td></tr><tr><td id="L949" class="css-a4x74f"><span>949</span></td><td id="LC949" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L950" class="css-a4x74f"><span>950</span></td><td id="LC950" class="css-1dcdqdg"><code><span class="code-meta">	'use strict'</span>;
</code></td></tr><tr><td id="L951" class="css-a4x74f"><span>951</span></td><td id="LC951" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L952" class="css-a4x74f"><span>952</span></td><td id="LC952" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> utils = __webpack_require__(<span class="code-number">2</span>);
</code></td></tr><tr><td id="L953" class="css-a4x74f"><span>953</span></td><td id="LC953" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L954" class="css-a4x74f"><span>954</span></td><td id="LC954" class="css-1dcdqdg"><code>	<span class="code-built_in">module</span>.exports = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">normalizeHeaderName</span>(<span class="code-params">headers, normalizedName</span>) </span>{
</code></td></tr><tr><td id="L955" class="css-a4x74f"><span>955</span></td><td id="LC955" class="css-1dcdqdg"><code>	  utils.forEach(headers, <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">processHeader</span>(<span class="code-params">value, name</span>) </span>{
</code></td></tr><tr><td id="L956" class="css-a4x74f"><span>956</span></td><td id="LC956" class="css-1dcdqdg"><code>	    <span class="code-keyword">if</span> (name !== normalizedName &amp;&amp; name.toUpperCase() === normalizedName.toUpperCase()) {
</code></td></tr><tr><td id="L957" class="css-a4x74f"><span>957</span></td><td id="LC957" class="css-1dcdqdg"><code>	      headers[normalizedName] = value;
</code></td></tr><tr><td id="L958" class="css-a4x74f"><span>958</span></td><td id="LC958" class="css-1dcdqdg"><code>	      <span class="code-keyword">delete</span> headers[name];
</code></td></tr><tr><td id="L959" class="css-a4x74f"><span>959</span></td><td id="LC959" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L960" class="css-a4x74f"><span>960</span></td><td id="LC960" class="css-1dcdqdg"><code>	  });
</code></td></tr><tr><td id="L961" class="css-a4x74f"><span>961</span></td><td id="LC961" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L962" class="css-a4x74f"><span>962</span></td><td id="LC962" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L963" class="css-a4x74f"><span>963</span></td><td id="LC963" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L964" class="css-a4x74f"><span>964</span></td><td id="LC964" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> }),
</code></td></tr><tr><td id="L965" class="css-a4x74f"><span>965</span></td><td id="LC965" class="css-1dcdqdg"><code><span class="code-comment">/* 12 */</span>
</code></td></tr><tr><td id="L966" class="css-a4x74f"><span>966</span></td><td id="LC966" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> (<span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">module, exports, __webpack_require__</span>) </span>{
</code></td></tr><tr><td id="L967" class="css-a4x74f"><span>967</span></td><td id="LC967" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L968" class="css-a4x74f"><span>968</span></td><td id="LC968" class="css-1dcdqdg"><code><span class="code-meta">	'use strict'</span>;
</code></td></tr><tr><td id="L969" class="css-a4x74f"><span>969</span></td><td id="LC969" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L970" class="css-a4x74f"><span>970</span></td><td id="LC970" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> utils = __webpack_require__(<span class="code-number">2</span>);
</code></td></tr><tr><td id="L971" class="css-a4x74f"><span>971</span></td><td id="LC971" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> settle = __webpack_require__(<span class="code-number">13</span>);
</code></td></tr><tr><td id="L972" class="css-a4x74f"><span>972</span></td><td id="LC972" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> buildURL = __webpack_require__(<span class="code-number">5</span>);
</code></td></tr><tr><td id="L973" class="css-a4x74f"><span>973</span></td><td id="LC973" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> buildFullPath = __webpack_require__(<span class="code-number">16</span>);
</code></td></tr><tr><td id="L974" class="css-a4x74f"><span>974</span></td><td id="LC974" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> parseHeaders = __webpack_require__(<span class="code-number">19</span>);
</code></td></tr><tr><td id="L975" class="css-a4x74f"><span>975</span></td><td id="LC975" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> isURLSameOrigin = __webpack_require__(<span class="code-number">20</span>);
</code></td></tr><tr><td id="L976" class="css-a4x74f"><span>976</span></td><td id="LC976" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> createError = __webpack_require__(<span class="code-number">14</span>);
</code></td></tr><tr><td id="L977" class="css-a4x74f"><span>977</span></td><td id="LC977" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L978" class="css-a4x74f"><span>978</span></td><td id="LC978" class="css-1dcdqdg"><code>	<span class="code-built_in">module</span>.exports = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">xhrAdapter</span>(<span class="code-params">config</span>) </span>{
</code></td></tr><tr><td id="L979" class="css-a4x74f"><span>979</span></td><td id="LC979" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> <span class="code-keyword">new</span> <span class="code-built_in">Promise</span>(<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">dispatchXhrRequest</span>(<span class="code-params">resolve, reject</span>) </span>{
</code></td></tr><tr><td id="L980" class="css-a4x74f"><span>980</span></td><td id="LC980" class="css-1dcdqdg"><code>	    <span class="code-keyword">var</span> requestData = config.data;
</code></td></tr><tr><td id="L981" class="css-a4x74f"><span>981</span></td><td id="LC981" class="css-1dcdqdg"><code>	    <span class="code-keyword">var</span> requestHeaders = config.headers;
</code></td></tr><tr><td id="L982" class="css-a4x74f"><span>982</span></td><td id="LC982" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L983" class="css-a4x74f"><span>983</span></td><td id="LC983" class="css-1dcdqdg"><code>	    <span class="code-keyword">if</span> (utils.isFormData(requestData)) {
</code></td></tr><tr><td id="L984" class="css-a4x74f"><span>984</span></td><td id="LC984" class="css-1dcdqdg"><code>	      <span class="code-keyword">delete</span> requestHeaders[<span class="code-string">'Content-Type'</span>]; <span class="code-comment">// Let the browser set it</span>
</code></td></tr><tr><td id="L985" class="css-a4x74f"><span>985</span></td><td id="LC985" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L986" class="css-a4x74f"><span>986</span></td><td id="LC986" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L987" class="css-a4x74f"><span>987</span></td><td id="LC987" class="css-1dcdqdg"><code>	    <span class="code-keyword">var</span> request = <span class="code-keyword">new</span> XMLHttpRequest();
</code></td></tr><tr><td id="L988" class="css-a4x74f"><span>988</span></td><td id="LC988" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L989" class="css-a4x74f"><span>989</span></td><td id="LC989" class="css-1dcdqdg"><code>	    <span class="code-comment">// HTTP basic authentication</span>
</code></td></tr><tr><td id="L990" class="css-a4x74f"><span>990</span></td><td id="LC990" class="css-1dcdqdg"><code>	    <span class="code-keyword">if</span> (config.auth) {
</code></td></tr><tr><td id="L991" class="css-a4x74f"><span>991</span></td><td id="LC991" class="css-1dcdqdg"><code>	      <span class="code-keyword">var</span> username = config.auth.username || <span class="code-string">''</span>;
</code></td></tr><tr><td id="L992" class="css-a4x74f"><span>992</span></td><td id="LC992" class="css-1dcdqdg"><code>	      <span class="code-keyword">var</span> password = config.auth.password || <span class="code-string">''</span>;
</code></td></tr><tr><td id="L993" class="css-a4x74f"><span>993</span></td><td id="LC993" class="css-1dcdqdg"><code>	      requestHeaders.Authorization = <span class="code-string">'Basic '</span> + btoa(username + <span class="code-string">':'</span> + password);
</code></td></tr><tr><td id="L994" class="css-a4x74f"><span>994</span></td><td id="LC994" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L995" class="css-a4x74f"><span>995</span></td><td id="LC995" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L996" class="css-a4x74f"><span>996</span></td><td id="LC996" class="css-1dcdqdg"><code>	    <span class="code-keyword">var</span> fullPath = buildFullPath(config.baseURL, config.url);
</code></td></tr><tr><td id="L997" class="css-a4x74f"><span>997</span></td><td id="LC997" class="css-1dcdqdg"><code>	    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), <span class="code-literal">true</span>);
</code></td></tr><tr><td id="L998" class="css-a4x74f"><span>998</span></td><td id="LC998" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L999" class="css-a4x74f"><span>999</span></td><td id="LC999" class="css-1dcdqdg"><code>	    <span class="code-comment">// Set the request timeout in MS</span>
</code></td></tr><tr><td id="L1000" class="css-a4x74f"><span>1000</span></td><td id="LC1000" class="css-1dcdqdg"><code>	    request.timeout = config.timeout;
</code></td></tr><tr><td id="L1001" class="css-a4x74f"><span>1001</span></td><td id="LC1001" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1002" class="css-a4x74f"><span>1002</span></td><td id="LC1002" class="css-1dcdqdg"><code>	    <span class="code-comment">// Listen for ready state</span>
</code></td></tr><tr><td id="L1003" class="css-a4x74f"><span>1003</span></td><td id="LC1003" class="css-1dcdqdg"><code>	    request.onreadystatechange = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">handleLoad</span>(<span class="code-params"></span>) </span>{
</code></td></tr><tr><td id="L1004" class="css-a4x74f"><span>1004</span></td><td id="LC1004" class="css-1dcdqdg"><code>	      <span class="code-keyword">if</span> (!request || request.readyState !== <span class="code-number">4</span>) {
</code></td></tr><tr><td id="L1005" class="css-a4x74f"><span>1005</span></td><td id="LC1005" class="css-1dcdqdg"><code>	        <span class="code-keyword">return</span>;
</code></td></tr><tr><td id="L1006" class="css-a4x74f"><span>1006</span></td><td id="LC1006" class="css-1dcdqdg"><code>	      }
</code></td></tr><tr><td id="L1007" class="css-a4x74f"><span>1007</span></td><td id="LC1007" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1008" class="css-a4x74f"><span>1008</span></td><td id="LC1008" class="css-1dcdqdg"><code>	      <span class="code-comment">// The request errored out and we didn't get a response, this will be</span>
</code></td></tr><tr><td id="L1009" class="css-a4x74f"><span>1009</span></td><td id="LC1009" class="css-1dcdqdg"><code>	      <span class="code-comment">// handled by onerror instead</span>
</code></td></tr><tr><td id="L1010" class="css-a4x74f"><span>1010</span></td><td id="LC1010" class="css-1dcdqdg"><code>	      <span class="code-comment">// With one exception: request that using file: protocol, most browsers</span>
</code></td></tr><tr><td id="L1011" class="css-a4x74f"><span>1011</span></td><td id="LC1011" class="css-1dcdqdg"><code>	      <span class="code-comment">// will return status as 0 even though it's a successful request</span>
</code></td></tr><tr><td id="L1012" class="css-a4x74f"><span>1012</span></td><td id="LC1012" class="css-1dcdqdg"><code>	      <span class="code-keyword">if</span> (request.status === <span class="code-number">0</span> &amp;&amp; !(request.responseURL &amp;&amp; request.responseURL.indexOf(<span class="code-string">'file:'</span>) === <span class="code-number">0</span>)) {
</code></td></tr><tr><td id="L1013" class="css-a4x74f"><span>1013</span></td><td id="LC1013" class="css-1dcdqdg"><code>	        <span class="code-keyword">return</span>;
</code></td></tr><tr><td id="L1014" class="css-a4x74f"><span>1014</span></td><td id="LC1014" class="css-1dcdqdg"><code>	      }
</code></td></tr><tr><td id="L1015" class="css-a4x74f"><span>1015</span></td><td id="LC1015" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1016" class="css-a4x74f"><span>1016</span></td><td id="LC1016" class="css-1dcdqdg"><code>	      <span class="code-comment">// Prepare the response</span>
</code></td></tr><tr><td id="L1017" class="css-a4x74f"><span>1017</span></td><td id="LC1017" class="css-1dcdqdg"><code>	      <span class="code-keyword">var</span> responseHeaders = <span class="code-string">'getAllResponseHeaders'</span> <span class="code-keyword">in</span> request ? parseHeaders(request.getAllResponseHeaders()) : <span class="code-literal">null</span>;
</code></td></tr><tr><td id="L1018" class="css-a4x74f"><span>1018</span></td><td id="LC1018" class="css-1dcdqdg"><code>	      <span class="code-keyword">var</span> responseData = !config.responseType || config.responseType === <span class="code-string">'text'</span> ? request.responseText : request.response;
</code></td></tr><tr><td id="L1019" class="css-a4x74f"><span>1019</span></td><td id="LC1019" class="css-1dcdqdg"><code>	      <span class="code-keyword">var</span> response = {
</code></td></tr><tr><td id="L1020" class="css-a4x74f"><span>1020</span></td><td id="LC1020" class="css-1dcdqdg"><code>	        data: responseData,
</code></td></tr><tr><td id="L1021" class="css-a4x74f"><span>1021</span></td><td id="LC1021" class="css-1dcdqdg"><code>	        status: request.status,
</code></td></tr><tr><td id="L1022" class="css-a4x74f"><span>1022</span></td><td id="LC1022" class="css-1dcdqdg"><code>	        statusText: request.statusText,
</code></td></tr><tr><td id="L1023" class="css-a4x74f"><span>1023</span></td><td id="LC1023" class="css-1dcdqdg"><code>	        headers: responseHeaders,
</code></td></tr><tr><td id="L1024" class="css-a4x74f"><span>1024</span></td><td id="LC1024" class="css-1dcdqdg"><code>	        config: config,
</code></td></tr><tr><td id="L1025" class="css-a4x74f"><span>1025</span></td><td id="LC1025" class="css-1dcdqdg"><code>	        request: request
</code></td></tr><tr><td id="L1026" class="css-a4x74f"><span>1026</span></td><td id="LC1026" class="css-1dcdqdg"><code>	      };
</code></td></tr><tr><td id="L1027" class="css-a4x74f"><span>1027</span></td><td id="LC1027" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1028" class="css-a4x74f"><span>1028</span></td><td id="LC1028" class="css-1dcdqdg"><code>	      settle(resolve, reject, response);
</code></td></tr><tr><td id="L1029" class="css-a4x74f"><span>1029</span></td><td id="LC1029" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1030" class="css-a4x74f"><span>1030</span></td><td id="LC1030" class="css-1dcdqdg"><code>	      <span class="code-comment">// Clean up request</span>
</code></td></tr><tr><td id="L1031" class="css-a4x74f"><span>1031</span></td><td id="LC1031" class="css-1dcdqdg"><code>	      request = <span class="code-literal">null</span>;
</code></td></tr><tr><td id="L1032" class="css-a4x74f"><span>1032</span></td><td id="LC1032" class="css-1dcdqdg"><code>	    };
</code></td></tr><tr><td id="L1033" class="css-a4x74f"><span>1033</span></td><td id="LC1033" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1034" class="css-a4x74f"><span>1034</span></td><td id="LC1034" class="css-1dcdqdg"><code>	    <span class="code-comment">// Handle browser request cancellation (as opposed to a manual cancellation)</span>
</code></td></tr><tr><td id="L1035" class="css-a4x74f"><span>1035</span></td><td id="LC1035" class="css-1dcdqdg"><code>	    request.onabort = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">handleAbort</span>(<span class="code-params"></span>) </span>{
</code></td></tr><tr><td id="L1036" class="css-a4x74f"><span>1036</span></td><td id="LC1036" class="css-1dcdqdg"><code>	      <span class="code-keyword">if</span> (!request) {
</code></td></tr><tr><td id="L1037" class="css-a4x74f"><span>1037</span></td><td id="LC1037" class="css-1dcdqdg"><code>	        <span class="code-keyword">return</span>;
</code></td></tr><tr><td id="L1038" class="css-a4x74f"><span>1038</span></td><td id="LC1038" class="css-1dcdqdg"><code>	      }
</code></td></tr><tr><td id="L1039" class="css-a4x74f"><span>1039</span></td><td id="LC1039" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1040" class="css-a4x74f"><span>1040</span></td><td id="LC1040" class="css-1dcdqdg"><code>	      reject(createError(<span class="code-string">'Request aborted'</span>, config, <span class="code-string">'ECONNABORTED'</span>, request));
</code></td></tr><tr><td id="L1041" class="css-a4x74f"><span>1041</span></td><td id="LC1041" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1042" class="css-a4x74f"><span>1042</span></td><td id="LC1042" class="css-1dcdqdg"><code>	      <span class="code-comment">// Clean up request</span>
</code></td></tr><tr><td id="L1043" class="css-a4x74f"><span>1043</span></td><td id="LC1043" class="css-1dcdqdg"><code>	      request = <span class="code-literal">null</span>;
</code></td></tr><tr><td id="L1044" class="css-a4x74f"><span>1044</span></td><td id="LC1044" class="css-1dcdqdg"><code>	    };
</code></td></tr><tr><td id="L1045" class="css-a4x74f"><span>1045</span></td><td id="LC1045" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1046" class="css-a4x74f"><span>1046</span></td><td id="LC1046" class="css-1dcdqdg"><code>	    <span class="code-comment">// Handle low level network errors</span>
</code></td></tr><tr><td id="L1047" class="css-a4x74f"><span>1047</span></td><td id="LC1047" class="css-1dcdqdg"><code>	    request.onerror = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">handleError</span>(<span class="code-params"></span>) </span>{
</code></td></tr><tr><td id="L1048" class="css-a4x74f"><span>1048</span></td><td id="LC1048" class="css-1dcdqdg"><code>	      <span class="code-comment">// Real errors are hidden from us by the browser</span>
</code></td></tr><tr><td id="L1049" class="css-a4x74f"><span>1049</span></td><td id="LC1049" class="css-1dcdqdg"><code>	      <span class="code-comment">// onerror should only fire if it's a network error</span>
</code></td></tr><tr><td id="L1050" class="css-a4x74f"><span>1050</span></td><td id="LC1050" class="css-1dcdqdg"><code>	      reject(createError(<span class="code-string">'Network Error'</span>, config, <span class="code-literal">null</span>, request));
</code></td></tr><tr><td id="L1051" class="css-a4x74f"><span>1051</span></td><td id="LC1051" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1052" class="css-a4x74f"><span>1052</span></td><td id="LC1052" class="css-1dcdqdg"><code>	      <span class="code-comment">// Clean up request</span>
</code></td></tr><tr><td id="L1053" class="css-a4x74f"><span>1053</span></td><td id="LC1053" class="css-1dcdqdg"><code>	      request = <span class="code-literal">null</span>;
</code></td></tr><tr><td id="L1054" class="css-a4x74f"><span>1054</span></td><td id="LC1054" class="css-1dcdqdg"><code>	    };
</code></td></tr><tr><td id="L1055" class="css-a4x74f"><span>1055</span></td><td id="LC1055" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1056" class="css-a4x74f"><span>1056</span></td><td id="LC1056" class="css-1dcdqdg"><code>	    <span class="code-comment">// Handle timeout</span>
</code></td></tr><tr><td id="L1057" class="css-a4x74f"><span>1057</span></td><td id="LC1057" class="css-1dcdqdg"><code>	    request.ontimeout = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">handleTimeout</span>(<span class="code-params"></span>) </span>{
</code></td></tr><tr><td id="L1058" class="css-a4x74f"><span>1058</span></td><td id="LC1058" class="css-1dcdqdg"><code>	      <span class="code-keyword">var</span> timeoutErrorMessage = <span class="code-string">'timeout of '</span> + config.timeout + <span class="code-string">'ms exceeded'</span>;
</code></td></tr><tr><td id="L1059" class="css-a4x74f"><span>1059</span></td><td id="LC1059" class="css-1dcdqdg"><code>	      <span class="code-keyword">if</span> (config.timeoutErrorMessage) {
</code></td></tr><tr><td id="L1060" class="css-a4x74f"><span>1060</span></td><td id="LC1060" class="css-1dcdqdg"><code>	        timeoutErrorMessage = config.timeoutErrorMessage;
</code></td></tr><tr><td id="L1061" class="css-a4x74f"><span>1061</span></td><td id="LC1061" class="css-1dcdqdg"><code>	      }
</code></td></tr><tr><td id="L1062" class="css-a4x74f"><span>1062</span></td><td id="LC1062" class="css-1dcdqdg"><code>	      reject(createError(timeoutErrorMessage, config, <span class="code-string">'ECONNABORTED'</span>,
</code></td></tr><tr><td id="L1063" class="css-a4x74f"><span>1063</span></td><td id="LC1063" class="css-1dcdqdg"><code>	        request));
</code></td></tr><tr><td id="L1064" class="css-a4x74f"><span>1064</span></td><td id="LC1064" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1065" class="css-a4x74f"><span>1065</span></td><td id="LC1065" class="css-1dcdqdg"><code>	      <span class="code-comment">// Clean up request</span>
</code></td></tr><tr><td id="L1066" class="css-a4x74f"><span>1066</span></td><td id="LC1066" class="css-1dcdqdg"><code>	      request = <span class="code-literal">null</span>;
</code></td></tr><tr><td id="L1067" class="css-a4x74f"><span>1067</span></td><td id="LC1067" class="css-1dcdqdg"><code>	    };
</code></td></tr><tr><td id="L1068" class="css-a4x74f"><span>1068</span></td><td id="LC1068" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1069" class="css-a4x74f"><span>1069</span></td><td id="LC1069" class="css-1dcdqdg"><code>	    <span class="code-comment">// Add xsrf header</span>
</code></td></tr><tr><td id="L1070" class="css-a4x74f"><span>1070</span></td><td id="LC1070" class="css-1dcdqdg"><code>	    <span class="code-comment">// This is only done if running in a standard browser environment.</span>
</code></td></tr><tr><td id="L1071" class="css-a4x74f"><span>1071</span></td><td id="LC1071" class="css-1dcdqdg"><code>	    <span class="code-comment">// Specifically not if we're in a web worker, or react-native.</span>
</code></td></tr><tr><td id="L1072" class="css-a4x74f"><span>1072</span></td><td id="LC1072" class="css-1dcdqdg"><code>	    <span class="code-keyword">if</span> (utils.isStandardBrowserEnv()) {
</code></td></tr><tr><td id="L1073" class="css-a4x74f"><span>1073</span></td><td id="LC1073" class="css-1dcdqdg"><code>	      <span class="code-keyword">var</span> cookies = __webpack_require__(<span class="code-number">22</span>);
</code></td></tr><tr><td id="L1074" class="css-a4x74f"><span>1074</span></td><td id="LC1074" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1075" class="css-a4x74f"><span>1075</span></td><td id="LC1075" class="css-1dcdqdg"><code>	      <span class="code-comment">// Add xsrf header</span>
</code></td></tr><tr><td id="L1076" class="css-a4x74f"><span>1076</span></td><td id="LC1076" class="css-1dcdqdg"><code>	      <span class="code-keyword">var</span> xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) &amp;&amp; config.xsrfCookieName ?
</code></td></tr><tr><td id="L1077" class="css-a4x74f"><span>1077</span></td><td id="LC1077" class="css-1dcdqdg"><code>	        cookies.read(config.xsrfCookieName) :
</code></td></tr><tr><td id="L1078" class="css-a4x74f"><span>1078</span></td><td id="LC1078" class="css-1dcdqdg"><code>	        <span class="code-literal">undefined</span>;
</code></td></tr><tr><td id="L1079" class="css-a4x74f"><span>1079</span></td><td id="LC1079" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1080" class="css-a4x74f"><span>1080</span></td><td id="LC1080" class="css-1dcdqdg"><code>	      <span class="code-keyword">if</span> (xsrfValue) {
</code></td></tr><tr><td id="L1081" class="css-a4x74f"><span>1081</span></td><td id="LC1081" class="css-1dcdqdg"><code>	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
</code></td></tr><tr><td id="L1082" class="css-a4x74f"><span>1082</span></td><td id="LC1082" class="css-1dcdqdg"><code>	      }
</code></td></tr><tr><td id="L1083" class="css-a4x74f"><span>1083</span></td><td id="LC1083" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L1084" class="css-a4x74f"><span>1084</span></td><td id="LC1084" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1085" class="css-a4x74f"><span>1085</span></td><td id="LC1085" class="css-1dcdqdg"><code>	    <span class="code-comment">// Add headers to the request</span>
</code></td></tr><tr><td id="L1086" class="css-a4x74f"><span>1086</span></td><td id="LC1086" class="css-1dcdqdg"><code>	    <span class="code-keyword">if</span> (<span class="code-string">'setRequestHeader'</span> <span class="code-keyword">in</span> request) {
</code></td></tr><tr><td id="L1087" class="css-a4x74f"><span>1087</span></td><td id="LC1087" class="css-1dcdqdg"><code>	      utils.forEach(requestHeaders, <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">setRequestHeader</span>(<span class="code-params">val, key</span>) </span>{
</code></td></tr><tr><td id="L1088" class="css-a4x74f"><span>1088</span></td><td id="LC1088" class="css-1dcdqdg"><code>	        <span class="code-keyword">if</span> (<span class="code-keyword">typeof</span> requestData === <span class="code-string">'undefined'</span> &amp;&amp; key.toLowerCase() === <span class="code-string">'content-type'</span>) {
</code></td></tr><tr><td id="L1089" class="css-a4x74f"><span>1089</span></td><td id="LC1089" class="css-1dcdqdg"><code>	          <span class="code-comment">// Remove Content-Type if data is undefined</span>
</code></td></tr><tr><td id="L1090" class="css-a4x74f"><span>1090</span></td><td id="LC1090" class="css-1dcdqdg"><code>	          <span class="code-keyword">delete</span> requestHeaders[key];
</code></td></tr><tr><td id="L1091" class="css-a4x74f"><span>1091</span></td><td id="LC1091" class="css-1dcdqdg"><code>	        } <span class="code-keyword">else</span> {
</code></td></tr><tr><td id="L1092" class="css-a4x74f"><span>1092</span></td><td id="LC1092" class="css-1dcdqdg"><code>	          <span class="code-comment">// Otherwise add header to the request</span>
</code></td></tr><tr><td id="L1093" class="css-a4x74f"><span>1093</span></td><td id="LC1093" class="css-1dcdqdg"><code>	          request.setRequestHeader(key, val);
</code></td></tr><tr><td id="L1094" class="css-a4x74f"><span>1094</span></td><td id="LC1094" class="css-1dcdqdg"><code>	        }
</code></td></tr><tr><td id="L1095" class="css-a4x74f"><span>1095</span></td><td id="LC1095" class="css-1dcdqdg"><code>	      });
</code></td></tr><tr><td id="L1096" class="css-a4x74f"><span>1096</span></td><td id="LC1096" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L1097" class="css-a4x74f"><span>1097</span></td><td id="LC1097" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1098" class="css-a4x74f"><span>1098</span></td><td id="LC1098" class="css-1dcdqdg"><code>	    <span class="code-comment">// Add withCredentials to request if needed</span>
</code></td></tr><tr><td id="L1099" class="css-a4x74f"><span>1099</span></td><td id="LC1099" class="css-1dcdqdg"><code>	    <span class="code-keyword">if</span> (!utils.isUndefined(config.withCredentials)) {
</code></td></tr><tr><td id="L1100" class="css-a4x74f"><span>1100</span></td><td id="LC1100" class="css-1dcdqdg"><code>	      request.withCredentials = !!config.withCredentials;
</code></td></tr><tr><td id="L1101" class="css-a4x74f"><span>1101</span></td><td id="LC1101" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L1102" class="css-a4x74f"><span>1102</span></td><td id="LC1102" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1103" class="css-a4x74f"><span>1103</span></td><td id="LC1103" class="css-1dcdqdg"><code>	    <span class="code-comment">// Add responseType to request if needed</span>
</code></td></tr><tr><td id="L1104" class="css-a4x74f"><span>1104</span></td><td id="LC1104" class="css-1dcdqdg"><code>	    <span class="code-keyword">if</span> (config.responseType) {
</code></td></tr><tr><td id="L1105" class="css-a4x74f"><span>1105</span></td><td id="LC1105" class="css-1dcdqdg"><code>	      <span class="code-keyword">try</span> {
</code></td></tr><tr><td id="L1106" class="css-a4x74f"><span>1106</span></td><td id="LC1106" class="css-1dcdqdg"><code>	        request.responseType = config.responseType;
</code></td></tr><tr><td id="L1107" class="css-a4x74f"><span>1107</span></td><td id="LC1107" class="css-1dcdqdg"><code>	      } <span class="code-keyword">catch</span> (e) {
</code></td></tr><tr><td id="L1108" class="css-a4x74f"><span>1108</span></td><td id="LC1108" class="css-1dcdqdg"><code>	        <span class="code-comment">// Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.</span>
</code></td></tr><tr><td id="L1109" class="css-a4x74f"><span>1109</span></td><td id="LC1109" class="css-1dcdqdg"><code>	        <span class="code-comment">// But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.</span>
</code></td></tr><tr><td id="L1110" class="css-a4x74f"><span>1110</span></td><td id="LC1110" class="css-1dcdqdg"><code>	        <span class="code-keyword">if</span> (config.responseType !== <span class="code-string">'json'</span>) {
</code></td></tr><tr><td id="L1111" class="css-a4x74f"><span>1111</span></td><td id="LC1111" class="css-1dcdqdg"><code>	          <span class="code-keyword">throw</span> e;
</code></td></tr><tr><td id="L1112" class="css-a4x74f"><span>1112</span></td><td id="LC1112" class="css-1dcdqdg"><code>	        }
</code></td></tr><tr><td id="L1113" class="css-a4x74f"><span>1113</span></td><td id="LC1113" class="css-1dcdqdg"><code>	      }
</code></td></tr><tr><td id="L1114" class="css-a4x74f"><span>1114</span></td><td id="LC1114" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L1115" class="css-a4x74f"><span>1115</span></td><td id="LC1115" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1116" class="css-a4x74f"><span>1116</span></td><td id="LC1116" class="css-1dcdqdg"><code>	    <span class="code-comment">// Handle progress if needed</span>
</code></td></tr><tr><td id="L1117" class="css-a4x74f"><span>1117</span></td><td id="LC1117" class="css-1dcdqdg"><code>	    <span class="code-keyword">if</span> (<span class="code-keyword">typeof</span> config.onDownloadProgress === <span class="code-string">'function'</span>) {
</code></td></tr><tr><td id="L1118" class="css-a4x74f"><span>1118</span></td><td id="LC1118" class="css-1dcdqdg"><code>	      request.addEventListener(<span class="code-string">'progress'</span>, config.onDownloadProgress);
</code></td></tr><tr><td id="L1119" class="css-a4x74f"><span>1119</span></td><td id="LC1119" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L1120" class="css-a4x74f"><span>1120</span></td><td id="LC1120" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1121" class="css-a4x74f"><span>1121</span></td><td id="LC1121" class="css-1dcdqdg"><code>	    <span class="code-comment">// Not all browsers support upload events</span>
</code></td></tr><tr><td id="L1122" class="css-a4x74f"><span>1122</span></td><td id="LC1122" class="css-1dcdqdg"><code>	    <span class="code-keyword">if</span> (<span class="code-keyword">typeof</span> config.onUploadProgress === <span class="code-string">'function'</span> &amp;&amp; request.upload) {
</code></td></tr><tr><td id="L1123" class="css-a4x74f"><span>1123</span></td><td id="LC1123" class="css-1dcdqdg"><code>	      request.upload.addEventListener(<span class="code-string">'progress'</span>, config.onUploadProgress);
</code></td></tr><tr><td id="L1124" class="css-a4x74f"><span>1124</span></td><td id="LC1124" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L1125" class="css-a4x74f"><span>1125</span></td><td id="LC1125" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1126" class="css-a4x74f"><span>1126</span></td><td id="LC1126" class="css-1dcdqdg"><code>	    <span class="code-keyword">if</span> (config.cancelToken) {
</code></td></tr><tr><td id="L1127" class="css-a4x74f"><span>1127</span></td><td id="LC1127" class="css-1dcdqdg"><code>	      <span class="code-comment">// Handle cancellation</span>
</code></td></tr><tr><td id="L1128" class="css-a4x74f"><span>1128</span></td><td id="LC1128" class="css-1dcdqdg"><code>	      config.cancelToken.promise.then(<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">onCanceled</span>(<span class="code-params">cancel</span>) </span>{
</code></td></tr><tr><td id="L1129" class="css-a4x74f"><span>1129</span></td><td id="LC1129" class="css-1dcdqdg"><code>	        <span class="code-keyword">if</span> (!request) {
</code></td></tr><tr><td id="L1130" class="css-a4x74f"><span>1130</span></td><td id="LC1130" class="css-1dcdqdg"><code>	          <span class="code-keyword">return</span>;
</code></td></tr><tr><td id="L1131" class="css-a4x74f"><span>1131</span></td><td id="LC1131" class="css-1dcdqdg"><code>	        }
</code></td></tr><tr><td id="L1132" class="css-a4x74f"><span>1132</span></td><td id="LC1132" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1133" class="css-a4x74f"><span>1133</span></td><td id="LC1133" class="css-1dcdqdg"><code>	        request.abort();
</code></td></tr><tr><td id="L1134" class="css-a4x74f"><span>1134</span></td><td id="LC1134" class="css-1dcdqdg"><code>	        reject(cancel);
</code></td></tr><tr><td id="L1135" class="css-a4x74f"><span>1135</span></td><td id="LC1135" class="css-1dcdqdg"><code>	        <span class="code-comment">// Clean up request</span>
</code></td></tr><tr><td id="L1136" class="css-a4x74f"><span>1136</span></td><td id="LC1136" class="css-1dcdqdg"><code>	        request = <span class="code-literal">null</span>;
</code></td></tr><tr><td id="L1137" class="css-a4x74f"><span>1137</span></td><td id="LC1137" class="css-1dcdqdg"><code>	      });
</code></td></tr><tr><td id="L1138" class="css-a4x74f"><span>1138</span></td><td id="LC1138" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L1139" class="css-a4x74f"><span>1139</span></td><td id="LC1139" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1140" class="css-a4x74f"><span>1140</span></td><td id="LC1140" class="css-1dcdqdg"><code>	    <span class="code-keyword">if</span> (requestData === <span class="code-literal">undefined</span>) {
</code></td></tr><tr><td id="L1141" class="css-a4x74f"><span>1141</span></td><td id="LC1141" class="css-1dcdqdg"><code>	      requestData = <span class="code-literal">null</span>;
</code></td></tr><tr><td id="L1142" class="css-a4x74f"><span>1142</span></td><td id="LC1142" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L1143" class="css-a4x74f"><span>1143</span></td><td id="LC1143" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1144" class="css-a4x74f"><span>1144</span></td><td id="LC1144" class="css-1dcdqdg"><code>	    <span class="code-comment">// Send the request</span>
</code></td></tr><tr><td id="L1145" class="css-a4x74f"><span>1145</span></td><td id="LC1145" class="css-1dcdqdg"><code>	    request.send(requestData);
</code></td></tr><tr><td id="L1146" class="css-a4x74f"><span>1146</span></td><td id="LC1146" class="css-1dcdqdg"><code>	  });
</code></td></tr><tr><td id="L1147" class="css-a4x74f"><span>1147</span></td><td id="LC1147" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L1148" class="css-a4x74f"><span>1148</span></td><td id="LC1148" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1149" class="css-a4x74f"><span>1149</span></td><td id="LC1149" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1150" class="css-a4x74f"><span>1150</span></td><td id="LC1150" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> }),
</code></td></tr><tr><td id="L1151" class="css-a4x74f"><span>1151</span></td><td id="LC1151" class="css-1dcdqdg"><code><span class="code-comment">/* 13 */</span>
</code></td></tr><tr><td id="L1152" class="css-a4x74f"><span>1152</span></td><td id="LC1152" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> (<span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">module, exports, __webpack_require__</span>) </span>{
</code></td></tr><tr><td id="L1153" class="css-a4x74f"><span>1153</span></td><td id="LC1153" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1154" class="css-a4x74f"><span>1154</span></td><td id="LC1154" class="css-1dcdqdg"><code><span class="code-meta">	'use strict'</span>;
</code></td></tr><tr><td id="L1155" class="css-a4x74f"><span>1155</span></td><td id="LC1155" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1156" class="css-a4x74f"><span>1156</span></td><td id="LC1156" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> createError = __webpack_require__(<span class="code-number">14</span>);
</code></td></tr><tr><td id="L1157" class="css-a4x74f"><span>1157</span></td><td id="LC1157" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1158" class="css-a4x74f"><span>1158</span></td><td id="LC1158" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L1159" class="css-a4x74f"><span>1159</span></td><td id="LC1159" class="css-1dcdqdg"><code><span class="code-comment">	 * Resolve or reject a Promise based on response status.
</span></code></td></tr><tr><td id="L1160" class="css-a4x74f"><span>1160</span></td><td id="LC1160" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L1161" class="css-a4x74f"><span>1161</span></td><td id="LC1161" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Function} resolve A function that resolves the promise.
</span></code></td></tr><tr><td id="L1162" class="css-a4x74f"><span>1162</span></td><td id="LC1162" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Function} reject A function that rejects the promise.
</span></code></td></tr><tr><td id="L1163" class="css-a4x74f"><span>1163</span></td><td id="LC1163" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {object} response The response.
</span></code></td></tr><tr><td id="L1164" class="css-a4x74f"><span>1164</span></td><td id="LC1164" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L1165" class="css-a4x74f"><span>1165</span></td><td id="LC1165" class="css-1dcdqdg"><code>	<span class="code-built_in">module</span>.exports = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">settle</span>(<span class="code-params">resolve, reject, response</span>) </span>{
</code></td></tr><tr><td id="L1166" class="css-a4x74f"><span>1166</span></td><td id="LC1166" class="css-1dcdqdg"><code>	  <span class="code-keyword">var</span> validateStatus = response.config.validateStatus;
</code></td></tr><tr><td id="L1167" class="css-a4x74f"><span>1167</span></td><td id="LC1167" class="css-1dcdqdg"><code>	  <span class="code-keyword">if</span> (!validateStatus || validateStatus(response.status)) {
</code></td></tr><tr><td id="L1168" class="css-a4x74f"><span>1168</span></td><td id="LC1168" class="css-1dcdqdg"><code>	    resolve(response);
</code></td></tr><tr><td id="L1169" class="css-a4x74f"><span>1169</span></td><td id="LC1169" class="css-1dcdqdg"><code>	  } <span class="code-keyword">else</span> {
</code></td></tr><tr><td id="L1170" class="css-a4x74f"><span>1170</span></td><td id="LC1170" class="css-1dcdqdg"><code>	    reject(createError(
</code></td></tr><tr><td id="L1171" class="css-a4x74f"><span>1171</span></td><td id="LC1171" class="css-1dcdqdg"><code>	      <span class="code-string">'Request failed with status code '</span> + response.status,
</code></td></tr><tr><td id="L1172" class="css-a4x74f"><span>1172</span></td><td id="LC1172" class="css-1dcdqdg"><code>	      response.config,
</code></td></tr><tr><td id="L1173" class="css-a4x74f"><span>1173</span></td><td id="LC1173" class="css-1dcdqdg"><code>	      <span class="code-literal">null</span>,
</code></td></tr><tr><td id="L1174" class="css-a4x74f"><span>1174</span></td><td id="LC1174" class="css-1dcdqdg"><code>	      response.request,
</code></td></tr><tr><td id="L1175" class="css-a4x74f"><span>1175</span></td><td id="LC1175" class="css-1dcdqdg"><code>	      response
</code></td></tr><tr><td id="L1176" class="css-a4x74f"><span>1176</span></td><td id="LC1176" class="css-1dcdqdg"><code>	    ));
</code></td></tr><tr><td id="L1177" class="css-a4x74f"><span>1177</span></td><td id="LC1177" class="css-1dcdqdg"><code>	  }
</code></td></tr><tr><td id="L1178" class="css-a4x74f"><span>1178</span></td><td id="LC1178" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L1179" class="css-a4x74f"><span>1179</span></td><td id="LC1179" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1180" class="css-a4x74f"><span>1180</span></td><td id="LC1180" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1181" class="css-a4x74f"><span>1181</span></td><td id="LC1181" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> }),
</code></td></tr><tr><td id="L1182" class="css-a4x74f"><span>1182</span></td><td id="LC1182" class="css-1dcdqdg"><code><span class="code-comment">/* 14 */</span>
</code></td></tr><tr><td id="L1183" class="css-a4x74f"><span>1183</span></td><td id="LC1183" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> (<span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">module, exports, __webpack_require__</span>) </span>{
</code></td></tr><tr><td id="L1184" class="css-a4x74f"><span>1184</span></td><td id="LC1184" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1185" class="css-a4x74f"><span>1185</span></td><td id="LC1185" class="css-1dcdqdg"><code><span class="code-meta">	'use strict'</span>;
</code></td></tr><tr><td id="L1186" class="css-a4x74f"><span>1186</span></td><td id="LC1186" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1187" class="css-a4x74f"><span>1187</span></td><td id="LC1187" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> enhanceError = __webpack_require__(<span class="code-number">15</span>);
</code></td></tr><tr><td id="L1188" class="css-a4x74f"><span>1188</span></td><td id="LC1188" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1189" class="css-a4x74f"><span>1189</span></td><td id="LC1189" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L1190" class="css-a4x74f"><span>1190</span></td><td id="LC1190" class="css-1dcdqdg"><code><span class="code-comment">	 * Create an Error with the specified message, config, error code, request and response.
</span></code></td></tr><tr><td id="L1191" class="css-a4x74f"><span>1191</span></td><td id="LC1191" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L1192" class="css-a4x74f"><span>1192</span></td><td id="LC1192" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {string} message The error message.
</span></code></td></tr><tr><td id="L1193" class="css-a4x74f"><span>1193</span></td><td id="LC1193" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} config The config.
</span></code></td></tr><tr><td id="L1194" class="css-a4x74f"><span>1194</span></td><td id="LC1194" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
</span></code></td></tr><tr><td id="L1195" class="css-a4x74f"><span>1195</span></td><td id="LC1195" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} [request] The request.
</span></code></td></tr><tr><td id="L1196" class="css-a4x74f"><span>1196</span></td><td id="LC1196" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} [response] The response.
</span></code></td></tr><tr><td id="L1197" class="css-a4x74f"><span>1197</span></td><td id="LC1197" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {Error} The created error.
</span></code></td></tr><tr><td id="L1198" class="css-a4x74f"><span>1198</span></td><td id="LC1198" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L1199" class="css-a4x74f"><span>1199</span></td><td id="LC1199" class="css-1dcdqdg"><code>	<span class="code-built_in">module</span>.exports = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">createError</span>(<span class="code-params">message, config, code, request, response</span>) </span>{
</code></td></tr><tr><td id="L1200" class="css-a4x74f"><span>1200</span></td><td id="LC1200" class="css-1dcdqdg"><code>	  <span class="code-keyword">var</span> error = <span class="code-keyword">new</span> <span class="code-built_in">Error</span>(message);
</code></td></tr><tr><td id="L1201" class="css-a4x74f"><span>1201</span></td><td id="LC1201" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> enhanceError(error, config, code, request, response);
</code></td></tr><tr><td id="L1202" class="css-a4x74f"><span>1202</span></td><td id="LC1202" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L1203" class="css-a4x74f"><span>1203</span></td><td id="LC1203" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1204" class="css-a4x74f"><span>1204</span></td><td id="LC1204" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1205" class="css-a4x74f"><span>1205</span></td><td id="LC1205" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> }),
</code></td></tr><tr><td id="L1206" class="css-a4x74f"><span>1206</span></td><td id="LC1206" class="css-1dcdqdg"><code><span class="code-comment">/* 15 */</span>
</code></td></tr><tr><td id="L1207" class="css-a4x74f"><span>1207</span></td><td id="LC1207" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> (<span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">module, exports</span>) </span>{
</code></td></tr><tr><td id="L1208" class="css-a4x74f"><span>1208</span></td><td id="LC1208" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1209" class="css-a4x74f"><span>1209</span></td><td id="LC1209" class="css-1dcdqdg"><code><span class="code-meta">	'use strict'</span>;
</code></td></tr><tr><td id="L1210" class="css-a4x74f"><span>1210</span></td><td id="LC1210" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1211" class="css-a4x74f"><span>1211</span></td><td id="LC1211" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L1212" class="css-a4x74f"><span>1212</span></td><td id="LC1212" class="css-1dcdqdg"><code><span class="code-comment">	 * Update an Error with the specified config, error code, and response.
</span></code></td></tr><tr><td id="L1213" class="css-a4x74f"><span>1213</span></td><td id="LC1213" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L1214" class="css-a4x74f"><span>1214</span></td><td id="LC1214" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Error} error The error to update.
</span></code></td></tr><tr><td id="L1215" class="css-a4x74f"><span>1215</span></td><td id="LC1215" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} config The config.
</span></code></td></tr><tr><td id="L1216" class="css-a4x74f"><span>1216</span></td><td id="LC1216" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
</span></code></td></tr><tr><td id="L1217" class="css-a4x74f"><span>1217</span></td><td id="LC1217" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} [request] The request.
</span></code></td></tr><tr><td id="L1218" class="css-a4x74f"><span>1218</span></td><td id="LC1218" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} [response] The response.
</span></code></td></tr><tr><td id="L1219" class="css-a4x74f"><span>1219</span></td><td id="LC1219" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {Error} The error.
</span></code></td></tr><tr><td id="L1220" class="css-a4x74f"><span>1220</span></td><td id="LC1220" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L1221" class="css-a4x74f"><span>1221</span></td><td id="LC1221" class="css-1dcdqdg"><code>	<span class="code-built_in">module</span>.exports = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">enhanceError</span>(<span class="code-params">error, config, code, request, response</span>) </span>{
</code></td></tr><tr><td id="L1222" class="css-a4x74f"><span>1222</span></td><td id="LC1222" class="css-1dcdqdg"><code>	  error.config = config;
</code></td></tr><tr><td id="L1223" class="css-a4x74f"><span>1223</span></td><td id="LC1223" class="css-1dcdqdg"><code>	  <span class="code-keyword">if</span> (code) {
</code></td></tr><tr><td id="L1224" class="css-a4x74f"><span>1224</span></td><td id="LC1224" class="css-1dcdqdg"><code>	    error.code = code;
</code></td></tr><tr><td id="L1225" class="css-a4x74f"><span>1225</span></td><td id="LC1225" class="css-1dcdqdg"><code>	  }
</code></td></tr><tr><td id="L1226" class="css-a4x74f"><span>1226</span></td><td id="LC1226" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1227" class="css-a4x74f"><span>1227</span></td><td id="LC1227" class="css-1dcdqdg"><code>	  error.request = request;
</code></td></tr><tr><td id="L1228" class="css-a4x74f"><span>1228</span></td><td id="LC1228" class="css-1dcdqdg"><code>	  error.response = response;
</code></td></tr><tr><td id="L1229" class="css-a4x74f"><span>1229</span></td><td id="LC1229" class="css-1dcdqdg"><code>	  error.isAxiosError = <span class="code-literal">true</span>;
</code></td></tr><tr><td id="L1230" class="css-a4x74f"><span>1230</span></td><td id="LC1230" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1231" class="css-a4x74f"><span>1231</span></td><td id="LC1231" class="css-1dcdqdg"><code>	  error.toJSON = <span class="code-function"><span class="code-keyword">function</span>(<span class="code-params"></span>) </span>{
</code></td></tr><tr><td id="L1232" class="css-a4x74f"><span>1232</span></td><td id="LC1232" class="css-1dcdqdg"><code>	    <span class="code-keyword">return</span> {
</code></td></tr><tr><td id="L1233" class="css-a4x74f"><span>1233</span></td><td id="LC1233" class="css-1dcdqdg"><code>	      <span class="code-comment">// Standard</span>
</code></td></tr><tr><td id="L1234" class="css-a4x74f"><span>1234</span></td><td id="LC1234" class="css-1dcdqdg"><code>	      message: <span class="code-keyword">this</span>.message,
</code></td></tr><tr><td id="L1235" class="css-a4x74f"><span>1235</span></td><td id="LC1235" class="css-1dcdqdg"><code>	      name: <span class="code-keyword">this</span>.name,
</code></td></tr><tr><td id="L1236" class="css-a4x74f"><span>1236</span></td><td id="LC1236" class="css-1dcdqdg"><code>	      <span class="code-comment">// Microsoft</span>
</code></td></tr><tr><td id="L1237" class="css-a4x74f"><span>1237</span></td><td id="LC1237" class="css-1dcdqdg"><code>	      description: <span class="code-keyword">this</span>.description,
</code></td></tr><tr><td id="L1238" class="css-a4x74f"><span>1238</span></td><td id="LC1238" class="css-1dcdqdg"><code>	      number: <span class="code-keyword">this</span>.number,
</code></td></tr><tr><td id="L1239" class="css-a4x74f"><span>1239</span></td><td id="LC1239" class="css-1dcdqdg"><code>	      <span class="code-comment">// Mozilla</span>
</code></td></tr><tr><td id="L1240" class="css-a4x74f"><span>1240</span></td><td id="LC1240" class="css-1dcdqdg"><code>	      fileName: <span class="code-keyword">this</span>.fileName,
</code></td></tr><tr><td id="L1241" class="css-a4x74f"><span>1241</span></td><td id="LC1241" class="css-1dcdqdg"><code>	      lineNumber: <span class="code-keyword">this</span>.lineNumber,
</code></td></tr><tr><td id="L1242" class="css-a4x74f"><span>1242</span></td><td id="LC1242" class="css-1dcdqdg"><code>	      columnNumber: <span class="code-keyword">this</span>.columnNumber,
</code></td></tr><tr><td id="L1243" class="css-a4x74f"><span>1243</span></td><td id="LC1243" class="css-1dcdqdg"><code>	      stack: <span class="code-keyword">this</span>.stack,
</code></td></tr><tr><td id="L1244" class="css-a4x74f"><span>1244</span></td><td id="LC1244" class="css-1dcdqdg"><code>	      <span class="code-comment">// Axios</span>
</code></td></tr><tr><td id="L1245" class="css-a4x74f"><span>1245</span></td><td id="LC1245" class="css-1dcdqdg"><code>	      config: <span class="code-keyword">this</span>.config,
</code></td></tr><tr><td id="L1246" class="css-a4x74f"><span>1246</span></td><td id="LC1246" class="css-1dcdqdg"><code>	      code: <span class="code-keyword">this</span>.code
</code></td></tr><tr><td id="L1247" class="css-a4x74f"><span>1247</span></td><td id="LC1247" class="css-1dcdqdg"><code>	    };
</code></td></tr><tr><td id="L1248" class="css-a4x74f"><span>1248</span></td><td id="LC1248" class="css-1dcdqdg"><code>	  };
</code></td></tr><tr><td id="L1249" class="css-a4x74f"><span>1249</span></td><td id="LC1249" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> error;
</code></td></tr><tr><td id="L1250" class="css-a4x74f"><span>1250</span></td><td id="LC1250" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L1251" class="css-a4x74f"><span>1251</span></td><td id="LC1251" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1252" class="css-a4x74f"><span>1252</span></td><td id="LC1252" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1253" class="css-a4x74f"><span>1253</span></td><td id="LC1253" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> }),
</code></td></tr><tr><td id="L1254" class="css-a4x74f"><span>1254</span></td><td id="LC1254" class="css-1dcdqdg"><code><span class="code-comment">/* 16 */</span>
</code></td></tr><tr><td id="L1255" class="css-a4x74f"><span>1255</span></td><td id="LC1255" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> (<span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">module, exports, __webpack_require__</span>) </span>{
</code></td></tr><tr><td id="L1256" class="css-a4x74f"><span>1256</span></td><td id="LC1256" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1257" class="css-a4x74f"><span>1257</span></td><td id="LC1257" class="css-1dcdqdg"><code><span class="code-meta">	'use strict'</span>;
</code></td></tr><tr><td id="L1258" class="css-a4x74f"><span>1258</span></td><td id="LC1258" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1259" class="css-a4x74f"><span>1259</span></td><td id="LC1259" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> isAbsoluteURL = __webpack_require__(<span class="code-number">17</span>);
</code></td></tr><tr><td id="L1260" class="css-a4x74f"><span>1260</span></td><td id="LC1260" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> combineURLs = __webpack_require__(<span class="code-number">18</span>);
</code></td></tr><tr><td id="L1261" class="css-a4x74f"><span>1261</span></td><td id="LC1261" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1262" class="css-a4x74f"><span>1262</span></td><td id="LC1262" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L1263" class="css-a4x74f"><span>1263</span></td><td id="LC1263" class="css-1dcdqdg"><code><span class="code-comment">	 * Creates a new URL by combining the baseURL with the requestedURL,
</span></code></td></tr><tr><td id="L1264" class="css-a4x74f"><span>1264</span></td><td id="LC1264" class="css-1dcdqdg"><code><span class="code-comment">	 * only when the requestedURL is not already an absolute URL.
</span></code></td></tr><tr><td id="L1265" class="css-a4x74f"><span>1265</span></td><td id="LC1265" class="css-1dcdqdg"><code><span class="code-comment">	 * If the requestURL is absolute, this function returns the requestedURL untouched.
</span></code></td></tr><tr><td id="L1266" class="css-a4x74f"><span>1266</span></td><td id="LC1266" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L1267" class="css-a4x74f"><span>1267</span></td><td id="LC1267" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {string} baseURL The base URL
</span></code></td></tr><tr><td id="L1268" class="css-a4x74f"><span>1268</span></td><td id="LC1268" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {string} requestedURL Absolute or relative URL to combine
</span></code></td></tr><tr><td id="L1269" class="css-a4x74f"><span>1269</span></td><td id="LC1269" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {string} The combined full path
</span></code></td></tr><tr><td id="L1270" class="css-a4x74f"><span>1270</span></td><td id="LC1270" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L1271" class="css-a4x74f"><span>1271</span></td><td id="LC1271" class="css-1dcdqdg"><code>	<span class="code-built_in">module</span>.exports = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">buildFullPath</span>(<span class="code-params">baseURL, requestedURL</span>) </span>{
</code></td></tr><tr><td id="L1272" class="css-a4x74f"><span>1272</span></td><td id="LC1272" class="css-1dcdqdg"><code>	  <span class="code-keyword">if</span> (baseURL &amp;&amp; !isAbsoluteURL(requestedURL)) {
</code></td></tr><tr><td id="L1273" class="css-a4x74f"><span>1273</span></td><td id="LC1273" class="css-1dcdqdg"><code>	    <span class="code-keyword">return</span> combineURLs(baseURL, requestedURL);
</code></td></tr><tr><td id="L1274" class="css-a4x74f"><span>1274</span></td><td id="LC1274" class="css-1dcdqdg"><code>	  }
</code></td></tr><tr><td id="L1275" class="css-a4x74f"><span>1275</span></td><td id="LC1275" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> requestedURL;
</code></td></tr><tr><td id="L1276" class="css-a4x74f"><span>1276</span></td><td id="LC1276" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L1277" class="css-a4x74f"><span>1277</span></td><td id="LC1277" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1278" class="css-a4x74f"><span>1278</span></td><td id="LC1278" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1279" class="css-a4x74f"><span>1279</span></td><td id="LC1279" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> }),
</code></td></tr><tr><td id="L1280" class="css-a4x74f"><span>1280</span></td><td id="LC1280" class="css-1dcdqdg"><code><span class="code-comment">/* 17 */</span>
</code></td></tr><tr><td id="L1281" class="css-a4x74f"><span>1281</span></td><td id="LC1281" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> (<span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">module, exports</span>) </span>{
</code></td></tr><tr><td id="L1282" class="css-a4x74f"><span>1282</span></td><td id="LC1282" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1283" class="css-a4x74f"><span>1283</span></td><td id="LC1283" class="css-1dcdqdg"><code><span class="code-meta">	'use strict'</span>;
</code></td></tr><tr><td id="L1284" class="css-a4x74f"><span>1284</span></td><td id="LC1284" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1285" class="css-a4x74f"><span>1285</span></td><td id="LC1285" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L1286" class="css-a4x74f"><span>1286</span></td><td id="LC1286" class="css-1dcdqdg"><code><span class="code-comment">	 * Determines whether the specified URL is absolute
</span></code></td></tr><tr><td id="L1287" class="css-a4x74f"><span>1287</span></td><td id="LC1287" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L1288" class="css-a4x74f"><span>1288</span></td><td id="LC1288" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {string} url The URL to test
</span></code></td></tr><tr><td id="L1289" class="css-a4x74f"><span>1289</span></td><td id="LC1289" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {boolean} True if the specified URL is absolute, otherwise false
</span></code></td></tr><tr><td id="L1290" class="css-a4x74f"><span>1290</span></td><td id="LC1290" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L1291" class="css-a4x74f"><span>1291</span></td><td id="LC1291" class="css-1dcdqdg"><code>	<span class="code-built_in">module</span>.exports = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">isAbsoluteURL</span>(<span class="code-params">url</span>) </span>{
</code></td></tr><tr><td id="L1292" class="css-a4x74f"><span>1292</span></td><td id="LC1292" class="css-1dcdqdg"><code>	  <span class="code-comment">// A URL is considered absolute if it begins with "&lt;scheme&gt;://" or "//" (protocol-relative URL).</span>
</code></td></tr><tr><td id="L1293" class="css-a4x74f"><span>1293</span></td><td id="LC1293" class="css-1dcdqdg"><code>	  <span class="code-comment">// RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed</span>
</code></td></tr><tr><td id="L1294" class="css-a4x74f"><span>1294</span></td><td id="LC1294" class="css-1dcdqdg"><code>	  <span class="code-comment">// by any combination of letters, digits, plus, period, or hyphen.</span>
</code></td></tr><tr><td id="L1295" class="css-a4x74f"><span>1295</span></td><td id="LC1295" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> <span class="code-regexp">/^([a-z][a-z\d\+\-\.]*:)?\/\//i</span>.test(url);
</code></td></tr><tr><td id="L1296" class="css-a4x74f"><span>1296</span></td><td id="LC1296" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L1297" class="css-a4x74f"><span>1297</span></td><td id="LC1297" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1298" class="css-a4x74f"><span>1298</span></td><td id="LC1298" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1299" class="css-a4x74f"><span>1299</span></td><td id="LC1299" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> }),
</code></td></tr><tr><td id="L1300" class="css-a4x74f"><span>1300</span></td><td id="LC1300" class="css-1dcdqdg"><code><span class="code-comment">/* 18 */</span>
</code></td></tr><tr><td id="L1301" class="css-a4x74f"><span>1301</span></td><td id="LC1301" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> (<span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">module, exports</span>) </span>{
</code></td></tr><tr><td id="L1302" class="css-a4x74f"><span>1302</span></td><td id="LC1302" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1303" class="css-a4x74f"><span>1303</span></td><td id="LC1303" class="css-1dcdqdg"><code><span class="code-meta">	'use strict'</span>;
</code></td></tr><tr><td id="L1304" class="css-a4x74f"><span>1304</span></td><td id="LC1304" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1305" class="css-a4x74f"><span>1305</span></td><td id="LC1305" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L1306" class="css-a4x74f"><span>1306</span></td><td id="LC1306" class="css-1dcdqdg"><code><span class="code-comment">	 * Creates a new URL by combining the specified URLs
</span></code></td></tr><tr><td id="L1307" class="css-a4x74f"><span>1307</span></td><td id="LC1307" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L1308" class="css-a4x74f"><span>1308</span></td><td id="LC1308" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {string} baseURL The base URL
</span></code></td></tr><tr><td id="L1309" class="css-a4x74f"><span>1309</span></td><td id="LC1309" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {string} relativeURL The relative URL
</span></code></td></tr><tr><td id="L1310" class="css-a4x74f"><span>1310</span></td><td id="LC1310" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {string} The combined URL
</span></code></td></tr><tr><td id="L1311" class="css-a4x74f"><span>1311</span></td><td id="LC1311" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L1312" class="css-a4x74f"><span>1312</span></td><td id="LC1312" class="css-1dcdqdg"><code>	<span class="code-built_in">module</span>.exports = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">combineURLs</span>(<span class="code-params">baseURL, relativeURL</span>) </span>{
</code></td></tr><tr><td id="L1313" class="css-a4x74f"><span>1313</span></td><td id="LC1313" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> relativeURL
</code></td></tr><tr><td id="L1314" class="css-a4x74f"><span>1314</span></td><td id="LC1314" class="css-1dcdqdg"><code>	    ? baseURL.replace(<span class="code-regexp">/\/+$/</span>, <span class="code-string">''</span>) + <span class="code-string">'/'</span> + relativeURL.replace(<span class="code-regexp">/^\/+/</span>, <span class="code-string">''</span>)
</code></td></tr><tr><td id="L1315" class="css-a4x74f"><span>1315</span></td><td id="LC1315" class="css-1dcdqdg"><code>	    : baseURL;
</code></td></tr><tr><td id="L1316" class="css-a4x74f"><span>1316</span></td><td id="LC1316" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L1317" class="css-a4x74f"><span>1317</span></td><td id="LC1317" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1318" class="css-a4x74f"><span>1318</span></td><td id="LC1318" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1319" class="css-a4x74f"><span>1319</span></td><td id="LC1319" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> }),
</code></td></tr><tr><td id="L1320" class="css-a4x74f"><span>1320</span></td><td id="LC1320" class="css-1dcdqdg"><code><span class="code-comment">/* 19 */</span>
</code></td></tr><tr><td id="L1321" class="css-a4x74f"><span>1321</span></td><td id="LC1321" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> (<span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">module, exports, __webpack_require__</span>) </span>{
</code></td></tr><tr><td id="L1322" class="css-a4x74f"><span>1322</span></td><td id="LC1322" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1323" class="css-a4x74f"><span>1323</span></td><td id="LC1323" class="css-1dcdqdg"><code><span class="code-meta">	'use strict'</span>;
</code></td></tr><tr><td id="L1324" class="css-a4x74f"><span>1324</span></td><td id="LC1324" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1325" class="css-a4x74f"><span>1325</span></td><td id="LC1325" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> utils = __webpack_require__(<span class="code-number">2</span>);
</code></td></tr><tr><td id="L1326" class="css-a4x74f"><span>1326</span></td><td id="LC1326" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1327" class="css-a4x74f"><span>1327</span></td><td id="LC1327" class="css-1dcdqdg"><code>	<span class="code-comment">// Headers whose duplicates are ignored by node</span>
</code></td></tr><tr><td id="L1328" class="css-a4x74f"><span>1328</span></td><td id="LC1328" class="css-1dcdqdg"><code>	<span class="code-comment">// c.f. https://nodejs.org/api/http.html#http_message_headers</span>
</code></td></tr><tr><td id="L1329" class="css-a4x74f"><span>1329</span></td><td id="LC1329" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> ignoreDuplicateOf = [
</code></td></tr><tr><td id="L1330" class="css-a4x74f"><span>1330</span></td><td id="LC1330" class="css-1dcdqdg"><code>	  <span class="code-string">'age'</span>, <span class="code-string">'authorization'</span>, <span class="code-string">'content-length'</span>, <span class="code-string">'content-type'</span>, <span class="code-string">'etag'</span>,
</code></td></tr><tr><td id="L1331" class="css-a4x74f"><span>1331</span></td><td id="LC1331" class="css-1dcdqdg"><code>	  <span class="code-string">'expires'</span>, <span class="code-string">'from'</span>, <span class="code-string">'host'</span>, <span class="code-string">'if-modified-since'</span>, <span class="code-string">'if-unmodified-since'</span>,
</code></td></tr><tr><td id="L1332" class="css-a4x74f"><span>1332</span></td><td id="LC1332" class="css-1dcdqdg"><code>	  <span class="code-string">'last-modified'</span>, <span class="code-string">'location'</span>, <span class="code-string">'max-forwards'</span>, <span class="code-string">'proxy-authorization'</span>,
</code></td></tr><tr><td id="L1333" class="css-a4x74f"><span>1333</span></td><td id="LC1333" class="css-1dcdqdg"><code>	  <span class="code-string">'referer'</span>, <span class="code-string">'retry-after'</span>, <span class="code-string">'user-agent'</span>
</code></td></tr><tr><td id="L1334" class="css-a4x74f"><span>1334</span></td><td id="LC1334" class="css-1dcdqdg"><code>	];
</code></td></tr><tr><td id="L1335" class="css-a4x74f"><span>1335</span></td><td id="LC1335" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1336" class="css-a4x74f"><span>1336</span></td><td id="LC1336" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L1337" class="css-a4x74f"><span>1337</span></td><td id="LC1337" class="css-1dcdqdg"><code><span class="code-comment">	 * Parse headers into an object
</span></code></td></tr><tr><td id="L1338" class="css-a4x74f"><span>1338</span></td><td id="LC1338" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L1339" class="css-a4x74f"><span>1339</span></td><td id="LC1339" class="css-1dcdqdg"><code><span class="code-comment">	 * ```
</span></code></td></tr><tr><td id="L1340" class="css-a4x74f"><span>1340</span></td><td id="LC1340" class="css-1dcdqdg"><code><span class="code-comment">	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
</span></code></td></tr><tr><td id="L1341" class="css-a4x74f"><span>1341</span></td><td id="LC1341" class="css-1dcdqdg"><code><span class="code-comment">	 * Content-Type: application/json
</span></code></td></tr><tr><td id="L1342" class="css-a4x74f"><span>1342</span></td><td id="LC1342" class="css-1dcdqdg"><code><span class="code-comment">	 * Connection: keep-alive
</span></code></td></tr><tr><td id="L1343" class="css-a4x74f"><span>1343</span></td><td id="LC1343" class="css-1dcdqdg"><code><span class="code-comment">	 * Transfer-Encoding: chunked
</span></code></td></tr><tr><td id="L1344" class="css-a4x74f"><span>1344</span></td><td id="LC1344" class="css-1dcdqdg"><code><span class="code-comment">	 * ```
</span></code></td></tr><tr><td id="L1345" class="css-a4x74f"><span>1345</span></td><td id="LC1345" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L1346" class="css-a4x74f"><span>1346</span></td><td id="LC1346" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {String} headers Headers needing to be parsed
</span></code></td></tr><tr><td id="L1347" class="css-a4x74f"><span>1347</span></td><td id="LC1347" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {Object} Headers parsed into an object
</span></code></td></tr><tr><td id="L1348" class="css-a4x74f"><span>1348</span></td><td id="LC1348" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L1349" class="css-a4x74f"><span>1349</span></td><td id="LC1349" class="css-1dcdqdg"><code>	<span class="code-built_in">module</span>.exports = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">parseHeaders</span>(<span class="code-params">headers</span>) </span>{
</code></td></tr><tr><td id="L1350" class="css-a4x74f"><span>1350</span></td><td id="LC1350" class="css-1dcdqdg"><code>	  <span class="code-keyword">var</span> parsed = {};
</code></td></tr><tr><td id="L1351" class="css-a4x74f"><span>1351</span></td><td id="LC1351" class="css-1dcdqdg"><code>	  <span class="code-keyword">var</span> key;
</code></td></tr><tr><td id="L1352" class="css-a4x74f"><span>1352</span></td><td id="LC1352" class="css-1dcdqdg"><code>	  <span class="code-keyword">var</span> val;
</code></td></tr><tr><td id="L1353" class="css-a4x74f"><span>1353</span></td><td id="LC1353" class="css-1dcdqdg"><code>	  <span class="code-keyword">var</span> i;
</code></td></tr><tr><td id="L1354" class="css-a4x74f"><span>1354</span></td><td id="LC1354" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1355" class="css-a4x74f"><span>1355</span></td><td id="LC1355" class="css-1dcdqdg"><code>	  <span class="code-keyword">if</span> (!headers) { <span class="code-keyword">return</span> parsed; }
</code></td></tr><tr><td id="L1356" class="css-a4x74f"><span>1356</span></td><td id="LC1356" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1357" class="css-a4x74f"><span>1357</span></td><td id="LC1357" class="css-1dcdqdg"><code>	  utils.forEach(headers.split(<span class="code-string">'\n'</span>), <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">parser</span>(<span class="code-params">line</span>) </span>{
</code></td></tr><tr><td id="L1358" class="css-a4x74f"><span>1358</span></td><td id="LC1358" class="css-1dcdqdg"><code>	    i = line.indexOf(<span class="code-string">':'</span>);
</code></td></tr><tr><td id="L1359" class="css-a4x74f"><span>1359</span></td><td id="LC1359" class="css-1dcdqdg"><code>	    key = utils.trim(line.substr(<span class="code-number">0</span>, i)).toLowerCase();
</code></td></tr><tr><td id="L1360" class="css-a4x74f"><span>1360</span></td><td id="LC1360" class="css-1dcdqdg"><code>	    val = utils.trim(line.substr(i + <span class="code-number">1</span>));
</code></td></tr><tr><td id="L1361" class="css-a4x74f"><span>1361</span></td><td id="LC1361" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1362" class="css-a4x74f"><span>1362</span></td><td id="LC1362" class="css-1dcdqdg"><code>	    <span class="code-keyword">if</span> (key) {
</code></td></tr><tr><td id="L1363" class="css-a4x74f"><span>1363</span></td><td id="LC1363" class="css-1dcdqdg"><code>	      <span class="code-keyword">if</span> (parsed[key] &amp;&amp; ignoreDuplicateOf.indexOf(key) &gt;= <span class="code-number">0</span>) {
</code></td></tr><tr><td id="L1364" class="css-a4x74f"><span>1364</span></td><td id="LC1364" class="css-1dcdqdg"><code>	        <span class="code-keyword">return</span>;
</code></td></tr><tr><td id="L1365" class="css-a4x74f"><span>1365</span></td><td id="LC1365" class="css-1dcdqdg"><code>	      }
</code></td></tr><tr><td id="L1366" class="css-a4x74f"><span>1366</span></td><td id="LC1366" class="css-1dcdqdg"><code>	      <span class="code-keyword">if</span> (key === <span class="code-string">'set-cookie'</span>) {
</code></td></tr><tr><td id="L1367" class="css-a4x74f"><span>1367</span></td><td id="LC1367" class="css-1dcdqdg"><code>	        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
</code></td></tr><tr><td id="L1368" class="css-a4x74f"><span>1368</span></td><td id="LC1368" class="css-1dcdqdg"><code>	      } <span class="code-keyword">else</span> {
</code></td></tr><tr><td id="L1369" class="css-a4x74f"><span>1369</span></td><td id="LC1369" class="css-1dcdqdg"><code>	        parsed[key] = parsed[key] ? parsed[key] + <span class="code-string">', '</span> + val : val;
</code></td></tr><tr><td id="L1370" class="css-a4x74f"><span>1370</span></td><td id="LC1370" class="css-1dcdqdg"><code>	      }
</code></td></tr><tr><td id="L1371" class="css-a4x74f"><span>1371</span></td><td id="LC1371" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L1372" class="css-a4x74f"><span>1372</span></td><td id="LC1372" class="css-1dcdqdg"><code>	  });
</code></td></tr><tr><td id="L1373" class="css-a4x74f"><span>1373</span></td><td id="LC1373" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1374" class="css-a4x74f"><span>1374</span></td><td id="LC1374" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> parsed;
</code></td></tr><tr><td id="L1375" class="css-a4x74f"><span>1375</span></td><td id="LC1375" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L1376" class="css-a4x74f"><span>1376</span></td><td id="LC1376" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1377" class="css-a4x74f"><span>1377</span></td><td id="LC1377" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1378" class="css-a4x74f"><span>1378</span></td><td id="LC1378" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> }),
</code></td></tr><tr><td id="L1379" class="css-a4x74f"><span>1379</span></td><td id="LC1379" class="css-1dcdqdg"><code><span class="code-comment">/* 20 */</span>
</code></td></tr><tr><td id="L1380" class="css-a4x74f"><span>1380</span></td><td id="LC1380" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> (<span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">module, exports, __webpack_require__</span>) </span>{
</code></td></tr><tr><td id="L1381" class="css-a4x74f"><span>1381</span></td><td id="LC1381" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1382" class="css-a4x74f"><span>1382</span></td><td id="LC1382" class="css-1dcdqdg"><code><span class="code-meta">	'use strict'</span>;
</code></td></tr><tr><td id="L1383" class="css-a4x74f"><span>1383</span></td><td id="LC1383" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1384" class="css-a4x74f"><span>1384</span></td><td id="LC1384" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> utils = __webpack_require__(<span class="code-number">2</span>);
</code></td></tr><tr><td id="L1385" class="css-a4x74f"><span>1385</span></td><td id="LC1385" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> isValidXss = __webpack_require__(<span class="code-number">21</span>);
</code></td></tr><tr><td id="L1386" class="css-a4x74f"><span>1386</span></td><td id="LC1386" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1387" class="css-a4x74f"><span>1387</span></td><td id="LC1387" class="css-1dcdqdg"><code>	<span class="code-built_in">module</span>.exports = (
</code></td></tr><tr><td id="L1388" class="css-a4x74f"><span>1388</span></td><td id="LC1388" class="css-1dcdqdg"><code>	  utils.isStandardBrowserEnv() ?
</code></td></tr><tr><td id="L1389" class="css-a4x74f"><span>1389</span></td><td id="LC1389" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1390" class="css-a4x74f"><span>1390</span></td><td id="LC1390" class="css-1dcdqdg"><code>	  <span class="code-comment">// Standard browser envs have full support of the APIs needed to test</span>
</code></td></tr><tr><td id="L1391" class="css-a4x74f"><span>1391</span></td><td id="LC1391" class="css-1dcdqdg"><code>	  <span class="code-comment">// whether the request URL is of the same origin as current location.</span>
</code></td></tr><tr><td id="L1392" class="css-a4x74f"><span>1392</span></td><td id="LC1392" class="css-1dcdqdg"><code>	    (<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">standardBrowserEnv</span>(<span class="code-params"></span>) </span>{
</code></td></tr><tr><td id="L1393" class="css-a4x74f"><span>1393</span></td><td id="LC1393" class="css-1dcdqdg"><code>	      <span class="code-keyword">var</span> msie = <span class="code-regexp">/(msie|trident)/i</span>.test(navigator.userAgent);
</code></td></tr><tr><td id="L1394" class="css-a4x74f"><span>1394</span></td><td id="LC1394" class="css-1dcdqdg"><code>	      <span class="code-keyword">var</span> urlParsingNode = <span class="code-built_in">document</span>.createElement(<span class="code-string">'a'</span>);
</code></td></tr><tr><td id="L1395" class="css-a4x74f"><span>1395</span></td><td id="LC1395" class="css-1dcdqdg"><code>	      <span class="code-keyword">var</span> originURL;
</code></td></tr><tr><td id="L1396" class="css-a4x74f"><span>1396</span></td><td id="LC1396" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1397" class="css-a4x74f"><span>1397</span></td><td id="LC1397" class="css-1dcdqdg"><code>	      <span class="code-comment">/**
</span></code></td></tr><tr><td id="L1398" class="css-a4x74f"><span>1398</span></td><td id="LC1398" class="css-1dcdqdg"><code><span class="code-comment">	    * Parse a URL to discover it's components
</span></code></td></tr><tr><td id="L1399" class="css-a4x74f"><span>1399</span></td><td id="LC1399" class="css-1dcdqdg"><code><span class="code-comment">	    *
</span></code></td></tr><tr><td id="L1400" class="css-a4x74f"><span>1400</span></td><td id="LC1400" class="css-1dcdqdg"><code><span class="code-comment">	    * @param {String} url The URL to be parsed
</span></code></td></tr><tr><td id="L1401" class="css-a4x74f"><span>1401</span></td><td id="LC1401" class="css-1dcdqdg"><code><span class="code-comment">	    * @returns {Object}
</span></code></td></tr><tr><td id="L1402" class="css-a4x74f"><span>1402</span></td><td id="LC1402" class="css-1dcdqdg"><code><span class="code-comment">	    */</span>
</code></td></tr><tr><td id="L1403" class="css-a4x74f"><span>1403</span></td><td id="LC1403" class="css-1dcdqdg"><code>	      <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">resolveURL</span>(<span class="code-params">url</span>) </span>{
</code></td></tr><tr><td id="L1404" class="css-a4x74f"><span>1404</span></td><td id="LC1404" class="css-1dcdqdg"><code>	        <span class="code-keyword">var</span> href = url;
</code></td></tr><tr><td id="L1405" class="css-a4x74f"><span>1405</span></td><td id="LC1405" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1406" class="css-a4x74f"><span>1406</span></td><td id="LC1406" class="css-1dcdqdg"><code>	        <span class="code-keyword">if</span> (isValidXss(url)) {
</code></td></tr><tr><td id="L1407" class="css-a4x74f"><span>1407</span></td><td id="LC1407" class="css-1dcdqdg"><code>	          <span class="code-keyword">throw</span> <span class="code-keyword">new</span> <span class="code-built_in">Error</span>(<span class="code-string">'URL contains XSS injection attempt'</span>);
</code></td></tr><tr><td id="L1408" class="css-a4x74f"><span>1408</span></td><td id="LC1408" class="css-1dcdqdg"><code>	        }
</code></td></tr><tr><td id="L1409" class="css-a4x74f"><span>1409</span></td><td id="LC1409" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1410" class="css-a4x74f"><span>1410</span></td><td id="LC1410" class="css-1dcdqdg"><code>	        <span class="code-keyword">if</span> (msie) {
</code></td></tr><tr><td id="L1411" class="css-a4x74f"><span>1411</span></td><td id="LC1411" class="css-1dcdqdg"><code>	        <span class="code-comment">// IE needs attribute set twice to normalize properties</span>
</code></td></tr><tr><td id="L1412" class="css-a4x74f"><span>1412</span></td><td id="LC1412" class="css-1dcdqdg"><code>	          urlParsingNode.setAttribute(<span class="code-string">'href'</span>, href);
</code></td></tr><tr><td id="L1413" class="css-a4x74f"><span>1413</span></td><td id="LC1413" class="css-1dcdqdg"><code>	          href = urlParsingNode.href;
</code></td></tr><tr><td id="L1414" class="css-a4x74f"><span>1414</span></td><td id="LC1414" class="css-1dcdqdg"><code>	        }
</code></td></tr><tr><td id="L1415" class="css-a4x74f"><span>1415</span></td><td id="LC1415" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1416" class="css-a4x74f"><span>1416</span></td><td id="LC1416" class="css-1dcdqdg"><code>	        urlParsingNode.setAttribute(<span class="code-string">'href'</span>, href);
</code></td></tr><tr><td id="L1417" class="css-a4x74f"><span>1417</span></td><td id="LC1417" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1418" class="css-a4x74f"><span>1418</span></td><td id="LC1418" class="css-1dcdqdg"><code>	        <span class="code-comment">// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils</span>
</code></td></tr><tr><td id="L1419" class="css-a4x74f"><span>1419</span></td><td id="LC1419" class="css-1dcdqdg"><code>	        <span class="code-keyword">return</span> {
</code></td></tr><tr><td id="L1420" class="css-a4x74f"><span>1420</span></td><td id="LC1420" class="css-1dcdqdg"><code>	          href: urlParsingNode.href,
</code></td></tr><tr><td id="L1421" class="css-a4x74f"><span>1421</span></td><td id="LC1421" class="css-1dcdqdg"><code>	          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(<span class="code-regexp">/:$/</span>, <span class="code-string">''</span>) : <span class="code-string">''</span>,
</code></td></tr><tr><td id="L1422" class="css-a4x74f"><span>1422</span></td><td id="LC1422" class="css-1dcdqdg"><code>	          host: urlParsingNode.host,
</code></td></tr><tr><td id="L1423" class="css-a4x74f"><span>1423</span></td><td id="LC1423" class="css-1dcdqdg"><code>	          search: urlParsingNode.search ? urlParsingNode.search.replace(<span class="code-regexp">/^\?/</span>, <span class="code-string">''</span>) : <span class="code-string">''</span>,
</code></td></tr><tr><td id="L1424" class="css-a4x74f"><span>1424</span></td><td id="LC1424" class="css-1dcdqdg"><code>	          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(<span class="code-regexp">/^#/</span>, <span class="code-string">''</span>) : <span class="code-string">''</span>,
</code></td></tr><tr><td id="L1425" class="css-a4x74f"><span>1425</span></td><td id="LC1425" class="css-1dcdqdg"><code>	          hostname: urlParsingNode.hostname,
</code></td></tr><tr><td id="L1426" class="css-a4x74f"><span>1426</span></td><td id="LC1426" class="css-1dcdqdg"><code>	          port: urlParsingNode.port,
</code></td></tr><tr><td id="L1427" class="css-a4x74f"><span>1427</span></td><td id="LC1427" class="css-1dcdqdg"><code>	          pathname: (urlParsingNode.pathname.charAt(<span class="code-number">0</span>) === <span class="code-string">'/'</span>) ?
</code></td></tr><tr><td id="L1428" class="css-a4x74f"><span>1428</span></td><td id="LC1428" class="css-1dcdqdg"><code>	            urlParsingNode.pathname :
</code></td></tr><tr><td id="L1429" class="css-a4x74f"><span>1429</span></td><td id="LC1429" class="css-1dcdqdg"><code>	            <span class="code-string">'/'</span> + urlParsingNode.pathname
</code></td></tr><tr><td id="L1430" class="css-a4x74f"><span>1430</span></td><td id="LC1430" class="css-1dcdqdg"><code>	        };
</code></td></tr><tr><td id="L1431" class="css-a4x74f"><span>1431</span></td><td id="LC1431" class="css-1dcdqdg"><code>	      }
</code></td></tr><tr><td id="L1432" class="css-a4x74f"><span>1432</span></td><td id="LC1432" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1433" class="css-a4x74f"><span>1433</span></td><td id="LC1433" class="css-1dcdqdg"><code>	      originURL = resolveURL(<span class="code-built_in">window</span>.location.href);
</code></td></tr><tr><td id="L1434" class="css-a4x74f"><span>1434</span></td><td id="LC1434" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1435" class="css-a4x74f"><span>1435</span></td><td id="LC1435" class="css-1dcdqdg"><code>	      <span class="code-comment">/**
</span></code></td></tr><tr><td id="L1436" class="css-a4x74f"><span>1436</span></td><td id="LC1436" class="css-1dcdqdg"><code><span class="code-comment">	    * Determine if a URL shares the same origin as the current location
</span></code></td></tr><tr><td id="L1437" class="css-a4x74f"><span>1437</span></td><td id="LC1437" class="css-1dcdqdg"><code><span class="code-comment">	    *
</span></code></td></tr><tr><td id="L1438" class="css-a4x74f"><span>1438</span></td><td id="LC1438" class="css-1dcdqdg"><code><span class="code-comment">	    * @param {String} requestURL The URL to test
</span></code></td></tr><tr><td id="L1439" class="css-a4x74f"><span>1439</span></td><td id="LC1439" class="css-1dcdqdg"><code><span class="code-comment">	    * @returns {boolean} True if URL shares the same origin, otherwise false
</span></code></td></tr><tr><td id="L1440" class="css-a4x74f"><span>1440</span></td><td id="LC1440" class="css-1dcdqdg"><code><span class="code-comment">	    */</span>
</code></td></tr><tr><td id="L1441" class="css-a4x74f"><span>1441</span></td><td id="LC1441" class="css-1dcdqdg"><code>	      <span class="code-keyword">return</span> <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">isURLSameOrigin</span>(<span class="code-params">requestURL</span>) </span>{
</code></td></tr><tr><td id="L1442" class="css-a4x74f"><span>1442</span></td><td id="LC1442" class="css-1dcdqdg"><code>	        <span class="code-keyword">var</span> parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
</code></td></tr><tr><td id="L1443" class="css-a4x74f"><span>1443</span></td><td id="LC1443" class="css-1dcdqdg"><code>	        <span class="code-keyword">return</span> (parsed.protocol === originURL.protocol &amp;&amp;
</code></td></tr><tr><td id="L1444" class="css-a4x74f"><span>1444</span></td><td id="LC1444" class="css-1dcdqdg"><code>	            parsed.host === originURL.host);
</code></td></tr><tr><td id="L1445" class="css-a4x74f"><span>1445</span></td><td id="LC1445" class="css-1dcdqdg"><code>	      };
</code></td></tr><tr><td id="L1446" class="css-a4x74f"><span>1446</span></td><td id="LC1446" class="css-1dcdqdg"><code>	    })() :
</code></td></tr><tr><td id="L1447" class="css-a4x74f"><span>1447</span></td><td id="LC1447" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1448" class="css-a4x74f"><span>1448</span></td><td id="LC1448" class="css-1dcdqdg"><code>	  <span class="code-comment">// Non standard browser envs (web workers, react-native) lack needed support.</span>
</code></td></tr><tr><td id="L1449" class="css-a4x74f"><span>1449</span></td><td id="LC1449" class="css-1dcdqdg"><code>	    (<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">nonStandardBrowserEnv</span>(<span class="code-params"></span>) </span>{
</code></td></tr><tr><td id="L1450" class="css-a4x74f"><span>1450</span></td><td id="LC1450" class="css-1dcdqdg"><code>	      <span class="code-keyword">return</span> <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">isURLSameOrigin</span>(<span class="code-params"></span>) </span>{
</code></td></tr><tr><td id="L1451" class="css-a4x74f"><span>1451</span></td><td id="LC1451" class="css-1dcdqdg"><code>	        <span class="code-keyword">return</span> <span class="code-literal">true</span>;
</code></td></tr><tr><td id="L1452" class="css-a4x74f"><span>1452</span></td><td id="LC1452" class="css-1dcdqdg"><code>	      };
</code></td></tr><tr><td id="L1453" class="css-a4x74f"><span>1453</span></td><td id="LC1453" class="css-1dcdqdg"><code>	    })()
</code></td></tr><tr><td id="L1454" class="css-a4x74f"><span>1454</span></td><td id="LC1454" class="css-1dcdqdg"><code>	);
</code></td></tr><tr><td id="L1455" class="css-a4x74f"><span>1455</span></td><td id="LC1455" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1456" class="css-a4x74f"><span>1456</span></td><td id="LC1456" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1457" class="css-a4x74f"><span>1457</span></td><td id="LC1457" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> }),
</code></td></tr><tr><td id="L1458" class="css-a4x74f"><span>1458</span></td><td id="LC1458" class="css-1dcdqdg"><code><span class="code-comment">/* 21 */</span>
</code></td></tr><tr><td id="L1459" class="css-a4x74f"><span>1459</span></td><td id="LC1459" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> (<span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">module, exports</span>) </span>{
</code></td></tr><tr><td id="L1460" class="css-a4x74f"><span>1460</span></td><td id="LC1460" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1461" class="css-a4x74f"><span>1461</span></td><td id="LC1461" class="css-1dcdqdg"><code><span class="code-meta">	'use strict'</span>;
</code></td></tr><tr><td id="L1462" class="css-a4x74f"><span>1462</span></td><td id="LC1462" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1463" class="css-a4x74f"><span>1463</span></td><td id="LC1463" class="css-1dcdqdg"><code>	<span class="code-built_in">module</span>.exports = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">isValidXss</span>(<span class="code-params">requestURL</span>) </span>{
</code></td></tr><tr><td id="L1464" class="css-a4x74f"><span>1464</span></td><td id="LC1464" class="css-1dcdqdg"><code>	  <span class="code-keyword">var</span> xssRegex = <span class="code-regexp">/(\b)(on\w+)=|javascript|(&lt;\s*)(\/*)script/gi</span>;
</code></td></tr><tr><td id="L1465" class="css-a4x74f"><span>1465</span></td><td id="LC1465" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> xssRegex.test(requestURL);
</code></td></tr><tr><td id="L1466" class="css-a4x74f"><span>1466</span></td><td id="LC1466" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L1467" class="css-a4x74f"><span>1467</span></td><td id="LC1467" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1468" class="css-a4x74f"><span>1468</span></td><td id="LC1468" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1469" class="css-a4x74f"><span>1469</span></td><td id="LC1469" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1470" class="css-a4x74f"><span>1470</span></td><td id="LC1470" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> }),
</code></td></tr><tr><td id="L1471" class="css-a4x74f"><span>1471</span></td><td id="LC1471" class="css-1dcdqdg"><code><span class="code-comment">/* 22 */</span>
</code></td></tr><tr><td id="L1472" class="css-a4x74f"><span>1472</span></td><td id="LC1472" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> (<span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">module, exports, __webpack_require__</span>) </span>{
</code></td></tr><tr><td id="L1473" class="css-a4x74f"><span>1473</span></td><td id="LC1473" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1474" class="css-a4x74f"><span>1474</span></td><td id="LC1474" class="css-1dcdqdg"><code><span class="code-meta">	'use strict'</span>;
</code></td></tr><tr><td id="L1475" class="css-a4x74f"><span>1475</span></td><td id="LC1475" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1476" class="css-a4x74f"><span>1476</span></td><td id="LC1476" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> utils = __webpack_require__(<span class="code-number">2</span>);
</code></td></tr><tr><td id="L1477" class="css-a4x74f"><span>1477</span></td><td id="LC1477" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1478" class="css-a4x74f"><span>1478</span></td><td id="LC1478" class="css-1dcdqdg"><code>	<span class="code-built_in">module</span>.exports = (
</code></td></tr><tr><td id="L1479" class="css-a4x74f"><span>1479</span></td><td id="LC1479" class="css-1dcdqdg"><code>	  utils.isStandardBrowserEnv() ?
</code></td></tr><tr><td id="L1480" class="css-a4x74f"><span>1480</span></td><td id="LC1480" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1481" class="css-a4x74f"><span>1481</span></td><td id="LC1481" class="css-1dcdqdg"><code>	  <span class="code-comment">// Standard browser envs support document.cookie</span>
</code></td></tr><tr><td id="L1482" class="css-a4x74f"><span>1482</span></td><td id="LC1482" class="css-1dcdqdg"><code>	    (<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">standardBrowserEnv</span>(<span class="code-params"></span>) </span>{
</code></td></tr><tr><td id="L1483" class="css-a4x74f"><span>1483</span></td><td id="LC1483" class="css-1dcdqdg"><code>	      <span class="code-keyword">return</span> {
</code></td></tr><tr><td id="L1484" class="css-a4x74f"><span>1484</span></td><td id="LC1484" class="css-1dcdqdg"><code>	        write: <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">write</span>(<span class="code-params">name, value, expires, path, domain, secure</span>) </span>{
</code></td></tr><tr><td id="L1485" class="css-a4x74f"><span>1485</span></td><td id="LC1485" class="css-1dcdqdg"><code>	          <span class="code-keyword">var</span> cookie = [];
</code></td></tr><tr><td id="L1486" class="css-a4x74f"><span>1486</span></td><td id="LC1486" class="css-1dcdqdg"><code>	          cookie.push(name + <span class="code-string">'='</span> + <span class="code-built_in">encodeURIComponent</span>(value));
</code></td></tr><tr><td id="L1487" class="css-a4x74f"><span>1487</span></td><td id="LC1487" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1488" class="css-a4x74f"><span>1488</span></td><td id="LC1488" class="css-1dcdqdg"><code>	          <span class="code-keyword">if</span> (utils.isNumber(expires)) {
</code></td></tr><tr><td id="L1489" class="css-a4x74f"><span>1489</span></td><td id="LC1489" class="css-1dcdqdg"><code>	            cookie.push(<span class="code-string">'expires='</span> + <span class="code-keyword">new</span> <span class="code-built_in">Date</span>(expires).toGMTString());
</code></td></tr><tr><td id="L1490" class="css-a4x74f"><span>1490</span></td><td id="LC1490" class="css-1dcdqdg"><code>	          }
</code></td></tr><tr><td id="L1491" class="css-a4x74f"><span>1491</span></td><td id="LC1491" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1492" class="css-a4x74f"><span>1492</span></td><td id="LC1492" class="css-1dcdqdg"><code>	          <span class="code-keyword">if</span> (utils.isString(path)) {
</code></td></tr><tr><td id="L1493" class="css-a4x74f"><span>1493</span></td><td id="LC1493" class="css-1dcdqdg"><code>	            cookie.push(<span class="code-string">'path='</span> + path);
</code></td></tr><tr><td id="L1494" class="css-a4x74f"><span>1494</span></td><td id="LC1494" class="css-1dcdqdg"><code>	          }
</code></td></tr><tr><td id="L1495" class="css-a4x74f"><span>1495</span></td><td id="LC1495" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1496" class="css-a4x74f"><span>1496</span></td><td id="LC1496" class="css-1dcdqdg"><code>	          <span class="code-keyword">if</span> (utils.isString(domain)) {
</code></td></tr><tr><td id="L1497" class="css-a4x74f"><span>1497</span></td><td id="LC1497" class="css-1dcdqdg"><code>	            cookie.push(<span class="code-string">'domain='</span> + domain);
</code></td></tr><tr><td id="L1498" class="css-a4x74f"><span>1498</span></td><td id="LC1498" class="css-1dcdqdg"><code>	          }
</code></td></tr><tr><td id="L1499" class="css-a4x74f"><span>1499</span></td><td id="LC1499" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1500" class="css-a4x74f"><span>1500</span></td><td id="LC1500" class="css-1dcdqdg"><code>	          <span class="code-keyword">if</span> (secure === <span class="code-literal">true</span>) {
</code></td></tr><tr><td id="L1501" class="css-a4x74f"><span>1501</span></td><td id="LC1501" class="css-1dcdqdg"><code>	            cookie.push(<span class="code-string">'secure'</span>);
</code></td></tr><tr><td id="L1502" class="css-a4x74f"><span>1502</span></td><td id="LC1502" class="css-1dcdqdg"><code>	          }
</code></td></tr><tr><td id="L1503" class="css-a4x74f"><span>1503</span></td><td id="LC1503" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1504" class="css-a4x74f"><span>1504</span></td><td id="LC1504" class="css-1dcdqdg"><code>	          <span class="code-built_in">document</span>.cookie = cookie.join(<span class="code-string">'; '</span>);
</code></td></tr><tr><td id="L1505" class="css-a4x74f"><span>1505</span></td><td id="LC1505" class="css-1dcdqdg"><code>	        },
</code></td></tr><tr><td id="L1506" class="css-a4x74f"><span>1506</span></td><td id="LC1506" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1507" class="css-a4x74f"><span>1507</span></td><td id="LC1507" class="css-1dcdqdg"><code>	        read: <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">read</span>(<span class="code-params">name</span>) </span>{
</code></td></tr><tr><td id="L1508" class="css-a4x74f"><span>1508</span></td><td id="LC1508" class="css-1dcdqdg"><code>	          <span class="code-keyword">var</span> match = <span class="code-built_in">document</span>.cookie.match(<span class="code-keyword">new</span> <span class="code-built_in">RegExp</span>(<span class="code-string">'(^|;\\s*)('</span> + name + <span class="code-string">')=([^;]*)'</span>));
</code></td></tr><tr><td id="L1509" class="css-a4x74f"><span>1509</span></td><td id="LC1509" class="css-1dcdqdg"><code>	          <span class="code-keyword">return</span> (match ? <span class="code-built_in">decodeURIComponent</span>(match[<span class="code-number">3</span>]) : <span class="code-literal">null</span>);
</code></td></tr><tr><td id="L1510" class="css-a4x74f"><span>1510</span></td><td id="LC1510" class="css-1dcdqdg"><code>	        },
</code></td></tr><tr><td id="L1511" class="css-a4x74f"><span>1511</span></td><td id="LC1511" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1512" class="css-a4x74f"><span>1512</span></td><td id="LC1512" class="css-1dcdqdg"><code>	        remove: <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">remove</span>(<span class="code-params">name</span>) </span>{
</code></td></tr><tr><td id="L1513" class="css-a4x74f"><span>1513</span></td><td id="LC1513" class="css-1dcdqdg"><code>	          <span class="code-keyword">this</span>.write(name, <span class="code-string">''</span>, <span class="code-built_in">Date</span>.now() - <span class="code-number">86400000</span>);
</code></td></tr><tr><td id="L1514" class="css-a4x74f"><span>1514</span></td><td id="LC1514" class="css-1dcdqdg"><code>	        }
</code></td></tr><tr><td id="L1515" class="css-a4x74f"><span>1515</span></td><td id="LC1515" class="css-1dcdqdg"><code>	      };
</code></td></tr><tr><td id="L1516" class="css-a4x74f"><span>1516</span></td><td id="LC1516" class="css-1dcdqdg"><code>	    })() :
</code></td></tr><tr><td id="L1517" class="css-a4x74f"><span>1517</span></td><td id="LC1517" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1518" class="css-a4x74f"><span>1518</span></td><td id="LC1518" class="css-1dcdqdg"><code>	  <span class="code-comment">// Non standard browser env (web workers, react-native) lack needed support.</span>
</code></td></tr><tr><td id="L1519" class="css-a4x74f"><span>1519</span></td><td id="LC1519" class="css-1dcdqdg"><code>	    (<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">nonStandardBrowserEnv</span>(<span class="code-params"></span>) </span>{
</code></td></tr><tr><td id="L1520" class="css-a4x74f"><span>1520</span></td><td id="LC1520" class="css-1dcdqdg"><code>	      <span class="code-keyword">return</span> {
</code></td></tr><tr><td id="L1521" class="css-a4x74f"><span>1521</span></td><td id="LC1521" class="css-1dcdqdg"><code>	        write: <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">write</span>(<span class="code-params"></span>) </span>{},
</code></td></tr><tr><td id="L1522" class="css-a4x74f"><span>1522</span></td><td id="LC1522" class="css-1dcdqdg"><code>	        read: <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">read</span>(<span class="code-params"></span>) </span>{ <span class="code-keyword">return</span> <span class="code-literal">null</span>; },
</code></td></tr><tr><td id="L1523" class="css-a4x74f"><span>1523</span></td><td id="LC1523" class="css-1dcdqdg"><code>	        remove: <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">remove</span>(<span class="code-params"></span>) </span>{}
</code></td></tr><tr><td id="L1524" class="css-a4x74f"><span>1524</span></td><td id="LC1524" class="css-1dcdqdg"><code>	      };
</code></td></tr><tr><td id="L1525" class="css-a4x74f"><span>1525</span></td><td id="LC1525" class="css-1dcdqdg"><code>	    })()
</code></td></tr><tr><td id="L1526" class="css-a4x74f"><span>1526</span></td><td id="LC1526" class="css-1dcdqdg"><code>	);
</code></td></tr><tr><td id="L1527" class="css-a4x74f"><span>1527</span></td><td id="LC1527" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1528" class="css-a4x74f"><span>1528</span></td><td id="LC1528" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1529" class="css-a4x74f"><span>1529</span></td><td id="LC1529" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> }),
</code></td></tr><tr><td id="L1530" class="css-a4x74f"><span>1530</span></td><td id="LC1530" class="css-1dcdqdg"><code><span class="code-comment">/* 23 */</span>
</code></td></tr><tr><td id="L1531" class="css-a4x74f"><span>1531</span></td><td id="LC1531" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> (<span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">module, exports, __webpack_require__</span>) </span>{
</code></td></tr><tr><td id="L1532" class="css-a4x74f"><span>1532</span></td><td id="LC1532" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1533" class="css-a4x74f"><span>1533</span></td><td id="LC1533" class="css-1dcdqdg"><code><span class="code-meta">	'use strict'</span>;
</code></td></tr><tr><td id="L1534" class="css-a4x74f"><span>1534</span></td><td id="LC1534" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1535" class="css-a4x74f"><span>1535</span></td><td id="LC1535" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> utils = __webpack_require__(<span class="code-number">2</span>);
</code></td></tr><tr><td id="L1536" class="css-a4x74f"><span>1536</span></td><td id="LC1536" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1537" class="css-a4x74f"><span>1537</span></td><td id="LC1537" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L1538" class="css-a4x74f"><span>1538</span></td><td id="LC1538" class="css-1dcdqdg"><code><span class="code-comment">	 * Config-specific merge-function which creates a new config-object
</span></code></td></tr><tr><td id="L1539" class="css-a4x74f"><span>1539</span></td><td id="LC1539" class="css-1dcdqdg"><code><span class="code-comment">	 * by merging two configuration objects together.
</span></code></td></tr><tr><td id="L1540" class="css-a4x74f"><span>1540</span></td><td id="LC1540" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L1541" class="css-a4x74f"><span>1541</span></td><td id="LC1541" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} config1
</span></code></td></tr><tr><td id="L1542" class="css-a4x74f"><span>1542</span></td><td id="LC1542" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Object} config2
</span></code></td></tr><tr><td id="L1543" class="css-a4x74f"><span>1543</span></td><td id="LC1543" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {Object} New object resulting from merging config2 to config1
</span></code></td></tr><tr><td id="L1544" class="css-a4x74f"><span>1544</span></td><td id="LC1544" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L1545" class="css-a4x74f"><span>1545</span></td><td id="LC1545" class="css-1dcdqdg"><code>	<span class="code-built_in">module</span>.exports = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">mergeConfig</span>(<span class="code-params">config1, config2</span>) </span>{
</code></td></tr><tr><td id="L1546" class="css-a4x74f"><span>1546</span></td><td id="LC1546" class="css-1dcdqdg"><code>	  <span class="code-comment">// eslint-disable-next-line no-param-reassign</span>
</code></td></tr><tr><td id="L1547" class="css-a4x74f"><span>1547</span></td><td id="LC1547" class="css-1dcdqdg"><code>	  config2 = config2 || {};
</code></td></tr><tr><td id="L1548" class="css-a4x74f"><span>1548</span></td><td id="LC1548" class="css-1dcdqdg"><code>	  <span class="code-keyword">var</span> config = {};
</code></td></tr><tr><td id="L1549" class="css-a4x74f"><span>1549</span></td><td id="LC1549" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1550" class="css-a4x74f"><span>1550</span></td><td id="LC1550" class="css-1dcdqdg"><code>	  <span class="code-keyword">var</span> valueFromConfig2Keys = [<span class="code-string">'url'</span>, <span class="code-string">'method'</span>, <span class="code-string">'params'</span>, <span class="code-string">'data'</span>];
</code></td></tr><tr><td id="L1551" class="css-a4x74f"><span>1551</span></td><td id="LC1551" class="css-1dcdqdg"><code>	  <span class="code-keyword">var</span> mergeDeepPropertiesKeys = [<span class="code-string">'headers'</span>, <span class="code-string">'auth'</span>, <span class="code-string">'proxy'</span>];
</code></td></tr><tr><td id="L1552" class="css-a4x74f"><span>1552</span></td><td id="LC1552" class="css-1dcdqdg"><code>	  <span class="code-keyword">var</span> defaultToConfig2Keys = [
</code></td></tr><tr><td id="L1553" class="css-a4x74f"><span>1553</span></td><td id="LC1553" class="css-1dcdqdg"><code>	    <span class="code-string">'baseURL'</span>, <span class="code-string">'url'</span>, <span class="code-string">'transformRequest'</span>, <span class="code-string">'transformResponse'</span>, <span class="code-string">'paramsSerializer'</span>,
</code></td></tr><tr><td id="L1554" class="css-a4x74f"><span>1554</span></td><td id="LC1554" class="css-1dcdqdg"><code>	    <span class="code-string">'timeout'</span>, <span class="code-string">'withCredentials'</span>, <span class="code-string">'adapter'</span>, <span class="code-string">'responseType'</span>, <span class="code-string">'xsrfCookieName'</span>,
</code></td></tr><tr><td id="L1555" class="css-a4x74f"><span>1555</span></td><td id="LC1555" class="css-1dcdqdg"><code>	    <span class="code-string">'xsrfHeaderName'</span>, <span class="code-string">'onUploadProgress'</span>, <span class="code-string">'onDownloadProgress'</span>,
</code></td></tr><tr><td id="L1556" class="css-a4x74f"><span>1556</span></td><td id="LC1556" class="css-1dcdqdg"><code>	    <span class="code-string">'maxContentLength'</span>, <span class="code-string">'validateStatus'</span>, <span class="code-string">'maxRedirects'</span>, <span class="code-string">'httpAgent'</span>,
</code></td></tr><tr><td id="L1557" class="css-a4x74f"><span>1557</span></td><td id="LC1557" class="css-1dcdqdg"><code>	    <span class="code-string">'httpsAgent'</span>, <span class="code-string">'cancelToken'</span>, <span class="code-string">'socketPath'</span>
</code></td></tr><tr><td id="L1558" class="css-a4x74f"><span>1558</span></td><td id="LC1558" class="css-1dcdqdg"><code>	  ];
</code></td></tr><tr><td id="L1559" class="css-a4x74f"><span>1559</span></td><td id="LC1559" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1560" class="css-a4x74f"><span>1560</span></td><td id="LC1560" class="css-1dcdqdg"><code>	  utils.forEach(valueFromConfig2Keys, <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">valueFromConfig2</span>(<span class="code-params">prop</span>) </span>{
</code></td></tr><tr><td id="L1561" class="css-a4x74f"><span>1561</span></td><td id="LC1561" class="css-1dcdqdg"><code>	    <span class="code-keyword">if</span> (<span class="code-keyword">typeof</span> config2[prop] !== <span class="code-string">'undefined'</span>) {
</code></td></tr><tr><td id="L1562" class="css-a4x74f"><span>1562</span></td><td id="LC1562" class="css-1dcdqdg"><code>	      config[prop] = config2[prop];
</code></td></tr><tr><td id="L1563" class="css-a4x74f"><span>1563</span></td><td id="LC1563" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L1564" class="css-a4x74f"><span>1564</span></td><td id="LC1564" class="css-1dcdqdg"><code>	  });
</code></td></tr><tr><td id="L1565" class="css-a4x74f"><span>1565</span></td><td id="LC1565" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1566" class="css-a4x74f"><span>1566</span></td><td id="LC1566" class="css-1dcdqdg"><code>	  utils.forEach(mergeDeepPropertiesKeys, <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">mergeDeepProperties</span>(<span class="code-params">prop</span>) </span>{
</code></td></tr><tr><td id="L1567" class="css-a4x74f"><span>1567</span></td><td id="LC1567" class="css-1dcdqdg"><code>	    <span class="code-keyword">if</span> (utils.isObject(config2[prop])) {
</code></td></tr><tr><td id="L1568" class="css-a4x74f"><span>1568</span></td><td id="LC1568" class="css-1dcdqdg"><code>	      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
</code></td></tr><tr><td id="L1569" class="css-a4x74f"><span>1569</span></td><td id="LC1569" class="css-1dcdqdg"><code>	    } <span class="code-keyword">else</span> <span class="code-keyword">if</span> (<span class="code-keyword">typeof</span> config2[prop] !== <span class="code-string">'undefined'</span>) {
</code></td></tr><tr><td id="L1570" class="css-a4x74f"><span>1570</span></td><td id="LC1570" class="css-1dcdqdg"><code>	      config[prop] = config2[prop];
</code></td></tr><tr><td id="L1571" class="css-a4x74f"><span>1571</span></td><td id="LC1571" class="css-1dcdqdg"><code>	    } <span class="code-keyword">else</span> <span class="code-keyword">if</span> (utils.isObject(config1[prop])) {
</code></td></tr><tr><td id="L1572" class="css-a4x74f"><span>1572</span></td><td id="LC1572" class="css-1dcdqdg"><code>	      config[prop] = utils.deepMerge(config1[prop]);
</code></td></tr><tr><td id="L1573" class="css-a4x74f"><span>1573</span></td><td id="LC1573" class="css-1dcdqdg"><code>	    } <span class="code-keyword">else</span> <span class="code-keyword">if</span> (<span class="code-keyword">typeof</span> config1[prop] !== <span class="code-string">'undefined'</span>) {
</code></td></tr><tr><td id="L1574" class="css-a4x74f"><span>1574</span></td><td id="LC1574" class="css-1dcdqdg"><code>	      config[prop] = config1[prop];
</code></td></tr><tr><td id="L1575" class="css-a4x74f"><span>1575</span></td><td id="LC1575" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L1576" class="css-a4x74f"><span>1576</span></td><td id="LC1576" class="css-1dcdqdg"><code>	  });
</code></td></tr><tr><td id="L1577" class="css-a4x74f"><span>1577</span></td><td id="LC1577" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1578" class="css-a4x74f"><span>1578</span></td><td id="LC1578" class="css-1dcdqdg"><code>	  utils.forEach(defaultToConfig2Keys, <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">defaultToConfig2</span>(<span class="code-params">prop</span>) </span>{
</code></td></tr><tr><td id="L1579" class="css-a4x74f"><span>1579</span></td><td id="LC1579" class="css-1dcdqdg"><code>	    <span class="code-keyword">if</span> (<span class="code-keyword">typeof</span> config2[prop] !== <span class="code-string">'undefined'</span>) {
</code></td></tr><tr><td id="L1580" class="css-a4x74f"><span>1580</span></td><td id="LC1580" class="css-1dcdqdg"><code>	      config[prop] = config2[prop];
</code></td></tr><tr><td id="L1581" class="css-a4x74f"><span>1581</span></td><td id="LC1581" class="css-1dcdqdg"><code>	    } <span class="code-keyword">else</span> <span class="code-keyword">if</span> (<span class="code-keyword">typeof</span> config1[prop] !== <span class="code-string">'undefined'</span>) {
</code></td></tr><tr><td id="L1582" class="css-a4x74f"><span>1582</span></td><td id="LC1582" class="css-1dcdqdg"><code>	      config[prop] = config1[prop];
</code></td></tr><tr><td id="L1583" class="css-a4x74f"><span>1583</span></td><td id="LC1583" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L1584" class="css-a4x74f"><span>1584</span></td><td id="LC1584" class="css-1dcdqdg"><code>	  });
</code></td></tr><tr><td id="L1585" class="css-a4x74f"><span>1585</span></td><td id="LC1585" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1586" class="css-a4x74f"><span>1586</span></td><td id="LC1586" class="css-1dcdqdg"><code>	  <span class="code-keyword">var</span> axiosKeys = valueFromConfig2Keys
</code></td></tr><tr><td id="L1587" class="css-a4x74f"><span>1587</span></td><td id="LC1587" class="css-1dcdqdg"><code>	    .concat(mergeDeepPropertiesKeys)
</code></td></tr><tr><td id="L1588" class="css-a4x74f"><span>1588</span></td><td id="LC1588" class="css-1dcdqdg"><code>	    .concat(defaultToConfig2Keys);
</code></td></tr><tr><td id="L1589" class="css-a4x74f"><span>1589</span></td><td id="LC1589" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1590" class="css-a4x74f"><span>1590</span></td><td id="LC1590" class="css-1dcdqdg"><code>	  <span class="code-keyword">var</span> otherKeys = <span class="code-built_in">Object</span>
</code></td></tr><tr><td id="L1591" class="css-a4x74f"><span>1591</span></td><td id="LC1591" class="css-1dcdqdg"><code>	    .keys(config2)
</code></td></tr><tr><td id="L1592" class="css-a4x74f"><span>1592</span></td><td id="LC1592" class="css-1dcdqdg"><code>	    .filter(<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">filterAxiosKeys</span>(<span class="code-params">key</span>) </span>{
</code></td></tr><tr><td id="L1593" class="css-a4x74f"><span>1593</span></td><td id="LC1593" class="css-1dcdqdg"><code>	      <span class="code-keyword">return</span> axiosKeys.indexOf(key) === <span class="code-number">-1</span>;
</code></td></tr><tr><td id="L1594" class="css-a4x74f"><span>1594</span></td><td id="LC1594" class="css-1dcdqdg"><code>	    });
</code></td></tr><tr><td id="L1595" class="css-a4x74f"><span>1595</span></td><td id="LC1595" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1596" class="css-a4x74f"><span>1596</span></td><td id="LC1596" class="css-1dcdqdg"><code>	  utils.forEach(otherKeys, <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">otherKeysDefaultToConfig2</span>(<span class="code-params">prop</span>) </span>{
</code></td></tr><tr><td id="L1597" class="css-a4x74f"><span>1597</span></td><td id="LC1597" class="css-1dcdqdg"><code>	    <span class="code-keyword">if</span> (<span class="code-keyword">typeof</span> config2[prop] !== <span class="code-string">'undefined'</span>) {
</code></td></tr><tr><td id="L1598" class="css-a4x74f"><span>1598</span></td><td id="LC1598" class="css-1dcdqdg"><code>	      config[prop] = config2[prop];
</code></td></tr><tr><td id="L1599" class="css-a4x74f"><span>1599</span></td><td id="LC1599" class="css-1dcdqdg"><code>	    } <span class="code-keyword">else</span> <span class="code-keyword">if</span> (<span class="code-keyword">typeof</span> config1[prop] !== <span class="code-string">'undefined'</span>) {
</code></td></tr><tr><td id="L1600" class="css-a4x74f"><span>1600</span></td><td id="LC1600" class="css-1dcdqdg"><code>	      config[prop] = config1[prop];
</code></td></tr><tr><td id="L1601" class="css-a4x74f"><span>1601</span></td><td id="LC1601" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L1602" class="css-a4x74f"><span>1602</span></td><td id="LC1602" class="css-1dcdqdg"><code>	  });
</code></td></tr><tr><td id="L1603" class="css-a4x74f"><span>1603</span></td><td id="LC1603" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1604" class="css-a4x74f"><span>1604</span></td><td id="LC1604" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> config;
</code></td></tr><tr><td id="L1605" class="css-a4x74f"><span>1605</span></td><td id="LC1605" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L1606" class="css-a4x74f"><span>1606</span></td><td id="LC1606" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1607" class="css-a4x74f"><span>1607</span></td><td id="LC1607" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1608" class="css-a4x74f"><span>1608</span></td><td id="LC1608" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> }),
</code></td></tr><tr><td id="L1609" class="css-a4x74f"><span>1609</span></td><td id="LC1609" class="css-1dcdqdg"><code><span class="code-comment">/* 24 */</span>
</code></td></tr><tr><td id="L1610" class="css-a4x74f"><span>1610</span></td><td id="LC1610" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> (<span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">module, exports</span>) </span>{
</code></td></tr><tr><td id="L1611" class="css-a4x74f"><span>1611</span></td><td id="LC1611" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1612" class="css-a4x74f"><span>1612</span></td><td id="LC1612" class="css-1dcdqdg"><code><span class="code-meta">	'use strict'</span>;
</code></td></tr><tr><td id="L1613" class="css-a4x74f"><span>1613</span></td><td id="LC1613" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1614" class="css-a4x74f"><span>1614</span></td><td id="LC1614" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L1615" class="css-a4x74f"><span>1615</span></td><td id="LC1615" class="css-1dcdqdg"><code><span class="code-comment">	 * A `Cancel` is an object that is thrown when an operation is canceled.
</span></code></td></tr><tr><td id="L1616" class="css-a4x74f"><span>1616</span></td><td id="LC1616" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L1617" class="css-a4x74f"><span>1617</span></td><td id="LC1617" class="css-1dcdqdg"><code><span class="code-comment">	 * @class
</span></code></td></tr><tr><td id="L1618" class="css-a4x74f"><span>1618</span></td><td id="LC1618" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {string=} message The message.
</span></code></td></tr><tr><td id="L1619" class="css-a4x74f"><span>1619</span></td><td id="LC1619" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L1620" class="css-a4x74f"><span>1620</span></td><td id="LC1620" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">Cancel</span>(<span class="code-params">message</span>) </span>{
</code></td></tr><tr><td id="L1621" class="css-a4x74f"><span>1621</span></td><td id="LC1621" class="css-1dcdqdg"><code>	  <span class="code-keyword">this</span>.message = message;
</code></td></tr><tr><td id="L1622" class="css-a4x74f"><span>1622</span></td><td id="LC1622" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L1623" class="css-a4x74f"><span>1623</span></td><td id="LC1623" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1624" class="css-a4x74f"><span>1624</span></td><td id="LC1624" class="css-1dcdqdg"><code>	Cancel.prototype.toString = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">toString</span>(<span class="code-params"></span>) </span>{
</code></td></tr><tr><td id="L1625" class="css-a4x74f"><span>1625</span></td><td id="LC1625" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> <span class="code-string">'Cancel'</span> + (<span class="code-keyword">this</span>.message ? <span class="code-string">': '</span> + <span class="code-keyword">this</span>.message : <span class="code-string">''</span>);
</code></td></tr><tr><td id="L1626" class="css-a4x74f"><span>1626</span></td><td id="LC1626" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L1627" class="css-a4x74f"><span>1627</span></td><td id="LC1627" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1628" class="css-a4x74f"><span>1628</span></td><td id="LC1628" class="css-1dcdqdg"><code>	Cancel.prototype.__CANCEL__ = <span class="code-literal">true</span>;
</code></td></tr><tr><td id="L1629" class="css-a4x74f"><span>1629</span></td><td id="LC1629" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1630" class="css-a4x74f"><span>1630</span></td><td id="LC1630" class="css-1dcdqdg"><code>	<span class="code-built_in">module</span>.exports = Cancel;
</code></td></tr><tr><td id="L1631" class="css-a4x74f"><span>1631</span></td><td id="LC1631" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1632" class="css-a4x74f"><span>1632</span></td><td id="LC1632" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1633" class="css-a4x74f"><span>1633</span></td><td id="LC1633" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> }),
</code></td></tr><tr><td id="L1634" class="css-a4x74f"><span>1634</span></td><td id="LC1634" class="css-1dcdqdg"><code><span class="code-comment">/* 25 */</span>
</code></td></tr><tr><td id="L1635" class="css-a4x74f"><span>1635</span></td><td id="LC1635" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> (<span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">module, exports, __webpack_require__</span>) </span>{
</code></td></tr><tr><td id="L1636" class="css-a4x74f"><span>1636</span></td><td id="LC1636" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1637" class="css-a4x74f"><span>1637</span></td><td id="LC1637" class="css-1dcdqdg"><code><span class="code-meta">	'use strict'</span>;
</code></td></tr><tr><td id="L1638" class="css-a4x74f"><span>1638</span></td><td id="LC1638" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1639" class="css-a4x74f"><span>1639</span></td><td id="LC1639" class="css-1dcdqdg"><code>	<span class="code-keyword">var</span> Cancel = __webpack_require__(<span class="code-number">24</span>);
</code></td></tr><tr><td id="L1640" class="css-a4x74f"><span>1640</span></td><td id="LC1640" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1641" class="css-a4x74f"><span>1641</span></td><td id="LC1641" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L1642" class="css-a4x74f"><span>1642</span></td><td id="LC1642" class="css-1dcdqdg"><code><span class="code-comment">	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
</span></code></td></tr><tr><td id="L1643" class="css-a4x74f"><span>1643</span></td><td id="LC1643" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L1644" class="css-a4x74f"><span>1644</span></td><td id="LC1644" class="css-1dcdqdg"><code><span class="code-comment">	 * @class
</span></code></td></tr><tr><td id="L1645" class="css-a4x74f"><span>1645</span></td><td id="LC1645" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Function} executor The executor function.
</span></code></td></tr><tr><td id="L1646" class="css-a4x74f"><span>1646</span></td><td id="LC1646" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L1647" class="css-a4x74f"><span>1647</span></td><td id="LC1647" class="css-1dcdqdg"><code>	<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">CancelToken</span>(<span class="code-params">executor</span>) </span>{
</code></td></tr><tr><td id="L1648" class="css-a4x74f"><span>1648</span></td><td id="LC1648" class="css-1dcdqdg"><code>	  <span class="code-keyword">if</span> (<span class="code-keyword">typeof</span> executor !== <span class="code-string">'function'</span>) {
</code></td></tr><tr><td id="L1649" class="css-a4x74f"><span>1649</span></td><td id="LC1649" class="css-1dcdqdg"><code>	    <span class="code-keyword">throw</span> <span class="code-keyword">new</span> <span class="code-built_in">TypeError</span>(<span class="code-string">'executor must be a function.'</span>);
</code></td></tr><tr><td id="L1650" class="css-a4x74f"><span>1650</span></td><td id="LC1650" class="css-1dcdqdg"><code>	  }
</code></td></tr><tr><td id="L1651" class="css-a4x74f"><span>1651</span></td><td id="LC1651" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1652" class="css-a4x74f"><span>1652</span></td><td id="LC1652" class="css-1dcdqdg"><code>	  <span class="code-keyword">var</span> resolvePromise;
</code></td></tr><tr><td id="L1653" class="css-a4x74f"><span>1653</span></td><td id="LC1653" class="css-1dcdqdg"><code>	  <span class="code-keyword">this</span>.promise = <span class="code-keyword">new</span> <span class="code-built_in">Promise</span>(<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">promiseExecutor</span>(<span class="code-params">resolve</span>) </span>{
</code></td></tr><tr><td id="L1654" class="css-a4x74f"><span>1654</span></td><td id="LC1654" class="css-1dcdqdg"><code>	    resolvePromise = resolve;
</code></td></tr><tr><td id="L1655" class="css-a4x74f"><span>1655</span></td><td id="LC1655" class="css-1dcdqdg"><code>	  });
</code></td></tr><tr><td id="L1656" class="css-a4x74f"><span>1656</span></td><td id="LC1656" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1657" class="css-a4x74f"><span>1657</span></td><td id="LC1657" class="css-1dcdqdg"><code>	  <span class="code-keyword">var</span> token = <span class="code-keyword">this</span>;
</code></td></tr><tr><td id="L1658" class="css-a4x74f"><span>1658</span></td><td id="LC1658" class="css-1dcdqdg"><code>	  executor(<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">cancel</span>(<span class="code-params">message</span>) </span>{
</code></td></tr><tr><td id="L1659" class="css-a4x74f"><span>1659</span></td><td id="LC1659" class="css-1dcdqdg"><code>	    <span class="code-keyword">if</span> (token.reason) {
</code></td></tr><tr><td id="L1660" class="css-a4x74f"><span>1660</span></td><td id="LC1660" class="css-1dcdqdg"><code>	      <span class="code-comment">// Cancellation has already been requested</span>
</code></td></tr><tr><td id="L1661" class="css-a4x74f"><span>1661</span></td><td id="LC1661" class="css-1dcdqdg"><code>	      <span class="code-keyword">return</span>;
</code></td></tr><tr><td id="L1662" class="css-a4x74f"><span>1662</span></td><td id="LC1662" class="css-1dcdqdg"><code>	    }
</code></td></tr><tr><td id="L1663" class="css-a4x74f"><span>1663</span></td><td id="LC1663" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1664" class="css-a4x74f"><span>1664</span></td><td id="LC1664" class="css-1dcdqdg"><code>	    token.reason = <span class="code-keyword">new</span> Cancel(message);
</code></td></tr><tr><td id="L1665" class="css-a4x74f"><span>1665</span></td><td id="LC1665" class="css-1dcdqdg"><code>	    resolvePromise(token.reason);
</code></td></tr><tr><td id="L1666" class="css-a4x74f"><span>1666</span></td><td id="LC1666" class="css-1dcdqdg"><code>	  });
</code></td></tr><tr><td id="L1667" class="css-a4x74f"><span>1667</span></td><td id="LC1667" class="css-1dcdqdg"><code>	}
</code></td></tr><tr><td id="L1668" class="css-a4x74f"><span>1668</span></td><td id="LC1668" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1669" class="css-a4x74f"><span>1669</span></td><td id="LC1669" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L1670" class="css-a4x74f"><span>1670</span></td><td id="LC1670" class="css-1dcdqdg"><code><span class="code-comment">	 * Throws a `Cancel` if cancellation has been requested.
</span></code></td></tr><tr><td id="L1671" class="css-a4x74f"><span>1671</span></td><td id="LC1671" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L1672" class="css-a4x74f"><span>1672</span></td><td id="LC1672" class="css-1dcdqdg"><code>	CancelToken.prototype.throwIfRequested = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">throwIfRequested</span>(<span class="code-params"></span>) </span>{
</code></td></tr><tr><td id="L1673" class="css-a4x74f"><span>1673</span></td><td id="LC1673" class="css-1dcdqdg"><code>	  <span class="code-keyword">if</span> (<span class="code-keyword">this</span>.reason) {
</code></td></tr><tr><td id="L1674" class="css-a4x74f"><span>1674</span></td><td id="LC1674" class="css-1dcdqdg"><code>	    <span class="code-keyword">throw</span> <span class="code-keyword">this</span>.reason;
</code></td></tr><tr><td id="L1675" class="css-a4x74f"><span>1675</span></td><td id="LC1675" class="css-1dcdqdg"><code>	  }
</code></td></tr><tr><td id="L1676" class="css-a4x74f"><span>1676</span></td><td id="LC1676" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L1677" class="css-a4x74f"><span>1677</span></td><td id="LC1677" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1678" class="css-a4x74f"><span>1678</span></td><td id="LC1678" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L1679" class="css-a4x74f"><span>1679</span></td><td id="LC1679" class="css-1dcdqdg"><code><span class="code-comment">	 * Returns an object that contains a new `CancelToken` and a function that, when called,
</span></code></td></tr><tr><td id="L1680" class="css-a4x74f"><span>1680</span></td><td id="LC1680" class="css-1dcdqdg"><code><span class="code-comment">	 * cancels the `CancelToken`.
</span></code></td></tr><tr><td id="L1681" class="css-a4x74f"><span>1681</span></td><td id="LC1681" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L1682" class="css-a4x74f"><span>1682</span></td><td id="LC1682" class="css-1dcdqdg"><code>	CancelToken.source = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">source</span>(<span class="code-params"></span>) </span>{
</code></td></tr><tr><td id="L1683" class="css-a4x74f"><span>1683</span></td><td id="LC1683" class="css-1dcdqdg"><code>	  <span class="code-keyword">var</span> cancel;
</code></td></tr><tr><td id="L1684" class="css-a4x74f"><span>1684</span></td><td id="LC1684" class="css-1dcdqdg"><code>	  <span class="code-keyword">var</span> token = <span class="code-keyword">new</span> CancelToken(<span class="code-function"><span class="code-keyword">function</span> <span class="code-title">executor</span>(<span class="code-params">c</span>) </span>{
</code></td></tr><tr><td id="L1685" class="css-a4x74f"><span>1685</span></td><td id="LC1685" class="css-1dcdqdg"><code>	    cancel = c;
</code></td></tr><tr><td id="L1686" class="css-a4x74f"><span>1686</span></td><td id="LC1686" class="css-1dcdqdg"><code>	  });
</code></td></tr><tr><td id="L1687" class="css-a4x74f"><span>1687</span></td><td id="LC1687" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> {
</code></td></tr><tr><td id="L1688" class="css-a4x74f"><span>1688</span></td><td id="LC1688" class="css-1dcdqdg"><code>	    token: token,
</code></td></tr><tr><td id="L1689" class="css-a4x74f"><span>1689</span></td><td id="LC1689" class="css-1dcdqdg"><code>	    cancel: cancel
</code></td></tr><tr><td id="L1690" class="css-a4x74f"><span>1690</span></td><td id="LC1690" class="css-1dcdqdg"><code>	  };
</code></td></tr><tr><td id="L1691" class="css-a4x74f"><span>1691</span></td><td id="LC1691" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L1692" class="css-a4x74f"><span>1692</span></td><td id="LC1692" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1693" class="css-a4x74f"><span>1693</span></td><td id="LC1693" class="css-1dcdqdg"><code>	<span class="code-built_in">module</span>.exports = CancelToken;
</code></td></tr><tr><td id="L1694" class="css-a4x74f"><span>1694</span></td><td id="LC1694" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1695" class="css-a4x74f"><span>1695</span></td><td id="LC1695" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1696" class="css-a4x74f"><span>1696</span></td><td id="LC1696" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> }),
</code></td></tr><tr><td id="L1697" class="css-a4x74f"><span>1697</span></td><td id="LC1697" class="css-1dcdqdg"><code><span class="code-comment">/* 26 */</span>
</code></td></tr><tr><td id="L1698" class="css-a4x74f"><span>1698</span></td><td id="LC1698" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> (<span class="code-function"><span class="code-keyword">function</span>(<span class="code-params">module, exports</span>) </span>{
</code></td></tr><tr><td id="L1699" class="css-a4x74f"><span>1699</span></td><td id="LC1699" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1700" class="css-a4x74f"><span>1700</span></td><td id="LC1700" class="css-1dcdqdg"><code><span class="code-meta">	'use strict'</span>;
</code></td></tr><tr><td id="L1701" class="css-a4x74f"><span>1701</span></td><td id="LC1701" class="css-1dcdqdg"><code>	
</code></td></tr><tr><td id="L1702" class="css-a4x74f"><span>1702</span></td><td id="LC1702" class="css-1dcdqdg"><code>	<span class="code-comment">/**
</span></code></td></tr><tr><td id="L1703" class="css-a4x74f"><span>1703</span></td><td id="LC1703" class="css-1dcdqdg"><code><span class="code-comment">	 * Syntactic sugar for invoking a function and expanding an array for arguments.
</span></code></td></tr><tr><td id="L1704" class="css-a4x74f"><span>1704</span></td><td id="LC1704" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L1705" class="css-a4x74f"><span>1705</span></td><td id="LC1705" class="css-1dcdqdg"><code><span class="code-comment">	 * Common use case would be to use `Function.prototype.apply`.
</span></code></td></tr><tr><td id="L1706" class="css-a4x74f"><span>1706</span></td><td id="LC1706" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L1707" class="css-a4x74f"><span>1707</span></td><td id="LC1707" class="css-1dcdqdg"><code><span class="code-comment">	 *  ```js
</span></code></td></tr><tr><td id="L1708" class="css-a4x74f"><span>1708</span></td><td id="LC1708" class="css-1dcdqdg"><code><span class="code-comment">	 *  function f(x, y, z) {}
</span></code></td></tr><tr><td id="L1709" class="css-a4x74f"><span>1709</span></td><td id="LC1709" class="css-1dcdqdg"><code><span class="code-comment">	 *  var args = [1, 2, 3];
</span></code></td></tr><tr><td id="L1710" class="css-a4x74f"><span>1710</span></td><td id="LC1710" class="css-1dcdqdg"><code><span class="code-comment">	 *  f.apply(null, args);
</span></code></td></tr><tr><td id="L1711" class="css-a4x74f"><span>1711</span></td><td id="LC1711" class="css-1dcdqdg"><code><span class="code-comment">	 *  ```
</span></code></td></tr><tr><td id="L1712" class="css-a4x74f"><span>1712</span></td><td id="LC1712" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L1713" class="css-a4x74f"><span>1713</span></td><td id="LC1713" class="css-1dcdqdg"><code><span class="code-comment">	 * With `spread` this example can be re-written.
</span></code></td></tr><tr><td id="L1714" class="css-a4x74f"><span>1714</span></td><td id="LC1714" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L1715" class="css-a4x74f"><span>1715</span></td><td id="LC1715" class="css-1dcdqdg"><code><span class="code-comment">	 *  ```js
</span></code></td></tr><tr><td id="L1716" class="css-a4x74f"><span>1716</span></td><td id="LC1716" class="css-1dcdqdg"><code><span class="code-comment">	 *  spread(function(x, y, z) {})([1, 2, 3]);
</span></code></td></tr><tr><td id="L1717" class="css-a4x74f"><span>1717</span></td><td id="LC1717" class="css-1dcdqdg"><code><span class="code-comment">	 *  ```
</span></code></td></tr><tr><td id="L1718" class="css-a4x74f"><span>1718</span></td><td id="LC1718" class="css-1dcdqdg"><code><span class="code-comment">	 *
</span></code></td></tr><tr><td id="L1719" class="css-a4x74f"><span>1719</span></td><td id="LC1719" class="css-1dcdqdg"><code><span class="code-comment">	 * @param {Function} callback
</span></code></td></tr><tr><td id="L1720" class="css-a4x74f"><span>1720</span></td><td id="LC1720" class="css-1dcdqdg"><code><span class="code-comment">	 * @returns {Function}
</span></code></td></tr><tr><td id="L1721" class="css-a4x74f"><span>1721</span></td><td id="LC1721" class="css-1dcdqdg"><code><span class="code-comment">	 */</span>
</code></td></tr><tr><td id="L1722" class="css-a4x74f"><span>1722</span></td><td id="LC1722" class="css-1dcdqdg"><code>	<span class="code-built_in">module</span>.exports = <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">spread</span>(<span class="code-params">callback</span>) </span>{
</code></td></tr><tr><td id="L1723" class="css-a4x74f"><span>1723</span></td><td id="LC1723" class="css-1dcdqdg"><code>	  <span class="code-keyword">return</span> <span class="code-function"><span class="code-keyword">function</span> <span class="code-title">wrap</span>(<span class="code-params">arr</span>) </span>{
</code></td></tr><tr><td id="L1724" class="css-a4x74f"><span>1724</span></td><td id="LC1724" class="css-1dcdqdg"><code>	    <span class="code-keyword">return</span> callback.apply(<span class="code-literal">null</span>, arr);
</code></td></tr><tr><td id="L1725" class="css-a4x74f"><span>1725</span></td><td id="LC1725" class="css-1dcdqdg"><code>	  };
</code></td></tr><tr><td id="L1726" class="css-a4x74f"><span>1726</span></td><td id="LC1726" class="css-1dcdqdg"><code>	};
</code></td></tr><tr><td id="L1727" class="css-a4x74f"><span>1727</span></td><td id="LC1727" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1728" class="css-a4x74f"><span>1728</span></td><td id="LC1728" class="css-1dcdqdg"><code>
</code></td></tr><tr><td id="L1729" class="css-a4x74f"><span>1729</span></td><td id="LC1729" class="css-1dcdqdg"><code><span class="code-comment">/***/</span> })
</code></td></tr><tr><td id="L1730" class="css-a4x74f"><span>1730</span></td><td id="LC1730" class="css-1dcdqdg"><code><span class="code-comment">/******/</span> ])
</code></td></tr><tr><td id="L1731" class="css-a4x74f"><span>1731</span></td><td id="LC1731" class="css-1dcdqdg"><code>});
</code></td></tr><tr><td id="L1732" class="css-a4x74f"><span>1732</span></td><td id="LC1732" class="css-1dcdqdg"><code>;
</code></td></tr><tr><td id="L1733" class="css-a4x74f"><span>1733</span></td><td id="LC1733" class="css-1dcdqdg"><code><span class="code-comment">//# sourceMappingURL=axios.map</span></code></td></tr><tr><td class="css-a4x74f">\</td><style data-emotion-css="jhhjkz">.css-jhhjkz{padding-left:10px;color:rgba(27,31,35,.3);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}</style><td class="css-jhhjkz">No newline at end of file</td></tr></tbody></table></div></div></div></div><style data-emotion-css="1teho9j">.css-1teho9j{margin-top:5rem;background:black;color:#aaa;}</style><footer class="css-1teho9j"><style data-emotion-css="1ui8put">.css-1ui8put{max-width:940px;padding:10px 20px;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}</style><div class="css-1ui8put"><p>© <!-- -->2020<!-- --> UNPKG</p><style data-emotion-css="la3nd4">.css-la3nd4{font-size:1.5rem;}</style><p class="css-la3nd4"><style data-emotion-css="bogekj">.css-bogekj{color:#aaa;display:inline-block;}.css-bogekj:hover{color:white;}</style><a title="Twitter" href="https://twitter.com/unpkg" class="css-bogekj"><style data-emotion-css="i6dzq1">.css-i6dzq1{vertical-align:text-bottom;}</style><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="css-i6dzq1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></a><style data-emotion-css="ap0i2q">.css-ap0i2q{color:#aaa;display:inline-block;margin-left:1rem;}.css-ap0i2q:hover{color:white;}</style><a title="GitHub" href="https://github.com/mjackson/unpkg" class="css-ap0i2q"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="css-i6dzq1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a></p></div></footer></div><script src="/react@16.8.6/umd/react.production.min.js"></script><script src="/react-dom@16.8.6/umd/react-dom.production.min.js"></script><script src="/@emotion/core@10.0.6/dist/core.umd.min.js"></script><script>'use strict';
(function(t, z, c) {
  function A() {
    A = Object.assign || function(a) {
      for (var b = 1; b < arguments.length; b++) {
        var d = arguments[b], c;
        for (c in d) {
          Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
        }
      }
      return a;
    };
    return A.apply(this, arguments);
  }
  function Q(a, b) {
    if (null == a) {
      return {};
    }
    var d = {}, c = Object.keys(a), f;
    for (f = 0; f < c.length; f++) {
      var k = c[f];
      0 <= b.indexOf(k) || (d[k] = a[k]);
    }
    return d;
  }
  function R(a, b) {
    b || (b = a.slice(0));
    a.raw = b;
    return a;
  }
  function S(a) {
    return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a["default"] : a;
  }
  function D(a, b) {
    return b = {exports:{}}, a(b, b.exports), b.exports;
  }
  function J(a, b, d, c, f) {
    for (var k in a) {
      if (sa(a, k)) {
        try {
          if ("function" !== typeof a[k]) {
            var h = Error((c || "React class") + ": " + d + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[k] + "`.");
            h.name = "Invariant Violation";
            throw h;
          }
          var l = a[k](b, k, c, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
        } catch (q) {
          l = q;
        }
        !l || l instanceof Error || K((c || "React class") + ": type specification of " + d + " `" + k + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof l + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
        if (l instanceof Error && !(l.message in L)) {
          L[l.message] = !0;
          var B = f ? f() : "";
          K("Failed " + d + " type: " + l.message + (null != B ? B : ""));
        }
      }
    }
  }
  function E() {
    return null;
  }
  function ta(a) {
    var b = a.children;
    a = Q(a, ["children"]);
    return M.createElement(T.Provider, {children:b, value:a});
  }
  function U(a) {
    return a && a.map(function(a, d) {
      return t.createElement(a.tag, y({key:d}, a.attr), U(a.child));
    });
  }
  function F(a) {
    return function(b) {
      return t.createElement(ua, y({attr:y({}, a.attr)}, b), U(a.child));
    };
  }
  function ua(a) {
    var b = function(b) {
      var c = a.size || b.size || "1em";
      if (b.className) {
        var d = b.className;
      }
      a.className && (d = (d ? d + " " : "") + a.className);
      var k = a.attr, r = a.title, l = ["attr", "title"], B = {}, q;
      for (q in a) {
        Object.prototype.hasOwnProperty.call(a, q) && 0 > l.indexOf(q) && (B[q] = a[q]);
      }
      if (null != a && "function" === typeof Object.getOwnPropertySymbols) {
        var p = 0;
        for (q = Object.getOwnPropertySymbols(a); p < q.length; p++) {
          0 > l.indexOf(q[p]) && (B[q[p]] = a[q[p]]);
        }
      }
      return t.createElement("svg", y({stroke:"currentColor", fill:"currentColor", strokeWidth:"0"}, b.attr, k, B, {className:d, style:y({color:a.color || b.color}, b.style, a.style), height:c, width:c, xmlns:"http://www.w3.org/2000/svg"}), r && t.createElement("title", null, r), a.children);
    };
    return void 0 !== V ? t.createElement(V.Consumer, null, function(a) {
      return b(a);
    }) : b(W);
  }
  function G(a, b) {
    var d = b.css;
    b = Q(b, ["css"]);
    return c.jsx(a, A({css:A({}, d, {verticalAlign:"text-bottom"})}, b));
  }
  function va(a) {
    return G(X, a);
  }
  function wa(a) {
    return G(Y, a);
  }
  function xa(a) {
    return G(Z, a);
  }
  function ya(a) {
    return G(aa, a);
  }
  function ba(a) {
    var b = a.path, d = a.details, h = [];
    "/" !== b && h.push(c.jsx("tr", {key:".."}, c.jsx("td", {css:N}), c.jsx("td", {css:x}, c.jsx("a", {title:"Parent directory", href:"../", css:O}, "..")), c.jsx("td", {css:x}), c.jsx("td", {css:P})));
    a = Object.keys(d).reduce(function(a, b) {
      var c = a.subdirs, f = a.files;
      b = d[b];
      "directory" === b.type ? c.push(b) : "file" === b.type && f.push(b);
      return a;
    }, {subdirs:[], files:[]});
    var f = a.files;
    a.subdirs.sort(ca("path")).forEach(function(a) {
      a = a.path.substr(1 < b.length ? b.length + 1 : 1);
      var d = a + "/";
      h.push(c.jsx("tr", {key:a}, c.jsx("td", {css:N}, c.jsx(va, null)), c.jsx("td", {css:x}, c.jsx("a", {title:a, href:d, css:O}, a)), c.jsx("td", {css:x}, "-"), c.jsx("td", {css:P}, "-")));
    });
    f.sort(ca("path")).forEach(function(a) {
      var d = a.size, f = a.contentType;
      a = a.path.substr(1 < b.length ? b.length + 1 : 1);
      h.push(c.jsx("tr", {key:a}, c.jsx("td", {css:N}, c.jsx(wa, null)), c.jsx("td", {css:x}, c.jsx("a", {title:a, href:a, css:O}, a)), c.jsx("td", {css:x}, da(d)), c.jsx("td", {css:P}, f)));
    });
    return c.jsx("div", {css:{border:"1px solid #dfe2e5", borderRadius:3, borderTopWidth:0, "@media (max-width: 700px)":{borderRightWidth:0, borderLeftWidth:0}}}, c.jsx("table", {css:{width:"100%", borderCollapse:"collapse", borderRadius:2, background:"#fff", "@media (max-width: 700px)":{"& th + th + th + th, & td + td + td + td":{display:"none"}}}}, c.jsx("thead", null, c.jsx("tr", null, c.jsx("th", null, c.jsx(H, null, "Icon")), c.jsx("th", null, c.jsx(H, null, "Name")), c.jsx("th", null, c.jsx(H, 
    null, "Size")), c.jsx("th", null, c.jsx(H, null, "Content Type")))), c.jsx("tbody", null, h)));
  }
  function za(a) {
    a = a.split("/");
    return a[a.length - 1];
  }
  function Aa(a) {
    var b = a.uri;
    return c.jsx("div", {css:{padding:20, textAlign:"center"}}, c.jsx("img", {alt:za(a.path), src:b}));
  }
  function Ba(a) {
    a = a.highlights.slice(0);
    var b = a.length && "" === a[a.length - 1];
    b && a.pop();
    return c.jsx("div", {className:"code-listing", css:{overflowX:"auto", overflowY:"hidden", paddingTop:5, paddingBottom:5}}, c.jsx("table", {css:{border:"none", borderCollapse:"collapse", borderSpacing:0}}, c.jsx("tbody", null, a.map(function(a, b) {
      var d = b + 1;
      return c.jsx("tr", {key:b}, c.jsx("td", {id:"L" + d, css:{paddingLeft:10, paddingRight:10, color:"rgba(27,31,35,.3)", textAlign:"right", verticalAlign:"top", width:"1%", minWidth:50, userSelect:"none"}}, c.jsx("span", null, d)), c.jsx("td", {id:"LC" + d, css:{paddingLeft:10, paddingRight:10, color:"#24292e", whiteSpace:"pre"}}, c.jsx("code", {dangerouslySetInnerHTML:{__html:a}})));
    }), !b && c.jsx("tr", {key:"no-newline"}, c.jsx("td", {css:{paddingLeft:10, paddingRight:10, color:"rgba(27,31,35,.3)", textAlign:"right", verticalAlign:"top", width:"1%", minWidth:50, userSelect:"none"}}, "\\"), c.jsx("td", {css:{paddingLeft:10, color:"rgba(27,31,35,.3)", userSelect:"none"}}, "No newline at end of file")))));
  }
  function Ca() {
    return c.jsx("div", {css:{padding:20}}, c.jsx("p", {css:{textAlign:"center"}}, "No preview available."));
  }
  function ea(a) {
    var b = a.path, d = a.details, h = t.useContext(T);
    a = h.packageName;
    h = h.packageVersion;
    var f = d.highlights, k = d.uri, r = d.language;
    d = d.size;
    var l = b.split("/");
    l = l[l.length - 1];
    return c.jsx("div", {css:{border:"1px solid #dfe2e5", borderRadius:3, "@media (max-width: 700px)":{borderRightWidth:0, borderLeftWidth:0}}}, c.jsx("div", {css:{padding:10, background:"#f6f8fa", color:"#424242", border:"1px solid #d1d5da", borderTopLeftRadius:3, borderTopRightRadius:3, margin:"-1px -1px 0", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", "@media (max-width: 700px)":{paddingRight:20, paddingLeft:20}}}, c.jsx("span", null, da(d)), " ", c.jsx("span", 
    null, r), " ", c.jsx("a", {title:l, href:"/" + a + "@" + h + b, css:{display:"inline-block", textDecoration:"none", padding:"2px 8px", fontWeight:600, fontSize:"0.9rem", color:"#24292e", backgroundColor:"#eff3f6", border:"1px solid rgba(27,31,35,.2)", borderRadius:3, ":hover":{backgroundColor:"#e6ebf1", borderColor:"rgba(27,31,35,.35)"}, ":active":{backgroundColor:"#e9ecef", borderColor:"rgba(27,31,35,.35)", boxShadow:"inset 0 0.15em 0.3em rgba(27,31,35,.15)"}}}, "View Raw")), f ? c.jsx(Ba, {highlights:f}) : 
    k ? c.jsx(Aa, {path:b, uri:k}) : c.jsx(Ca, null));
  }
  function fa() {
    var a = R(["\n  .code-listing {\n    background: #fbfdff;\n    color: #383a42;\n  }\n  .code-comment,\n  .code-quote {\n    color: #a0a1a7;\n    font-style: italic;\n  }\n  .code-doctag,\n  .code-keyword,\n  .code-link,\n  .code-formula {\n    color: #a626a4;\n  }\n  .code-section,\n  .code-name,\n  .code-selector-tag,\n  .code-deletion,\n  .code-subst {\n    color: #e45649;\n  }\n  .code-literal {\n    color: #0184bb;\n  }\n  .code-string,\n  .code-regexp,\n  .code-addition,\n  .code-attribute,\n  .code-meta-string {\n    color: #50a14f;\n  }\n  .code-built_in,\n  .code-class .code-title {\n    color: #c18401;\n  }\n  .code-attr,\n  .code-variable,\n  .code-template-variable,\n  .code-type,\n  .code-selector-class,\n  .code-selector-attr,\n  .code-selector-pseudo,\n  .code-number {\n    color: #986801;\n  }\n  .code-symbol,\n  .code-bullet,\n  .code-meta,\n  .code-selector-id,\n  .code-title {\n    color: #4078f2;\n  }\n  .code-emphasis {\n    font-style: italic;\n  }\n  .code-strong {\n    font-weight: bold;\n  }\n"]);
    fa = function() {
      return a;
    };
    return a;
  }
  function ha() {
    var a = R(["\n  html {\n    box-sizing: border-box;\n  }\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n  }\n\n  html,\n  body,\n  #root {\n    height: 100%;\n    margin: 0;\n  }\n\n  body {\n    ", "\n    font-size: 16px;\n    line-height: 1.5;\n    background: white;\n    color: black;\n  }\n\n  code {\n    ", "\n  }\n\n  th,\n  td {\n    padding: 0;\n  }\n\n  select {\n    font-size: inherit;\n  }\n\n  #root {\n    display: flex;\n    flex-direction: column;\n  }\n"]);
    ha = function() {
      return a;
    };
    return a;
  }
  function ia(a) {
    var b = a.packageName, d = a.packageVersion, h = a.availableVersions;
    h = void 0 === h ? [] : h;
    var f = a.filename;
    a = a.target;
    var k = [];
    if ("/" === f) {
      k.push(b);
    } else {
      var r = "/browse/" + b + "@" + d;
      k.push(c.jsx("a", {href:r + "/", css:ja}, b));
      f = f.replace(/^\/+/, "").replace(/\/+$/, "").split("/");
      var l = f.pop();
      f.forEach(function(a) {
        r += "/" + a;
        k.push(c.jsx("a", {href:r + "/", css:ja}, a));
      });
      k.push(l);
    }
    return c.jsx(ta, {packageName:b, packageVersion:d}, c.jsx(t.Fragment, null, c.jsx(c.Global, {styles:Da}), c.jsx(c.Global, {styles:Ea}), c.jsx("div", {css:{flex:"1 0 auto"}}, c.jsx("div", {css:{maxWidth:940, padding:"0 20px", margin:"0 auto"}}, c.jsx("header", {css:{textAlign:"center"}}, c.jsx("h1", {css:{fontSize:"3rem", marginTop:"2rem"}}, c.jsx("a", {href:"/", css:{color:"#000", textDecoration:"none"}}, "UNPKG"))), c.jsx("header", {css:{display:"flex", flexDirection:"row", alignItems:"center", 
    "@media (max-width: 700px)":{flexDirection:"column-reverse", alignItems:"flex-start"}}}, c.jsx("h1", {css:{fontSize:"1.5rem", fontWeight:"normal", flex:1}}, c.jsx("nav", null, k.map(function(a, b, d) {
      return c.jsx("span", {key:b}, 0 !== b && c.jsx("span", {css:{paddingLeft:5, paddingRight:5}}, "/"), b === d.length - 1 ? c.jsx("strong", null, a) : a);
    }))), c.jsx("p", {css:{marginLeft:20, "@media (max-width: 700px)":{marginLeft:0, marginBottom:0}}}, c.jsx("label", null, "Version:", " ", c.jsx("select", {name:"version", defaultValue:d, onChange:function(a) {
      window.location.href = window.location.href.replace("@" + d, "@" + a.target.value);
    }, css:{appearance:"none", cursor:"pointer", padding:"4px 24px 4px 8px", fontWeight:600, fontSize:"0.9em", color:"#24292e", border:"1px solid rgba(27,31,35,.2)", borderRadius:3, backgroundColor:"#eff3f6", backgroundImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAKCAYAAAC9vt6cAAAAAXNSR0IArs4c6QAAARFJREFUKBVjZAACNS39RhBNKrh17WI9o4quoT3Dn78HSNUMUs/CzOTI/O7Vi4dCYpJ3/jP+92BkYGAlyiBGhm8MjIxJt65e3MQM0vDu9YvLYmISILYZELOBxHABRkaGr0yMzF23r12YDFIDNgDEePv65SEhEXENBkYGFSAXuyGMjF8Z/jOsvX3tYiFIDwgwQSgIaaijnvj/P8M5IO8HsjiY/f//D4b//88A1SQhywG9jQr09PS4v/1mPAeUUPzP8B8cJowMjL+Bqu6xMQmaXL164AuyDgwDQJLa2qYSP//9vARkCoMVMzK8YeVkNbh+9uxzMB+JwGoASF5Vx0jz/98/18BqmZi171w9D2EjaaYKEwAEK00XQLdJuwAAAABJRU5ErkJggg==)", 
    backgroundPosition:"right 8px center", backgroundRepeat:"no-repeat", backgroundSize:"auto 25%", ":hover":{backgroundColor:"#e6ebf1", borderColor:"rgba(27,31,35,.35)"}, ":active":{backgroundColor:"#e9ecef", borderColor:"rgba(27,31,35,.35)", boxShadow:"inset 0 0.15em 0.3em rgba(27,31,35,.15)"}}}, h.map(function(a) {
      return c.jsx("option", {key:a, value:a}, a);
    })))))), c.jsx("div", {css:{maxWidth:940, padding:"0 20px", margin:"0 auto", "@media (max-width: 700px)":{padding:0, margin:0}}}, "directory" === a.type ? c.jsx(ba, {path:a.path, details:a.details}) : "file" === a.type ? c.jsx(ea, {path:a.path, details:a.details}) : null)), c.jsx("footer", {css:{marginTop:"5rem", background:"black", color:"#aaa"}}, c.jsx("div", {css:{maxWidth:940, padding:"10px 20px", margin:"0 auto", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}, 
    c.jsx("p", null, "\u00a9 ", (new Date).getFullYear(), " UNPKG"), c.jsx("p", {css:{fontSize:"1.5rem"}}, c.jsx("a", {title:"Twitter", href:"https://twitter.com/unpkg", css:{color:"#aaa", display:"inline-block", ":hover":{color:"white"}}}, c.jsx(xa, null)), c.jsx("a", {title:"GitHub", href:"https://github.com/mjackson/unpkg", css:{color:"#aaa", display:"inline-block", marginLeft:"1rem", ":hover":{color:"white"}}}, c.jsx(ya, null)))))));
  }
  var M = "default" in t ? t["default"] : t;
  z = z && z.hasOwnProperty("default") ? z["default"] : z;
  var Fa = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {}, m = D(function(a, b) {
    function d(a) {
      if ("object" === typeof a && null !== a) {
        var b = a.$$typeof;
        switch(b) {
          case f:
            switch(a = a.type, a) {
              case g:
              case e:
              case r:
              case m:
              case l:
              case u:
                return a;
              default:
                switch(a = a && a.$$typeof, a) {
                  case p:
                  case n:
                  case q:
                    return a;
                  default:
                    return b;
                }
            }case w:
          case v:
          case k:
            return b;
        }
      }
    }
    function c(a) {
      return d(a) === e;
    }
    Object.defineProperty(b, "__esModule", {value:!0});
    var f = (a = "function" === typeof Symbol && Symbol.for) ? Symbol.for("react.element") : 60103, k = a ? Symbol.for("react.portal") : 60106, r = a ? Symbol.for("react.fragment") : 60107, l = a ? Symbol.for("react.strict_mode") : 60108, m = a ? Symbol.for("react.profiler") : 60114, q = a ? Symbol.for("react.provider") : 60109, p = a ? Symbol.for("react.context") : 60110, g = a ? Symbol.for("react.async_mode") : 60111, e = a ? Symbol.for("react.concurrent_mode") : 60111, n = a ? Symbol.for("react.forward_ref") : 
    60112, u = a ? Symbol.for("react.suspense") : 60113, v = a ? Symbol.for("react.memo") : 60115, w = a ? Symbol.for("react.lazy") : 60116;
    b.typeOf = d;
    b.AsyncMode = g;
    b.ConcurrentMode = e;
    b.ContextConsumer = p;
    b.ContextProvider = q;
    b.Element = f;
    b.ForwardRef = n;
    b.Fragment = r;
    b.Lazy = w;
    b.Memo = v;
    b.Portal = k;
    b.Profiler = m;
    b.StrictMode = l;
    b.Suspense = u;
    b.isValidElementType = function(a) {
      return "string" === typeof a || "function" === typeof a || a === r || a === e || a === m || a === l || a === u || "object" === typeof a && null !== a && (a.$$typeof === w || a.$$typeof === v || a.$$typeof === q || a.$$typeof === p || a.$$typeof === n);
    };
    b.isAsyncMode = function(a) {
      return c(a) || d(a) === g;
    };
    b.isConcurrentMode = c;
    b.isContextConsumer = function(a) {
      return d(a) === p;
    };
    b.isContextProvider = function(a) {
      return d(a) === q;
    };
    b.isElement = function(a) {
      return "object" === typeof a && null !== a && a.$$typeof === f;
    };
    b.isForwardRef = function(a) {
      return d(a) === n;
    };
    b.isFragment = function(a) {
      return d(a) === r;
    };
    b.isLazy = function(a) {
      return d(a) === w;
    };
    b.isMemo = function(a) {
      return d(a) === v;
    };
    b.isPortal = function(a) {
      return d(a) === k;
    };
    b.isProfiler = function(a) {
      return d(a) === m;
    };
    b.isStrictMode = function(a) {
      return d(a) === l;
    };
    b.isSuspense = function(a) {
      return d(a) === u;
    };
  });
  S(m);
  var la = D(function(a, b) {
    (function() {
      function a(a) {
        if ("object" === typeof a && null !== a) {
          var b = a.$$typeof;
          switch(b) {
            case k:
              switch(a = a.type, a) {
                case e:
                case n:
                case l:
                case q:
                case m:
                case v:
                  return a;
                default:
                  switch(a = a && a.$$typeof, a) {
                    case g:
                    case u:
                    case p:
                      return a;
                    default:
                      return b;
                  }
              }case I:
            case w:
            case r:
              return b;
          }
        }
      }
      function c(b) {
        return a(b) === n;
      }
      Object.defineProperty(b, "__esModule", {value:!0});
      var f = "function" === typeof Symbol && Symbol.for, k = f ? Symbol.for("react.element") : 60103, r = f ? Symbol.for("react.portal") : 60106, l = f ? Symbol.for("react.fragment") : 60107, m = f ? Symbol.for("react.strict_mode") : 60108, q = f ? Symbol.for("react.profiler") : 60114, p = f ? Symbol.for("react.provider") : 60109, g = f ? Symbol.for("react.context") : 60110, e = f ? Symbol.for("react.async_mode") : 60111, n = f ? Symbol.for("react.concurrent_mode") : 60111, u = f ? Symbol.for("react.forward_ref") : 
      60112, v = f ? Symbol.for("react.suspense") : 60113, w = f ? Symbol.for("react.memo") : 60115, I = f ? Symbol.for("react.lazy") : 60116;
      f = function() {
      };
      var Ga = function(a) {
        for (var b = arguments.length, e = Array(1 < b ? b - 1 : 0), n = 1; n < b; n++) {
          e[n - 1] = arguments[n];
        }
        var c = 0;
        b = "Warning: " + a.replace(/%s/g, function() {
          return e[c++];
        });
        "undefined" !== typeof console && console.warn(b);
        try {
          throw Error(b);
        } catch (Ra) {
        }
      }, Ha = f = function(a, b) {
        if (void 0 === b) {
          throw Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");
        }
        if (!a) {
          for (var e = arguments.length, n = Array(2 < e ? e - 2 : 0), c = 2; c < e; c++) {
            n[c - 2] = arguments[c];
          }
          Ga.apply(void 0, [b].concat(n));
        }
      }, ka = !1;
      b.typeOf = a;
      b.AsyncMode = e;
      b.ConcurrentMode = n;
      b.ContextConsumer = g;
      b.ContextProvider = p;
      b.Element = k;
      b.ForwardRef = u;
      b.Fragment = l;
      b.Lazy = I;
      b.Memo = w;
      b.Portal = r;
      b.Profiler = q;
      b.StrictMode = m;
      b.Suspense = v;
      b.isValidElementType = function(a) {
        return "string" === typeof a || "function" === typeof a || a === l || a === n || a === q || a === m || a === v || "object" === typeof a && null !== a && (a.$$typeof === I || a.$$typeof === w || a.$$typeof === p || a.$$typeof === g || a.$$typeof === u);
      };
      b.isAsyncMode = function(b) {
        ka || (ka = !0, Ha(!1, "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API."));
        return c(b) || a(b) === e;
      };
      b.isConcurrentMode = c;
      b.isContextConsumer = function(b) {
        return a(b) === g;
      };
      b.isContextProvider = function(b) {
        return a(b) === p;
      };
      b.isElement = function(a) {
        return "object" === typeof a && null !== a && a.$$typeof === k;
      };
      b.isForwardRef = function(b) {
        return a(b) === u;
      };
      b.isFragment = function(b) {
        return a(b) === l;
      };
      b.isLazy = function(b) {
        return a(b) === I;
      };
      b.isMemo = function(b) {
        return a(b) === w;
      };
      b.isPortal = function(b) {
        return a(b) === r;
      };
      b.isProfiler = function(b) {
        return a(b) === q;
      };
      b.isStrictMode = function(b) {
        return a(b) === m;
      };
      b.isSuspense = function(b) {
        return a(b) === v;
      };
    })();
  });
  S(la);
  var ma = D(function(a) {
    a.exports = la;
  }), na = Object.getOwnPropertySymbols, Ia = Object.prototype.hasOwnProperty, Ja = Object.prototype.propertyIsEnumerable, Ka = function() {
    try {
      if (!Object.assign) {
        return !1;
      }
      var a = new String("abc");
      a[5] = "de";
      if ("5" === Object.getOwnPropertyNames(a)[0]) {
        return !1;
      }
      var b = {};
      for (a = 0; 10 > a; a++) {
        b["_" + String.fromCharCode(a)] = a;
      }
      if ("0123456789" !== Object.getOwnPropertyNames(b).map(function(a) {
        return b[a];
      }).join("")) {
        return !1;
      }
      var c = {};
      "abcdefghijklmnopqrst".split("").forEach(function(a) {
        c[a] = a;
      });
      return "abcdefghijklmnopqrst" !== Object.keys(Object.assign({}, c)).join("") ? !1 : !0;
    } catch (h) {
      return !1;
    }
  }() ? Object.assign : function(a, b) {
    if (null === a || void 0 === a) {
      throw new TypeError("Object.assign cannot be called with null or undefined");
    }
    var c = Object(a);
    for (var h, f = 1; f < arguments.length; f++) {
      var k = Object(arguments[f]);
      for (var r in k) {
        Ia.call(k, r) && (c[r] = k[r]);
      }
      if (na) {
        h = na(k);
        for (var l = 0; l < h.length; l++) {
          Ja.call(k, h[l]) && (c[h[l]] = k[h[l]]);
        }
      }
    }
    return c;
  }, K = function() {
  }, L = {}, sa = Function.call.bind(Object.prototype.hasOwnProperty);
  K = function(a) {
    a = "Warning: " + a;
    "undefined" !== typeof console && console.error(a);
    try {
      throw Error(a);
    } catch (b) {
    }
  };
  J.resetWarningCache = function() {
    L = {};
  };
  var La = Function.call.bind(Object.prototype.hasOwnProperty), C = function() {
  };
  C = function(a) {
    a = "Warning: " + a;
    "undefined" !== typeof console && console.error(a);
    try {
      throw Error(a);
    } catch (b) {
    }
  };
  var Ma = function(a, b) {
    function c(a, b) {
      return a === b ? 0 !== a || 1 / a === 1 / b : a !== a && b !== b;
    }
    function h(a) {
      this.message = a;
      this.stack = "";
    }
    function f(a) {
      function e(e, n, g, u, f, k, v) {
        u = u || "<<anonymous>>";
        k = k || g;
        if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== v) {
          if (b) {
            throw e = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"), e.name = "Invariant Violation", e;
          }
          "undefined" !== typeof console && (v = u + ":" + g, !c[v] && 3 > d && (C("You are manually calling a React.PropTypes validation function for the `" + k + "` prop on `" + u + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), c[v] = !0, d++));
        }
        return null == n[g] ? e ? null === n[g] ? new h("The " + f + " `" + k + "` is marked as required " + ("in `" + u + "`, but its value is `null`.")) : new h("The " + f + " `" + k + "` is marked as required in " + ("`" + u + "`, but its value is `undefined`.")) : null : a(n, g, u, f, k);
      }
      var c = {}, d = 0, g = e.bind(null, !1);
      g.isRequired = e.bind(null, !0);
      return g;
    }
    function k(a) {
      return f(function(b, e, c, d, g, f) {
        b = b[e];
        return l(b) !== a ? (b = m(b), new h("Invalid " + d + " `" + g + "` of type " + ("`" + b + "` supplied to `" + c + "`, expected ") + ("`" + a + "`."))) : null;
      });
    }
    function r(b) {
      switch(typeof b) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !b;
        case "object":
          if (Array.isArray(b)) {
            return b.every(r);
          }
          if (null === b || a(b)) {
            return !0;
          }
          var e = b && (p && b[p] || b["@@iterator"]);
          var c = "function" === typeof e ? e : void 0;
          if (c) {
            if (e = c.call(b), c !== b.entries) {
              for (; !(b = e.next()).done;) {
                if (!r(b.value)) {
                  return !1;
                }
              }
            } else {
              for (; !(b = e.next()).done;) {
                if ((b = b.value) && !r(b[1])) {
                  return !1;
                }
              }
            }
          } else {
            return !1;
          }
          return !0;
        default:
          return !1;
      }
    }
    function l(a) {
      var b = typeof a;
      return Array.isArray(a) ? "array" : a instanceof RegExp ? "object" : "symbol" === b || a && ("Symbol" === a["@@toStringTag"] || "function" === typeof Symbol && a instanceof Symbol) ? "symbol" : b;
    }
    function m(a) {
      if ("undefined" === typeof a || null === a) {
        return "" + a;
      }
      var b = l(a);
      if ("object" === b) {
        if (a instanceof Date) {
          return "date";
        }
        if (a instanceof RegExp) {
          return "regexp";
        }
      }
      return b;
    }
    function q(a) {
      a = m(a);
      switch(a) {
        case "array":
        case "object":
          return "an " + a;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + a;
        default:
          return a;
      }
    }
    var p = "function" === typeof Symbol && Symbol.iterator, g = {array:k("array"), bool:k("boolean"), func:k("function"), number:k("number"), object:k("object"), string:k("string"), symbol:k("symbol"), any:f(E), arrayOf:function(a) {
      return f(function(b, c, e, d, g) {
        if ("function" !== typeof a) {
          return new h("Property `" + g + "` of component `" + e + "` has invalid PropType notation inside arrayOf.");
        }
        b = b[c];
        if (!Array.isArray(b)) {
          return b = l(b), new h("Invalid " + d + " `" + g + "` of type " + ("`" + b + "` supplied to `" + e + "`, expected an array."));
        }
        for (c = 0; c < b.length; c++) {
          var n = a(b, c, e, d, g + "[" + c + "]", "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          if (n instanceof Error) {
            return n;
          }
        }
        return null;
      });
    }, element:function() {
      return f(function(b, c, d, g, f) {
        b = b[c];
        return a(b) ? null : (b = l(b), new h("Invalid " + g + " `" + f + "` of type " + ("`" + b + "` supplied to `" + d + "`, expected a single ReactElement.")));
      });
    }(), elementType:function() {
      return f(function(a, b, c, d, g) {
        a = a[b];
        return ma.isValidElementType(a) ? null : (a = l(a), new h("Invalid " + d + " `" + g + "` of type " + ("`" + a + "` supplied to `" + c + "`, expected a single ReactElement type.")));
      });
    }(), instanceOf:function(a) {
      return f(function(b, c, e, d, g) {
        if (!(b[c] instanceof a)) {
          var n = a.name || "<<anonymous>>";
          b = b[c];
          b = b.constructor && b.constructor.name ? b.constructor.name : "<<anonymous>>";
          return new h("Invalid " + d + " `" + g + "` of type " + ("`" + b + "` supplied to `" + e + "`, expected ") + ("instance of `" + n + "`."));
        }
        return null;
      });
    }, node:function() {
      return f(function(a, b, c, d, g) {
        return r(a[b]) ? null : new h("Invalid " + d + " `" + g + "` supplied to " + ("`" + c + "`, expected a ReactNode."));
      });
    }(), objectOf:function(a) {
      return f(function(b, c, e, d, g) {
        if ("function" !== typeof a) {
          return new h("Property `" + g + "` of component `" + e + "` has invalid PropType notation inside objectOf.");
        }
        b = b[c];
        c = l(b);
        if ("object" !== c) {
          return new h("Invalid " + d + " `" + g + "` of type " + ("`" + c + "` supplied to `" + e + "`, expected an object."));
        }
        for (var n in b) {
          if (La(b, n) && (c = a(b, n, e, d, g + "." + n, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"), c instanceof Error)) {
            return c;
          }
        }
        return null;
      });
    }, oneOf:function(a) {
      return Array.isArray(a) ? f(function(b, e, g, d, f) {
        b = b[e];
        for (e = 0; e < a.length; e++) {
          if (c(b, a[e])) {
            return null;
          }
        }
        e = JSON.stringify(a, function(a, b) {
          return "symbol" === m(b) ? String(b) : b;
        });
        return new h("Invalid " + d + " `" + f + "` of value `" + String(b) + "` " + ("supplied to `" + g + "`, expected one of " + e + "."));
      }) : (1 < arguments.length ? C("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).") : C("Invalid argument supplied to oneOf, expected an array."), E);
    }, oneOfType:function(a) {
      if (!Array.isArray(a)) {
        return C("Invalid argument supplied to oneOfType, expected an instance of array."), E;
      }
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if ("function" !== typeof c) {
          return C("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + q(c) + " at index " + b + "."), E;
        }
      }
      return f(function(b, c, e, g, d) {
        for (var f = 0; f < a.length; f++) {
          if (null == (0,a[f])(b, c, e, g, d, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")) {
            return null;
          }
        }
        return new h("Invalid " + g + " `" + d + "` supplied to " + ("`" + e + "`."));
      });
    }, shape:function(a) {
      return f(function(b, c, e, g, d) {
        b = b[c];
        c = l(b);
        if ("object" !== c) {
          return new h("Invalid " + g + " `" + d + "` of type `" + c + "` " + ("supplied to `" + e + "`, expected `object`."));
        }
        for (var f in a) {
          if (c = a[f]) {
            if (c = c(b, f, e, g, d + "." + f, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")) {
              return c;
            }
          }
        }
        return null;
      });
    }, exact:function(a) {
      return f(function(b, c, g, d, e) {
        var f = b[c], n = l(f);
        if ("object" !== n) {
          return new h("Invalid " + d + " `" + e + "` of type `" + n + "` " + ("supplied to `" + g + "`, expected `object`."));
        }
        n = Ka({}, b[c], a);
        for (var k in n) {
          n = a[k];
          if (!n) {
            return new h("Invalid " + d + " `" + e + "` key `" + k + "` supplied to `" + g + "`.\nBad object: " + JSON.stringify(b[c], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(a), null, "  "));
          }
          if (n = n(f, k, g, d, e + "." + k, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")) {
            return n;
          }
        }
        return null;
      });
    }};
    h.prototype = Error.prototype;
    g.checkPropTypes = J;
    g.resetWarningCache = J.resetWarningCache;
    return g.PropTypes = g;
  };
  m = D(function(a) {
    a.exports = Ma(ma.isElement, !0);
  });
  var T = t.createContext(), Na = Object.assign || function(a) {
    for (var b = 1; b < arguments.length; b++) {
      var c = arguments[b], h;
      for (h in c) {
        Object.prototype.hasOwnProperty.call(c, h) && (a[h] = c[h]);
      }
    }
    return a;
  }, Oa = {border:0, clip:"rect(0 0 0 0)", height:"1px", width:"1px", margin:"-1px", padding:0, overflow:"hidden", position:"absolute"}, H = function(a) {
    return M.createElement("div", Na({style:Oa}, a));
  }, oa = D(function(a) {
    (function(b, c) {
      a.exports = c();
    })(Fa, function() {
      function a(a) {
        if (!a) {
          return !0;
        }
        if (!f(a) || 0 !== a.length) {
          for (var b in a) {
            if (q.call(a, b)) {
              return !1;
            }
          }
        }
        return !0;
      }
      function c(a) {
        return "number" === typeof a || "[object Number]" === t.call(a);
      }
      function h(a) {
        return "string" === typeof a || "[object String]" === t.call(a);
      }
      function f(a) {
        return "object" === typeof a && "number" === typeof a.length && "[object Array]" === t.call(a);
      }
      function k(a) {
        var b = parseInt(a);
        return b.toString() === a ? b : a;
      }
      function m(b, e, d, f) {
        c(e) && (e = [e]);
        if (a(e)) {
          return b;
        }
        if (h(e)) {
          return m(b, e.split("."), d, f);
        }
        var g = k(e[0]);
        if (1 === e.length) {
          return e = b[g], void 0 !== e && f || (b[g] = d), e;
        }
        void 0 === b[g] && (c(g) ? b[g] = [] : b[g] = {});
        return m(b[g], e.slice(1), d, f);
      }
      function l(b, e) {
        c(e) && (e = [e]);
        if (!a(b)) {
          if (a(e)) {
            return b;
          }
          if (h(e)) {
            return l(b, e.split("."));
          }
          var d = k(e[0]), g = b[d];
          if (1 === e.length) {
            void 0 !== g && (f(b) ? b.splice(d, 1) : delete b[d]);
          } else {
            if (void 0 !== b[d]) {
              return l(b[d], e.slice(1));
            }
          }
          return b;
        }
      }
      var t = Object.prototype.toString, q = Object.prototype.hasOwnProperty, p = {ensureExists:function(a, b, c) {
        return m(a, b, c, !0);
      }, set:function(a, b, c, d) {
        return m(a, b, c, d);
      }, insert:function(a, b, c, d) {
        var e = p.get(a, b);
        d = ~~d;
        f(e) || (e = [], p.set(a, b, e));
        e.splice(d, 0, c);
      }, empty:function(b, d) {
        if (a(d)) {
          return b;
        }
        if (!a(b)) {
          var e, g;
          if (!(e = p.get(b, d))) {
            return b;
          }
          if (h(e)) {
            return p.set(b, d, "");
          }
          if ("boolean" === typeof e || "[object Boolean]" === t.call(e)) {
            return p.set(b, d, !1);
          }
          if (c(e)) {
            return p.set(b, d, 0);
          }
          if (f(e)) {
            e.length = 0;
          } else {
            if ("object" === typeof e && "[object Object]" === t.call(e)) {
              for (g in e) {
                q.call(e, g) && delete e[g];
              }
            } else {
              return p.set(b, d, null);
            }
          }
        }
      }, push:function(a, b) {
        var c = p.get(a, b);
        f(c) || (c = [], p.set(a, b, c));
        c.push.apply(c, Array.prototype.slice.call(arguments, 2));
      }, coalesce:function(a, b, c) {
        for (var d, e = 0, f = b.length; e < f; e++) {
          if (void 0 !== (d = p.get(a, b[e]))) {
            return d;
          }
        }
        return c;
      }, get:function(b, d, f) {
        c(d) && (d = [d]);
        if (a(d)) {
          return b;
        }
        if (a(b)) {
          return f;
        }
        if (h(d)) {
          return p.get(b, d.split("."), f);
        }
        var e = k(d[0]);
        return 1 === d.length ? void 0 === b[e] ? f : b[e] : p.get(b[e], d.slice(1), f);
      }, del:function(a, b) {
        return l(a, b);
      }};
      return p;
    });
  });
  var pa = function(a) {
    return function(b) {
      return typeof b === a;
    };
  };
  var Pa = function(a, b) {
    var c = 1, h = b || function(a, b) {
      return b;
    };
    "-" === a[0] && (c = -1, a = a.substr(1));
    return function(b, d) {
      var f;
      b = h(a, oa.get(b, a));
      d = h(a, oa.get(d, a));
      b < d && (f = -1);
      b > d && (f = 1);
      b === d && (f = 0);
      return f * c;
    };
  };
  var ca = function() {
    var a = Array.prototype.slice.call(arguments), b = a.filter(pa("string")), c = a.filter(pa("function"))[0];
    return function(a, d) {
      for (var f = b.length, h = 0, l = 0; 0 === h && l < f;) {
        h = Pa(b[l], c)(a, d), l++;
      }
      return h;
    };
  };
  let qa = "B kB MB GB TB PB EB ZB YB".split(" "), ra = (a, b) => {
    let c = a;
    "string" === typeof b ? c = a.toLocaleString(b) : !0 === b && (c = a.toLocaleString());
    return c;
  };
  var da = (a, b) => {
    if (!Number.isFinite(a)) {
      throw new TypeError(`Expected a finite number, got ${typeof a}: ${a}`);
    }
    b = Object.assign({}, b);
    if (b.signed && 0 === a) {
      return " 0 B";
    }
    var c = 0 > a;
    let h = c ? "-" : b.signed ? "+" : "";
    c && (a = -a);
    if (1 > a) {
      return a = ra(a, b.locale), h + a + " B";
    }
    c = Math.min(Math.floor(Math.log10(a) / 3), qa.length - 1);
    a = Number((a / Math.pow(1000, c)).toPrecision(3));
    a = ra(a, b.locale);
    return h + a + " " + qa[c];
  }, W = {color:void 0, size:void 0, className:void 0, style:void 0, attr:void 0}, V = t.createContext && t.createContext(W), y = function() {
    y = Object.assign || function(a) {
      for (var b, c = 1, h = arguments.length; c < h; c++) {
        b = arguments[c];
        for (var f in b) {
          Object.prototype.hasOwnProperty.call(b, f) && (a[f] = b[f]);
        }
      }
      return a;
    };
    return y.apply(this, arguments);
  }, X = function(a) {
    return F({tag:"svg", attr:{viewBox:"0 0 14 16"}, child:[{tag:"path", attr:{fillRule:"evenodd", d:"M13 4H7V3c0-.66-.31-1-1-1H1c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 4H1V3h5v1z"}}]})(a);
  };
  X.displayName = "GoFileDirectory";
  var Y = function(a) {
    return F({tag:"svg", attr:{viewBox:"0 0 12 16"}, child:[{tag:"path", attr:{fillRule:"evenodd", d:"M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"}}]})(a);
  };
  Y.displayName = "GoFile";
  var aa = function(a) {
    return F({tag:"svg", attr:{viewBox:"0 0 496 512"}, child:[{tag:"path", attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(a);
  };
  aa.displayName = "FaGithub";
  var Z = function(a) {
    return F({tag:"svg", attr:{viewBox:"0 0 512 512"}, child:[{tag:"path", attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(a);
  };
  Z.displayName = "FaTwitter";
  var O = {color:"#0076ff", textDecoration:"none", ":hover":{textDecoration:"underline"}}, x = {paddingTop:6, paddingRight:3, paddingBottom:6, paddingLeft:3, borderTop:"1px solid #eaecef"}, N = A({}, x, {color:"#424242", width:17, paddingRight:2, paddingLeft:10, "@media (max-width: 700px)":{paddingLeft:20}}), P = A({}, x, {textAlign:"right", paddingRight:10, "@media (max-width: 700px)":{paddingRight:20}});
  ba.propTypes = {path:m.string.isRequired, details:m.objectOf(m.shape({path:m.string.isRequired, type:m.oneOf(["directory", "file"]).isRequired, contentType:m.string, integrity:m.string, size:m.number})).isRequired};
  ea.propTypes = {path:m.string.isRequired, details:m.shape({contentType:m.string.isRequired, highlights:m.arrayOf(m.string), uri:m.string, integrity:m.string.isRequired, language:m.string.isRequired, size:m.number.isRequired}).isRequired};
  var Da = c.css(ha(), '\nfont-family: -apple-system,\n  BlinkMacSystemFont,\n  "Segoe UI",\n  "Roboto",\n  "Oxygen",\n  "Ubuntu",\n  "Cantarell",\n  "Fira Sans",\n  "Droid Sans",\n  "Helvetica Neue",\n  sans-serif;\n', "\nfont-family: Menlo,\n  Monaco,\n  Lucida Console,\n  Liberation Mono,\n  DejaVu Sans Mono,\n  Bitstream Vera Sans Mono,\n  Courier New,\n  monospace;\n"), Ea = c.css(fa()), ja = {color:"#0076ff", textDecoration:"none", ":hover":{textDecoration:"underline"}}, Qa = m.shape({path:m.string.isRequired, 
  type:m.oneOf(["directory", "file"]).isRequired, details:m.object.isRequired});
  ia.propTypes = {packageName:m.string.isRequired, packageVersion:m.string.isRequired, availableVersions:m.arrayOf(m.string), filename:m.string.isRequired, target:Qa.isRequired};
  z.hydrate(M.createElement(ia, window.__DATA__ || {}), document.getElementById("root"));
})(React, ReactDOM, emotionCore);

</script></body></html>