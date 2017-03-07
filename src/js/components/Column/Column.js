import React from 'react';
import { DropTarget } from 'react-dnd';

import store from '../../store/store';
import Card from '../Card/Card';
import ColumnHeader from '../ColumnHeader/ColumnHeader';

const dropSpec = {
    drop: (props, monitor) => {
        store.moveStory(monitor.getItem().id, props.column.id);
    }
};

const dropCollect = (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
});

@DropTarget('card', dropSpec, dropCollect)
class Column extends React.Component {

    static propTypes = {
        column: React.PropTypes.object.isRequired,
        stories: React.PropTypes.array.isRequired
    };

    render() {
        const isActive = this.props.canDrop && this.props.isOver;
        const cn = `columns__column ${ isActive && 'columns__column--dragging' }`;

        return this.props.connectDropTarget(
            <li key={this.props.column.id} className={cn}>
                <ColumnHeader name={this.props.column.name} />
                {this.props.stories.map(story => <Card key={story.id} story={story} />)}
            </li>
        );
    }

}

export default Column;
