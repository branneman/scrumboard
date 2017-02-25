import ColumnHeader from './ColumnHeader';
import Card from './Card';
import { DropTarget } from 'react-dnd';

class Column extends React.Component {

    render() {
        return this.props.connectDropTarget(
            <li className="columns__column">
                <ColumnHeader name={this.props.column.name} />
                {this.props.stories.map(story =>
                    <Card key={story.id} id={story.id} name={story.name} />)}
            </li>
        );
    }

    static dropSpec = {
        drop(props, monitor, component) {
            props.moveStory(monitor.getItem().id, props.column.id);
        }
    };

    static dropCollect(connect, monitor) {
        return {
            connectDropTarget: connect.dropTarget()
        };
    }

}

export default DropTarget('card', Column.dropSpec, Column.dropCollect)(Column);
