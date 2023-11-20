const errorMiddleware = (err, req, res, next) => {
  console.error(err.message)
  return res.status(500).json({ message: 'Internal Error' })
}

module.exports = errorMiddleware