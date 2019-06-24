import React, { useState } from 'react';
import { Box, Text, Select, Button } from 'grommet';
import SearchInput from './SearchInput';
import { geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';
import { MapLocation } from 'grommet-icons';

export default function SearchBar({ setShowModal }) {
	const options = [
		'snowing',
		'freezing',
		'cold',
		'cool',
		'temperate',
		'warm',
		'with sunshine',
		'hot',
		'very toasty'
	];

	const [ tempChoice, setTempChoice ] = useState('with sunshine');
	const handleTempChoiceChange = (option) => {
		setTempChoice(option.value);
	};

	const [ locationId, setLocationId ] = useState('');

	const handleSearchClick = () => {
		const url = `http://localhost:5005/search`;
		setShowModal(true);
		// geocodeByPlaceId(locationId)
		// 	.then((results) => getLatLng(results[0]))
		// 	.then((latLng) => {
		// 		console.log('Success', latLng);
		// 		return fetch(url, {
		// 			method: 'post',
		// 			headers: {
		// 				'Content-Type': 'application/json'
		// 			},
		// 			body: JSON.stringify({
		// 				tempChoice,
		// 				location: latLng
		// 			})
		// 		});
		// 	})
		// 	.catch((error) => console.error('Error', error));
	};

	return (
		<Box direction="row" justify="center" align="center" wrap={true}>
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
					plain={true}
					size="large"
					options={options}
					value={tempChoice}
					onChange={handleTempChoiceChange}
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
				{/* <Geosuggest queryDelay="1000" /> */}
				{/* <TextInput size="large" placeholder="type here" value={location} onChange={handleLocationChange} /> */}
			</Box>
			<Box
				margin={{
					left: 'medium'
				}}
			>
				<Button color="neutral-1" primary icon={<MapLocation />} label="Go" onClick={handleSearchClick} />
			</Box>
		</Box>
	);
}
