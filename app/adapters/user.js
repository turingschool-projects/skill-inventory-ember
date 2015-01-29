import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://skill-inventory.herokuapp.com',
  namespace: 'api/v1'
});
