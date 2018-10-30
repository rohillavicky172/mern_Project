import { Router } from 'express';
import * as Signup from '../controllers/signup.controller';
const router = new Router();

// Get all users
router.route('/signup').get(Signup.getUsersignup);

// Get one post by cuid
router.route('/signup/:username').get(Signup.getUser);

// Add a new user
router.route('/signup').post(Signup.addUserSignup);

export default router;
