import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class SearchBarComponent extends Component {
    @action
    search() {
        console.log('action');
    }
}
