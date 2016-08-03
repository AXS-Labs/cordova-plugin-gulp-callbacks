module.exports = function(context) {
  var coffee      = require('coffee-script');
  var options     = require('./options')(context);
  var Q           = context.requireCordovaModule('q');
  var hookName    = context.hook;
  var gulpTask    = 'cordova-' + hookName;
  var deferral    = new Q.defer();

  coffee.register();

  options['notify'] = (options.envName == 'development')

  var gulp = require('../../../../gulp/gulpfile.coffee')(options);

  var runSequence = require('run-sequence').use(gulp);

  runSequence(gulpTask, deferral.resolve);

  return deferral.promise;
}
