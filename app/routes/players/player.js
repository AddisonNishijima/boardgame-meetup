import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('player', params.player_id);
  },
  actions:{
    updatePlayer(params, player){
      Object.keys(params).forEach(function(key){
        if(params[key]){
          player.set(key, params[key]);
        }
      });
      player.save();
    },
    deletePlayer(player) {
      player.destroyRecord();
      this.transitionTo('index');
    }
  }
});
