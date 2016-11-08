import Ember from 'ember';

export default Ember.Component.extend({
  // updateFormShow: false,

  actions: {
    delete1(session) {
      if(confirm('Are you sure you want to delete this session?')) {
        this.sendAction('delete2', session);
      }
    },
    updateForm3(params, session) {
      this.sendAction('updateForm4', params, session);
    }
  }
});
