import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Artist ${i}`;
  },

  images() {
    return [
      {
        url: "https://vignette.wikia.nocookie.net/k-hip-hop/images/8/85/Kid_milli_1.png/revision/latest?cb=20190510155946",
      }
    ]
  }
});
