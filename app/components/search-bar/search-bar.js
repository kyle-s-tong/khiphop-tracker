import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';
import { timeout } from 'ember-concurrency';
import { task } from 'ember-concurrency-decorators';
import fetch from 'fetch';

export default class SearchBarComponent extends Component {
  @service store;

  @tracked results;

  @action
  keyUp() {
    if (!this.args.value || this.args.value.length === 0) {
      this.args.clearSearch();
      return;
    }

    this.searchTask.perform(this.args.value);
  }

  @task({ restartable: true, maxConcurrency: 1 })
  searchTask = function* (input) {
    // TODO: Move url to env file
    const url = `http://localhost:3000/artists/search?q=${input}`;

    if (!input) {
      return;
    }

    yield timeout(150);

    const results = yield this.search(url);

    this.args.updateSearchResults(results);
  }

  async search(url) {
    const { headers } = this.store.adapterFor('application');

    const response = await fetch(url, { headers });
    const results = await response.json();

    return results;
  }
}
