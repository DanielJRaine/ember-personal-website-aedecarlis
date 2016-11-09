import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit() {
      let editedItem = new FormData(event.target);
      editedItem.id = this.get('item').get('id');
      // editedItem.id = this.get('item').id;
      // console.log("edited item", new FormData(event.target));
      this.sendAction('edit', editedItem);
      this.set('editedItem', null);
    }
  }
});