import Ember from 'ember';

export default Ember.Component.extend({
  currentPlayer: Ember.inject.service(),
  ownsGame: Ember.computed('currentPlayer.curPlayer.games_owned', 'game', function(){
    var doesOwn= false;
    var game = this.get('game');
    var games = this.get('currentPlayer.curPlayer.games_owned');
    if(games){
      games.forEach(function(g){
        if(g.id === game.id){
          doesOwn = true;
        }
      });
    }
    return doesOwn;
  }),
  actions: {
    ownGame(game){
      this.sendAction('ownGame', game);
    },
    lostGame(game){
      this.sendAction('lostGame', game);
    }
  }
});
