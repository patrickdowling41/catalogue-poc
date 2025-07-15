import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const router: Router = Router();

router.use(
  '/browse',
  createProxyMiddleware({
    target: 'http://localhost:5173',
    changeOrigin: true,
    pathRewrite: { '^/browse': '' },
    ws: true,
  })
);

router.use(
  '/product/*',
  createProxyMiddleware({
    target: 'http://localhost:5174',
    changeOrigin: true,
    pathRewrite: { '^/product': '' },
    ws: true,
  })
);

export default router;
