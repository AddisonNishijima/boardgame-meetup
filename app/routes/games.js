import Ember from 'ember';
import xml2js from 'npm:xml2js';

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
      game.get('owners').removeObject(player);
      player.get('games_owned').removeObject(game);
      game.save().then(function(){
        return player.save();
      });
    },
    newGame(params, owner){
      var newGame = this.store.createRecord('game', params);
      if(owner){
        newGame.get('owners').addObject(owner);
        owner.get('games_owned').addObject(newGame);
        owner.save();
      }
      var url = "http://www.boardgamegeek.com/xmlapi/search?search=" + newGame.get('name');
      Ember.$.get(url).then(function(response) {
        console.log(response);
        var stuff = new XMLSerializer().serializeToString(response.documentElement);
        xml2js.parseString(stuff, function(err, result){
          var api_id = result.boardgames.boardgame[0].$.objectid;
          console.log(api_id);
          newGame.set('api_id', api_id);
          newGame.save();
        });
      });
      //newGame.save();
    }
  }
});
