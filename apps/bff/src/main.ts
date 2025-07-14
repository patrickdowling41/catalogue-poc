import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use(express.json());

app.use(
  '/browse',
  createProxyMiddleware({
    target: 'http://localhost:5173',
    changeOrigin: true,
    pathRewrite: { '^/browse': '' },
  })
);

app.use(
  '/product/*',
  createProxyMiddleware({
    target: 'http://localhost:5174',
    changeOrigin: true,
    pathRewrite: { '^/product': '' },
  })
);

app.listen(3000, () => {
  console.log('Gateway listening on http://localhost:3000');
});
