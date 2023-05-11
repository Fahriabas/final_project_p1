const express = require('express')
const Router = require('./routes')
const app = express()
const port = 3000
const session = require('express-session')


app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))
app.use(session({
  secret: 'rahasiafahri',
  resave: true,
  saveUninitialized: false,
  cookie: { secure: false, sameSite: true }
}))
app.use('/', Router)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})