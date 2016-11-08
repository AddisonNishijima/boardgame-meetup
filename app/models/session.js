import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.store(),
  title: DS.store(),
  info: DS.store(),
  games_being_brought: DS.hasMany('game', {async: true}),
  games_requested: DS.hasMany('game', {async: true}),
  players_attending: DS.hasMany('player', {async: true}),
  players_notAttending: DS.hasMany('player', {async: true})
});
