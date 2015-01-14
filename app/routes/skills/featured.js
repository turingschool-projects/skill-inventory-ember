import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      { title: 'Be awesome' },
      { title: 'Be more awesome' }
    ];
  }
});

// import Ember from 'ember';

// export default Ember.Route.extend({
//   model: function () {
//     return this.store.find('note');
//   }
// });
