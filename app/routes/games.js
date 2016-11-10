import Ember from 'ember';
import xml2js from 'npm:xml2js';

export default Ember.Route.extend({
  currentPlayer: Ember.inject.service(),
  model() {
    return this.store.findAll('game');
  },
  redirect(model, transition) {
    var game = model.get('firstObject');
    var stringurl = '/games/game/'+game.id + "/" + game.get('api_id');
    this.transitionTo(stringurl);
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

        var stuff = new XMLSerializer().serializeToString(response.documentElement);
        xml2js.parseString(stuff, function(err, result){
          var api_id;
          for(var i = 0; i < result.boardgames.boardgame.length; i++){
            if(result.boardgames.boardgame[i].name[0]._ === params.name){
              console.log("matchy matchy!");
              api_id = result.boardgames.boardgame[i].$.objectid;
            }
          }
          if(!api_id){
            api_id = result.boardgames.boardgame[0].$.objectid;
          }
          newGame.set('api_id', api_id);
          newGame.save();
        });
      });
    }
  }
});
