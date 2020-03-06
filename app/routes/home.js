import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HomeRoute extends Route {
    @service token;

    beforeModel() {
      return this.token.currentActiveToken;
    }

    model() {
      if (localStorage && localStorage.getItem('khiphop-tracker:artistsBeingTracked')) {
        return this.store.query('artist', {
          ids: localStorage.getItem('khiphop-tracker:artistsBeingTracked')
        }, { reload: true })
      }
      this.refresh();
    }
}
