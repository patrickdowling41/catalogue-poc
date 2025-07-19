import { useParams } from '@remix-run/react';

const Category = () => {
  const { category } = useParams();
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Category - {category}
      </h1>
    </div>
  );
};

export default Category;
