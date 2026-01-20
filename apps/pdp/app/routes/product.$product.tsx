const Product = () => {
  const getCategoryRoute = (category: string) => {
    return `${window?.ENV?.CATEGORY_ROUTE}/${category}`;
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <a href={getCategoryRoute('abc123')}>Category abc</a>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Product - </h1>
    </div>
  );
};

export default Product;
