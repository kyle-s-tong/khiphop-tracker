import JSONSerializer from '@ember-data/serializer/json';

export default class ApplicationSerializer extends JSONSerializer {
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        const artists = payload.artists;
        
        const normalizedPayload = {
            data: artists
        }
        console.log(normalizedPayload);
        return normalizedPayload;
    }

    normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
        console.log(payload);
        return payload;
    }
}
