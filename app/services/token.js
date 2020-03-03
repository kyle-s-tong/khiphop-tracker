import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from '../config/environment';
import fetch from 'fetch';

export default class TokenService extends Service {
  @tracked token;

  get currentActiveToken() {
    return fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa(`${ENV.SPOTIFY_CLIENT_ID}:${ENV.SPOTIFY_SECRET_KEY}`)}`
      },
      body: 'grant_type=client_credentials',
    }).then(r => r.json())
        .then(response => {
          this.token = response.access_token;
    });
  }
}
