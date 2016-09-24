import { createStore, applyMiddleware, compose } from 'redux'
import {Map} from 'immutable'
import reducers from '../reducers'

// const initState = {
//   props: new Map(
//     [
//       ['name','test'],
//       ['val', {value:'a prop value', type:'text'}]
//     ]
//   )
// }
const initState = {}

const store = createStore(reducers, initState, compose(
    applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
export default store;
