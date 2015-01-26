import Ember from 'ember';

export default Ember.Component.extend({
  skillLevel: 0,

  actions: {

    rateSkill: function() {
      var self = this;

      this.store.createRecord('rating');
    }

  }

});
