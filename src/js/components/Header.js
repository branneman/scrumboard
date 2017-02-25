export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <h1 className="header__title">Scrumboard.</h1>
                <button className="header__new-story">+ New Story</button>
            </header>
        );
    }
}
