export default class ColumnHeader extends React.Component {
    render() {
        return (
            <div className="column-header">
                <h2 className="column-header__name">{this.props.name}</h2>
            </div>
        );
    }
}
