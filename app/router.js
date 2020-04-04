import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('home');
  this.route('artist', { path: '/artist/:id' });
  this.route('new-releases', { path: '/' });
  this.route('release', { path: 'release/:id' })
});
