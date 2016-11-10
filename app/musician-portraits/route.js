import Ember from 'ember';

export default Ember.Route.extend({
  edits: Ember.inject.service(),

  model() {
    return this.get('store').findAll('item')
    .then((items) => {
      return items.filterBy('section', 'musician-portraits');
    });
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
      // this.get('store').findRecord('item', editedItem.id)
      // .then(function(item){
      //   console.log('item:', item);
      //   console.log('edits:', editedItem);
      //   item.set('name', editedItem.get('name'));
      //   item.set('artform', editedItem.get('artform'));
      //   item.set('portfolio', editedItem.get('portfolio'));
      //   item.set('section', editedItem.get('section'));
      //   item.save();
      // passing 2 args up from component?
      // item.set(item.get('name'), editedItem.get('name'));
      // item.set(item.get('artform'), editedItem.get('artform'));
      // item.set(item.get('name'), editedItem.get('name'));
      // item.set(item.get('name'), editedItem.get('name'));


      // item.save();
      // console.log('editedItem id = ', item.get('id'));
      // .catch((error) => console.error(error));
