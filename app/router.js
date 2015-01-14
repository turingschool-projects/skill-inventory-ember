import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.resource('student-dashboard', function () {
    this.resource('skills', function () {
      this.resource('all');
      this.resource('featured');
    });
  });
});

export default Router;
