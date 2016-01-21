// Run grunt task as sequence task and blocks the cordova main process until the grunt tasks are
// ready. Grunt task is cordova-#{cordovaHookName}

module.exports = function(context) {
  var options     = require('./options')(context);
  var runSequence = context.requireCordovaModule('run-sequence');
  var coffee      = context.requireCordovaModule('coffee-script');
  var Q           = context.requireCordovaModule('q');
  var gulpTask    = 'cordova-' + context.hook;
  var deferral    = new Q.defer();

  coffee.register();

  require('../../../../gulp/gulpfile.coffee')({
    env: options.envName,
    notify: (options.envName == 'development')
  });

  runSequence(gulpTask, deferral.resolve);

  return deferral.promise;
}
