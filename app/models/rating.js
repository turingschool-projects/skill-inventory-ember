import DS from 'ember-data';

export default DS.Model.extend({
  score: DS.attr('number'),
  skill: DS.belongsTo('skill', {async: true}),
  user: DS.belongsTo('user', {async: true})
});
