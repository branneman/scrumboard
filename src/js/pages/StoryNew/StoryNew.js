import React from 'react';

import store from '../../store/store';
import CardForm from '../../components/CardForm/CardForm';
import Dialog from '../../components/Dialog/Dialog';
import Header from '../../components/Header/Header';

class StoryNew extends React.Component {

    render() {
        return (
            <div className="layout">
                <Header controls={true} />
                <Dialog>
                    <CardForm story={store.getEmptyStory()} />
                </Dialog>
            </div>
        );
    }

}

export default StoryNew;
