import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import Dashboard from './pages/Dashboard/Dashboard';
import StoryNew from './pages/StoryNew/StoryNew';
import StoryEdit from './pages/StoryEdit/StoryEdit';
import NotFound from './pages/NotFound/NotFound';

render(
    <Router history={browserHistory}>
        <Route path="/" component={Dashboard} />
        <Route path="/story" component={StoryNew} />
        <Route path="/story/:storyId" component={StoryEdit} />
        <Route path="*" component={NotFound} />
    </Router>,
    document.getElementById('app')
);
