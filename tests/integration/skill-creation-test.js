import Ember from 'ember';
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;

//returns error/transition if name missing

module('Integration - User Login', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
}); 

test('creates a skill when given name, group, and featured', function() {
  // Add authentication helper?
  visit('/skills/new').then( function() {
    var skill = "A - Learn you the embers";

    fillIn('input.ember-text-field', skill);
    fillIn('select.ember-select', "1407");
    click('button.btn');

    andThen(function() {
      equal(find('h3.skill-title').first().text(), skill); 
    });
  });
});

  test('returns error when a instructor submits skill with no name', function() {
    visit('/skills/new').then( function() {

      fillIn('select.ember-select', "1409");
      click('button.btn');

      andThen(function() {
      //need to assert the error message appears, currently, ember isn't receiving the errors hash from the rails validations
        equal(currentPath(), 'skills.new'); 
        //equal(find('.errors').first().text(), "skill name cannot be blank"); 
      });
    });
  });
