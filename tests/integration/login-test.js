import Ember from 'ember';
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;

module('Integration - User Login', {
  setup: function() {
    App = startApp();
    // Sinon may be necessary for later integration tests, so here's the proper setup:
    //this.xhr                = sinon.useFakeXMLHttpRequest();
    //this.server             = sinon.fakeServer.create();
    this.server.autoRespond = true;
    //sinon.spy(Ember.$, 'ajax');

  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
}); 
