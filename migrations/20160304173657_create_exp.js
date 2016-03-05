exports.up = function(knex, Promise) {
  return knex.schema.createTable('exp', function(table){
  table.increments();
  table.string('title');
  table.string('time_at');
  table.string('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('exp')
};
