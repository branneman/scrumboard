import { DragSource } from 'react-dnd';

class Card extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return this.props.connectDragSource(
            <div className="card" onClick={() => this.props.openDialogEditStory(this.props.id)}>
                <p className="card__name">{this.props.name}</p>
            </div>
        );
    }

    static dragSpec = {
        beginDrag(props, monitor, component) {
            return { id: props.id };
        }
    };

    static dragCollect(connect, monitor) {
        return {
            connectDragSource: connect.dragSource()
        };
    }
}

export default DragSource('card', Card.dragSpec, Card.dragCollect)(Card);
