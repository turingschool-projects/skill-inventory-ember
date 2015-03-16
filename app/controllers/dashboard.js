import Ember from 'ember';

export default Ember.Controller.extend({

  editing: false,

  cohorts: [
    {name: "1409", id: 1},
    {name: "1410", id: 2},
  ],

  actions: {

    startEditing: function() {
      this.set('editing', true);
    },

    stopEditing: function() {
      var user = this.get('user');
      var newCohort = this.store.createRecord('cohort', {
        name: this.get('name'),
      });

      user.set('cohort', newCohort);

      user.save().then(function() {
        this.set('editing', false);
      }.bind(this));
    }
  },


});

