import { FC } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { State } from '../redux/reducer'
import { selectCounter } from '../redux/sample/selectors'
import { increment } from '../redux/sample/actions'

const withState = connect(
  (state: State) => ({ counter: selectCounter(state) }),
  { increment }
)

const Sample: FC<ConnectedProps<typeof withState>> = ({ counter, increment }) => (
  <div>
    Count: {counter}
    {' '}<button onClick={increment}>Increment</button>
  </div>
)

export default withState(Sample)
