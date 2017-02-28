import CardForm from '../CardForm/CardForm';

class Dialog extends React.Component {

    static ESCAPE_KEY = 27;

    handleKeyDown(event) {
        if (event.keyCode === Dialog.ESCAPE_KEY) {
            this.props.closeDialog();
        }
    }

    componentWillMount() {
        document.addEventListener('keydown', event => this.handleKeyDown(event));
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', event => this.handleKeyDown(event));
    }

    render() {
        return (
            <div className={`dialog ${ this.props.shown ? '' : 'dialog--hidden' }`}>
                <div className="dialog__content">

                    <CardForm
                        story={this.props.story}
                        closeDialog={this.props.closeDialog}
                        addStory={this.props.addStory}
                        updateStory={this.props.updateStory} />

                    <button className="dialog__close" onClick={this.props.closeDialog}>
                        <span>&times;</span>
                    </button>

                </div>
            </div>
        );
    }

}

export default Dialog;
