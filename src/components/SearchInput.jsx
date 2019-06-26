import React, { useState, useRef } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { TextInput } from 'grommet';

export default function SearchInput({ setLocationId }) {
	const [ searchLocation, setSearchLocation ] = useState('');
	const suggestionListRef = useRef([ { value: 'loading', label: 'loading...' } ]);

	const handleChange = (location) => {
		setSearchLocation(location);
	};

	const handleSelect = (event) => {
		setSearchLocation(event.suggestion.label);
		setLocationId(event.suggestion.value);
	};

	// ? Idea: Clean this up, too many HOC's
	return (
		<PlacesAutocomplete
			debounce={1000}
			shouldFetchSuggestions={searchLocation.length > 2}
			value={searchLocation}
			onChange={handleChange}
			searchOptions={{
				types: [ '(cities)' ]
			}}
		>
			{({ getInputProps, suggestions, loading }) => {
				if (suggestions.length > 1) {
					suggestionListRef.current = suggestions.map((suggestion) => {
						return {
							label: suggestion.description,
							value: suggestion.placeId
						};
					});
				}
				return (
					<TextInput
						{...getInputProps()}
						size="medium"
						plain={true}
						suggestions={suggestionListRef.current}
						onSelect={handleSelect}
					/>
				);
			}}
		</PlacesAutocomplete>
	);
}
