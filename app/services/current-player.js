import Ember from 'ember';

export default Ember.Service.extend({
  curPlayer: null,

  login(player){
    this.set('curPlayer', player);
    console.log("ohai from service lol");
  },
  logout(){
    this.set('curPlayer', null);
  }
});
