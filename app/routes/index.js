import Ember from 'ember';

export default Ember.Route.extend({
  currentPlayer: Ember.inject.service('current-player'),
  model() {
    return Ember.RSVP.hash({
      sessions: this.store.findAll('session'),
      players: this.store.findAll('player'),
      games: this.store.findAll('game')
    });
  },
  actions: {
    newSession(params){
      var session = this.store.createRecord('session', params);
      session.save();
      this.transitionTo('index.session', session.id);
    },
    delete3(session) {
      session.destroyRecord();
    },
    updateForm5(params, session) {
      Object.keys(params).forEach(function(key){
        if(params[key]){
          session.set(key, params[key]);
        }
      });
      session.save();
    }
  }
});
