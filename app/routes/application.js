import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
    @service token;
    
    beforeModel() {
        return this.token.currentActiveToken;
    }
}
