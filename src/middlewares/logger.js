// Funcao logger para exibir todas as requisicoes que foram realizadas
const logger = (req, res, next) => {
  const date = new Date()
  console.log(req.method, req.path, date.toISOString());

  next()
}

module.exports = logger