import Ember from 'ember';

export default Ember.Route.extend({
  currentPlayer: Ember.inject.service(),
  model(params){
    return this.store.findRecord('session', params.session_id);
  },
  actions: {
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
      // if(params.game_request){
      //   this.store.query('game', {
      //     orderBy: 'name',
      //     equalTo: params.game_request
      //   }).then(function(foundGames){
      //     if(foundGames){
      //       foundGames.forEach(function(game){
      //         session.get('games_requested').addObject(game);
      //         game.get('sessions_requested').addObject(session);
      //         game.save();
      //       });
      //       session.save();
      //     } else {
      //       var newGame = store.createRecord('game', { name: params.game_request});
      //       newGame.save().then(function(){
      //         session.get('games_requested').addObject(game);
      //         newGame.get('sessions_requested').addObject(session);
      //         session.save();
      //         newGame.save();
      //       });
      //     }
      //   });
      // }
    }
  }
});
