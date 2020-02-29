import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class TokenService extends Service {
    @tracked token;

    get currentActiveToken() {
        return 'BQDiPqVSOq-2cNz8tX4gmdr-1rvh2kswcy1x_O0I3-Znb_nSqpypWPnUC5p8E1V2Z1buFm4VmqA1z2de6Ps';
    }


}
