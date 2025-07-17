import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const router: Router = Router();

router.use(
  '/browse',
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

router.use('*', (req, res, next) => {
  const referer = req.headers.referer || '';

  // Handle case where __manifest is stripped out from the URL by Express
  const baseUrl = req.baseUrl || '';
  if (baseUrl.includes('__manifest')) {
    req.url = baseUrl;
  }

  // Proxy Requests from referer back to the correct frontend
  if (referer.includes('/browse')) {
    return createProxyMiddleware({
      target: 'http://localhost:5173',
      changeOrigin: true,
    })(req, res, next);
  } else if (referer.includes('/product')) {
    return createProxyMiddleware({
      target: 'http://localhost:5174',
      changeOrigin: true,
    })(req, res, next);
  }
  return next();
});

export default router;
