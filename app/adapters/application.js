import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
    headers = {
        'Authorization': 'Bearer BQDiPqVSOq-2cNz8tX4gmdr-1rvh2kswcy1x_O0I3-Znb_nSqpypWPnUC5p8E1V2Z1buFm4VmqA1z2de6Ps'
    };
    host = 'https://api.spotify.com/v1';
}
