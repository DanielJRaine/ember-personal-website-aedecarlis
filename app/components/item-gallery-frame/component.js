import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['col-lg-4'],
  actions: {
    delete() {
      this.sendAction('delete', this.get('item'));
    },
  },
});
