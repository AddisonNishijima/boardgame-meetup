import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateForm(params, session) {
      this.sendAction('updateForm', params, session);
    },
    delete(session) {
      if(confirm('Are you sure you want to delete this session?')) {
        this.sendAction('delete', session);
      }
    }
  }
});
