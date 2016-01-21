// wrappes console parameters

module.exports = function(context) {
  var envName = 'development';
  var opts = context['opts'];
  var options = {};
  var argv = []

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
  }

  if(env != null){
    envName = env.split('=')[1];
  }

  return {
    envName: envName,
  }
};
