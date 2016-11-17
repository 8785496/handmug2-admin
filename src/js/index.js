import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router'

import App from './components/App'
import Products from './components/Products'
import Product from './components/Product'
import store from './store'

store.subscribe((data) =>
  console.log('store change', store.getState())
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Products} />
        <Route path="products" component={Products} />
        <Route path="product/:id" component={Product} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)