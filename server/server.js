const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const server = express();
const TeamsRouter = require('./data/teams/teams-router.js');
const AthletesRouter = require('./data/athletes/athletes-router.js');

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use('/api/teams', TeamsRouter)
server.use('/api/athletes', AthletesRouter)


server.get('/', (req, res) => {
    res.status(200).json({
        message: "API is online"
    })
})

module.exports=server;