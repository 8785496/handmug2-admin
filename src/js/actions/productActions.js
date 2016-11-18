import axios from 'axios';

export function getProducts(dispatch) {
  return (dispatch) => {
    return axios.get('/api/products')
      .then((response) => {
        dispatch({ type: 'GET_PRODUCTS', products: response.data })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export function getProduct(id, dispatch) {
  return (dispatch) => {
    return axios.get(`/api/product/${id}`)
      .then((response) => {
        dispatch({ type: 'GET_PRODUCT', product: response.data })
      })
  }
}

export function removeProduct(id, dispatch) {
  return (dispatch) => {
    //dispatch({ type: 'REMOVE_PRODUCT', id: id })
    return axios.delete(`/api/product/${id}`)
      .then((response) => {
        dispatch({ type: 'GET_PRODUCTS', products: response.data })
      })
  }
}

export function changeProductName(name) {
  return {
    type: 'CHANGE_PRODUCT_NAME',
    name: name
  }
}