import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  owners: DS.hasMany('player', {async: true}),
  sessions_requested: DS.hasMany('session', {async: true, inverse: 'games_requested'}),
  sessions_bringing: DS.hasMany('session', {async:true, inverse: 'games_being_brought'})
});
