import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.find('skill_with_rating', 4);
  }
});
