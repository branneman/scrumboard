import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes';
import store from './store/store';
import initialstate from './store/initialstate.json';

const render = () => {
    ReactDOM.render(
        <Router history={browserHistory} routes={routes} />,
        document.getElementById('app')
    );
};

store.subscribe(render);
store.setState(initialstate);
