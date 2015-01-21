import Ember from 'ember';
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;

module('Integration - Skill Creation', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
}); 

//happy path
// logs in user and returns github usernam and token

//sad path
// returns error message

