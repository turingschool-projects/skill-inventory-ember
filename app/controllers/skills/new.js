import Ember from 'ember';

export default Ember.ObjectController.extend({
  // replace this with data from rails api call (get all groups)
  groups: ["1407", "1409", "1410", "1412"],

  actions: {
    saveSkill: function() {
      var self = this;

      this.get('model').save().then(function() {
        self.transitionToRoute('skills');
      });
    }
  }
});
