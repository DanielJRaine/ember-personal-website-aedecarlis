import Ember from 'ember';

export default Ember.Component.extend({
  newItem: {},

  actions: {
    create() {
      let newItem = new FormData(event.target);
      this.sendAction('create', newItem);
      this.set('newItem', null);
    }
  }
});
