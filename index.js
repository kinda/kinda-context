"use strict";

var KindaObject = require('kinda-object');

var KindaContext = KindaObject.extend('KindaContext', function() {
  this.create = function(klass) {
    var args = Array.prototype.slice(arguments, 1);
    var obj = klass.create.apply(klass, args);
    obj.context = this;
    return obj;
  };
});

module.exports = KindaContext;
