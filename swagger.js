const swaggerDocument = {
    openapi: "3.0.0",
    info: {
      title: "GraphQL API with Swagger",
      version: "1.0.0",
      description: "Documentación de la API GraphQL que imprime un mensaje personalizado.",
    },
    servers: [
      {
        url: "http://localhost:4000/graphql",
        description: "Servidor GraphQL Local",
      },
    ],
    paths: {
      "/graphql": {
        post: {
          tags: ["GraphQL"],
          summary: "Ejecutar consultas en el endpoint GraphQL",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    query: {
                      type: "string",
                      example: `
                        query {
                          printName(name: "Mateo Carrasco")
                        }
                      `,
                    },
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: "Respuesta exitosa",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      data: {
                        type: "object",
                        example: {
                          printName: "Hola, Mateo Carrasco!",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  };
  
  module.exports = swaggerDocument;
  