import React, { useState, useEffect } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import layer0 from './assets/layer0.svg';
import layer1 from './assets/layer1.svg';
import layer2 from './assets/layer2.png';
import layer3 from './assets/layer3.png';
import layer4 from './assets/layer4.png';
import layer5 from './assets/layer5.png';
import layer6 from './assets/layer6.png';
import { Grommet, Box, Clock, Image, Text } from 'grommet';
import Greeting from './components/Greeting';
import SearchBar from './components/SearchBar';
import MapContainer from './components/MapContainer';
import theme from './theme';
// import dummyData from './assets/dummyData';
import Logo from './components/Logo';

export default function App2() {
	const mainBoxStyle = {
		zIndex: 100,
		height: '300px',
		width: '100%',
		paddingLeft: 50,
		paddingRight: 50,
		paddingTop: 50,
		paddingBottom: 0,
		borderRadius: '5px',
		textAlign: 'center'
	};
	const [ showMap, setShowMap ] = useState(false);
	const [ showSearchBar, setShowSearchBar ] = useState(false);

	// Set default map center to NYC
	const [ mapCenter, setMapCenter ] = useState({
		lat: 40.71427,
		lng: -74.00597
	});
	const [ tempChoice, setTempChoice ] = useState('warm');
	const [ weatherChoice, setWeatherChoice ] = useState('sunny');
	const [ resultLocations, setResultLocations ] = useState([]);

	useEffect(
		() => {
			let getGoogleMapsApiUrl;
			if (window.location.hostname !== 'localhost') {
				getGoogleMapsApiUrl = `http://${window.location.hostname}/googleapi`;
			} else {
				getGoogleMapsApiUrl = `http://localhost:5005/googleapi`;
			}
			// Retrieve Google Maps API if it has not yet been loaded and dynamically load Google Maps Script
			const existingScript = document.getElementById('googleMaps');

			if (!existingScript) {
				fetch(getGoogleMapsApiUrl)
					.then((res) => res.json())
					.then((apiKey) => {
						const script = document.createElement('script');
						script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
						script.id = 'googleMaps';
						document.head.appendChild(script);
						script.onload = () => {
							setShowSearchBar(true);
						};
					})
					.catch((err) => {
						alert('Unable to retrieve Google API key');
						console.log(err);
					});
			}
		},
		[ setShowSearchBar ]
	);

	return (
		<Grommet theme={theme}>
			<Box>
				<ParallaxBanner
					layers={[
						{
							children: <Image fit="cover" src={layer0} />,
							amount: 0.01
						},
						{
							children: <Image fit="cover" src={layer1} />,
							amount: 0.05
						},
						{
							children: <Image fit="cover" src={layer2} />,
							amount: 0.1
						},
						{
							children: <Image fit="cover" src={layer3} />,
							amount: 0.15
						},
						{
							children: <Image fit="cover" src={layer4} />,
							amount: 0.3
						},
						{
							children: <Image fit="cover" src={layer5} />,
							amount: 0.4
						},
						{
							children: <Image fit="cover" src={layer6} />,
							amount: 0.5
						}
					]}
					style={{
						height: '1300px',
						backgroundColor: 'rgba(238, 241, 236, 1)'
					}}
				>
					<Logo />
					<Box direction="column" justify="center" align="center" height="50vh">
						<Box style={mainBoxStyle}>
							<Text alignSelf="center">it is now... </Text>
							<Clock alignSelf="center" precision="minutes" type="digital" />
							<Greeting />
							{showSearchBar && (
								<Box
									animation={{
										type: 'fadeIn',
										duration: 1000
									}}
									margin={{
										bottom: 'medium'
									}}
								>
									<SearchBar
										setShowMap={setShowMap}
										setMapCenter={setMapCenter}
										tempChoice={tempChoice}
										setTempChoice={setTempChoice}
										weatherChoice={weatherChoice}
										setWeatherChoice={setWeatherChoice}
										setResultLocations={setResultLocations}
									/>
								</Box>
							)}
						</Box>
					</Box>
					{showMap && (
						<Box
							animation={{
								type: 'fadeIn',
								duration: 1000
							}}
						>
							<MapContainer mapCenter={mapCenter} resultLocations={resultLocations} />
						</Box>
					)}
				</ParallaxBanner>
			</Box>
		</Grommet>
	);
}
