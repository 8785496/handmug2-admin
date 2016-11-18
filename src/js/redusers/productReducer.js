export default function reducer(state={picture:{}}, action) {
  switch (action.type) {
    case 'GET_PRODUCT':
      return action.product;
    case 'CHANGE_PRODUCT_NAME':
      return {...state, name: action.name} //Object.assign({}, state, {name: action.name})
    default:
      return state;
  }
}