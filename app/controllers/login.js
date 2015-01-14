import Ember from 'ember';

export default Ember.ObjectController.extend({

  actions: {

    authenticate: function () {
      // if current_user is student transition to student-dashboard, else instructor-dashboard
      this.transitionToRoute('student-dashboard');
    },

  }

});
