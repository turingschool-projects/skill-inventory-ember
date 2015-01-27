import Ember from 'ember';

export default Ember.ObjectController.extend({
  // replace this with data from rails api call (get all groups)
  sections: ["Module 1", "Module 2", "Module 3", "Module 4"],

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
