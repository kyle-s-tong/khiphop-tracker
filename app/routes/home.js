import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HomeRoute extends Route {
    @service token;

    beforeModel() {
      return this.token.currentActiveToken;
    }

    model() {
      // TODO: remove this seed once we get details from the server on search.
      localStorage.setItem('khiphop-tracker:artistsBeingTracked', ['0IznZPMUyaPGdqfP4oqBja', '7IWshUcKfJyDWrbiF2XT8J']);

      if (localStorage && localStorage.getItem('khiphop-tracker:artistsBeingTracked')) {
        return this.store.query('artist', {
          ids: localStorage.getItem('khiphop-tracker:artistsBeingTracked')
        })
      }
    }
}
