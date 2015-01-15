import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.find('user', 'current_user');
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