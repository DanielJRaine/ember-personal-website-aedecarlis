import Ember from 'ember';

export default Ember.Route.extend({
  uploads: Ember.inject.service(),

  actions: {
    createItem(newItem) {
      console.log(newItem);
      return this.get('uploads').newItemUpload(newItem)
      .catch((error) => console.error(error));
    },
  },
});
