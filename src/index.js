import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './Page';
import { appName, appDescription } from './const';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

const props = {
    title: `Welcome to ${appName}`,
    subtitle: `${appDescription}`
}

ReactDOM.render(<Page {...props} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
