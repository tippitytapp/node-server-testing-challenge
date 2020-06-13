const Teams = require('./teams-model.js')
const router = require('express').Router();

router.get('/', (req, res) => {
    Teams.get()
        .then(teams => {
            res.status(200).json({
                data:teams
            })
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "Error retrieving Teams",
                error
            })
        })
})

router.post('/', (req, res) => {
    console.log(req.body)
    Teams.add(req.body)
            .then(resp => {
                res.status(201).json({
                    data: resp
                })
            })
            .catch(error => {
                res.status(500).json({
                    errorMessage: 'Error adding Team',
                    error
                })
            })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id 
        Teams.remove(id)
            .then(team => {
                res.status(200).json({
                    deletedTeam: team
                })
            })
            .catch(error => {
                res.status(500).json({
                    errorMessage: "Error Deleting Object",
                    error
                })
            })
})

module.exports=router;