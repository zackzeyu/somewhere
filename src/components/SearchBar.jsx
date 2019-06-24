import React, { useState } from 'react';
import { Box, Text, Select, Button } from 'grommet';
import SearchInput from './SearchInput';
import { geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';
import { MapLocation } from 'grommet-icons';

export default function SearchBar({ setShowMap }) {
	const tempOptions = [ 'freezing', 'cold', 'cool', 'warm', 'hot', 'toasty' ];
	const weatherOptions = [ 'snowy', 'rainy', 'sunny' ];

	const [ tempChoice, setTempChoice ] = useState('warm');
	const [ weatherChoice, setWeatherChoice ] = useState('sunny');
	const handleTempChoiceChange = (option) => {
		setTempChoice(option.value);
	};
	const handleWeatherChoiceChange = (option) => {
		setWeatherChoice(option.value);
	};

	const [ locationId, setLocationId ] = useState('');

	const handleSearchClick = () => {
		const url = `http://localhost:5005/search`;
		setShowMap(true);
		geocodeByPlaceId(locationId)
			.then((results) => getLatLng(results[0]))
			.then((latLng) => {
				const body = JSON.stringify({
					tempChoice,
					weatherChoice,
					location: latLng
				});
				return fetch(url, {
					method: 'post',
					headers: {
						'Content-Type': 'application/json'
					},
					body
				});
			})
			.catch((error) => console.error('Error', error));
	};

	return (
		<Box direction="row" justify="center" align="center" wrap={true} style={{ zIndex: 100 }}>
			<Box>
				<Text
					size="large"
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
					size="large"
					options={tempOptions}
					value={tempChoice}
					onChange={handleTempChoiceChange}
					icon={false}
				/>
			</Box>
			<Text
				size="large"
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
					size="large"
					options={weatherOptions}
					value={weatherChoice}
					onChange={handleWeatherChoiceChange}
					icon={false}
				/>
			</Box>
			<Box>
				<Text
					size="large"
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
					left: 'medium'
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
		</Box>
	);
}
