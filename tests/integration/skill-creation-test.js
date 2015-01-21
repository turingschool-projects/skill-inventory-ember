import Ember from 'ember';
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;
//creates a skill when given name, group, and featured
//returns error/transition if name missing

module('Integration - User Login', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
}); 

test('it has an unordered list of contacts', function() {
  // Add authentication helper
  visit('/skills/featured').then( function() {
    ok(find('.contacts').length);
  });
});
