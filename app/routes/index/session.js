import Ember from 'ember';

export default Ember.Route.extend({
  currentPlayer: Ember.inject.service(),
  model(params){
    return this.store.findRecord('session', params.session_id);
  },
  actions: {
    unattend(session){
      var player = this.get('currentPlayer.curPlayer');
      player.get('sessions').removeObject(session);
      session.get('players_attending').removeObject(player);
      player.save();
      session.save();
    },
    notBringing(game, session) {
      session.get('games_being_brought').removeObject(game);
      game.get('sessions_bringing').removeObject(session);
      game.save();
      session.save();
    },
    attendSession(params, session){
      var player = this.get('currentPlayer.curPlayer');
      var store = this.store;
      player.get('sessions').addObject(session);
      session.get('players_attending').addObject(player);
      player.save();
      session.save();
      if(params.game_to_bring){
        this.store.findRecord('game', params.game_to_bring).then(function(game){
          session.get('games_being_brought').addObject(game);
          game.get('sessions_bringing').addObject(session);
          game.save();
          session.save();
        });
      }
      if(params.game_request){
        this.store.query('game', {
          orderBy: 'name',
          equalTo: params.game_request
        }).then(function(foundGames){
          var found = false;
          foundGames.forEach(function(game){
            if(game.get('name')=== params.game_request){
              found = true;
              session.get('games_requested').addObject(game);
              game.get('sessions_requested').addObject(session);
              game.save();
              session.save();
            }
          });
          if(!found){
            var newGame = store.createRecord('game', { name: params.game_request});
            var url = "http://www.boardgamegeek.com/xmlapi/search?search=" + newGame.get('name');
            Ember.$.get(url).then(function(response) {
              var stuff = new XMLSerializer().serializeToString(response.documentElement);
              xml2js.parseString(stuff, function(err, result){
                var api_id;
                for(var i = 0; i < result.boardgames.boardgame.length; i++){
                  if(result.boardgames.boardgame[i].name[0]._ === params.name){
                    api_id = result.boardgames.boardgame[i].$.objectid;
                  }
                }
                if(!api_id){
                  api_id = result.boardgames.boardgame[0].$.objectid;
                }
                newGame.set('api_id', api_id);
                newGame.save().then(function(){
                  session.get('games_requested').addObject(newGame);
                  newGame.get('sessions_requested').addObject(session);
                  session.save();
                  newGame.save();
                });
              });
            });
          }
        });
      }
    }
  }
});
