import testRoutes from './testapis/index';
import testRoutesUnique from './testapis/indexunique';
import prodRoutes from './prodapis/index';
import prodRoutesCsv from './prodapis/indexcsv';

let routes = [];
routes.push(testRoutes);
routes.push(testRoutesUnique);
routes.push(prodRoutes);
routes.push(prodRoutesCsv);

module.exports = routes;
