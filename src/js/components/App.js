import Header from './Header';
import Column from './Column';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = require('../initialstate.json');
    }

    getStoriesByColumn(column) {
        return this.state.stories.filter(story => story.column === column.id);
    }

    moveStory(storyId, columnId) {
        this.state.stories = this.state.stories.map(story => {
            if (story.id === storyId) {
                story.column = columnId;
            }
            return story;
        });
        this.setState(this.state);
    }

    render() {
        return (
            <div className="layout">
                <Header />
                <ul className="columns">
                    {this.state.columns.map((column, i) =>
                        <Column
                            key={i}
                            column={column}
                            stories={this.getStoriesByColumn(column)}
                            moveStory={this.moveStory.bind(this)} />)}
                </ul>
            </div>
        );
    }

}

export default DragDropContext(HTML5Backend)(App);
