import Ember from 'ember';

export default Ember.Component.extend({
  currentPlayer: Ember.inject.service(),
  isShowingModal: false,
  game_to_bring: '',
  actions: {
    toggleForm() {
      this.toggleProperty('isShowingModal');
    },
    updateValue(value){
      this.set('game_to_bring', value)
    },
    attendSession(session){
      var params = {
        game_to_bring: this.get('game_to_bring'),
        game_request: this.get('request')
      }
      this.set('isShowingModal', false);
      this.set('request',"");
      this.sendAction('attendSession', params, session);
    }
  }
});
