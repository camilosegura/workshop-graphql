const express = require('express');
const next = require('next');
// const graphqlHTTP = require('express-graphql');
// const schema = require('./api');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.NODE_ENV === 'production' ? 80 : 3000;

app.prepare()
  .then(() => {
    const server = express();

    // server.use('/graphql', graphqlHTTP({
    //   schema,
    //   graphiql: true,
    // }));
    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) {
        throw err;
      }
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
