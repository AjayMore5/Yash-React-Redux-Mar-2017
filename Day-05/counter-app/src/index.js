import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createStore } from 'redux';
import counterReducer from './reducers/counterReducer';
import { Provider } from 'react-redux';


var store = createStore(counterReducer);

ReactDOM.render(
	<Provider store={store}>
  		<App />
  	</Provider>,
  document.getElementById('root')
);
