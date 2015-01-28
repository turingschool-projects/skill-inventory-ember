import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  section: DS.belongsTo('section', {async: true}),
  featured: DS.attr('boolean'),
  // rating: DS.hasOne('rating', {async: true})
});
