import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  group: DS.belongsTo('group', {async: true}),
  ratings: DS.hasMany('rating', {async: true})
});
