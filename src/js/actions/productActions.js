import axios from 'axios';

export function fetchProducts(dispatch) {
    return function (dispatch) {
        return axios.get('/api/products')
            .then((response) =>{
                dispatch({type: 'RECEIVE_PRODUCTS', products: response.data})
            })
    }
}