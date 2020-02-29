import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
    headers = {
        'Authorization': 'Bearer BQCp_GahCgj7_I9v_0RXSSGk3BNpVOqMaAlkPBy59obxPJ42feHaoPQj14qp2pYFY1UAbE5qDkr6k86q6Hs'
    };
    host = 'https://api.spotify.com/v1';
}
