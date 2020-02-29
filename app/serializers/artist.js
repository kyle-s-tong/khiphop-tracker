import ApplicationSerializer from './application';

export default class ArtistSerializer extends ApplicationSerializer {
    normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
        const transformedArtists = payload.artists.map(artist => {
            return {
                id: artist.id,
                type: artist.type,
                attributes: artist
            }
        })
        
        const normalizedPayload = {
            data: transformedArtists
        }

        return normalizedPayload;
    }
}
