import Ember from 'ember';

export default Ember.Component.extend({
  updateFormShow: false,
  actions: {
    showForm() {
      this.set('updateFormShow', true);
    },
    updateForm(session) {
      var params = {
        date: this.get('date'),
        title: this.get('title'),
        info: this.get('info')
      };
      this.set('date', "");
      this.set('title', "");
      this.set('info', "");
      this.set('updateFormShow', false);
      this.sendAction('updateForm', params, session);
    }
  }
});
