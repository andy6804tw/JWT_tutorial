const LocalStrategy = require('passport-local')
const jwt = require('passport-jwt')
const passport = require('passport')

// Local strategy
const localOpts = {
  usernameField: 'email'
}
const localStrategy = new LocalStrategy(localOpts, async (email, password, done) => {
  const user={
    id: 3,
    email: 'andy@mail.com',
    password: '0000'
  }
  try {
    console.log(password,email,(user.password===(password)))
    if (!user) {
      console.log('no user')
      return done(null, false)
    } else if (!(user.password===(password))) {
      console.log('erroe password')
      return done(null, false)
    }

    return done(null, user)
  } catch (e) {
    return done(e, false)
  }
})

// Jwt strategy
const jwtOpts = {
  jwtFromRequest: jwt.ExtractJwt.fromAuthHeaderWithScheme('jwt'),
  secretOrKey: 'my_serect_key'
}

const jwtStrategy = new jwt.Strategy(jwtOpts, async (payload, done) => {
  try {
    //const user = await User.findById(payload._id) // payload就是使用者資料
    console.log(payload.id)
    const user={
      id: 3,
      email: 'andy@mail.com',
      password: '0000'
    }
    if (!user) {
      console.log('no user')
      return done(null, false)
    }

    return done(null, user)
  } catch (e) {
    return done(e, false)
  }
})
passport.use(localStrategy)
passport.use(jwtStrategy)
this.authLocal = passport.authenticate('local', { session: false })
this.authJwt = passport.authenticate('jwt', { session: false })
module.exports = this