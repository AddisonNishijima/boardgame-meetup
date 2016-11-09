import Ember from 'ember';


export default Ember.Route.extend({
  model(params){
    var url = "http://www.boardgamegeek.com/xmlapi/boardgame/" + params.api_id;
    return Ember.RSVP.hash({
      game: this.store.findRecord('game', params.game_id),
      gameInfo: Ember.$.get(url).then(function(response) {
        return response;
      })
    });
  }
});
