import Controller from '@ember/controller';

export default class HomeController extends Controller {
    get artistNames() {
        const names = [];
        this.model.forEach(artist => {
            names.push(artist.name);
        })

        return names;
    }
}
