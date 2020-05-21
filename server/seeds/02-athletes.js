
exports.seed = function(knex) {
      return knex('athletes').insert([
        {fname: 'Miguel', lname: 'Cabrera', team: "Tigers", position: 'first baseman', number: 24},
        {fname: 'Cameron', lname: 'Maybin', team: "Tigers", position: 'center fielder', number: 4},
        {fname: 'Michael', lname: 'fulmer', team: "Tigers", position: 'pitcher', number: 32},
        {fname: 'Ronald', lname: 'Acuna', team: 'Braves', position: 'left fielder', number: 13},
        {fname: 'Freddie', lname: 'Freeman', team: "Braves", position: 'first baseman', number: 5},
        {fname: 'Dansby', lname: 'Swanson', team: "Braves", position: 'shortstop', number: 7},
        {fname: 'Jose', lname: 'Altuve', team: "Astros", position: 'second baseman', number: 27},
        {fname: 'Alex', lname: 'Bregman', team: "Astros", position: 'third baseman', number: 2},
        {fname: 'Carlos', lname: 'Correa', team: "Astros", position: 'shortstop', number: 1},
        {fname: 'Aaron', lname: 'Judge', team: "Yankees", position: 'right fielder', number: 24},
        {fname: 'Gerrit', lname: 'Cole', team: "Yankees", position: 'pitcher', number: 4},
        {fname: 'Giancarlo', lname: 'Stanton', team: "Yankees", position: 'right fielder', number: 27},
      ]);
};
