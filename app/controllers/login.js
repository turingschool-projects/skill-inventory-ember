import Ember from 'ember';

export default Ember.ObjectController.extend({

  actions: {

    authenticate: function () {
      this.transitionToRoute('student-dashboard');
    },

  }

});
