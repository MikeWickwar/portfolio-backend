
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('projects').del(),

    // Inserts seed entries
    knex('projects').insert({id: 1, title: 'Epic Mountain Tracker', gitlink: 'https://github.com/MikeWickwar/mtnProject', deploy: 'http://mikewickwar.github.io/', description: 'A snow condition tracker for the five mountains on the Epic Local Pass.', img: "badges/emwtn.png", img2: "badges/emwtn2.png"}),
    knex('projects').insert({id: 2, title: 'Smiley Snake!', gitlink: 'https://github.com/kinseyzaire/smiley-snake', deploy: 'https://smiley-snake.firebaseapp.com/', description: 'Click on the logo to begin, a simple snake game involving emojis! Collect the good ones, and avoid the bad ones!', img: "badges/smileysnake1.png", img2: "badges/smiley2.png"})
  );
};
