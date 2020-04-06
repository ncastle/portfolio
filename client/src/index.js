// react & react router imports
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// css and component imports
import './index.scss';
import App from './App/App';

// render app
render((<BrowserRouter><Switch><App/></Switch></BrowserRouter>), document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
