import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import initialstate from './store/initialstate.json';
import store from './store/store';
import Dashboard from './pages/Dashboard/Dashboard';
import StoryNew from './pages/StoryNew/StoryNew';
import StoryEdit from './pages/StoryEdit/StoryEdit';
import NotFound from './pages/NotFound/NotFound';

// @todo
//  This must call render on top-level component,
//   skipping re-rendering <Router> itself
const render = () => {
    ReactDOM.render(
        <Router history={browserHistory}>
            <Route path="/" component={Dashboard} />
            <Route path="/story" component={StoryNew} />
            <Route path="/story/:storyId" component={StoryEdit} />
            <Route path="*" component={NotFound} />
        </Router>,
        document.getElementById('app')
    );
};

store.subscribe(render);
store.setState(initialstate);
