/**
* 引入全局模块、导入第三方库，通常是使用bower安装的库
* @Author: ubuntuvim
* @Date:   2016-05-15T15:09:11+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-08-28T23:35:49+08:00
*/
/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // app.import('bower_components/firebase/firebase.js');
  // 表单校验
  app.import("bower_components/jquery-validation/dist/jquery.validate.js");
  app.import("bower_components/jquery.cookie/jquery.cookie.js");
  // app.import("bower_components/guides/dist/guides.css");
  // app.import("bower_components/guides/dist/guides.min.js");

  app.import("bower_components/bower_components/intro.js/minified/intro.min.js");
  app.import("bower_components/bower_components/intro.js/minified/intro.min.css");
  // app.import("bower_components/bower_components/intro.js/themes/introjs-nazanin.css");

  return app.toTree();
};
