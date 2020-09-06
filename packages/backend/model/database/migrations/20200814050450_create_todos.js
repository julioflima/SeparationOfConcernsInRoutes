exports.up = function (knex) {
  return knex.schema.createTable('sensor', (table) => {
    table.string('date').notNullable();
    table.string('name').notNullable().primary();
    table.string('timestamp').notNullable().primary();
    table.string('value').notNullable().primary();
  });
};
