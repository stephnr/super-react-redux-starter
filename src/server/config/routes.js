// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import {
  RootRouter,
  GraphRouter,
} from '../routes';

// ────────────────────────────────────────────────────────────────────────────────

const routes = (app) => {
  // init routes
  const rootRoutes = RootRouter(app);
  const graphRoutes = GraphRouter(app);

  // WEB ROUTES
  app.use('/', rootRoutes);

  // API ROUTES
  app.use('/api/v1/graph', graphRoutes);
};

export default routes;
