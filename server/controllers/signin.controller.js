import SignIn from '../models/sigin';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all Users
 * @param req
 * @param res
 * @returns void
 */
export function getUsers(req, res) {
  SignIn.find().sort('-dateAdded').exec((err, Users) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ Users });
  });
}



/**
 * Get a single user
 * @param req
 * @param res
 * @returns void
 */
export function getUser(req, res) {
    SignIn.findOne({ username: req.params.username }).exec((err, User) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ User });
  });
}

