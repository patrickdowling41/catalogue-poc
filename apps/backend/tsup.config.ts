import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.ts', '!src/**/*.spec.ts'],
  outDir: './build/apps/bff',
  target: 'node22',
  format: ['cjs'],
  dts: false,
  sourcemap: true,
  clean: true,
});
