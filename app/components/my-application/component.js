import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  navItems: Ember.computed.uniqBy('items', 'artform'),
  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  actions: {
    signOut () {
      this.sendAction('signOut');
    },
  },
});
