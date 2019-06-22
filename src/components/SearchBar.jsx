import React, { useState } from 'react';
import { Box, Text, Select, TextInput } from 'grommet';

export default function SearchBar() {
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
		setTempChoice(option);
	};

	const [ location, setLocation ] = useState('');
	const handleLocationChange = (e) => {
		setLocation(e.target.value);
	};

	return (
		<Box direction="row" justify="center" align="center">
			<Text
				size="large"
				margin={{
					left: 'xsmall',
					right: 'xsmall'
				}}
			>
				Take me somewhere
			</Text>
			<Select size="large" options={options} value={tempChoice} onChange={handleTempChoiceChange} />
			<Text
				size="large"
				margin={{
					left: 'xsmall',
					right: 'xsmall'
				}}
			>
				near
			</Text>
			<Box>
				<TextInput size="large" placeholder="type here" value={location} onChange={handleLocationChange} />
			</Box>
		</Box>
	);
}
