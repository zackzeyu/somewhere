import React from 'react';
import { Box } from 'grommet';
import GoogleMapReact from 'google-map-react';
import { Gremlin } from 'grommet-icons';

export default function MapContainer() {
	const modalBoxStyle = {
		height: '600px',
		width: '90vw',
		margin: 'auto',
		paddingLeft: 50,
		paddingRight: 50,
		paddingTop: 40,
		paddingBottom: 40,
		textAlign: 'center',
		backgroundColor: 'rgba(238, 241, 236, 0.9)',
		borderRadius: 10
	};
	const mapStyle = { height: '100%', width: '50%', minWidth: '400px' };
	const center = {
		lat: 59.95,
		lng: 30.33
	};
	const zoom = 11;

	return (
		<Box style={modalBoxStyle} justify="center" align="center" direction="row" wrap={true}>
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
			<Box style={mapStyle}>List of stuff here</Box>
		</Box>
	);
}
