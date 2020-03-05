import Component from '@glimmer/component';
import { action } from "@ember/object";
import { tracked } from '@glimmer/tracking';

export default class SearchBarComponent extends Component {
    @tracked input;

    @action
    search() {
        console.log(this.input);
    }
}
