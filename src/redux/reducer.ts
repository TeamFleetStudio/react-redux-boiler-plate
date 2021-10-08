import { combineReducers } from 'redux'
import { sample } from './sample/sample'

export const reducer = combineReducers({ sample })
export type State = ReturnType<typeof reducer>
