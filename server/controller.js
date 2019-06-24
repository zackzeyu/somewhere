const axios = require('axios');

const options = {
	snowing: 0,
	freezing: 4,
	cold: 6,
	cool: 10,
	temperate: 12,
	warm: 20,
	'with sunshine': 10,
	hot: 80,
	'very toasty': 90
};

const getNearbyCities = async (req, res) => {
	try {
		const { tempChoice, location } = req.body;
		const returnDetails = 'full';
		const maxRows = 100;
		const citySize = 'cities1000';
		const radius = 50;
		const username = 'beartaco';

		const nearbyUrl = `http://api.geonames.org/findNearbyPlaceNameJSON?lat=${location.lat}&lng=${location.lng}&style=${returnDetails}&cities=${citySize}&radius=${radius}&maxRows=${maxRows}&username=${username}`;
		const results = await axios.get(nearbyUrl);
		console.log(results.data.geonames);
		res.status(200).send();
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	getNearbyCities
};
