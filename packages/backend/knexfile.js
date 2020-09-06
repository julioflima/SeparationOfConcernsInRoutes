const Cloud = require('./model/database/Cloud');

const db = new Cloud();

module.exports = {
  development: db.development(),

  staging: db.staging(),

  production: db.production(),
};
