import searchResults from './dumps/search-results';

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  const testEnv = false;

  this.urlPrefix = 'http://localhost:3000';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
 if (testEnv) {
   this.get('/artists');
   this.get('/artists/add');
   this.get('/artists/search', () => {
     return searchResults;
   }, { timing: 200 })
   this.get('/artists/:id');
   this.get('/artists/:id/albums');

   this.get('/albums');
   this.get('/albums/:id');
   this.get('/albums/:id/tracks');

   this.get('/tracks');
   this.get('/tracks/:id');
 }

 this.passthrough();
}
