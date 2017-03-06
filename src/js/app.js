import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import store from './store/store';
import initialstate from './store/initialstate.json';
import Dashboard from './pages/Dashboard/Dashboard';
import StoryNew from './pages/StoryNew/StoryNew';
import StoryEdit from './pages/StoryEdit/StoryEdit';
import NotFound from './pages/NotFound/NotFound';

const routes = [{
    path: '/',
    component: Dashboard
}, {
    path: '/story',
    component: StoryNew
}, {
    path: '/story/:storyId',
    component: StoryEdit
}, {
    path: '*',
    component: NotFound
}];

const render = () => {
    ReactDOM.render(
        <Router history={browserHistory} routes={routes} />,
        document.getElementById('app')
    );
};

store.subscribe(render);
store.setState(initialstate);
