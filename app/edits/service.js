import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),

  editItem (editedItem) {
    return this.get('ajax').patch('/items/' + editedItem.id, {
      data: editedItem,
      contentType: false,
      processData: false,
    });
  },
});
