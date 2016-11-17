import React from 'react';
import { connect } from 'react-redux'

import { getProduct } from '../actions/productActions'
import store from '../store'

@connect((store) => {
  return {
    product: store.product
  };
})
export default class Product extends React.Component {
  componentWillMount() {
    this.props.dispatch(getProduct(this.props.params.id));
  }

  submit() {
    console.log('Submit')
    return false
  }

  render() {
    return (
      <div>
        <h3>
          Продукт #{this.props.params.id}
        </h3>
        {JSON.stringify(this.props.product)}

        <form onSubmit={this.submit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputFile">File input</label>
            <input type="file" id="exampleInputFile" />
            <p className="help-block">Example block-level help text here.</p>
          </div>
          <div className="checkbox">
            <label>
              <input type="checkbox" /> Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
}