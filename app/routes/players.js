import Ember from 'ember';

export default Ember.Route.extend({
  currentPlayer: Ember.inject.service('current-player'),
  model() {
    return this.store.findAll('player');
  },
  redirect(model, transition) {
    var player = model.get('firstObject');
    if(this.get('currentPlayer.curPlayer')){
      player = this.get('currentPlayer.curPlayer');
    }
    this.transitionTo('players.player', player);
  },
});
