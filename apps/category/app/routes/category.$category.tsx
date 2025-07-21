import { useParams } from '@remix-run/react';
import { Suspense, useEffect, useState } from 'react';
import { createProductApi } from '../api/ProductApi';
import { IProduct } from '../types/Product.types';
import { ProductTile } from '../components/ProductTile';

const Category = () => {
  const { category } = useParams();

  const productApi = createProductApi();

  const [productsByCategory, setProductsByCategory] = useState<IProduct[]>([]);

  useEffect(() => {
    productApi.getProductsByCategory(category || '').then((products) => {
      setProductsByCategory(() => products);
    });
  }, []);

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Category - {category}
      </h1>
      <Suspense fallback="<div>Loading...</div>">
        {productsByCategory.map((product) => {
          return <ProductTile product={product} />;
        })}
      </Suspense>
    </div>
  );
};

export default Category;
