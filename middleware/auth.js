const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const token = req.header('x-auth-token');

  // checking for token
  if (!token) return res.status(401).json({ msg: 'AUTHORIZATION DENIED' });

  try {
    // if token, then verify it
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: 'token is not valid' })

  }


}

module.exports = auth;