const supertest = require('supertest');
const db = require('./dbconfig.js');
const server = require('./server.js')

afterEach(async () => {
    await db('athletes').truncate()
})
afterEach(async () => {
    await db('teams').truncate()
})

describe('server tests', () => {
    it('can run the tests', ()=> {
        expect(true).toBeTruthy()
    })
    describe('athletes', () => {
        describe('can add an athlete', () => {
           it(' receives a 201', () => {
               return supertest(server)
                    .post('/api/athletes')
                    .send({fname: "Marc", lname: "Tapp", team: 2, position: "short stop", number: 2})
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(201)
           }) 
        })
        describe('can delete an athlete', () => {
            it('recieves a 200', () => {
                return supertest(server)
                    .delete('/api/athletes/:id')
                    .send({id: 3})
                    .expect(200)
            })
        })
    })
    describe('teams', () => {
        describe('can add a team', () => {
            it('receives a 201', () => {
                return supertest(server)
                .post('/api/teams')
                .send({team_name: "Bengals"})
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(201)
            })
        })
        describe('can delete an team', () => {
            it('receives a 200', () => {
                return supertest(server)
                .delete('/api/teams/:id')
                .send({id: 3})
                .expect(200)
            })
        })
    })
})