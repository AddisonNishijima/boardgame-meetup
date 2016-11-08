import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateForm(params, session) {
      this.sendAction('updateForm', params, session);
    }
  }
});
