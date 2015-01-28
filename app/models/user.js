import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  section: DS.belongsTo('section', {async: true}),
  ratings: DS.hasMany('rating', {async: true})
});
