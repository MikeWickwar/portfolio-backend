
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('ed').del(),

    // Inserts seed entries
    knex('ed').insert({id: 1, name_of: 'Galvanize Full Stack Web Development', time_at: '2016', description: ''}),
    knex('ed').insert({id: 2, name_of: 'Colorado State University', time_at: 'September 2007 - May 2009', description: '-Majors: Music Education & Music Performance -Honors:Music Letter, Vice President of Phi Mu Alpha Sinphonia'}),
    knex('ed').insert({id: 3, name_of: 'Araphoe Community College', time_at: 'January 2014 - May 2015', description: '-Emphasis in Computer Science & Art'}),
    knex('ed').insert({id: 4, name_of: 'Prospective Audio Recording Studio', time_at: 'May 2009 - August 2009', description: 'Apprenticeship'}),
    knex('ed').insert({id: 5, name_of: 'Summit Recording Group', time_at: 'August 2009 - October 2009', description: 'Apprenticeship'})
  );
};
