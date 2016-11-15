export default function reducer (state = {items: []}, action) {
    switch(action.type) {
        case 'FETCH_PRODUCTS':
            return state;
            break;
        case 'RECEIVE_PRODUCTS':
            return Object.assign({}, state, {items: action.products});
            break;
        default:
            return state;
    }
}
