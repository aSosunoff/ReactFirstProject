import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <div>
                <main>
                    { this.props.children }
                </main>
            </div>
        )
    }
}