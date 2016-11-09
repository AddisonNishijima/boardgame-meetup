import Ember from 'ember';
import xml2js from 'npm:xml2js';

export default Ember.Component.extend({
  jsonInfo: Ember.computed('game.gameInfo', function(){
    var json;
    var stuff = new XMLSerializer().serializeToString(this.get('game.gameInfo').documentElement);
    xml2js.parseString(stuff, function(err, result){
      json=result;
    });
    return json;
  })
});
