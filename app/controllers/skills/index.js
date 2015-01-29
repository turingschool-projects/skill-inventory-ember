import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['rating.score'],

  actions: {
    sortBy: function (properties) {
      this.set('sortProperties', [properties]);
    }
  }
});
