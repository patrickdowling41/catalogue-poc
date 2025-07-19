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

router.use('/__manifest', (req, res, next) => {
  const referer = req.headers.referer || '';
  req.url = `/__manifest${req.url.slice(1)}`;
  if (referer.includes('/category')) {
    return categoryProxy(req, res, next);
  } else if (referer.includes('/product')) {
    return productProxy(req, res, next);
  }
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
