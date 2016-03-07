
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('exp').del(),

    // Inserts seed entries
    knex('exp').insert({id: 1, title: 'Eaglecrest High School Percussion Caption Head', time_at: '7 years', description: ''}),
    knex('exp').insert({id: 2, title: 'Eaglecrest High School Assistant Band Director', time_at: '4 years', description: ''}),
    knex('exp').insert({id: 3, title: 'Eaglecrest High School Marching Band Drill Writer', time_at: '3 years', description: ''}),
    knex('exp').insert({id: 4, title: 'Eaglecrest High School Marching Band Percussion Arranger', time_at: '4 years', description: ''}),
    knex('exp').insert({id: 5, title: 'Chaparral High School Assistant Percussion Instructor', time_at: '4 years', description: ''}),
    knex('exp').insert({id: 6, title: 'Guitar Center Drum Specialist', time_at: '1 year', description: ''})
  );
};
