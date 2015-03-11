import Ember from 'ember';
import config from '../config/environment';

export default Ember.Object.extend({
  fetch: function() {
    return this._fetchSession({
      "token": localStorage.getItem("token")
    });
  },

  open: function(authorization) {
    return this._fetchSession({
      "github-auth-code": authorization.authorizationCode
    });
  },

  _fetchSession: function(tokenData) {
    return new Ember.RSVP.Promise(function(resolve, reject){
      Ember.$.ajax({
        url: config.skillinventory.sessionUrl,
        type: "POST",
        data: tokenData,
        dataType: "json",
        success: function(data){
          localStorage.setItem("token", data.token);
          var currentUser = Ember.Object.create(data);
          Ember.run.bind(null, resolve({ "currentUser": currentUser }));
        },
        error: function(jqXHR, textStatus, errorThrown){
          Ember.run.bind(null, reject({ "message": errorThrown }));
        }
      });
    });
  }
});
