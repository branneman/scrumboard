import React from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import store from '../../store/store';
import Column from '../../components/Column/Column';
import Header from '../../components/Header/Header';

@DragDropContext(HTML5Backend)
class Dashboard extends React.Component {

    render() {
        return (
            <div className="layout">
                <Header controls />
                <ul className="columns">
                    {store.state.columns.map(col => this.renderColumn(col))}
                </ul>
            </div>
        );
    }

    renderColumn(column) {
        const stories = store.getStoriesByColumn(column);
        return (
            <Column
                key={column.id}
                column={column}
                stories={stories} />
        );
    }

}

export default Dashboard;
