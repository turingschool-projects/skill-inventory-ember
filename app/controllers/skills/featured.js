import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['section.name'],

  actions: {
    sortBy: function (properties) {
      this.set('sortProperties', [properties])
    }
  }
});
