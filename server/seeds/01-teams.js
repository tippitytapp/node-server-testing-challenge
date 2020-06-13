
exports.seed = function(knex) {
      return knex('teams').insert([
        {team_name: 'Tigers'},
        {team_name: 'Braves'},
        {team_name: 'Astros'},
        {team_name: 'Yankees'}
      ]);
};
