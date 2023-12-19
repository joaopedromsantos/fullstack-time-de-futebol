const dotenv = require('dotenv');

dotenv.config();

// variaveis necessárias
const Fastify = require("fastify");
const fastify = Fastify({
    logger: false
});

// Configuração do CORS necessário 
const cors = require('@fastify/cors')
fastify.register(cors, { 
  origin: "*",
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Accept",
    "Content-type",
    "Authorization",
  ],
  methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
})

// Conexão com o banco
fastify.register(require('@fastify/postgres'), {
    connectionString: process.env.DATABASE_URL
});

// Get id
fastify.get("/get/:id", async (request, reply) => {
    try {
        const result = await fastify.pg.query(
            'SELECT * FROM times WHERE times.id = $1',
            [Number(request.params.id)]
        );
        return result.rows;
    } catch (error) {
        reply.status(500).send(error.message);
    }
});

// Get list
fastify.get("/", async (request, reply) => {
    try {
        const result = await fastify.pg.query("SELECT * FROM times");
        return result.rows;
    } catch (error) {
        reply.status(500).send(error.message);
    }
});

// Post
fastify.post("/criar", async (request, reply) => {
    try {
        const { id, nome, n_jogadores, valor_clube } = request.body;

        const result = await fastify.pg.query(
            "INSERT INTO times (id, nome, n_jogadores, valor_clube) VALUES ($1, $2, $3, $4)",
            [id, nome, n_jogadores, valor_clube]
        );

        return result.rows;
    } catch (error) {
        reply.status(500).send(error.message);
    }
});

// Edit
fastify.put("/edit/:id", async (request, reply) => {
    try {
        const { id, nome, n_jogadores, valor_clube } = request.body;

        const result = await fastify.pg.query(
            "UPDATE times SET nome = $2, n_jogadores = $3, valor_clube = $4 WHERE id = $1 RETURNING *",
            [id, nome, n_jogadores, valor_clube]
        );

        return result.rows;
    } catch (error) {
        reply.status(500).send(error.message);
    }
});

// Delete
fastify.delete("/delete/:id", async (request, reply) => {
    try {
        const result = await fastify.pg.query(
            'DELETE FROM times WHERE times.id = $1',
            [Number(request.params.id)]
        );
        return result.rows;
    } catch (error) {
        reply.status(500).send(error.message);
    }
});

const start = async () => {
    try {
      await fastify.listen({ port: process.env.PORT, host: '0.0.0.0' });
      console.log(`Server started successfully on port ${process.env.PORT}!`);
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  };
  
  start();
