import Ember from 'ember';

export default Ember.Component.extend({
  currentPlayer: Ember.inject.service(),
  isAttending: Ember.computed('currentPlayer.curPlayer.sessions','session', function(){
    var attending= false;
    var session = this.get('session');
    var sessions = this.get('currentPlayer.curPlayer.sessions');
    if(sessions){
      sessions.forEach(function(s){
        if(s.id === session.id){
          attending = true;
        }
      });
    }
    return attending;
  }),
  isShowingModal: false,
  game_to_bring: '',
  actions: {
    toggleForm() {
      this.toggleProperty('isShowingModal');
    },
    updateValue(value){
      this.set('game_to_bring', value);
    },
    attendSession(session){
      var params = {
        game_to_bring: this.get('game_to_bring'),
        game_request: this.get('request')
      };
      this.set('isShowingModal', false);
      this.set('request',"");
      this.sendAction('attendSession', params, session);
    },
    unattend(session){
      this.sendAction('unattend', session);
    }
  }
});
