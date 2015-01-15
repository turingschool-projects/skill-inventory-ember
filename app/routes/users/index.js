import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      { name: 'User 1' },
      { name: 'User 2' }
    ];
  }
});