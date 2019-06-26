// const router = require('express').Router();
const path = require('path');

const controller = require(path.resolve(__dirname, 'controller.js'));

async function routes(fastify, options) {
	fastify.post('/search', controller.getNearbyCities);
	fastify.get('/googleapi', controller.getGoogleMapsApi);
}

module.exports = routes;
