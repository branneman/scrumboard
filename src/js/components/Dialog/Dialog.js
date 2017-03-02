import React from 'react';
import { browserHistory } from 'react-router';
import { autobind } from 'core-decorators';

@autobind
class Dialog extends React.Component {

    static ESCAPE_KEY = 27;

    handleKeyDown(event) {
        if (event.keyCode === Dialog.ESCAPE_KEY) {
            browserHistory.goBack();
        }
    }

    componentWillMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    render() {
        return (
            <div className="dialog">
                <div className="dialog__content">
                    {this.props.children}
                    <button className="dialog__close" onClick={browserHistory.goBack}>
                        <span>&times;</span>
                    </button>
                </div>
            </div>
        );
    }

}

export default Dialog;
