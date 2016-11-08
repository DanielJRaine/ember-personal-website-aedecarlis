import Ember from 'ember';
// Visual route
export default Ember.Route.extend({
  model() {
    // return this.get('store').findAll('portfolio')
    // .then((portfolios) => {
    //   return portfolios.filter((portfolio) =>{
    //     console.log('portfolio is ', portfolio);
    //     return portfolio.get('artform') === 'visual';
    //   });
    // });

    return Ember.RSVP.hash({
      parent: 'visual',
      children: this.get('store').findAll('item').filter(/* get your porftfolios */);
    });
  },
});
// return Ember.RSVP.filter(this.get('store').findAll('portfolio'), portfolio => {
//   if (portfolio['artform'] === 'visual'){
//     return portfolio;
//   }
// })
// .then(function(result){
//   return result;
// })
// return this.get('store').findAll('portfolio').filter('portfolio', function(record) {
//   return record.get('artform') === 'visual';
// });

    // return this.get('store').query('portfolio', {artform: 'visual'})
    //   .then((results) => results.filter((portfolio) => {
    //     return portfolio.artform === 'visual';
    //   }))
    //   ;
    //
    // const portfolio = this.modelFor('portfolio');
    //
    // return this.store.query('artform', 'visual');
    // return this.store.query('portfolio', {artform: 'visual'});
    //
    // return this.store.find('portfolio', { artform: 'visual'});
    //
    // return this.get('store').query('portfolio', {artform: 'visual'});
    //
    // return this.get('store')
    // .then((results) => results.query('portfolio', {artform: 'visual'}));
