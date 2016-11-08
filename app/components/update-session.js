import Ember from 'ember';

export default Ember.Component.extend({
  isShowingModal: false,
  actions: {
    toggleForm() {
      this.toggleProperty('isShowingModal');
    },
    updateForm1(session) {
      var params = {
        date: this.get('date'),
        title: this.get('title'),
        info: this.get('info')
      };
      this.set('date', "");
      this.set('title', "");
      this.set('info', "");
      this.set('isShowingModal', false);
      this.sendAction('updateForm2', params, session);
    }
  }
});
