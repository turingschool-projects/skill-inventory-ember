import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      { title: 'Be sort of cool' },
      { title: 'Be more awesome' },
      { title: 'Be less awesome' },
      { title: 'Be like Steve' }
    ];
  }
});

// import Ember from 'ember';

// export default Ember.Route.extend({
//   model: function () {
//     return this.store.find('skill');
//   }
// });
