import React from 'react'
import { Link } from 'react-router'


export default class App extends React.Component {

  render() {
    return (
      <div className="col-sm-3 col-md-2 sidebar">
        <ul className="nav nav-sidebar">
          <li className="active"><Link to="/products">Продукты</Link></li>
          <li><Link to="/categories">Категории</Link></li>
          <li><Link to="/pictures">Изображения</Link></li>
        </ul>
      </div>
    )
  }
}