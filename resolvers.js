const resolvers = {
    Query: {
      hello: () => "Hola, mundo!",
      printName: (_, { name }) => `Hola, ${name}!`,
    },
  };
  
  module.exports = resolvers;
  