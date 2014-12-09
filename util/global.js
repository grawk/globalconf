'use strict';

function Global() {
  this.props = {};
};

Global.prototype.set = function(name, value) {
  this.props[name] = value;
  console.log('setting Global property ', name, ' = ', value);
};

Global.prototype.get = function(name) {
  return this.props[name];
};

module.exports = new Global();