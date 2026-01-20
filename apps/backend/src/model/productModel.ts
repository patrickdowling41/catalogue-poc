import { IProduct } from '../types/Product';
import { createFakeProducts } from '../utils/faker';

class Product {
  async find(): Promise<IProduct[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const products = createFakeProducts({ count: 25 });
        return resolve(products);
      }, 100);
    });
  }

  async findBySku(sku: string): Promise<IProduct | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = createFakeProducts({ sku: sku, count: 1 })[0];
        return resolve(product || null);
      }, 100);
    });
  }

  async findByCategory(category: string): Promise<IProduct[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const products = createFakeProducts({ category, count: 25 });
        return resolve(products);
      });
    });
  }
}

export default Product;
