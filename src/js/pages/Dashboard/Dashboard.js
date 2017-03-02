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
        const cols = this.props.state.columns;
        return (
            <div className="layout">
                <Header controls={true} />
                <ul className="columns">
                    {cols.map(column => this.renderColumn(column))}
                </ul>
            </div>
        );
    }

    renderColumn(column) {
        const store = this.props.store;
        return (
            <Column
                key={column.id}
                column={column}
                stories={store.getStoriesByColumn(column)}
                moveStory={store.moveStory}
                deleteStory={store.deleteStory} />
        );
    }

}

export default Dashboard;
