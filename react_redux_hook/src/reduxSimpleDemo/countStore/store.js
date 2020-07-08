import { createStore } from 'redux'
import counter from './reducers.js'

const CounterStore = createStore(counter)

export default CounterStore;