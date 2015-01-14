import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      { title: 'Be awesome' },
      { title: 'Be more awesome' }
    ];
  }
});
