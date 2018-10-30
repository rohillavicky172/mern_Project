import SignUp from '../models/signup';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all get exting users 
 * @param req
 * @param res
 * @returns void
 */
export function getUsersignup(req, res) {
    SignUp.find().sort('-dateAdded').exec((err, users) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ users });
  });
}

/**
 * Save a User
 * @param req
 * @param res
 * @returns void
 */
export function addUserSignup(req, res) {

  const user = new SignUp(req.body.user);
  // Let's sanitize inputs
  user.username = sanitizeHtml(user.username);
  user.password = sanitizeHtml(user.password);
  user.email = sanitizeHtml(user.email);
  user.mobileno = sanitizeHtml(user.mobileno);

  user.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ user: saved });
  });
}

/**
 * Get a single post
 * @param req
 * @param res
 * @returns void
 */
export function getUser(req, res) {
    SignUp.findOne({ cuid: req.params.username }).exec((err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ user });
  });
}
