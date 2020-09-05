exports.up = function (knex) {
  return knex.schema.createTable('todos', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.string('label').notNullable();
    table.string('lists_id').notNullable();
    table.foreign('lists_id').references('id').inTable('lists');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('todos');
};
