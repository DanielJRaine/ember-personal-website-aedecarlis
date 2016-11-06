import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  sections: DS.hasMany('section'),
  artform: DS.belongsTo('artform'),
});
