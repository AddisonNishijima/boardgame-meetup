import Ember from 'ember';

export default Ember.Service.extend({
  curPlayer: null,

  login(player){
    this.set('curPlayer', player);
  },
  logout(){
    this.set('curPlayer', null);
  }
});
