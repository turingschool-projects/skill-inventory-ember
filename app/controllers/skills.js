import Ember from 'ember';

export default Ember.Controller.extend({

  currentUserIsInstructor: function () {
    return this.get('session.currentUser.role') === 'instructor';
  }.property('session.currentUser')

});
