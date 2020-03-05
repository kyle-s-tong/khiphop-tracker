import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency-decorators';
import fetch from 'fetch';

export default class SearchBarComponent extends Component {
    @service store;

    @tracked input;

    @tracked results;

    @task({ restartable: true, maxConcurrency: 1 })
    searchTask = function* () {
    }

    async search() {
        const urlEncodedInput = encodeURIComponent(this.input);
        // TODO: Move url to env file
        const url = `https://api.spotify.com/v1/search?type=artist&q=${urlEncodedInput}`;

        if (!urlEncodedInput) {
            return;
        }
        
        const { headers } = this.store.adapterFor('application');

        const response = await fetch(url, { headers });

        this.results = await response.json();
    }
}
