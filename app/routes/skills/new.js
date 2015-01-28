import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('skill');
  },

  setupController: function(controller, model) {
    controller.set('content', model);
    controller.set('sections', this.store.all('section'));
  }
});
