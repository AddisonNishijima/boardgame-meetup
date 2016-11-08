import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');

  this.route('index', function() {
    this.route('session', {path: 'session/:session_id'});
  });
  this.route('games');
  this.route('players', function() {
    this.route('player', {path: 'player/:player_id'});
  });
});

export default Router;
