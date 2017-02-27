import ColumnHeader from '../ColumnHeader/ColumnHeader';
import Card from '../Card/Card';
import { DropTarget } from 'react-dnd';

const dropSpec = {
    drop: (props, monitor) => {
        props.moveStory(monitor.getItem().id, props.column.id);
    }
};

const dropCollect = (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
});

@DropTarget('card', dropSpec, dropCollect)
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
                        openDialogEditStory={this.props.openDialogEditStory}
                        deleteStory={this.props.deleteStory} />)}
            </li>
        );
    }

}

export default Column;
