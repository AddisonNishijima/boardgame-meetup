import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  username: DS.attr(),
  password: DS.attr(),
  games_owned: DS.hasMany('game', {async: true}),
});
