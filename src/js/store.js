import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import reducer from './redusers'

const middleware = applyMiddleware(promise(), thunk, logger())

export default createStore(reducer, middleware)

// store.subscribe(() => {
//     console.log('store changed', store.getState());
// });
//
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});