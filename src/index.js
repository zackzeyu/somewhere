import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
	<ParallaxProvider>
		<App />
	</ParallaxProvider>,
	document.getElementById('root')
);

serviceWorker.unregister();
