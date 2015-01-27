import Ember from 'ember';

export default Ember.ObjectController.extend({
  // replace this with data from rails api call (get all groups)

  currentUserIsInstructor: function () {
    return this.get('session.currentUser.role') === 'instructor';
  }.property('session.currentUser'),

  observeSection: function() {
    console.log(this.get('section'));
  }.observes('section'),

  actions: {
    saveSkill: function() {
      var self = this;

      this.get('model').save().then(function() {
        self.transitionToRoute('skills');
      });
    }
  }
});
