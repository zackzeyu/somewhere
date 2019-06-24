import React, { useState } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import layer0 from './assets/layer0.svg';
import layer1 from './assets/layer1.svg';
import layer2 from './assets/layer2.svg';
import layer3 from './assets/layer3.svg';
import layer4 from './assets/layer4.svg';
import layer5 from './assets/layer5.svg';
import layer6 from './assets/layer6.svg';
import { Grommet, Box, Clock, Image, Text } from 'grommet';
import Greeting from './components/Greeting';
import SearchBar from './components/SearchBar';
import MapContainer from './components/MapContainer';
import theme from './theme';

export default function App2() {
	const mainBoxStyle = {
		zIndex: 100,
		height: '300px',
		paddingLeft: 50,
		paddingRight: 50,
		paddingTop: 50,
		paddingBottom: 0,
		borderRadius: '5px',
		textAlign: 'center'
	};
	const [ showMap, setShowMap ] = useState(false);
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
					<Box direction="column" justify="center" align="center" height="50vh">
						<Box style={mainBoxStyle}>
							<Text alignSelf="center">it is now... </Text>
							<Clock alignSelf="center" precision="minutes" type="digital" />
							<Greeting />
							<SearchBar setShowMap={setShowMap} />
						</Box>
					</Box>
					{showMap && (
						<Box
							animation={{
								type: 'fadeIn',
								duration: 1000
							}}
						>
							<MapContainer />
						</Box>
					)}
				</ParallaxBanner>
			</Box>
		</Grommet>
	);
}
