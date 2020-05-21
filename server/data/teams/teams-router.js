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


module.exports=router;