import { FC } from 'react'
import { Provider } from 'react-redux'
import Sample from './components/Sample'
import { createStore } from './redux/createStore'

const store = createStore()
const App: FC = () => (
  <Provider store={store}>
    <Sample />
  </Provider>
)

export default App
