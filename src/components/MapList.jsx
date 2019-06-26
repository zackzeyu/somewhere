import React from 'react';
import { Box, Accordion, AccordionPanel, Text, Anchor } from 'grommet';

export default function MapList({ resultLocations, activeIndex, setActiveIndex }) {
	const panels = resultLocations.map((location, locationIndex) => {
		const wikiLink = location.location.alternateNames.filter((name) => name.lang === 'link');

		return (
			<AccordionPanel
				key={location.location.geonameId}
				id={location.location.geonameId}
				label={`${location.location.name}, ${location.location.adminName1}`}
				onClick={() => {
					setActiveIndex(locationIndex);
				}}
			>
				<Box pad="xsmall" align="start">
					<Text size="small">{location.forecast.summary}</Text>
					<Text size="small">
						High: {parseFloat(location.forecast.temperatureHigh).toFixed(1)} °F, Low:
						{parseFloat(location.forecast.temperatureLow).toFixed(1)} °F
					</Text>
					<Text size="small">🌧: {Math.round(location.forecast.precipProbability * 100, 1)}% </Text>
					{wikiLink.length > 0 && <Anchor href={wikiLink[0].name} target="_blank" label="Wikipedia entry" />}
				</Box>
			</AccordionPanel>
		);
	});

	return (
		<Box id="map-list" pad={{ horizontal: 'medium' }} style={{ overflow: 'auto' }}>
			<Text>{resultLocations.length > 0 ? 'click on map or select from below' : 'no results found 😧'}</Text>
			<Accordion activeIndex={activeIndex}>{panels}</Accordion>
		</Box>
	);
}
