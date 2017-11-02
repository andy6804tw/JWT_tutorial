const express = require('express')
const app =express();
const jwt = require('jsonwebtoken')
const passport = require('passport')

app.use(passport.initialize())

app.get('/api',(req, res) => {
  res.json({
    text: 'my api'
  })
})

app.post('/api/login',(req, res) => {
  //auth user
  const user = { id: 3 }
  const token =jwt.sign({ user }, 'my_serect_key')
  res.json({
    token: token
  })
})

app.get('/api/product', ensureToken, (req,res) => {
  jwt.verify(req.token,'my_serect_key', function(err, data){
    if(err){
      res.sendStatus(403)
    }else{
      res.json({
        text: 'this is product',
        data: data
      })
    }
  })
  
})

function ensureToken(req, res, next){
  const bearerHeader = req.headers['authorization'] // token receive
  if(typeof bearerHeader != 'undefined'){
    const bearer = bearerHeader.split(' ')
    const bearerToken = bearer[1]
    req.token = bearerToken;
    next()
  }else{
    res.sendStatus(403)
  }
}

app.listen(8000, (req, res) => {
  console.log('App listen on port 8000')
})