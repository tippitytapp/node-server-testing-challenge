const Teams = require('../../dbconfig.js');

module.exports={
    add,
    get,
    getBy,
    update,
    remove
};

async function add(team){
const [id] = await Teams('teams')
                .insert(team, 'id')
                console.log(id)
                  return findById(id)
}
                
function get(){
    return Teams('teams')
}
function getBy(filter){
    return Teams('teams')
            .where(filter)
}
function update(){}
function remove(id){
    return findById(id)
        .then(team => {
            const deleted = team
            return Teams('teams')
                    .where({id})
                    .first()
                    .del()
                    .then(count => {
                        return deleted;
                    })
        })
}
function findById(id){
    return Teams('teams')
            .where({id})
            .first()
}
