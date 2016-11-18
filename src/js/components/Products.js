import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { getProducts, removeProduct } from '../actions/productActions'

@connect((store) => {
  return {
    products: store.products
  };
})
export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(getProducts())
    // console.log(this)
  }

  remove(id) {
    this.props.dispatch(removeProduct(id))
  }

  render() {
    let items = this.props.products.map(prod => <tr key={prod.id}>
      <td>{prod.id}</td>
      <td>
        <Link to={"/product/" + prod.id}>{prod.name}</Link>
        <button className="btn btn-default" onClick={() => this.remove(prod.id)}>Удалить</button>
      </td>
      <td>{prod.price}</td>
    </tr>)

    return (
      <div>
        <h2 className="page-header">Продукты</h2>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Наименование</th>
                <th>Цена, р.</th>
              </tr>
            </thead>
            <tbody>
              {items}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}