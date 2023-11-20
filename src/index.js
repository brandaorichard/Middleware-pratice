const express = require('express')
const validateName = require('./middlewares/validateName')
const logger = require('./middlewares/logger')
const errorMiddleware = require('./middlewares/errorMiddleware')
const teamsRouter = require('./routes/teamRoutes')

const app = express()
app.use(express.json())
app.use(logger)
app.use(teamsRouter)
app.use(errorMiddleware) // detalhe importante: middlewares de erro sao sempre executado no final da cadeia


app.listen(3000, () => {
  console.log('Xablau!!!');
})
