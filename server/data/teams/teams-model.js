const Teams = require('../../dbconfig.js');

module.exports={
    add,
    get,
    getBy,
    update,
    remove
};

async function add(team){
    try{const [id] = await Teams('teams')
                            .insert(team, 'id')
                            return getBy
                
}
function get(){
    return Teams('teams')
}
function getBy(){}
function update(){}
function remove(){}
