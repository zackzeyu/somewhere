import React from 'react';
import { Box, Heading } from 'grommet';

export default function Greeting() {
	return (
		<Box
			animation={{
				type: 'fadeIn',
				delay: 2000,
				duration: 2000
			}}
			margin="small"
			alignSelf="center"
		>
			<Heading color="neutral-1">Good [morning], beautiful</Heading>
		</Box>
	);
}
