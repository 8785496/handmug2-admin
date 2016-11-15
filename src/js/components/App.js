import React from 'react'
import {Link} from 'react-router'

import Sidebar from './Sidebar'


export default class App extends React.Component {

    render() {
        return (
            <div>
                <Sidebar />
                <Link to="/">Главная</Link> |
                <Link to="/products">Продукты</Link>
                <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                    {this.props.children}
                </div>
            </div>
        )
    }
}