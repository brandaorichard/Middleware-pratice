const express = require('express')
const validateName = require('./middlewares/validateName')
const logger = require('./middlewares/logger')
const teamsRouter = require('./routes/teamRoutes')

const app = express()
app.use(express.json())
app.use(logger)
app.use(teamsRouter)


app.listen(3000, () => {
  console.log('Xablau!!!');
})
