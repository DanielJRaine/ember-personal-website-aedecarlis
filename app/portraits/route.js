import Ember from 'ember';

export default Ember.Route.extend({
  edits: Ember.inject.service(),

  model() {
    return this.get('store').query('item', {section: 'portraits'});
  },

  actions: {
    destroyItem (item) {
      return item.destroyRecord()
      .catch((error) => console.error(error));
    },
    editItem (editedItem) {
      this.get('edits').editItem(editedItem);
    },
  },
});
