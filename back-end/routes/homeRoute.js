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
router.get('/cal_allocation', homeController.calAllocation);
router.get('/all_crypto', homeController.getCryptoJson);
router.get('/all_stock', homeController.getStockJson);
router.get('/:symbol', homeController.getStockBySymbol);
router.put('/:symbol', homeController.changeStockQuantity);


export default router;