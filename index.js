const fastify = require('fastify')();

fastify.get('/', async (request, reply) => {
  return { message: 'Hello World!' };
});

const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT || 3000 });
    console.log(`Server started successfully on port ${process.env.PORT}!`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();

