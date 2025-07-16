import express, { Router } from 'express';
import productController from '../controllers/productController';

const router: Router = express.Router();

router.get('/', productController.getProducts);

export default router;
