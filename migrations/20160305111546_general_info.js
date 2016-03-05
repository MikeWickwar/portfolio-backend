exports.up = function(knex, Promise) {
  return knex.schema.createTable('general_info', function(table){
  table.increments();
  table.string('name');
  table.string('email');
  table.string('location');
  table.string('linkedin');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('general_info')
};
