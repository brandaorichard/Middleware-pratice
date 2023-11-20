const { Router } = require('express')

const validateName = require('../middlewares/validateName')

const teamsRouter = Router()

const teams = [
  'ABC',
  'America RN',
  'Alecrim'
]

const getAllTeams = (req, res) => {
  return res.status(200).json(teams)
}

teamsRouter.get('/teams', getAllTeams)


const createTeam = (req, res) => {
  const { name } = req.body
  teams.push(name)
  return res.status(201).end();
}

teamsRouter.post('/teams', validateName, createTeam)

module.exports = teamsRouter;