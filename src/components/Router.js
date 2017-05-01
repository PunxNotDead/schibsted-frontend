import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import List from './List';

import reducers from '../reducers';

const store = createStore(reducers);

const AppRouter = () => (
	<Provider store={store}>
		<Router>
			<Route exact path="/" component={List} />
		</Router>
	</Provider>
);

export default AppRouter;
