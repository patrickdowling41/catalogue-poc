import axios from 'axios';

export const createProductApi = () => {
  const productsApi = axios.create({
    baseURL: 'http://localhost:3000/api/product',
  });

  const getProductsByCategory = async (categoryName: string) => {
    const response = await productsApi.get(`/category/${categoryName}`);
    return response.data;
  };

  return { getProductsByCategory };
};
