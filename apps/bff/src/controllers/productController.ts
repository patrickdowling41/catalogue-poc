import Product from '../model/productModel';

const productModel = new Product();

const getProducts = async (req, res) => {
  try {
    const products = await productModel.find();

    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default {
  getProducts,
};
