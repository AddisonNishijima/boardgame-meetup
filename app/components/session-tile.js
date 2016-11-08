import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete1(session) {
      if(confirm('Are you sure you want to delete this session?')) {
        this.sendAction('delete2', session);
      }
    }
  }
});
