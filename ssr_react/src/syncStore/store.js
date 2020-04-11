import {createStore} from 'redux'
import jobTypesApp from './reducers.js'

const JobTypeAppStore = (preloadData) => {
  return createStore(jobTypesApp, preloadData)
}
export default JobTypeAppStore;