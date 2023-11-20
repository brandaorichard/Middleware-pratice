const express = require('express')
const validateName = require('./middlewares/validateName')
const logger = require('./middlewares/logger')

const app = express()
app.use(express.json())
app.use(logger)

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

// funcao createTeam
const createTeam = (req, res) => {
  const { name } = req.body
  teams.push(name)
  return res.status(201).end(); // uso do end() para indiciar q nao queremos enviar nenhum corpo como resposta
}
// endpoint post
app.post('/teams', validateName, createTeam) // com a seguinte estrutura quando for feito uma requisicao para o endpoint em questao, primeiro ele bate no middleware de validacao e na sequencia CASO FOR VALIDADO ira dar continuidade e bater na proxima funcao q no caso eh a createTeam. Tambem efetuamos a chama da middleware para visualizacao de requisicoes, chamamos antes de todos os outros middlewares e funcoes pois queremos o log de todas as reqs independente se deu certo ou nao

app.listen(3000, () => {
  console.log('Xablau!!!');
})
