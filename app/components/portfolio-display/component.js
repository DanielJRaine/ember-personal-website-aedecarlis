import Ember from 'ember';

export default Ember.Component.extend({
  navItems: Ember.computed.uniqBy('items', 'section'),
});
