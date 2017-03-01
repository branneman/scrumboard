import React from 'react';
import { Link } from 'react-router';
import { autobind } from 'core-decorators';

@autobind
class Header extends React.Component {

    static propTypes = {
        controls: React.PropTypes.bool.isRequired
    };

    render() {
        return (
            <header className="header">
                <Link to={'/'}><h1 className="header__title">Scrum</h1></Link>
                {this.props.controls ? this.renderControls() : ''}
            </header>
        );
    }

    renderControls() {
        return (
            <Link to={'/story'} className="header__new-story button">
                + New Story
            </Link>
        );
    }

}

export default Header;
