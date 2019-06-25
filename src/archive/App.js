import React, { useState } from 'react';
import './App.css';
import { Grommet, Box, Clock, Layer } from 'grommet';
import splash from './assets/splash.jpg';
import Greeting from './components/Greeting';
import SearchBar from './components/SearchBar';
import MapContainer from './components/MapContainer';
import theme from './theme';

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
	const [ showModal, setShowModal ] = useState(false);

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
					it is now... <Clock alignSelf="center" precision="minutes" type="digital" />
					<Greeting />
					<SearchBar setShowModal={setShowModal} />
					{showModal && (
						<Layer onEsc={() => setShowModal(false)} onClickOutside={() => setShowModal(false)}>
							<MapContainer />
						</Layer>
					)}
				</Box>
			</Box>
		</Grommet>
	);
}

export default App;
