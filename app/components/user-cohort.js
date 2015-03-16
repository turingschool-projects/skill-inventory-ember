import Ember from "ember";

export default Ember.Component.extend({

  editing: false,
  cohortNames: ["1409", "1410", "1412", "1502"],

  actions: {

    startEditing: function() {
      this.set("editing", true);
    },

    stopEditing: function() {
      var user = this.get("user");
      user.save().then(function() {
        this.set("editing", false);
      }.bind(this));
    }
  },


});
