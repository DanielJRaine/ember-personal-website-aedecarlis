import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',

  actions: {
    delete() {
      this.sendAction('delete', this.get('item'));
    },
  },
});
