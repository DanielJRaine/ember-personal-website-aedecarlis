import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['col-lg-6', 'col-md-6', 'col-sm-12', 'col-xs-12'],
  actions: {
    delete() {
      this.sendAction('delete', this.get('item'));
    },
  },
});
