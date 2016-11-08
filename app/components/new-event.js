import Ember from 'ember';
import moment from 'moment'

export default Ember.Component.extend({
  isShowingModal: false,
  actions: {
    toggleForm() {
      this.toggleProperty('isShowingModal');
    },
    newSession(){
      var params = {
        date: moment(this.get('date')).valueOf(),
        title: this.get('title'),
        info: this.get('info') ? this.get('info') : ""
      };
      this.set('date', "");
      this.set('title', "");
      this.set('info', "");
      this.set('isShowingModal', false);
      this.sendAction('newSession', params);
    }
  }
});
