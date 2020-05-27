import React from 'react';
import './styles.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';

import CovidGraph from './CovidGrapgh';

import { rootReducer } from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<CovidGraph />
			</div>
		</Provider>
	);
}
