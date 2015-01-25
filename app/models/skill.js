import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  group: DS.belongsTo('group'),
  featured: DS.attr('boolean')
});
