import { DragSource } from 'react-dnd';

@DragSource(
    'card',
    { beginDrag: props => ({ id: props.id }) },
    connect => ({ connectDragSource: connect.dragSource() })
)
class Card extends React.Component {

    constructor(props) {
        super(props);
    }

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
            <div className="card" onClick={this.openDialogEditStory.bind(this)}>
                <p className="card__name">{this.props.name}</p>
                <button className="card__delete" onClick={this.deleteStory.bind(this)}>&times;</button>
            </div>
        );
    }
}

export default Card;
