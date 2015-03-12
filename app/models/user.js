import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  role: DS.attr('string'),
  token: DS.attr('string'),
  username: DS.attr('string'),
  thumbnailUrl: DS.attr('string'),
  email: DS.attr('string'),
  cohort: DS.belongsTo('cohort', {async: true}),
  ratings: DS.hasMany('rating', {async: true}),
  skills: DS.hasMany('skill', {async: true})
});
