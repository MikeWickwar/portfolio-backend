
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('projects').del(),

    // Inserts seed entries
    knex('projects').insert({id: 1, title: 'Epic Mountain Tracker', gitlink: 'https://github.com/MikeWickwar/mtnProject', deploy: 'http://mikewickwar.github.io/', description: 'A snow condition tracker for the five mountains on the Epic Local Pass.'}),
    knex('projects').insert({id: 2, title: 'Postit!', gitlink: 'https://github.com/MikeWickwar/angularRoute', deploy: 'https://mikewickwarpostit.firebaseapp.com/', description: 'A place where users can post ideas, events, or thoughts.'})
  );
};
