export default function reducer(state={}, action) {
  switch (action.type) {
    case 'GET_PRODUCT':
      return action.product;
    default:
      return {picture:{}};
  }
}