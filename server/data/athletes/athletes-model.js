const Athletes = require('../../dbconfig.js');

module.exports={
    add,
    get,
    getBy,
    update,
    remove
}

async function add(athlete){
    const [id] = await Athletes('athletes')
                    .insert(athlete, 'id')
                    return findById(id)
}
function get(){
    return Athletes('athletes as a')
            .join('teams as t', 'a.team', '=', 't.id')
            .select('a.id', 'a.fname', 'a.lname', 't.team_name', 'a.position', 'a.number')
}
function getBy(){}
function update(){}
function remove(id){
    return findById(id)
    .then(athlete => {
        const deleted = athlete
        return Athletes('athletes')
                .where({id})
                .first()
                .del()
                .then(count => {
                    return deleted;
                })
    })
}
function findById(id){
    return Athletes('athletes')
            .where({id})
            .first()
}
