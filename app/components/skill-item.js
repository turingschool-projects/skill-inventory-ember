import Ember from 'ember';

export default Ember.Component.extend({

  skillLevel: 0,

  actions: {

    rateSkill: function (skillLevel) {
      this.set('skillLevel', skillLevel);
    }

  }

});