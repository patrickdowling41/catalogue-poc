import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const router: Router = Router();

router.use('/__manifest', (req, res, next) => {
  const referer = req.headers.referer || '';
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
});

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

export default router;
