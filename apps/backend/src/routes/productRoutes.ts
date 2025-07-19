import express, { Router } from 'express';
import ProductController from '../controllers/productController';

const router: Router = express.Router();

const productController = new ProductController();

router.get('/', (req, res) => productController.getProducts(req, res));

export default router;
