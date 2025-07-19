import { createRemixStub } from '@remix-run/testing';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Product from '../../app/routes/product.$product';

test('renders loader data', async () => {
  const RemixStub = createRemixStub([
    {
      path: '/',
      Component: Product,
    },
  ]);

  render(<RemixStub />);

  await screen.findByText('Product');
});
