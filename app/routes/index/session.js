import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('session', params.session_id);
  },
  actions: {
    updateForm(params, session) {
      Object.keys(params).forEach(function(key){
        if(params[key]){
          session.set(key, params[key]);
        }
      });
      session.save();
    },
    delete(session) {
      session.destroyRecord();
      this.transitionTo('index');
    }
  }
});
