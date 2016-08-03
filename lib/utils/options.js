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
  var region = null;

  if (opts != undefined) {
    options = opts['options'];
  }

  if (options != undefined) {
    argv = options['argv'];
  }

  if (argv != undefined) {
    env = argv.find(function(element){
      return element.includes('env');
    });

    forceBuild = argv.find(function(element){
      return element.includes('force-build');
    });

    // dirty, because this is for the tips project only
    region = argv.find(function(element){
      return element.includes('region');
    });
  }

  if(env != null){
    envName = env.split('=')[1];
  }

  // dirty, because this is for the tips project only
  if(region != null){
    region = region.split('=')[1];
  }

  return {
    forceBuild: (forceBuild != null),
    envName: envName,

    // dirty, because this is for the tips project only
    region: region
  }
};
