/*
 * @Author: JerryC (huangjerryc@gmail.com)
 * @Date: 2016-11-12 09:21:37
 * @Last Modified by: JerryC
 * @Last Modified time: 2016-11-12 09:52:47
 * @Description
 */

import util from 'util';

module.exports = () => {
  console.log(util.inspect({
    name: 'jerryc',
    say: 'hello',
    time: Date.now(),
  }, { colors: true }));
};