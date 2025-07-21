import React from 'react';
import { IProduct } from '../../types/Product.types';

const ProductTile = ({ product }: { product: IProduct }) => {
  return (
    <>
      {product.sku}
      {product.price}
      {product.category}
    </>
  );
};
export { ProductTile };
