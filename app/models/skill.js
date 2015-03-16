import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  cohorts: DS.hasMany('cohort', {async: true}),
  users: DS.hasMany('user', {async: true}),
  tags: DS.hasMany('tag', {async: true}),
  ratings: DS.hasMany('rating', {async: true})
});
