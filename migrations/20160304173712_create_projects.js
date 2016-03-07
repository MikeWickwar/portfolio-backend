exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(table){
  table.increments();
  table.string('title');
  table.string('gitlink');
  table.string('deploy');
  table.string('description');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects')
};
