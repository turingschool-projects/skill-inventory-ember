import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  featured: DS.attr('boolean')
});
