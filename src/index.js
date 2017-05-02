import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import 'bootstrap-webpack!../bootstrap.config.js';
import '!style-loader!css-loader!less-loader!./less/index.less';

import Main from './components/Main';

const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('app')
	);
};

render(Main);

// Hot Module Replacement API
if (module.hot) {
	module.hot.accept('./components/Main', () => {
		render(Main)
	});
}
