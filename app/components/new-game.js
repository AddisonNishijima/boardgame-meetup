import Ember from 'ember';

export default Ember.Component.extend({
  currentPlayer: Ember.inject.service(),
  isShowingModal: false,
  actions: {
    toggleForm() {
      this.toggleProperty('isShowingModal');
    },
    newGame(){
      var params = {
        name: this.get('name')
      };
      var owner = this.get('isOwned') ? this.get('currentPlayer.curPlayer'):null;
      this.set('name', "");
      this.set('isShowingModal', false);
      this.sendAction('newGame', params, owner);
    }
  }
});
