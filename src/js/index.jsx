import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configStore';
import App from './containers/app'; // componentsの方ではないことに注意

const store = configureStore();
const rootEl = document.getElementById('root'); // 流しこむ対象の要素

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootEl
);

