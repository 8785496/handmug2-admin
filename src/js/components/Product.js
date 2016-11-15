import React from 'react';

export default class Product extends React.Component {
    render() {
        return (
            <h3>
                Продукт #{this.props.params.id}
            </h3>
        );
    }
}