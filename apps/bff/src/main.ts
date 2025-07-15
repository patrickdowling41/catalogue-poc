import express from 'express';
import path from 'path';

import frontendProxyRoutes from './routes/frontendProxyRoutes';
import productRoutes from './routes/productRoutes';

const app = express();

app.use(express.json());

app.use('/', frontendProxyRoutes);

app.use('/api/product', productRoutes);

// Handle SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(3000, () => {
  console.log('Gateway listening on http://localhost:3000');
});
