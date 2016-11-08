import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitLogin(){
      var params = {
        username: this.get('username'),
        password: this.get('password')
      };
      this.set('password', "");
      this.sendAction('submitLogin', params);
    }
  }
});
