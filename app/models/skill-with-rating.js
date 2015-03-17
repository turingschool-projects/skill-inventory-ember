import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  featured: DS.attr('boolean'),
  rating: DS.attr('number'),
  skillId: DS.attr('number')
});
