import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  owners: DS.hasMany('player', {async: true})
});
