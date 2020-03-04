import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from '../config/environment';
import fetch from 'fetch';

export default class TokenService extends Service {
  @tracked token;

  get currentActiveToken() {
    const tokenDetails = JSON.parse(localStorage.getItem('tokenDetails'));
    const now = new Date();
    
    if (tokenDetails && tokenDetails.expiry > now.toISOString()) {
      this.token = tokenDetails.token;
    } else {
      return this.requestNewToken();
    }
  }

  requestNewToken() {
    return fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${btoa(`${ENV.SPOTIFY_CLIENT_ID}:${ENV.SPOTIFY_SECRET_KEY}`)}`
      },
      body: 'grant_type=client_credentials',
    }).then(r => r.json())
      .then(response => {
        // Set the request time to be the time we get the response back.
        const now = new Date();
        now.setSeconds(now.getSeconds() + response.expires_in);
        const expiry = now;

        localStorage.setItem('tokenDetails', JSON.stringify({
          token: response.access_token,
          expiry,
        }));
        this.token = response.access_token;
    });
  }
}
