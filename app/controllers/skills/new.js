import Ember from 'ember';

export default Ember.ObjectController.extend({

  currentUserIsInstructor: function () {
    return this.get('session.currentUser.role') === 'instructor';
  }.property('session.currentUser'),

  actions: {
    saveSkill: function() {
      var self = this;

      this.get('model').save().then(function() {
        self.transitionToRoute('skills');
      });
    }
  }
});
