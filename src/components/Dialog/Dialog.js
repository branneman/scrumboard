import CardForm from '../CardForm/CardForm';

class Dialog extends React.Component {

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