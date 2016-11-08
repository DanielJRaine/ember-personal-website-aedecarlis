import Ember from 'ember';


export default Ember.Service.extend({
  ajax: Ember.inject.service(),

  newItemUpload (newItem) {
    return this.get('ajax').post('/items', {
      data: newItem,
      contentType: false,
      processData: false,
    });
  },
});
