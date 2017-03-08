import store from './store/store';
import Dashboard from './pages/Dashboard/Dashboard';
import StoryNew from './pages/StoryNew/StoryNew';
import StoryEdit from './pages/StoryEdit/StoryEdit';
import NotFound from './pages/NotFound/NotFound';

const routes = [
    {
        path: '/',
        component: Dashboard
    },
    {
        path: '/story',
        component: StoryNew
    },
    {
        path: '/story/:storyId',
        component: StoryEdit,
        onEnter: (nextState, replace, callback) => {
            if (!store.getStory(nextState.params.storyId)) {
                replace('/');
            }
            callback();
        }
    },
    {
        path: '*',
        component: NotFound
    }
];

export default routes;
