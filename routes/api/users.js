const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const config = require('config')
const jwt = require('jsonwebtoken')


// User Model
const User = require('../../model/User');

// GET ROUTE api/userProfile
// This route will GET ALL userProfiles from db
// Access: DEVELOPMENT ONLY
router.get('/', (req, res) => {
  console.log("getting ALL users")
  User.find()
    .then(profile => res.json(profile))
})

// POST ROUTE api/users
// This route will register a new user
// Access: PUBLIC
router.post('/', (req, res) => {
  const { name, email, password } = req.body;

  if(!name || !email || !password){
    return res.status(400).json( {msg: 'Please enter all fields'})
  }

  User.findOne({ email })
    .then(user => {
      if(user) return res.status(400).json({ msg: 'User already exists'})
      const newUser = new User ({
          name,
          email,
          password
        })
      
      //Create salt hash
      bcryptjs.genSalt(10, (err, salt) => {
        bcryptjs.hash(newUser.password, salt, (err, hash) => {
          if(err) throw(err)
          newUser.password = hash;
          newUser.save()
            .then(user => { 
              jwt.sign(
                {id: user.id},
                config.get('jwtSecret'),
                { expiresIn: 3600 },
                (err, token) => {
                  if(err) throw(err)
              
                  res.json({
                    token,
                    user:{
                      id: user.id,
                      name: user.name,
                      email: user.email
                    }
                  })

                }
              )


            })
        })
      })


    })

    
})

module.exports = router;