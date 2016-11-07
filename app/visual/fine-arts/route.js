import Ember from 'ember';
// fine-arts portfolio
export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('section');
  }
});
