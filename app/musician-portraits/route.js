import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').query('item', {portfolio: 'fine-arts'});
    // return this.get('store').findAll('item');
  },
  item: {},
  actions: {
    destroyItem (data) {
      let item = data;
      console.log('item: ',item);
      return item.destroyRecord()
      .catch((error) => console.error(error));
    },
  }
});
