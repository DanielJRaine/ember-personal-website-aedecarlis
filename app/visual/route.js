import Ember from 'ember';
// Visual route
export default Ember.Route.extend({
  model() {
    this.get('store').findAll('portfolio');
  }
});
