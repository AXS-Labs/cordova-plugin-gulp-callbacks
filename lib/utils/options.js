/**
 *******************************************************
 *                                                     *
 *   Copyright (C) Microsoft. All rights reserved.     *
 *                                                     *
 *******************************************************
 */

module.exports = function(context) {
  var envName = 'development';
  var opts = context['opts'];
  var options = {};
  var argv = [];
  var env = null;
  var forceBuild = null;

  if (opts != undefined) {
    options = opts['options'];
  }

  if (options != undefined) {
    argv = options['argv'];
  }

  if (argv != undefined) {
    var env = argv.find(function(element){
      return element.includes('env');
    });

    forceBuild = argv.find(function(element){
      return element.includes('force-build');
    });
  }

  if(env != null){
    envName = env.split('=')[1];
  }

  return {
    forceBuild: (forceBuild != null),
    envName: envName,
  }
};
