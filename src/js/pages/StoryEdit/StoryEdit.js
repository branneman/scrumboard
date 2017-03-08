import React from 'react';

import store from '../../store/store';
import CardForm from '../../components/CardForm/CardForm';
import Dialog from '../../components/Dialog/Dialog';
import Header from '../../components/Header/Header';

class StoryEdit extends React.Component {

    render() {
        const story = store.getStory(this.props.params.storyId);
        return (
            <div className="layout">
                <Header controls />
                <Dialog>
                    <CardForm story={story} />
                </Dialog>
            </div>
        );
    }

}

export default StoryEdit;
