const fastify = require('fastify')();
const path = require('path');
const port = process.env.PORT || 5005;

fastify.register(require('fastify-compress'));
fastify.register(require('fastify-cors'));
fastify.register(require('fastify-static'), {
	root: path.join(__dirname, '../build'),
	prefix: '/'
});
fastify.register(require(path.resolve(__dirname, 'router.js')));

const start = async () => {
	try {
		console.log(`✅ Comments component server - fastify - listening on port ${port}`);
		await fastify.listen(port, '::');
	} catch (err) {
		console.log(err);
		fastify.log.error(err);
		process.exit(1);
	}
};

start();
