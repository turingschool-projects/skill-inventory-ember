import Ember from 'ember';

export default Ember.Component.extend({
  skillLevel: 0,

  actions: {

    rateSkill: function (skillLevel) {
      this.set('skillLevel', skillLevel);
      this.setProperties('skill.ratings', {score: skillLevel, user_id: user_id, section_id: section_id}).save();
    }

  }

});
