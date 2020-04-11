import {createStore} from 'redux'
import jobTypesApp from './reducers.js'

const JobTypeAppStore = createStore(jobTypesApp)

export default JobTypeAppStore;