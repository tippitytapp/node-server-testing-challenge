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


module.exports=router;