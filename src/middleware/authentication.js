const { getUserFromKey, getUserFromPassword } = require('../mongo');
const { sha256 } = require('../util');

const incorrectKey = { error: 'An incorrect key was provided in the headers.' };
const incorrectPass = { error: 'An incorrect username or password was provided in the headers.' };
const noKeyorPass = { error: 'No key nor username or password was provided in the headers.' };
const keyNotAllowed = { error: 'You cannot use this key in this endpoint.' };

async function authentication (req, res, next) {
  let userData;
  if (req.headers.key) {
    if (req.headers.key === 'public') return res.status(401).json(keyNotAllowed);
    // Get userData from key
    userData = await getUserFromKey(req.headers.key);
    if (userData === null) return res.status(401).json(incorrectKey);
  } else if (req.headers.username && req.headers.password) {
    // Get userData from username && password
    let password = sha256(req.headers.password);
    userData = await getUserFromPassword(req.headers.username, password);
    if (userData === null) return res.status(401).json(incorrectPass);
  } else {
    return res.status(401).json(noKeyorPass);
  }

  // Make it so you can access userdata everywhere.
  req.userData = userData;

  // Call the function to go to the next one.
  next();
}

async function browserAuthentication (req, res, next) {
  if (!req.cookies.authentication) return res.redirect('/login');
  let userData = await getUserFromKey(req.cookies.authentication);
  if (!userData) return res.redirect('/login');

  // Make it so you can access userdata everywhere.
  req.userData = userData;

  // Call the function to go to the next one.
  next();
}

module.exports.auth = authentication;
module.exports.browserAuth = browserAuthentication;