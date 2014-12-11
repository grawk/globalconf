'use strict';


var IndexModel = require('../models/index');

/*
  Previously in pre-kraken 1.0 folks would use nconf to get application configuration
  and pass to something like a middleware function generator like this:
  router.get('/', authenticate(nconf.get("value:i:want")) , function (req, res) {   ...

  Since nconf is no longer used for kraken configuration, it is recommended to try and
  satisfy this requirement within the context of the req.app.kraken object as below.
  Note the wrapping of the "authenticate" generator function in order to scope it within the request
 */
module.exports = function (router) {
    var model = new IndexModel();
    router.get('/', wrapAuth , function (req, res) {
        res.render('index', model);
    });
};

function wrapAuth(req, res, next) {
  authenticate(req.app.kraken.get("value:i:want"))(req, res, next);
}
function authenticate(contextual) {
  console.log('call authenticate with context', contextual);
  return function(req, res, next) {
    console.log('authenticate does some stuff');
    next();
  };
}

