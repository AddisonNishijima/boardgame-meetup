
import Ember from 'ember';

export default Ember.Route.extend({
  currentPlayer: Ember.inject.service(),
  actions: {
    submitSignup(params){
      var context = this;
      this.store.query('player', {orderBy: 'username', equalTo: params.username}).then(function(nameAvailable){
        var duplicate = false;
        nameAvailable.forEach(function(player){
          if(player.get('username')===params.username){
            duplicate = true;
          }
        });
        if(duplicate){
          alert('Sorry! This username is already taken');
          context.transitionTo('login');
        } else {
          var newPlayer = context.store.createRecord('player', params);
          newPlayer.save();
          context.get('currentPlayer').login(newPlayer);
          context.transitionTo('index');
        }
      });
    },
    submitLogin(params){
      var context = this;
      this.store.query('player', {orderBy: 'username', equalTo: params.username}).then(function(curPlayer){
        var canLogin = false;
        curPlayer.forEach(function(player){
          if(player.get('password')===params.password){
            canLogin = true;
            context.get('currentPlayer').login(player);
          }
        });
        if(canLogin){
          context.transitionTo('index');
        } else {
          alert('your username does not match your password, please try again');
          context.transitionTo('login');
        }
      });
    }
  }
});
