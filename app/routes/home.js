import Route from '@ember/routing/route';

export default class HomeRoute extends Route {
    beforeModel() {
      if (localStorage && localStorage.getItem('khiphop-tracker:artistsBeingTracked')) {
        return this.store.query('artist', {
          ids: localStorage.getItem('khiphop-tracker:artistsBeingTracked')
        }, { reload: true })
      }
    }

    model() {
      return this.store.peekAll('artist');
    }

    afterModel() {
      localStorage.setItem('khiphop-tracker:artistsLastChecked', new Date());
    }
}
