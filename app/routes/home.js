import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HomeRoute extends Route {
    @service token;

    beforeModel() {
        return this.token.currentActiveToken;
    }

    model() {
        return this.store.query('artist', {
            ids: '7IWshUcKfJyDWrbiF2XT8J,0IznZPMUyaPGdqfP4oqBja'
        })
    }
}
