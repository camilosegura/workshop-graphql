const express = require('express');
const next = require('next');
const graphqlHTTP = require('express-graphql');
const schema = require('./api');
const config = require('../appConfig');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/test', (req, res) => res.send('Test response'));

    server.use('/graphql', graphqlHTTP({
      schema,
      graphiql: true,
    }));
    server.get('*', (req, res) => handle(req, res));

    server.listen(config.PORT, (err) => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on http://localhost:${config.PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
