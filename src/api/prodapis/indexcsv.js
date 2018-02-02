import * as handlers from './handlers';

let routes =
  {
    method: 'GET',
    path: '/csv2json',
    handler: handlers.csv2json
  };

module.exports = routes;
