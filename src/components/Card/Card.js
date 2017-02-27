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

    render() {
        return this.props.connectDragSource(
            <div className="card" onClick={() => this.props.openDialogEditStory(this.props.id)}>
                <p className="card__name">{this.props.name}</p>
            </div>
        );
    }
}

export default Card;
