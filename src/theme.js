const theme = {
	global: {
		font: {
			family: 'Quicksand',
			size: '12px',
			height: '20px'
		},
		backgroundRepeat: 'no-repeat',
		colors: {
			brand: 'rgba(11, 22, 37, 1)', // Dark forest green almost black
			focus: '#586A6A', // grey-ish green
			'neutral-1': '#586A6A'
		},
		input: {
			weight: 400
		}
	},
	heading: {
		weight: 300
	},
	select: {
		container: {
			extend: () => {
				return {
					background: 'rgba(129, 141, 146, 0.1)'
				};
			}
		}
	},
	textInput: {
		container: {
			extend: () => {
				return {
					backgroundColor: 'rgba(129, 141, 146, 0.1)',
					borderRadius: 5
				};
			}
		},
		suggestions: {
			extend: () => {
				return {
					marginTop: 15,
					backgroundColor: 'none',
					borderRadius: 5
				};
			}
		}
	},
	button: {
		border: {
			radius: '10px'
		}
	},
	layer: {
		background: 'rgba(255, 255, 255, 0.8)'
	},
	accordion: {
		border: { color: 'none' }
	}
};

export default theme;
