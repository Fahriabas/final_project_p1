const express = require('express')
const Router = require('./routes')
const app = express()
const port = 3000


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use('/', Router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})