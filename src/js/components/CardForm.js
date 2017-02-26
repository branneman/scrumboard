class CardForm extends React.Component {

    static emptyState = {
        id: null,
        name: '',
        est: '',
        desc: ''
    };

    constructor(props) {
        super(props);
        this.state = props.story || CardForm.emptyState;
    }

    isNew() {
        return this.state.id === null;
    }

    handleSaveClose(event) {

        event.preventDefault();

        this.isNew()
            ? this.props.addStory(this.state)
            : this.props.updateStory(this.state);

        this.props.closeDialog();
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps.story || CardForm.emptyState);
    }

    render() {
        return (
            <form className="cardform" onSubmit={this.handleSaveClose.bind(this)}>

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
                        onChange={this.handleChange.bind(this)} />

                    <label htmlFor="story-est">Estimate:</label>
                    <input
                        type="text"
                        id="story-est"
                        name="est"
                        value={this.state.est}
                        onChange={this.handleChange.bind(this)} />

                    <label htmlFor="story-desc">Description:</label>
                    <textarea
                        id="story-desc"
                        name="desc"
                        value={this.state.desc}
                        onChange={this.handleChange.bind(this)} />

                </fieldset>

                <fieldset>
                    <button onClick={this.handleSaveClose.bind(this)}>
                        { this.isNew() ? 'Add' : 'Save' }
                    </button>
                </fieldset>

            </form>
        );
    }
}

export default CardForm;
