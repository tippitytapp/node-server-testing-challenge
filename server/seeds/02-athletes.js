
exports.seed = function(knex) {
      return knex('athletes').insert([
        {fname: 'Miguel', lname: 'Cabrera', team: 1, position: 'first baseman', number: 24},
        {fname: 'Cameron', lname: 'Maybin', team: 1, position: 'center fielder', number: 4},
        {fname: 'Michael', lname: 'fulmer', team: 1, position: 'pitcher', number: 32},
        {fname: 'Ronald', lname: 'Acuna', team: 2, position: 'left fielder', number: 13},
        {fname: 'Freddie', lname: 'Freeman', team: 2, position: 'first baseman', number: 5},
        {fname: 'Dansby', lname: 'Swanson', team: 2, position: 'shortstop', number: 7},
        {fname: 'Jose', lname: 'Altuve', team: 3, position: 'second baseman', number: 27},
        {fname: 'Alex', lname: 'Bregman', team: 3, position: 'third baseman', number: 2},
        {fname: 'Carlos', lname: 'Correa', team: 3, position: 'shortstop', number: 1},
        {fname: 'Aaron', lname: 'Judge', team: 4, position: 'right fielder', number: 24},
        {fname: 'Gerrit', lname: 'Cole', team: 4, position: 'pitcher', number: 4},
        {fname: 'Giancarlo', lname: 'Stanton', team: 4, position: 'right fielder', number: 32},
      ]);
};
