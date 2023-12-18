// variaveis necessárias
const Fastify = require("fastify");
const fastify = Fastify({
    logger: false
});

// Conexão com o banco
fastify.register(require('@fastify/postgres'), {
    connectionString: 'postgresql://postgres:2AG-3bgDE3A21G6BD2gF363Eecfbgc36@viaduct.proxy.rlwy.net:18070/railway'
  })


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


// Iniciando servidor
fastify.listen({ port: process.env.PORT || 3000 }, function (error, address){
    if(error){
        console.log(error);
        process.exit(1);
    }
}) 