import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Album ${i}`;
  },

  images() {
    return [
      {
        url: "https://hiphopkr.com/wp-content/uploads/2020/04/kid-milli-beige-0.5.jpg",
      }
    ]
  }
});
