import React from 'react';
import './App.css';
import { Grommet, Box, Clock } from 'grommet';
import splash from './assets/splash.jpg';
import Greeting from './components/Greeting';
import SearchBar from './components/SearchBar';
import MapContainer from './components/MapContainer';

const theme = {
	global: {
		font: {
			family: 'Quicksand',
			size: '14px',
			height: '20px'
		},
		backgroundRepeat: 'no-repeat',
		colors: {
			brand: 'rgba(185, 163, 148, 1)',
			focus: '#D4C5C7',
			'neutral-1': '#586A6A'
		},
		input: {
			weight: 400
		},
		control: {
			border: {
				width: '1px'
			}
		}
	}
};

function App() {
	const mainBoxStyle = {
		width: '80%',
		paddingLeft: 50,
		paddingRight: 50,
		paddingTop: 40,
		paddingBottom: 40,
		backgroundColor: 'rgba(255, 255, 255, 0.9)',
		borderRadius: '5px',
		textAlign: 'center'
	};

	return (
		<Grommet theme={theme}>
			<Box
				direction="column"
				justify="center"
				align="center"
				background={{
					image: `url(${splash})`
				}}
				height="100vh"
				animation={{
					type: 'fadeIn',
					duration: 2000
				}}
			>
				<Box style={mainBoxStyle}>
					it is now... <Clock alignSelf="center" hourLimit="12" precision="minutes" type="digital" />
					<Greeting />
					<SearchBar />
					<MapContainer />
				</Box>
			</Box>
		</Grommet>
	);
}

export default App;
