import React from 'react';

import Store from '../../store/store';
import CardForm from '../../components/CardForm/CardForm';
import Dialog from '../../components/Dialog/Dialog';
import Header from '../../components/Header/Header';

@Store
class StoryEdit extends React.Component {

    render() {

        const storyId = parseInt(window.location.pathname.match(/\d+/)[0], 10);

        // @todo goBack() vs. /

        return (
            <div className="layout">
                <Header controls={true} />
                <Dialog closeUrl={'/'}>
                    <CardForm
                        story={this.props.store.getStory(storyId)}
                        addStory={this.props.store.addStory}
                        updateStory={this.props.store.updateStory} />
                </Dialog>
            </div>
        );

    }

}

export default StoryEdit;
