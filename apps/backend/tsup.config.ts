import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.ts', '!src/**/*.spec.ts'],
  outDir: './build/apps/backend',
  target: 'node22',
  format: ['cjs'],
  dts: false,
  sourcemap: true,
  clean: true,
});
