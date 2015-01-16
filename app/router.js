import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.resource('skills', function () {
    this.route("featured");
    this.route("all");
  });

  this.resource('users', function () {
    this.resource('user', { path: ':user_id' });
  });

});

export default Router;
