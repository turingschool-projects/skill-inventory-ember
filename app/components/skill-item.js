import Ember from 'ember';

export default Ember.Component.extend({
  skillLevel: 0,

  actions: {

    rateSkill: function (skillLevel) {
      var store = this.get('targetObject.store');
      store.createRecord('rating').setProperties({
        score: 5,
        skill: this.get('skill'),
        user: this.get('user')
      }).save();
    }

  }

});
