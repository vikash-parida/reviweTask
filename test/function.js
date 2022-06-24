// let a = 10;

// let first = ()=>{
// console.log(this)
// }

// function second(){ 

// }

// 

const { check } = require('express-validator');

app.post('/user',
  check('email').custom(value => {
    return User.findByEmail(value).then(user => {
      if (user) {
        return Promise.reject('E-mail already in use');
      }
    });
  }),
  check('password').custom((value, { req }) => {
    if (value !== req.body.passwordConfirmation) {
      throw new Error('Password confirmation is incorrect');
    }
  }),
  (req, res) => {
    // Handle the request somehow
  },
);