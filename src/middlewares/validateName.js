// MIDDLEWARE de validacao para o createTeam, chamamos o diretamente no parametro do endpoint
const validateName = (req, res, next) => {
  const { name } = req.body
  if(!name || typeof name != 'string') {
    return res.status(400).json({ message: 'nome invalido' })
  }
  next()
}

module.exports = validateName