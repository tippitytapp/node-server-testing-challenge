const Athletes = require('./athletes-model.js');
const router = require('express').Router();

router.get('/', (req, res) => {
    Athletes.get()
    .then(athletes => {
        res.status(200).json({
            data:athletes
        })
    })
    .catch(error => {
        res.status(500).json({
            errorMessage: "Error retrieving Athletes",
            error
        })
    })
})

router.post('/', (req, res) => {
    Athletes.add(req.body)
            .then(resp => {
                res.status(201).json({
                    data: resp
                })
            })
            .catch(error => {
                res.status(500).json({
                    errorMessage: 'Error adding Athlete',
                    error
                })
            })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id 
        Athletes.remove(id)
            .then(athlete => {
                res.status(200).json({
                    deletedAthlete: athlete
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