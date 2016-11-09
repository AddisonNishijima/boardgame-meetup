import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  username: DS.attr(),
  password: DS.attr(),
  avatar: DS.attr(),
  games_owned: DS.hasMany('game', {async: true}),
  sessions: DS.hasMany('session', {async: true})
});
