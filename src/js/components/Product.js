import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../actions/productActions'
import store from '../store'

@connect(
  (store) => {
    return {
      product: store.product
    }
  },
  (dispatch) => {
    return {
      changeName: bindActionCreators(actions.changeProductName, dispatch),
      changeDescription: bindActionCreators(actions.changeProductDescription, dispatch),
      changePrice: bindActionCreators(actions.changeProductPrice, dispatch),
      getProduct: bindActionCreators(actions.getProduct, dispatch)
    }
  }
)
export default class Product extends React.Component {
  constructor(props) {
    super(props)
    this.changeName = this.changeName.bind(this)
    this.changeDescription = this.changeDescription.bind(this)
    this.changePrice = this.changePrice.bind(this)
  }

  componentWillMount() {
    //this.props.dispatch(getProduct(this.props.params.id));
    this.props.getProduct(this.props.params.id)
  }

  submit() {
    console.log('Submit')
    return false
  }

  changeName(e) {
    //this.props.dispatch(changeProductName(e.target.value))
    this.props.changeName(e.target.value)
  }

  changeDescription(e) {
    this.props.changeDescription(e.target.value)
  }

  changePrice(e) {
    this.props.changePrice(e.target.value)
  }

  render() {
    const { product } = this.props;
    const { picture } = this.props.product;
    let fileNameMiddle = picture.fileNameMiddle ? '/images/' + picture.fileNameMiddle : '';

    return (
      <div>
        <h3>
          Продукт #{this.props.params.id}
        </h3>
        <pre>
          {JSON.stringify(this.props.product, null, '  ')}
        </pre>

        <form onSubmit={this.submit}>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="name"
              value={product.name}
              onChange={this.changeName} />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input type="text" className="form-control" id="description"
              value={product.description}
              onChange={this.changeDescription} />
          </div>

          <div className="form-group">
            <label htmlFor="price">price</label>
            <input type="text" className="form-control" id="price"
              value={product.price}
              onChange={this.changePrice} />
          </div>

          <div className="form-group">
            <img src={fileNameMiddle} alt={picture.name} />
          </div>

          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
}