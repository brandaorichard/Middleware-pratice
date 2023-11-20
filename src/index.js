const express = require('express')

const app = express()
app.use(express.json())

const teams = [
  'ABC',
  'America RN',
  'Alecrim'
]

// no exemplo abaixo, seguimos o padrao de separacao funcao e endpoint

// funcao getAllTeams
const getAllTeams = (req, res) => {
  return res.status(200).json(teams)
}
// na sequencia chamamos a funcao como parametro do nosso endpoint get(detalhe importante: chamamos somente a variavel sem a funcao () de fato.)
app.get('/teams', getAllTeams)

// MIDDLEWARE de validacao para o createTeam, chamamos o diretamente no parametro do endpoint
const validateName = (req, res, next) => {
  const { name } = req.body
  if(!name || typeof name != 'string') {
    return res.status(400).json({ message: 'nome invalido' })
  }
  next()
}

// funcao createTeam
const createTeam = (req, res) => {
  const { name } = req.body
  teams.push(name)
  return res.status(201).end(); // uso do end() para indiciar q nao queremos enviar nenhum corpo como resposta
}
// endpoint post
app.post('/teams', validateName, createTeam) // com a seguinte estrutura quando for feito uma requisicao para o endpoint em questao, primeiro ele bate no middleware de validacao e na sequencia CASO FOR VALIDADO ira dar continuidade e bater na proxima funcao q no caso eh a createTeam

app.listen(3000, () => {
  console.log('Xablau!!!');
})
