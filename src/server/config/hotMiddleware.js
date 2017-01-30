// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';

import config from '../../../webpack.config';

const compiler = webpack(config);

// ────────────────────────────────────────────────────────────────────────────────

const exec = (app) => {
  app.use(devMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));
  app.use(hotMiddleware(compiler));
};

export default exec;
