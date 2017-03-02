import React from 'react';
import { browserHistory } from 'react-router';
import { autobind } from 'core-decorators';

@autobind
class CardForm extends React.Component {

    static propTypes = {
        story: React.PropTypes.shape({
            // id: React.PropTypes.number.isRequired, // @todo null/number
            est: React.PropTypes.string.isRequired,
            name: React.PropTypes.string.isRequired,
            desc: React.PropTypes.string.isRequired
        }),
        addStory: React.PropTypes.func.isRequired,
        updateStory: React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = props.story;
    }

    isNew() {
        return this.state.id === null;
    }

    handleSaveClose(event) {

        event.preventDefault();

        this.isNew()
            ? this.props.addStory(this.state)
            : this.props.updateStory(this.state);

        browserHistory.push('/');
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps.story || CardForm.emptyState);
    }

    render() {
        return (
            <form className="cardform" onSubmit={this.handleSaveClose}>

                <legend className="cardform__header">
                    { this.isNew() ? 'New Story' : 'Edit Story' }
                </legend>

                <fieldset>

                    <label htmlFor="story-name">Name:</label>
                    <input
                        type="text"
                        id="story-name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange} />

                    <label htmlFor="story-est">Estimate:</label>
                    <input
                        type="text"
                        id="story-est"
                        name="est"
                        value={this.state.est}
                        onChange={this.handleChange} />

                    <label htmlFor="story-desc">Description:</label>
                    <textarea
                        id="story-desc"
                        name="desc"
                        value={this.state.desc}
                        onChange={this.handleChange} />

                </fieldset>

                <fieldset>
                    <button onClick={this.handleSaveClose}>
                        { this.isNew() ? 'Add' : 'Save' }
                    </button>
                </fieldset>

            </form>
        );
    }
}

export default CardForm;
