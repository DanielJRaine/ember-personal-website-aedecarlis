import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['col-lg-4'],
  actions: {
    delete() {
      this.sendAction('delete', this.get('item'));
    },
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
