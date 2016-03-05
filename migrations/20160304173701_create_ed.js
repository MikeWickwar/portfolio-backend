exports.up = function(knex, Promise) {
  return knex.schema.createTable('ed', function(table){
  table.increments();
  table.string('name_of');
  table.string('time_at');
  table.string('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ed')
};
