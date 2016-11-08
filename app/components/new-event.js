import Ember from 'ember';
import moment from 'moment'

export default Ember.Component.extend({
  actions: {
    newSession(){
      var params = {
        date: moment(this.get('date')).valueOf(),
        title: this.get('title'),
        info: this.get('info') ? this.get('info') : ""
      };
      this.set('date', "");
      this.set('title', "");
      this.set('info', "");
      this.sendAction('newSession', params);
    }
  }
});
