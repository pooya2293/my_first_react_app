import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
// import reportWebVitals from './reportWebVitals';

// const element = <h1>Hello World</h1>;
// ReactDOM.render(element,document.getElementById('root'))

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
	, document.getElementById('root')
	);