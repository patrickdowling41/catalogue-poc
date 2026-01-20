import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const router: Router = Router();

const baseCategoryProxyConfig = {
  target: `${process.env.BASE_URL}:${process.env.CATEGORY_PORT}`,
  changeOrigin: true,
};

const baseProductProxyConfig = {
  target: `${process.env.BASE_URL}:${process.env.PRODUCT_PORT}`,
  changeOrigin: true,
};

router.use(
  '/category/*',
  createProxyMiddleware({
    ...baseCategoryProxyConfig,
    ws: true,
  })
);

router.use(
  '/product/*',
  createProxyMiddleware({
    ...baseProductProxyConfig,
    ws: true,
  })
);

router.use('*', (req, res, next) => {
  const referer = req.headers.referer || '';

  const excludedRoutes = ['/api'];

  // Skip frontend routes
  excludedRoutes.forEach((route) => {
    if (req.url.includes(route)) {
      return;
    }
  });

  // Handles Express stripping __manifest from the URL
  if (req.baseUrl.startsWith('/__manifest')) {
    req.url = req.url.replace('/', '/__manifest');
  }

  if (referer.includes('/category')) {
    // Proxy Requests from referer back to the correct frontend
    return createProxyMiddleware(baseCategoryProxyConfig)(req, res, next);
  } else if (referer.includes('/product')) {
    return createProxyMiddleware(baseProductProxyConfig)(req, res, next);
  }
  next();
});

export default router;
