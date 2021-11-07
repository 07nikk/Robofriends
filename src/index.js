import React from 'react';
import ReactDOM from 'react-dom';
// import Card from './Card.js';
import 'tachyons';
import App from './containers/App.js'
// import CardList from './CardList.js';
// import {robots} from './robots.js';


ReactDOM.render(
	// card list is accepting the robots properties 
  // <CardList robots={robots}/>,
  <App/>,
  document.getElementById('root')
);


