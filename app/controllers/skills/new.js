import Ember from 'ember';

export default Ember.ObjectController.extend({
  // replace this with data from rails api call (get all groups)
  groups: ["1407", "1409", "1410", "1412"],

  actions: {
    saveSkill: function () {
      alert('Save Skill!');
    }

    // saveSkill: function () {
    //   this.store.createRecord('skill', {
    //     name: this.get('name'),
    //     group: this.get('group')
    //   }).save().then(function (skill) {
    //     this.transitionToRoute('skill', skill);
    //   }.bind(this));
    // }
  }
});
