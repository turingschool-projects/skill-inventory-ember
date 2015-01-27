import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  section_id: DS.belongsTo('group', {async: true}),
  featured: DS.attr('boolean'),
  ratings: DS.hasMany('rating', {async: true})
});
