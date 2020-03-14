import Route from '@ember/routing/route';

export default class HomeRoute extends Route {
    beforeModel() {
    }

    model() {
      if (localStorage.getItem('khiphop-tracker:artistsBeingTracked')) {
        return this.store.findAll('artist', { reload: true });
      }

      return this.store.peekAll('artist');
    }

    afterModel() {
      localStorage.setItem('khiphop-tracker:artistsLastChecked', new Date());
    }
}
