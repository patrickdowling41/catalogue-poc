import express, { Router } from 'express';
import ProductController from '../controllers/productController';

const router: Router = express.Router();

const productController = new ProductController();

router.get('/', (req, res) => productController.getProducts(req, res));

router.get('/category/:category', (req, res) =>
  productController.getProductsByCategory(req, res)
);

export default router;
