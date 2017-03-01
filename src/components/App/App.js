import CardForm from '../CardForm/CardForm';
import Column from '../Column/Column';
import Dialog from '../Dialog/Dialog';
import Header from '../Header/Header';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { autobind } from 'core-decorators';

@DragDropContext(HTML5Backend)
@autobind
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = require('./example-content.json');
    }

    getStoriesByColumn(column) {
        return this.state.stories.filter(story => story.column === column.id);
    }

    getStory(id) {
        return this.state.stories.find(story => story.id === id);
    }

    addStory(story) {
        story.id = 1 + Math.max(...this.state.stories.map(s => s.id));
        story.column = 'pb';

        this.state.stories = this.state.stories.concat(story);
        this.setState({ stories: this.state.stories });
    }

    updateStory(story) {
        this.state.stories = this.state.stories.map(oldStory =>
            oldStory.id === story.id ? story : oldStory);
        this.setState({ stories: this.state.stories });
    }

    deleteStory(id) {
        this.state.stories = this.state.stories.filter(story => story.id !== id);
        this.setState({ stories: this.state.stories });
    }

    moveStory(storyId, columnId) {
        this.state.stories = this.state.stories.map(story => {
            if (story.id === storyId) {
                story.column = columnId;
            }
            return story;
        });
        this.setState({ stories: this.state.stories });
    }

    openDialogNewStory() {
        this.setState({
            dialogShown: true,
            dialogStory: null
        });
    }

    openDialogEditStory(id) {
        this.setState({
            dialogShown: true,
            dialogStory: this.getStory(id)
        });
    }

    closeDialog() {
        this.setState({ dialogShown: false });
    }

    renderColumn(column) {
        return (
            <Column
                key={column.id}
                column={column}
                stories={this.getStoriesByColumn(column)}
                getStory={this.getStory}
                moveStory={this.moveStory}
                deleteStory={this.deleteStory}
                openDialogEditStory={this.openDialogEditStory} />
        );
    }

    render() {
        return (
            <div className="layout">
                <Header openDialogNewStory={this.openDialogNewStory} />
                <ul className="columns">
                    {this.state.columns.map(column => this.renderColumn(column))}
                </ul>
                <Dialog shown={this.state.dialogShown} closeDialog={this.closeDialog}>
                    <CardForm
                        story={this.state.dialogStory}
                        closeDialog={this.closeDialog}
                        addStory={this.addStory}
                        updateStory={this.updateStory} />
                </Dialog>
            </div>
        );
    }

}

export default App;
