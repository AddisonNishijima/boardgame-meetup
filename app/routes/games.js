import Ember from 'ember';

export default Ember.Route.extend({
  currentPlayer: Ember.inject.service(),
  model() {
    return this.store.findAll('game');
  },
  actions: {
    ownGame(game){
      var player = this.get('currentPlayer.curPlayer');
      game.get('owners').addObject(player);
      player.get('games_owned').addObject(game);
      game.save().then(function(){
        return player.save();
      });
    },
    lostGame(game){
      var player = this.get('currentPlayer.curPlayer');
      game.set('owner', player);
      player.get('games_owned').addObject(game);
      game.save().then(function(){
        return player.save();
      });
    }
  }
});
