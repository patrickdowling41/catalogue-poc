import React from 'react';
import { IProduct } from '../../types/Product.types';

const ProductTile = ({ product }: { product: IProduct }) => {
  return (
    <div className="flex gap-4">
      <button className="bg-brand-600 text-white p-4 rounded-lg">
        Styled with shared Tailwind!
      </button>
      <div>{product.sku}</div>
      <div>{product.price}</div>
      <div>{product.category}</div>
    </div>
  );
};
export { ProductTile };
