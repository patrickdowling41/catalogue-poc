import Product from '../model/productModel';
import { Request, Response } from 'express';

class ProductController {
  productModel;

  constructor() {
    this.productModel = new Product();
  }

  getProductBySku = async (req: Request, res: Response) => {
    try {
      const sku = req.params.sku;
      const product = await this.productModel.findBySku(sku);
      if (!product) {
        res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (error) {
      console.error('Error fetching product:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  getProducts = async (req: Request, res: Response) => {
    try {
      const products = await this.productModel.find();

      res.status(200).json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  getProductsByCategory = async (req: Request, res: Response) => {
    try {
      const category = req.params.category;
      const products = await this.productModel.findByCategory(category);

      res.status(200).json(products);
    } catch (error) {
      console.error('Error fetching products by category: ', error);
    }
  };
}

export default ProductController;
