import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  actions: {
    delete() {
      console.log("in destroy item component: ", this.get('item'));
      this.sendAction('delete', this.get('item'));
    },
  },
});
