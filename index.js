const express = require('express')
const app = express();
const jwt = require('jsonwebtoken')
const passport = require('passport')
const service = require('./auth.service')
var bodyParser = require('body-parser')

app.use(passport.initialize())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
  res.json({
    text: 'my api'
  })
})

app.post('/api/login', service.authLocal, (req, res) => {
  const token = jwt.sign(req.user, 'my_serect_key')
  const obj = {
    user: req.user,
    token: `JWT ${token}`
  }
  res.status(200).json(obj)
})

app.get('/api/product', service.authJwt, (req, res) => {
  res.json({
    text: 'this is product',
    user: req.user
  })
})

app.listen(8000, (req, res) => {
  console.log('App listen on port 8000')
})