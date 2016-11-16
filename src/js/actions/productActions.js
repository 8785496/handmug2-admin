import axios from 'axios';

export function getProducts(dispatch) {
  return function (dispatch) {
    return axios.get('/api/products')
      .then((response) => {
        dispatch({ type: 'GET_PRODUCTS', products: response.data })
      })
  }
}

export function getProduct(id, dispatch) {
  return function (dispatch) {
    return axios.get(`/api/product/${id}`)
      .then((response) => {
        dispatch({ type: 'GET_PRODUCT', product: response.data })
      })
  }
}