
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('projects').del(),

    // Inserts seed entries
    knex('projects').insert({id: 1, title: 'rowValue', links: '', description: ''}),
    knex('projects').insert({id: 2, title: 'rowValue2', links: '', description: ''}),
    knex('projects').insert({id: 3, title: 'rowValue3', links: '', description: ''})
  );
};
