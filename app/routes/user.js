import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('user', params.user_id);
  }
});

// import Ember from 'ember';

// export default Ember.Route.extend({
//   model: function() {
//     return [
//       { name: 'User 1', id: 1 }
//     ];
//   }
// });