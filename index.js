const fastify = require('fastify')();

fastify.get('/', async (request, reply) => {
  return { message: 'Hello World!' };
});

fastify.setErrorHandler((error, request, reply) => {
  console.error(error);
  reply.status(500).send({ error: 'Internal Server Error' });
});

const start = async () => {
  try {
    await fastify.listen(process.env.PORT, '0.0.0.0');
    console.log(`Server started successfully on port ${process.env.PORT}!`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
