import React from 'react';
import { connect } from 'react-redux'

import { getProduct, changeProductName } from '../actions/productActions'
import store from '../store'

@connect((store) => {
  return {
    product: store.product
  };
})
export default class Product extends React.Component {
  constructor(props) {
    super(props)

    this.changeName = this.changeName.bind(this)
  }
  
  componentWillMount() {
    this.props.dispatch(getProduct(this.props.params.id));
  }

  submit() {
    console.log('Submit')
    return false
  }

  changeName(e) {
    this.props.dispatch(changeProductName(e.target.value))
  }

  changeDescription(e) {

  }

  render() {
    console.log(this.props.product)
    
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
              value={this.props.product.name} 
              onChange={this.changeName} />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input type="text" className="form-control" id="description" 
              value={this.props.product.description}
              onChange={this.changeDescription} />
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