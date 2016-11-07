import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // find a way to extract the portfolio out of item
    return this.get('store').findAll('item');
  }
});
