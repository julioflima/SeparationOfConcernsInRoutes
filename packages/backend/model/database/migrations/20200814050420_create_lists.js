exports.up = function (knex) {
  return knex.schema.createTable("lists", (table) => {
    table.string("id").primary();
    table.string("name").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("lists");
};
