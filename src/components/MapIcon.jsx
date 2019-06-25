import React from 'react';
import { Box, Text } from 'grommet';

export default function MapIcon({ $hover, locationName, renderIcon, locationIndex, locationId, setActiveIndex }) {
	const iconStyle = $hover
		? { size: '50', color: 'rgba(19, 69, 57, 1)', cursor: 'pointer' }
		: { size: '34', color: 'rgba(19, 69, 57, 1)' };
	const style = {
		// backgroundColor: 'rgba(0, 0, 0, 0.3)',
		// borderRadius: '50%',
		height: '50px',
		width: '50px',
		margin: '-30px'
	};

	const handleIconClick = () => {
		setActiveIndex(locationIndex);
		const panel = document.getElementById(locationId);
		// Need 500px of offset to make the scrolling work properly
		const topPos = panel.offsetTop - 500;
		document.getElementById('map-list').scrollTop = topPos;
	};

	return (
		<div style={style} onClick={handleIconClick}>
			{renderIcon(iconStyle)}
			<Text size={$hover ? 'small' : 'xsmall'}>{locationName}</Text>
		</div>
	);
}
