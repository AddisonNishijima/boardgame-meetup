import Ember from 'ember';

export function ownedGames() {
  currentPlayer: Ember.inject.service(),
  ownsGame: Ember.computed('currentPlayer', 'game', function(){
    var doesOwn=false;
    var game = this.get('game');
    this.get('currentPlayer.curPlayer').get('games_owned').then(function(games){
      if(games){
        let gamesArray = games.toArray();
        games.forEach(function(g){
          if(g.id === game.id){
            return true;
          }
        });
      }
      return false;
    });
  }),
  actions: {
    ownGame(game){
      this.sendAction('ownGame', game);
    }
  }
}

export default Ember.Helper.helper(ownedGames);
