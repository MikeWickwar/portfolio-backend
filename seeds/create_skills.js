
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('skills').del(),

    // Inserts seed entries
    knex('skills').insert({id: 1, skill: 'Node.js'}),
    knex('skills').insert({id: 2, skill: 'HTML'}),
    knex('skills').insert({id: 3, skill: 'CSS'}),
    knex('skills').insert({id: 4, skill: 'Postgres'}),
    knex('skills').insert({id: 5, skill: 'Express'}),
    knex('skills').insert({id: 6, skill: 'Angular'}),
    knex('skills').insert({id: 7, skill: 'Bootstrap'}),
    knex('skills').insert({id: 8, skill: 'OAuth'}),
    knex('skills').insert({id: 9, skill: 'jquery'}),
    knex('skills').insert({id: 10, skill: 'Jade'}),
    knex('skills').insert({id: 11, skill: 'Git'}),
    knex('skills').insert({id: 12, skill: 'Pivitol Tracker'}),
    knex('skills').insert({id: 13, skill: 'Mocha/Chai'}),
    knex('skills').insert({id: 14, skill: 'Database Modeling'}),
    knex('skills').insert({id: 15, skill: 'Responsive Design'}),
    knex('skills').insert({id: 16, skill: 'Paired Programming'}),
    knex('skills').insert({id: 17, skill: 'Group Programming'}),
    knex('skills').insert({id: 18, skill: 'Leadership'}),
    knex('skills').insert({id: 19, skill: 'Teaching'})
  );
};
