import Ember from 'ember';

export default Ember.Component.extend({
  skillLevel: 0,

  actions: {

    rateSkill: function (skillLevel) {
      var store = this.get('targetObject.store');
      debugger   //this.store

      store.createRecord('rating').setProperties({
        score: skillLevel,
        skill: this.get('skill'),
      }).save();
    }

  }

});
