import types from '../actions/types'
import {List} from 'immutable'
const props = (state = new List(), action) => {
  switch(action.type){
    case types.ADD_PROP:
      return state.push(action.payload)
    case types.SET_PROP:
      return state.update(
        action.payload.index,
        // state.findIndex(
        //   ({name}) => name === action.payload.name
        // ),
        (item) => action.payload.val
      )
    case types.REMOVE_PROP:
      return state.delete(action.payload.index)
    default: return state;
  }
}

export default props;
