import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  skills: DS.hasMany('skill', {async: true}),
  users: DS.hasMany('user', {async: true})
});
