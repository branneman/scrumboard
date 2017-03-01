import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Store from '../../store/store';
import Column from '../../components/Column/Column';
import Header from '../../components/Header/Header';

@Store
@DragDropContext(HTML5Backend)
class Dashboard extends React.Component {

    render() {
        return (
            <div className="layout">
                <Header controls={true} />
                <ul className="columns">
                    {this.props.state.columns.map(column => this.renderColumn(column))}
                </ul>
            </div>
        );
    }

    renderColumn(column) {
        return (
            <Column
                key={column.id}
                column={column}
                stories={this.props.store.getStoriesByColumn(column)}
                moveStory={this.props.store.moveStory}
                deleteStory={this.props.store.deleteStory} />
        );
    }

}

export default Dashboard;
