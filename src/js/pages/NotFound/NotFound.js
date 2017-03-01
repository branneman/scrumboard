import React from 'react';
import Header from '../../components/Header/Header';

class NotFound extends React.Component {

    render() {
        return (
            <div className="layout">
                <Header controls={false} />
                <main className="notfound">
                    <h1 className="notfound__title">Not Found</h1>
                </main>
            </div>
        );
    }

}

export default NotFound;
