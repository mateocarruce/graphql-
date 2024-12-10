const { ApolloServer } = require('@apollo/server');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { expressMiddleware } = require('@apollo/server/express4');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const startServer = async () => {
  const app = express();

  // Crear instancia del servidor Apollo
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  app.use(cors());
  app.use(bodyParser.json());
  app.use('/graphql', expressMiddleware(server));

  // Ruta de documentación Swagger
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Servidor GraphQL corriendo en http://localhost:${PORT}/graphql`);
    console.log(`📄 Documentación Swagger en http://localhost:${PORT}/docs`);
  });
};

startServer();
