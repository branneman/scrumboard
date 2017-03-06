/**
 * Store
 *  Holds the central application state and mutation methods.
 */
class Store {

    constructor() {
        this.state = {};
        this._listeners = [];
    }

    subscribe(fn) {
        this._listeners.push(fn);
    }

    publish() {
        this._listeners.forEach(fn => fn(this.state));
    }

    setState(newState) {
        Object.assign(this.state, newState);
        this.publish();
    }

    getStoriesByColumn(column) {
        return this.state.stories.filter(story => story.column === column.id);
    }

    getStory(id) {
        return this.state.stories.find(story => story.id === id);
    }

    getEmptyStory() {
        return { id: null, name: '', est: '', desc: '' };
    }

    getNextStoryId() {
        return 1 + Math.max(...this.state.stories.map(s => s.id));
    }

    saveStory(story) {

        const isNew = story.id === null;

        if (isNew) {
            story.id = this.getNextStoryId();
            story.column = 'pb';
            this.setState({
                stories: this.state.stories.concat(story)
            });
        } else {
            this.setState({
                stories: this.state.stories.map(oldStory =>
                    oldStory.id === story.id ? story : oldStory)
            });
        }
    }

    deleteStory(id) {
        this.setState({
            stories: this.state.stories.filter(story => story.id !== id)
        });
    }

    moveStory(storyId, columnId) {
        this.setState({
            stories: this.state.stories.map(story => {
                if (story.id === storyId) {
                    story.column = columnId;
                }
                return story;
            })
        });
    }

}

export default new Store;
