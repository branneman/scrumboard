import React from 'react';
import { DragSource } from 'react-dnd';
import { browserHistory } from 'react-router';
import { autobind } from 'core-decorators';

import store from '../../store/store';

@DragSource(
    'card',
    { beginDrag: props => ({ id: props.story.id }) },
    connect => ({ connectDragSource: connect.dragSource() })
)
@autobind
class Card extends React.Component {

    static propTypes = {
        story: React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            est: React.PropTypes.string.isRequired,
            name: React.PropTypes.string.isRequired
        })
    };

    openDialogEditStory(event) {
        if (event.target.tagName === 'BUTTON') {
            return;
        }
        browserHistory.push(`/story/${this.props.story.id}`);
    }

    deleteStory(event) {
        event.preventDefault();
        if (confirm('Are you sure you wish to delete this story?')) {
            store.deleteStory(this.props.story.id);
        }
    }

    render() {
        return this.props.connectDragSource(
            <div className="card" onClick={this.openDialogEditStory}>
                <p className="card__name">
                    {this.props.story.est &&
                        <span className="est">{this.props.story.est} &ndash; </span>}
                    <span className="name">{this.props.story.name}</span>
                </p>
                <button className="card__delete" onClick={this.deleteStory}>&times;</button>
            </div>
        );
    }
}

export default Card;
