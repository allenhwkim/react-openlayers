import esbuild from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';

esbuild.build({
  entryPoints: ['src/lib/index.ts'],
  bundle: true,
  minify: true,
  format: 'esm',
  sourcemap: true,
  outfile: 'dist/index.js',
  plugins: [nodeExternalsPlugin()],
});
