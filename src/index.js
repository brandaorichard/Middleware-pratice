const express = require('express')

const app = express()
app.use(express.json())

const teams = [
  'ABC',
  'America RN',
  'Alecrim'
]

// no exemplo abaixo, seguimos o padrao de separacao funcao e endpoint

// funcao buscar times
const getAllTeams = (req, res) => {
  return res.status(200).json(teams)
}
// na sequencia chamamos a funcao como parametro do nosso endpoint get(detalhe importante: chamamos somente a variavel sem a funcao () de fato.)
app.get('/teams', getAllTeams)

// funcao criar time
const createTeam = (req, res) => {
  const { name } = req.body
  teams.push(name)
  return res.status(201).end(); // uso do end() para indiciar q nao queremos enviar nenhum corpo como resposta
}
// endpoint post
app.post('/teams', createTeam) // chamada da funcao como parametro

app.listen(3000, () => {
  console.log('Xablau!!!');
})
