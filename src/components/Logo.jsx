import React from 'react';
import { Box, Text } from 'grommet';
import { Planet } from 'react-kawaii';
import TextLoop from 'react-text-loop';

export default function Logo() {
	const style = {
		position: 'absolute',
		top: 20,
		left: 20
	};

	const logoTextStyle = {
		zIndex: 100
	};

	const adjectives = [
		'sunny',
		'warm',
		'alive',
		'snowy',
		'amazing',
		'magical',
		'foggy',
		'beautiful',
		'cloudy',
		'bustling',
		'cool',
		'calm',
		'charming',
		'pretty',
		'cosmopolitan',
		'quiet',
		'enchanting',
		'fascinating',
		'homey',
		'ancient',
		'inspiring',
		'lively',
		'peaceful',
		'vibrant',
		'traditional'
	];

	const intervals = [];

	for (let i = 0; i < adjectives.length; i++) {
		const interval = Math.max(100, 800 - 10 * i ** 2.5);
		intervals.push(interval);
	}

	let color = '#fcdd76';

	const data = [
		[ 20, '#6B4984' ],
		[ 18, '#855988' ],
		[ 12, '#ffd95e' ],
		[ 6, '#fcdd76' ],
		[ 4, '#855988' ],
		[ 0, '#6B4984' ]
	];

	const hr = new Date().getHours();

	for (var i = 0; i < data.length; i++) {
		if (hr >= data[i][0]) {
			color = data[i][1];
			break;
		}
	}

	return (
		<Box style={style} direction="row" align="center">
			<Planet size={80} mood="happy" color={color} />

			<Text margin={{ left: 'small' }} weight="bold" size="large" style={logoTextStyle}>
				somewhere
				{/* <sup style={{ fontSize: 8, weight: 'light' }}>beta</sup> */}
				<span> </span>
				<TextLoop interval={intervals}>{adjectives.map((word) => <span>{word}</span>)}</TextLoop>
			</Text>
		</Box>
	);
}
