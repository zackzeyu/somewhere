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
import './index.scss';

export default function App2() {
	const mainBoxStyle = {
		zIndex: 100,
		// width: '90%',
		height: '300px',
		paddingLeft: 50,
		paddingRight: 50,
		paddingTop: 50,
		paddingBottom: 0,
		// backgroundColor: 'rgba(255, 255, 255, 0.9)',
		borderRadius: '5px',
		textAlign: 'center'
	};
	const [ showMap, setShowMap ] = useState(false);
	return (
		<Grommet theme={theme}>
			<Box>
				<div style={{ zIndex: 100000 }}>Hello!</div>

				<div className="parallax">
					<div className="parallax__layer parallax__layer__0">
						<Image fit="cover" src={layer0} />
					</div>
					<div className="parallax__layer parallax__layer__1">
						<Image fit="cover" src={layer1} />
					</div>
					<div className="parallax__layer parallax__layer__2">
						<Image fit="cover" src={layer2} />
					</div>
					<div className="parallax__layer parallax__layer__3">
						<Image fit="cover" src={layer3} />
					</div>
					<div className="parallax__layer parallax__layer__4">
						<Image fit="cover" src={layer4} />
					</div>
					<div className="parallax__layer parallax__layer__5">
						<Image fit="cover" src={layer5} />
					</div>
					<div className="parallax__layer parallax__layer__6">
						<Image fit="cover" src={layer6} />
					</div>
					<div className="parallax__cover" />
				</div>
			</Box>
		</Grommet>
	);
}
