require('coffee-script').register();
require('../../../gulp/gulpfile.coffee')({
  env: 'development',
  notify: true
});

require('gulp').start('cordova-before_prepare');