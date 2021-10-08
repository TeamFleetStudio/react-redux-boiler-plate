import { createStore as createStoreRedux } from 'redux'
import { reducer } from './reducer'

export const createStore = () => createStoreRedux(reducer)
