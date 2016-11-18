export default function reducer(state = { picture: {} }, action) {
  switch (action.type) {
    case 'GET_PRODUCT':
      return action.product;
    case 'CHANGE_PRODUCT_NAME':
      return Object.assign({}, state, { name: action.name }) //{...state, name: action.name}
    case 'CHANGE_PRODUCT_DESCRIPTION':
      return Object.assign({}, state, { description: action.description })
    case 'CHANGE_PRODUCT_PRICE':
      return Object.assign({}, state, { price: action.price })
    default:
      return state;
  }
}