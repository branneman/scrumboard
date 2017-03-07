import React from 'react';

import store from '../../store/store';
import CardForm from '../../components/CardForm/CardForm';
import Dialog from '../../components/Dialog/Dialog';
import Header from '../../components/Header/Header';

class StoryEdit extends React.Component {

    render() {
        const storyId = parseInt(window.location.pathname.match(/\d+/)[0], 10);
        return (
            <div className="layout">
                <Header controls />
                <Dialog>
                    <CardForm story={store.getStory(storyId)} />
                </Dialog>
            </div>
        );
    }

}

export default StoryEdit;
