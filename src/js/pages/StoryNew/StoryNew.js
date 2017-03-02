import React from 'react';

import Store from '../../store/store';
import CardForm from '../../components/CardForm/CardForm';
import Dialog from '../../components/Dialog/Dialog';
import Header from '../../components/Header/Header';

@Store
class StoryNew extends React.Component {

    render() {
        return (
            <div className="layout">
                <Header controls={true} />
                <Dialog>
                    <CardForm
                        story={this.props.store.getEmptyStory()}
                        addStory={this.props.store.addStory}
                        updateStory={this.props.store.updateStory} />
                </Dialog>
            </div>
        );
    }

}

export default StoryNew;
