import redux from 'redux'
const createStore = redux.createStore;
import jobTypesApp from './reducers.js'

const JobTypeAppStore = createStore(jobTypesApp)

export default JobTypeAppStore;