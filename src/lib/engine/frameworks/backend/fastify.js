import { getFolder, getFile } from "../../utils/tree-nodes";

/**
 * Resolves base structure for a Fastify backend.
 */
export function fastifyFramework(config) {
  const isTS = config.language === "typescript";
  const ext = isTS ? "ts" : "js";

  return [
    getFolder("src", [
      getFile(
        `index.${ext}`,
        `
import Fastify from 'fastify';

const fastify = Fastify({
  logger: true
});

fastify.get('/api/health', async (request, reply) => {
  return { status: 'ok', timestamp: new Date() };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3001 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
        `.trim(),
      ),
    ]),
    getFile(".env", "PORT=3001\nDATABASE_URL=mongodb://localhost:27017/mydb"),
    getFile(".gitignore", "node_modules\n.env\ndist\n.DS_Store"),
  ];
}
