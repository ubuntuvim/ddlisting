/**
* @Author: ubuntuvim
* @Date:   2016-07-05T22:30:05+08:00
* @Last modified by:   ubuntuvim
* @Last modified time: 2016-08-31T23:49:07+08:00
*/



/* jshint node: true */

module.exports = function(environment) {

    // var firebaseAppUrl = 'https://luminous-heat-9079.firebaseio.com/';
  var ENV = {
    modulePrefix: 'ddlisting',
    environment: environment,
    contentSecurityPolicy: {
        'default-src': "'none'",
        'script-src': "'self' 'unsafe-inline' 'unsafe-eval' *",
        'font-src': "'self' *",
        'connect-src': "'self' *",
        'img-src': "'self' *",
        'style-src': "'self' 'unsafe-inline' *",
        'frame-src': "*"

        // 'script-src': "'self' 'unsafe-eval' apis.google.com'",
        // 'frame-src': ''self' https://*.firebaseapp.com',
        // 'connect-src': ''self' wss://*.firebaseio.com https://*.googleapis.com'
    },
    // firebase: {
    //     // apiKey: "AIzaSyDqkMj_1Z6XKeUSZngy30bLVZvhrL7qBh8",
    //     // authDomain: "luminous-heat-9079.firebaseapp.com",
    //     // databaseURL: "https://luminous-heat-9079.firebaseio.com",
    //     // storageBucket: "luminous-heat-9079.appspot.com"
    //     apiKey: "AIzaSyALZOzYZbc3Rp7t5zvfW4JKbEwJIZQaAq0",
    //     authDomain: "ddlisting-49d6e.firebaseapp.com",
    //     // databaseURL: "https://ddlisting-49d6e.firebaseio.com",
    //     databaseURL: "https://ddlisting.wilddogio.com",
    //     storageBucket: "ddlisting-49d6e.appspot.com"
    // },
    cloudinary: {
      cloudName: `ddlisting`,
      uploadPreset: `oo021mf7`,
    },
    // 权限控制
    // torii: {
    //     sessionServiceName: 'session'
    // },
    // contentSecurityPolicy: { 'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com" },
    // firebase: firebaseAppUrl,
    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      API_HOST: 'http://localhost:8080',

      // 项目中使用的常量名
      __LOGIN_USER_NICKNAME__: "__LOGIN_USER_NICKNAME__",
      __LOGIN_USER_EMAIL__: "__LOGIN_USER_EMAIL__",
      __LOGIN_USER_ID__: "__LOGIN_USER_ID__",
      __DEFAULT_PROJECT_ID__: "__DEFAULT_PROJECT_ID__",
      __DEFAULT_PROJECT_ID__: "__DEFAULT_PROJECT_ID__",
      __DEFAULT_PROFILE_ID__: "__DEFAULT_PROFILE_ID__",
      __SHOW_USER_GUIDE_FLAG__: "__SHOW_USER_GUIDE_FLAG__"  //用户引导标记

    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
