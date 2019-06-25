const axios = require('axios');
let API;
try {
	API = require('./api');
} catch (err) {
	API = {
		DARKSKY: process.env.DARKSKY || ''
	};
}
const tempOptions = {
	freezing: { min: -100, max: 32 },
	cold: { min: -32, max: 40 },
	cool: { min: 40, max: 60 },
	warm: { min: 60, max: 75 },
	hot: { min: 75, max: 90 },
	toasty: { min: 90, max: 1000 }
};

const checkClimate = (forecast, searchTemp, searchWeather) => {
	if (
		forecast.temperatureHigh < tempOptions[searchTemp].max &&
		forecast.temperatureHigh >= tempOptions[searchTemp].min
	) {
		if (searchWeather === 'snowy' && forecast.precipType === 'snow' && forecast.precipProbability > 0.3) {
			return true;
		} else if (searchWeather === 'rainy' && forecast.precipType === 'rain' && forecast.precipProbability > 0.3) {
			return true;
		} else if (searchWeather === 'sunny' && forecast.precipProbability <= 0.3) {
			return true;
		}
	}

	return false;
};

const getNearbyCities = async (req, res) => {
	try {
		const { tempChoice, weatherChoice, location } = req.body;
		const returnDetails = 'full';
		const maxRows = 20;
		const citySize = 'cities1000';
		const radius = 50;
		const username = 'beartaco';

		const nearbyUrl = `http://api.geonames.org/findNearbyPlaceNameJSON?lat=${location.lat}&lng=${location.lng}&style=${returnDetails}&cities=${citySize}&radius=${radius}&maxRows=${maxRows}&username=${username}`;
		let results = await axios.get(nearbyUrl);
		results = results.data.geonames;
		// results = [ results.data.geonames[0], results.data.geonames[1] ];

		const forecastPromises = results.map((result) => {
			const lng = result.lng;
			const lat = result.lat;
			const url = `https://api.darksky.net/forecast/${API.DARKSKY}/${lat},${lng}?exclude=[currently, minutely, hourly, alerts, flags]`;

			return axios.get(url);
		});

		const forecastResults = await Promise.all(forecastPromises);

		// We only retrieve the data for one week from today

		const forecastData = forecastResults.map((result) => {
			return result.data.daily.data[7];
		});

		let finalResults = [];

		if (forecastData.length > 0) {
			for (let i = 0; i < forecastData.length; i++) {
				if (checkClimate(forecastData[i], tempChoice, weatherChoice)) {
					finalResults.push({
						location: results[i],
						forecast: forecastData[i]
					});
				}
			}
		}

		res.status(200).send(finalResults);
	} catch (err) {
		res.status(400).send();
		console.log(err);
	}
};

module.exports = {
	getNearbyCities
};
