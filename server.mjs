import Fastify from 'fastify';
import fastifyStatic from '@fastify/static';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const server = Fastify({ logger: true });
const routes = ['/login', '/register', '/', '/l/:id'];

server.register(fastifyStatic, {
  root: join(__dirname, '/build/')
});

routes.forEach((route) => {
  server.get(route, (request, reply) => {
    reply.sendFile('index.html')
  })
})

server.listen({
  port: process.env.PORT || 3000,
  host: '0.0.0.0',
})
  .then(() => console.log('server was running'));
