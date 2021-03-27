/**
 * Replace node_modules/@babel/core/lib/transformation/util/clone-deep.js
 * Temporary workaround to solve require('v8') which breaks build (see line 17)
 */

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _cloneDeepBrowser = _interopRequireDefault(require("./clone-deep-browser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v8 = {} //require("v8");

function _default(value) {
  if (v8.deserialize && v8.serialize) {
    return v8.deserialize(v8.serialize(value));
  }

  return (0, _cloneDeepBrowser.default)(value);
}