import axios from 'axios';

export const createProductApi = () => {
  const productsApi = axios.create({
    baseURL: `${window.ENV.API_ROUTE}/product`,
  });
  const getProductsByCategory = async (categoryName: string) => {
    const response = await productsApi.get(`/category/${categoryName}`);
    return response.data;
  };

  return { getProductsByCategory };
};
