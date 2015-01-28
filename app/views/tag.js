import Ember from 'ember';

export default Ember.View.extend({
  click: function() {
    $('.new-tag-field').toggle();
  }
});
