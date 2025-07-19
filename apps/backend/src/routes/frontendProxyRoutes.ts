import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const router: Router = Router();

const categoryProxy = createProxyMiddleware({
  target: 'http://localhost:5173',
  changeOrigin: true,
});

const productProxy = createProxyMiddleware({
  target: 'http://localhost:5174',
  changeOrigin: true,
});

router.use('*', (req, res, next) => {
  const referer = req.headers.referer || '';

  // Handles Express stripping __manifest from the URL
  if (req.baseUrl.startsWith('/__manifest')) {
    req.url = req.url.replace('/', '/__manifest');
  }

  // Proxy Requests from referer back to the correct frontend
  if (referer.includes('/category')) {
    return categoryProxy(req, res, next);
  } else if (referer.includes('/product')) {
    return productProxy(req, res, next);
  }
  next();
});

router.use(
  '/category',
  createProxyMiddleware({
    target: 'http://localhost:5173',
    changeOrigin: true,
    ws: true,
  })
);

router.use(
  '/product/*',
  createProxyMiddleware({
    target: 'http://localhost:5174',
    changeOrigin: true,
    ws: true,
  })
);

export default router;
