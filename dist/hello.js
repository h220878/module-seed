'use strict';

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function () {
  console.log(_util2.default.inspect({
    name: 'jerryc',
    say: 'hello',
    time: Date.now()
  }, { colors: true }));
}; /*
    * @Author: JerryC (huangjerryc@gmail.com)
    * @Date: 2016-11-12 09:21:37
    * @Last Modified by: JerryC
    * @Last Modified time: 2016-11-12 09:52:47
    * @Description
    */