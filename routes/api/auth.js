const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const config = require('config')
const jwt = require('jsonwebtoken')
const auth = require('../../middleware/auth')


// User Model
const User = require('../../model/User');

// POST ROUTE api/auth
// This will authenticate user
// Access: PUBLIC
router.post('/', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' })
  }

  User.findOne({ email })
    .then(user => {
      if (!user) return res.status(400).json({ msg: 'User does not exist' })

      //unhash and compare plain text passwords
      bcryptjs.compare(password, user.password)
        .then(isMatch => {
          if (!isMatch) return res.status(400).json({ msg: 'Invalid user credentials' })

          jwt.sign(
            { id: user.id },
            config.get('jwtSecret'),
            { expiresIn: 3500 },
            (err, token) => {
              if (err) throw (err)

              res.json({
                token,
                user: {
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

// GET ROUTE api/auth/user
// Get user data
// Access: PRIVATE
// router.get('/users', auth, (req, res) => {
//   User.findById(req.user.id)
//     .select('-password')
//     .then(user => res.json(user))
// })



module.exports = router;