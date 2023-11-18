const express = require('express')

const app = express()

const teams = [
  'ABC',
  'America RN',
  'Alecrim'
]

app.get('/teams', (req, res) => {
  return res.status(200).json(teams)
})

app.listen(3000, () => {
  console.log('Xablau!!!');
})