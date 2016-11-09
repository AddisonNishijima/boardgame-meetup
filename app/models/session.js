import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr(),
  title: DS.attr(),
  info: DS.attr(),
  games_being_brought: DS.hasMany('game', {async: true, inverse: 'sessions_bringing'}),
  games_requested: DS.hasMany('game', {async: true, inverse: 'sessions_requested'}),
  players_attending: DS.hasMany('player', {async: true})
});
