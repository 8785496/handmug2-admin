import React from 'react';
import { connect } from 'react-redux'

import { getProduct } from '../actions/productActions'

@connect((store) => {
  return {
    product: store.product
  };
})
export default class Product extends React.Component {
  componentWillMount() {
    this.props.dispatch(getProduct(this.props.params.id))
  }

  render() {
    return (
      <div>
        <h3>
          Продукт #{this.props.params.id}
        </h3>
        {JSON.stringify(this.props.product)}
      </div>
    );
  }
}