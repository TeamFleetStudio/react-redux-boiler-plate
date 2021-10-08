import { Action } from 'redux'
import { INCREMENT } from './actions'

export type SampleState = { counter: number }

const initState = { counter: 0 }

export const sample= (state: SampleState = initState, action: Action): SampleState => {
  switch (action.type) {
    case INCREMENT: {
      return { ...state, counter: state.counter + 1 }
    }

    default: {
      return state
    }
  }
}
