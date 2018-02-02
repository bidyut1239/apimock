import * as handlers from './handlers';

let routes =
  {
    method: 'GET',
    path: '/hello/{name}',
    handler: handlers.helloUnique
  };

module.exports = routes;
