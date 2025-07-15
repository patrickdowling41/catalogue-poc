class Product {
  private products: Array<{ id: number; name: string; price: number }>;
  constructor() {
    this.products = [
      { id: 1, name: 'Product A', price: 100 },
      { id: 2, name: 'Product B', price: 200 },
    ];
  }

  find(): Promise<Array<{ id: number; name: string; price: number }>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.products);
      }, 1000);
    });
  }
}

export default Product;
