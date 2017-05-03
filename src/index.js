import React from 'react';
import ReactDOM from 'react-dom';

// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader';

// Injecting Bootstrap into application
import 'bootstrap-webpack!../bootstrap.config.js';
import '!style-loader!css-loader!less-loader!./less/index.less';

import RootComponent from './RootComponent';

const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('app')
	);
};

render(RootComponent);

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./RootComponent', () => {
		render(RootComponent)
	});
}
