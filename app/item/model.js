import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  body: DS.attr('string'),
  artform: DS.attr('string'),
  portfolio: DS.attr('string'),
  section: DS.attr('string'),
});
