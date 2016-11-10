import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('item')
      .then((items) => {
        return items.filterBy('portfolio', 'fine-arts');
      });
    },
});
