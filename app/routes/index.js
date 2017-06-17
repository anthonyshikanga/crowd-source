import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      festivals: this.store.findAll('festival')
    })
  },
  actions: {
    saveNewFestival(params){
      var newFestival= this.store.createRecord('festival',params);
      newFestival.save(),
      this.transitionTo('index')
    }
  }
});
