import express from 'express';

import frontendProxyRoutes from './routes/frontendProxyRoutes';
import productRoutes from './routes/productRoutes';

const app = express();

app.use(express.json());

// Double as Reverse Proxy in development mode (handled by CloudFront in production)
if (process.env.NODE_ENV === 'development') {
  app.use('/', frontendProxyRoutes);
}

app.use('/api/product', productRoutes);

app.listen(3000, () => {
  console.log('Gateway listening on http://localhost:3000');
});
