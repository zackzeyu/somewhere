import React, { useState } from 'react';
import { Box } from 'grommet';
import GoogleMapReact from 'google-map-react';
import { WiDaySunny, WiDayRain, WiSnowWind, WiDayWindy, WiDayFog, WiDayCloudy } from 'weather-icons-react';
import MapIcon from './MapIcon';
import MapList from './MapList';

const weatherIcons = {
	sunny: (style) => {
		return <WiDaySunny {...style} />;
	},
	rainy: (style) => {
		return <WiDayRain {...style} />;
	},
	snowy: (style) => {
		return <WiSnowWind {...style} />;
	},
	windy: (style) => {
		return <WiDayWindy {...style} />;
	},
	foggy: (style) => {
		return <WiDayFog {...style} />;
	},
	cloudy: (style) => {
		return <WiDayCloudy {...style} />;
	}
};

export default function MapContainer({ mapCenter, resultLocations, weatherChoice }) {
	const mapOverlayStyle = {
		maxHeight: '800px',
		width: '90vw',
		margin: 'auto',
		paddingLeft: 50,
		paddingRight: 50,
		paddingTop: 30,
		paddingBottom: 30,
		backgroundColor: 'rgba(238, 241, 236, 0.9)',
		borderRadius: 10,
		overflow: 'auto'
	};
	const mapStyle = { height: '600px', width: '50%', minWidth: '400px' };
	const zoom = 11;
	const ICON_HOVER_DISTANCE = 30;
	const [ activeIndex, setActiveIndex ] = useState();

	const getWeatherIcon = (icon) => {
		if (icon === 'rain') {
			return weatherIcons.rainy;
		} else if (icon === 'snow' || icon === 'sleet') {
			return weatherIcons.snowy;
		} else if (icon === 'wind') {
			return weatherIcons.windy;
		} else if (icon === 'fog') {
			return weatherIcons.foggy;
		} else if (icon === 'cloudy' || icon === 'partly-cloudy-day' || icon === 'partly-cloudy-night') {
			return weatherIcons.cloudy;
		} else {
			return weatherIcons.sunny;
		}
	};

	const mapMarkers = resultLocations.map((location, locationIndex) => {
		return (
			<MapIcon
				key={location.location.geonameId}
				lat={+location.location.lat}
				lng={+location.location.lng}
				locationName={location.location.name}
				locationIndex={locationIndex}
				locationId={location.location.geonameId}
				setActiveIndex={setActiveIndex}
				renderIcon={getWeatherIcon(location.forecast.icon)}
			/>
		);
	});

	return (
		<Box style={mapOverlayStyle} justify="center" align="center" direction="row" wrap={true}>
			<Box style={mapStyle} margin={{ top: 'medium', bottom: 'medium' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: 'AIzaSyDEcPtDlTvV7hKd3qemc4dDm87QlI1GjWE' }}
					defaultCenter={mapCenter}
					defaultZoom={zoom}
					hoverDistance={ICON_HOVER_DISTANCE}
				>
					{mapMarkers}
				</GoogleMapReact>
			</Box>
			<Box style={mapStyle}>
				<MapList resultLocations={resultLocations} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
			</Box>
		</Box>
	);
}
