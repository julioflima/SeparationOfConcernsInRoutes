const knex = require('knex');

module.exports = class Cloud {
  constructor(enviroment) {
    // Object
    this.knex = knex;

    // Variables
    this.enviroment = enviroment;
  }

  connection() {
    if ((this.enviroment = 'development')) return this.development();
    if ((this.enviroment = 'production')) return this.production();
  }

  development() {
    return knex({
      client: 'sqlite3',
      connection: {
        filename: './src/database/db.sqlite',
      },
      migrations: {
        directory: './src/database/migrations',
      },
      useNullAsDefault: true,
    });
  }

  production() {
    return knex({
      client: 'sqlite3',
      connection: {
        filename: './src/database/db.sqlite',
      },
      migrations: {
        directory: './src/database/migrations',
      },
      useNullAsDefault: true,
    });
  }

  development() {
    return knex({
      client: 'sqlite3',
      connection: {
        filename: './src/database/db.sqlite',
      },
      migrations: {
        directory: './src/database/migrations',
      },
      useNullAsDefault: true,
    });
  }
};
