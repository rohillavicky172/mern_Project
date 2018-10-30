import { Router } from 'express';
import * as signinController from '../controllers/signin.controller';
const router = new Router();

// Get all Users
router.route('/signin').get(signinController.getUsers);

// Get one post by user
router.route('/signin/:username').get(signinController.getUser);



export default router;
