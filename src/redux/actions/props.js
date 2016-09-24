import types from './types'

export const addProp = (val) => ({
  type: types.ADD_PROP,
  payload: val
})

export const removeProp = (index) => ({
  type: types.REMOVE_PROP,
  payload: {index}
})

export const setProp = (index,val) => ({
  type: types.SET_PROP,
  payload: {index,val}
})
