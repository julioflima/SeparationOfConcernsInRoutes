const axios = require('axios');

module.exports = class Api {
  constructor(newOrigin) {
    this.newOrigin = newOrigin;
    this.axios = axios;
    this.api = this.setApi();
  }

  setApi() {
    return this.axios.create({
      baseURL: this.newOrigin,
    });
  }
};
