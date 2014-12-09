'use strict';

var global = require('./global');
module.exports = function() {
  //let's just return the config value of value.i.want
  return global.get("valueIWant");
}