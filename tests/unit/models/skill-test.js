import {
  moduleForModel,
  test
} from 'ember-qunit';

import Skill from 'skill-inventory-ember/models/skill';

moduleForModel('skill', 'Skill', {
  needs: []
});

test('it exists', function() {
  var model = this.subject();
  ok(!!model);
});

test('it is an ember data model', function() {
  ok(this.subject() instanceof DS.Model);  
});

test('it has a name property', function() {
  var property = Skill.metaForProperty('name');
  strictEqual(property.type, 'string');
});

test('it has a group property', function() {
  var property = Skill.metaForProperty('group');
  strictEqual(property.type, 'string');
});

test('it has a featured property', function() {
  var property = Skill.metaForProperty('featured');
  strictEqual(property.type, 'boolean');
});

