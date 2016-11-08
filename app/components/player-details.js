import Ember from 'ember';

export default Ember.Component.extend({
  currentPlayer: Ember.inject.service(),
  isPlayer: Ember.computed('player.username', 'currentPlayer.curPlayer.username', function(){
    return this.get('player.username') === this.get('currentPlayer.curPlayer.username');
  }),
  actions: {
    logoutPlayer(){
      this.get('currentPlayer').logout();
    }
  }
});
