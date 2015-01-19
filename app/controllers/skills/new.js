import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['skills'],
  // replace this with data from rails api call (get all groups)
  groups: ["1407", "1409", "1410", "1412"],
  featured: ['True', 'False'],

  actions: {
    saveSkill: function () {
      this.store.createRecord('skill', {
        name: this.get('name'),
        group: this.get('group'),
        featured: this.get('featured'),
      }).save().then(function () {
        this.transitionToRoute('skills.index');
      }.bind(this));
    }
  }
});