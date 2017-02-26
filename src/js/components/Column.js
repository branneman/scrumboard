import ColumnHeader from './ColumnHeader';
import Card from './Card';
import { DropTarget } from 'react-dnd';

class Column extends React.Component {

    render() {
        const isActive = this.props.canDrop && this.props.isOver;
        const cn = `columns__column ${ isActive ? 'columns__column--dragging' : '' }`;

        return this.props.connectDropTarget(
            <li key={this.props.column.id} className={cn}>
                <ColumnHeader name={this.props.column.name} />
                {this.props.stories.map(story =>
                    <Card
                        key={story.id}
                        id={story.id}
                        name={story.name}
                        openDialogEditStory={this.props.openDialogEditStory} />)}
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
            connectDropTarget: connect.dropTarget(),
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        };
    }

}

export default DropTarget('card', Column.dropSpec, Column.dropCollect)(Column);
