import React from 'react';
import { autobind } from 'core-decorators';

@autobind
class Header extends React.Component {

    newStory() {
        this.props.openDialogNewStory();
    }

    render() {
        return (
            <header className="header">
                <h1 className="header__title">Scrum</h1>
                <button className="header__new-story" onClick={this.newStory}>
                    + New Story
                </button>
            </header>
        );
    }

}

export default Header;
