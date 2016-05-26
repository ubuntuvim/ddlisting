/* jshint node: true */

module.exports = function(environment) {

<<<<<<< HEAD
    var firebaseAppUrl = 'https://luminous-heat-9079.firebaseio.com/';
=======
    // var firebaseAppUrl = 'https://luminous-heat-9079.firebaseio.com/';
>>>>>>> b9e7347ab8469f935fae0e357f4e970655a0837d

  var ENV = {
    modulePrefix: 'ddlisting',
    environment: environment,
<<<<<<< HEAD
    contentSecurityPolicy: {
          'default-src': "'none'",
          'script-src': "'self' 'unsafe-inline' 'unsafe-eval' *",
          'font-src': "'self' *",
          'connect-src': "'self' *",
          'img-src': "'self' *",
          'style-src': "'self' 'unsafe-inline' *",
          'frame-src': "*"
      },
    // contentSecurityPolicy: { 'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com" },
    firebase: firebaseAppUrl,
=======
    contentSecurityPolicyHeader: 'Content-Security-Policy',
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' *",
      'font-src': "'self' *",
      'connect-src': "'self' http://localhost:8080",
      'img-src': "'self' *",
      'style-src': "'self' 'unsafe-inline' *",
      'frame-src': "*",
      "Access-Control-Allow-Origin": "'self' *",
      'Origin': 'http://localhost:8080'

    },
    // contentSecurityPolicy: { 'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com" },
    // firebase: firebaseAppUrl,
>>>>>>> b9e7347ab8469f935fae0e357f4e970655a0837d
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
      API_HOST: 'http://localhost:8080'
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
