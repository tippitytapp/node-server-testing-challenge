
exports.up = function(knex) {
  return knex.schema
            .createTable('teams', team => {
                team.increments()
                team.string('team_name', 128)
                    .notNullable()
                    .unique()
            })
            .createTable('athletes', athlete => {
                athlete.increments()
                athlete.string('fname', 128)
                        .notNullable()
                athlete.string('lname', 128)
                        .notNullable()
                athlete.integer('team')
                        .unsigned()
                        .notNullable()
                        .references('id')
                        .inTable('teams')
                        .onDelete('RESTRICT')
                        .onUpdate('CASCADE')
                athlete.string('position')
                        .notNullable()
                athlete.integer('number', 2)
                        .notNullable()
            })
};

exports.down = function(knex) {
  return knex.schema
        .dropTableIfExists('athletes')
        .dropTableIfExists('teams')
};
