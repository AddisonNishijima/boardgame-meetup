import Ember from 'ember';

export default Ember.Component.extend({
  currentPlayer: Ember.inject.service(),
  actions: {
    updateForm(params, session) {
      this.sendAction('updateForm', params, session);
    },
    attendSession(params, session){
      this.sendAction('attendSession', params, session);
    },
    unattend(session){
      this.sendAction('unattend', session);
    }
    // delete(session) {
    //   if(confirm('Are you sure you want to delete this session?')) {
    //     this.sendAction('delete', session);
    //   }
    // }
  }
});
