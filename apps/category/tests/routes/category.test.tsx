import { createRemixStub } from '@remix-run/testing';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Category from '../../app/routes/category';

test('renders loader data', async () => {
  const RemixStub = createRemixStub([
    {
      path: '/category',
      Component: Category,
    },
  ]);

  render(<RemixStub />);

  await screen.findByText('Category');
});
