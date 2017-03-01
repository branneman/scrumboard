import React from 'react';
import { Link, browserHistory } from 'react-router';
import { autobind } from 'core-decorators';

@autobind
class Dialog extends React.Component {

    static ESCAPE_KEY = 27;

    // @todo goBack() vs. closeUrl
    static propTypes = {
        closeUrl: React.PropTypes.string.isRequired
    };

    // @todo goBack() vs. /
    handleKeyDown(event) {
        if (event.keyCode === Dialog.ESCAPE_KEY) {
            browserHistory.push(this.props.closeUrl);
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
                    <Link className="dialog__close button" to={this.props.closeUrl}>
                        <span>&times;</span>
                    </Link>
                </div>
            </div>
        );
    }

}

export default Dialog;
