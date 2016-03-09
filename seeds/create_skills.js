
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('skills').del(),
    knex('skills').insert({id: 1, skill: 'badges/nodejs.png'}),
    knex('skills').insert({id: 4, skill: 'badges/pg-commander-icon.png'}),
    knex('skills').insert({id: 5, skill: 'badges/expressjs.png'}),
    knex('skills').insert({id: 6, skill: 'badges/angular-js-icon.jpg'}),
    knex('skills').insert({id: 2, skill: 'badges/HTML5_Logo_256.png'}),
    knex('skills').insert({id: 3, skill: 'badges/icon_css3.png'}),
    knex('skills').insert({id: 7, skill: 'badges/bootstrapicon.jpeg'}),
    knex('skills').insert({id: 8, skill: 'badges/OAuth-Shine-300x298.png'}),
    knex('skills').insert({id: 9, skill: 'badges/download.png'}),
    knex('skills').insert({id: 10, skill: 'badges/jadejsicon.png'}),
    knex('skills').insert({id: 11, skill: 'badges/octocat.png'}),
    knex('skills').insert({id: 12, skill: 'badges/pivotaltrackicon.png'}),
    knex('skills').insert({id: 13, skill: 'badges/chaijs.png'}),
    knex('skills').insert({id: 14, skill: 'Database Modeling'}),
    knex('skills').insert({id: 15, skill: 'Responsive Design'}),
    knex('skills').insert({id: 16, skill: 'Paired Programming'}),
    knex('skills').insert({id: 17, skill: 'Group Programming'}),
    knex('skills').insert({id: 18, skill: 'Leadership'}),
    knex('skills').insert({id: 19, skill: 'Teaching'}),
    knex('skills').insert({id: 20, skill: 'badges/mocha.png'})
  );
};
