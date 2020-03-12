import Route from '@ember/routing/route';

export default class HomeRoute extends Route {
    beforeModel() {
    }

    model() {
      return this.store.findAll('artist', { reload: true });
    }

    afterModel() {
      localStorage.setItem('khiphop-tracker:artistsLastChecked', new Date());
    }
}
