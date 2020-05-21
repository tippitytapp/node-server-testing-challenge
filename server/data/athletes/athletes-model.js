const Athletes = require('../../dbconfig.js');

module.exports={
    add,
    get,
    getBy,
    update,
    remove
}

function add(){}
function get(){
    return Athletes('athletes as a')
            .join('teams as t', 'a.team', '=', 't.id')
            .select('a.id', 'a.fname', 'a.lname', 't.team_name', 'a.position', 'a.number')
}
function getBy(){}
function update(){}
function remove(){}
