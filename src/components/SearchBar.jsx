import React, { useState } from 'react';
import { Box, Text, Select, Button } from 'grommet';
import SearchInput from './SearchInput';
import { geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';
import { MapLocation } from 'grommet-icons';
import { FlapperSpinner } from 'react-spinners-kit';

export default function SearchBar({
	setShowMap,
	setMapCenter,
	tempChoice,
	setTempChoice,
	weatherChoice,
	setWeatherChoice,
	setResultLocations
}) {
	const tempOptions = [ 'freezing', 'cold', 'cool', 'warm', 'hot', 'toasty' ];
	const weatherOptions = [ 'snowy', 'rainy', 'sunny' ];

	const handleTempChoiceChange = (option) => {
		setTempChoice(option.value);
	};
	const handleWeatherChoiceChange = (option) => {
		setWeatherChoice(option.value);
	};

	const [ locationId, setLocationId ] = useState('');
	const [ loading, setLoading ] = useState(false);

	const handleSearchClick = async () => {
		try {
			let searchUrl;
			if (window.location.hostname !== 'localhost') {
				searchUrl = `http://${window.location.hostname}/search`;
			} else {
				searchUrl = 'http://localhost:5005/search';
			}
			setShowMap(false);

			setLoading(true);

			const geocodeResults = await geocodeByPlaceId(locationId);
			const latLng = await getLatLng(geocodeResults[0]);
			setMapCenter(latLng);
			const body = JSON.stringify({
				tempChoice,
				weatherChoice,
				location: latLng
			});

			const searchResponse = await fetch(searchUrl, {
				method: 'post',
				headers: {
					'Content-Type': 'application/json'
				},
				body
			});

			const searchData = await searchResponse.json();

			setLoading(false);
			setResultLocations(searchData);
			setShowMap(true);
		} catch (err) {
			setLoading(false);
			alert('Something went wrong! D:');
			console.error('Error', err);
		}
	};

	return (
		<Box direction="row" justify="center" align="center" wrap={true} style={{ zIndex: 100 }}>
			<Box>
				<Text
					size="medium"
					margin={{
						left: 'xsmall',
						right: 'xsmall'
					}}
				>
					take me somewhere
				</Text>
			</Box>
			<Box>
				<Select
					style={{
						width: 90
					}}
					plain={true}
					size="medium"
					options={tempOptions}
					value={tempChoice}
					onChange={handleTempChoiceChange}
					icon={false}
				/>
			</Box>
			<Text
				size="medium"
				margin={{
					left: 'xsmall',
					right: 'xsmall'
				}}
			>
				and
			</Text>
			<Box>
				<Select
					style={{
						width: 100
					}}
					plain={true}
					size="medium"
					options={weatherOptions}
					value={weatherChoice}
					onChange={handleWeatherChoiceChange}
					icon={false}
				/>
			</Box>
			<Box>
				<Text
					size="medium"
					margin={{
						left: 'xsmall',
						right: 'xsmall'
					}}
				>
					near
				</Text>
			</Box>
			<Box>
				<SearchInput setLocationId={setLocationId} />
			</Box>
			<Box
				margin={{
					left: 'medium',
					right: 'medium'
				}}
			>
				<Button
					color="neutral-1"
					primary
					icon={<MapLocation />}
					label="Go"
					onClick={handleSearchClick}
					style={{ zIndex: 100 }}
				/>
			</Box>
			{loading && <FlapperSpinner color="rgba(19, 69, 57, 1)" />}
		</Box>
	);
}
