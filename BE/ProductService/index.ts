import Fastify from 'fastify';

const fastify = Fastify({
  logger: true
});

fastify.get('/api/login', (request, reply) => {
  reply.type('application/json')
    .code(200)
    .send({ hello: 'world' });
});

fastify.listen({ port: 3000 }, (err: Error | null, address: string) => {
  if (err) throw err;
  console.log(`Server is now listening on ${address}`);
});
