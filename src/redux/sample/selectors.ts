import { State } from '../reducer'

export const selectCounter = (state: State): number => state.sample.counter
