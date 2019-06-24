import React from 'react';
import { Box, Heading } from 'grommet';

export default function Greeting() {
	let message = '';

	const data = [
		[ 22, "you're up late" ],
		[ 18, 'good evening' ],
		[ 12, 'good afternoon' ],
		[ 5, 'good morning' ],
		[ 0, "you're up late" ]
	];

	const hr = new Date().getHours();

	for (var i = 0; i < data.length; i++) {
		if (hr >= data[i][0]) {
			message = data[i][1];
			break;
		}
	}

	return (
		<Box
			animation={{
				type: 'fadeIn',
				delay: 700,
				duration: 2000
			}}
			margin="small"
			alignSelf="center"
		>
			<Heading color="neutral-1">{message}, beautiful</Heading>
		</Box>
	);
}
