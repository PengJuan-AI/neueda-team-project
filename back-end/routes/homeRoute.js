// routes/artistRoutes.js

import express from 'express';
import * as homeController from '../controllers/homeController.js';

/**
 * express.Router() is a mini Express application without the views or settings.
    It's used to handle routing for different parts of your app. 
    You can think of it as a way to create a new "sub-application" that you can use in your main application.
**/
const router = express.Router();

router.get('/', homeController.getHome);

export default router;