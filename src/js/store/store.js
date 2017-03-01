import React from 'react';
import { autobind } from 'core-decorators';
import { browserHistory } from 'react-router';

/**
 * Store
 *  This component holds the central application state and mutation methods.
 *  This is a higher-order component, used as a decorator.
 * @param {React.Component} ComposedComponent
 */
const Store = ComposedComponent => {

    @autobind
    class Store extends React.Component {

        /**
         * Constructor: load initial state with example content
         */
        constructor(props) {
            super(props);
            this.state = require('./initialstate.json');
        }

        getStoriesByColumn(column) {
            return this.state.stories.filter(story => story.column === column.id);
        }

        getStory(id) {
            return this.state.stories.find(story => story.id === id);
        }

        getEmptyStory() {
            return {
                id: null,
                name: '',
                est: '',
                desc: ''
            };
        }

        addStory(story) {
            story.id = 1 + Math.max(...this.state.stories.map(s => s.id));
            story.column = 'pb';

            this.state.stories = this.state.stories.concat(story);
            this.setState({stories: this.state.stories});
        }

        updateStory(story) {
            this.state.stories = this.state.stories.map(oldStory =>
                oldStory.id === story.id ? story : oldStory);
            this.setState({stories: this.state.stories});
        }

        deleteStory(id) {
            this.state.stories = this.state.stories.filter(story => story.id !== id);
            this.setState({stories: this.state.stories});
        }

        moveStory(storyId, columnId) {
            this.state.stories = this.state.stories.map(story => {
                if (story.id === storyId) {
                    story.column = columnId;
                }
                return story;
            });
            this.setState({stories: this.state.stories});
        }

        /**
         * Expose to composed component:
         *  - methods as `props.store`
         *  - state as `props.state`
         */
        render() {
            return <ComposedComponent store={this} state={this.state}/>;
        }
    }

    return Store;

};

export default Store;
