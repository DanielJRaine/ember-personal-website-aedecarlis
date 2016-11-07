import Ember from 'ember';
// Visual route
export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('portfolio');
  }
});
