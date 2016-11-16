export default function reducer(state={}, action) {
  switch (action.type) {
    case 'GET_PRODUCT':
      state = action.product;
      break;
    default:
      return state;
  }

  return state;
}