import Ember from 'ember';

export default Ember.Component.extend({
  updatePlayerShow: false,
  actions: {
    showForm() {
      this.set('updatePlayerShow', true);
    },
    updatePlayer(player) {
      var params = {
        name: this.get('name'),
        password: this.get('password'),
        avatar: this.get('avatar')
      };
      this.set('name', "");
      this.set('password', "");
      this.set('updatePlayerShow', false);
      this.sendAction('updatePlayer', params, player);
    }
  }
});
