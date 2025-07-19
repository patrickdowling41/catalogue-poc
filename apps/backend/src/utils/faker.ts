import { faker } from '@faker-js/faker';
import { ICreateFakeProduct, IProduct } from '../types/Product';

const createFakeProducts = ({
  sku,
  category,
  count = 1,
}: ICreateFakeProduct): IProduct[] => {
  return faker.helpers.multiple(
    () => ({
      sku: sku
        ? String(sku)
        : faker.number.int({ min: 1, max: 1000 }).toString(),
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price()),
      rating: faker.number.int({ min: 10, max: 50 }),
      ratingCount: faker.number.int({ min: 1, max: 100 }),
      category: category || faker.commerce.department(),
      thumbnail: faker.image.urlLoremFlickr({
        category: 'product',
        width: 640,
        height: 480,
      }),
    }),
    { count }
  );
};
export { createFakeProducts };
