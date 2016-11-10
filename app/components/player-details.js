import Ember from 'ember';

export default Ember.Component.extend({
  currentPlayer: Ember.inject.service(),
  isPlayer: Ember.computed('player.username', 'currentPlayer.curPlayer.username', function(){
    return this.get('player.username') === this.get('currentPlayer.curPlayer.username');
  }),
  actions: {
    logoutPlayer(){
      this.get('currentPlayer').logout();
    },
    updatePlayer(params, player){
      this.sendAction('updatePlayer', params, player);
    },
    deletePlayer(player) {
      if(confirm("Are you sure you want to permanently terminate your membership?")) {
        if(confirm("Really are you sure tho?")){
          if(confirm("Cos this is pretty permanent. Don't you love us?")){
            this.get('currentPlayer').logout();
            this.sendAction('deletePlayer', player);
          }
        }
      }
    }
  }
});
