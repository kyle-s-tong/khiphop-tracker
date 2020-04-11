import Route from '@ember/routing/route';

export default class HomeRoute extends Route {
    async model() {
      return this.store.findAll('artist');
    }
}
