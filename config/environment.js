/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'skill-inventory-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.skillinventory = {
      sessionUrl: 'http://localhost:4200/api/v1/sessions'
    };

    ENV.torii = {
      sessionServiceName: 'session',
      providers: {
        'github-oauth2': {
          apiKey: process.env.GITHUB_CLIENT_ID,
          redirectUri: 'http://localhost:4200',
        }
      }
    };

    ENV.contentSecurityPolicy = {
      'connect-src': "'self' http://localhost:3000"
    }
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
    ENV.torii = {
      sessionServiceName: 'session',
      providers: {
        'github-oauth2': {
          apiKey: process.env.GITHUB_CLIENT_ID,
          redirectUri: 'http://skillinventory.divshot.io',
        }
      }
    }

    ENV.skillinventory = {
      sessionUrl: '/__/proxy/api/sessions'
    }

  }

  return ENV;
};
