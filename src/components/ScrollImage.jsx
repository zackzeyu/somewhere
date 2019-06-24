import React from 'react';
import { Box, Image } from 'grommet';
// import layer0 from '../assets/layer0.svg';

export default function ScrollImage({ image }) {
	return <Image fit="cover" src={image} />;
}
