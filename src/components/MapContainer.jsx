import React from 'react';
import { Box } from 'grommet';
import GoogleMapReact from 'google-map-react';
import { Gremlin } from 'grommet-icons';

export default function MapContainer() {
	const modalBoxStyle = {
		height: '80vh',
		width: '80vw',
		paddingLeft: 50,
		paddingRight: 50,
		paddingTop: 40,
		paddingBottom: 40,
		textAlign: 'center'
	};
	const mapStyle = { height: '100%', width: '50%' };
	const center = {
		lat: 59.95,
		lng: 30.33
	};
	const zoom = 11;

	return (
		<Box style={modalBoxStyle}>
			<Box style={mapStyle}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: 'AIzaSyDEcPtDlTvV7hKd3qemc4dDm87QlI1GjWE' }}
					defaultCenter={center}
					defaultZoom={zoom}
				>
					<Box lat={59.955413} lng={30.337844} text="My Marker">
						<Gremlin />
					</Box>
				</GoogleMapReact>
			</Box>
		</Box>
	);
}
