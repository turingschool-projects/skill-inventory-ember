import Ember from 'ember';

export default Ember.Component.extend({

  skillLevel: 0,

  actions: {

    rateSkill: function (skillLevel) {
      var title = this.get('skill.title');
      this.set('skillLevel', skillLevel);
      console.log('You have rated ' + title + ' as ' + this.get('skillLevel'));
    }

  }

});
