import { DragSource } from 'react-dnd';
import { autobind } from 'core-decorators';

@DragSource(
    'card',
    { beginDrag: props => ({ id: props.id }) },
    connect => ({ connectDragSource: connect.dragSource() })
)
@autobind
class Card extends React.Component {

    openDialogEditStory(event) {
        if (event.target.tagName === 'BUTTON') {
            return;
        }
        this.props.openDialogEditStory(this.props.id);
    }

    deleteStory(event) {
        event.preventDefault();
        if (confirm('Are you sure you wish to delete this story?')) {
            this.props.deleteStory(this.props.id);
        }
    }

    render() {
        return this.props.connectDragSource(
            <div className="card" onClick={this.openDialogEditStory}>
                <p className="card__name">
                    {this.props.est
                        ? <span className="est">{this.props.est} &ndash; </span>
                        : ''}
                    <span className="name">{this.props.name}</span>
                </p>
                <button className="card__delete" onClick={this.deleteStory}>&times;</button>
            </div>
        );
    }
}

export default Card;
