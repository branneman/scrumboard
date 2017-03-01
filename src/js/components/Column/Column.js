import React from 'react';
import { DropTarget } from 'react-dnd';

import Card from '../Card/Card';
import ColumnHeader from '../ColumnHeader/ColumnHeader';

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

    static propTypes = {
        column: React.PropTypes.object.isRequired,
        stories: React.PropTypes.array.isRequired,
        moveStory: React.PropTypes.func.isRequired,
        deleteStory: React.PropTypes.func.isRequired,
    };

    render() {
        const isActive = this.props.canDrop && this.props.isOver;
        const cn = `columns__column ${ isActive ? 'columns__column--dragging' : '' }`;

        return this.props.connectDropTarget(
            <li key={this.props.column.id} className={cn}>
                <ColumnHeader name={this.props.column.name} />
                {this.props.stories.map(story => this.renderCard(story))}
            </li>
        );
    }

    renderCard(story) {
        return (
            <Card
                key={story.id}
                story={story}
                deleteStory={this.props.deleteStory} />
        );
    }

}

export default Column;
