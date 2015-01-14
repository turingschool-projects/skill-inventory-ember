import Ember from 'ember';

export default Ember.ObjectController.extend({

  actions: {

    authenticate: function () {
      // if current_user is instructor send to instructor-dashboard
      this.transitionToRoute('skills.featured');
    },

  }

});
