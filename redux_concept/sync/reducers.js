import redux from 'redux'
const combineReducers = redux.combineReducers;

import { 
  ADD_JOB, 
  DELETE_JOB, 
  SET_JOB_TYPE_FILTER, 
  JobTypeFilter 
} from './actions.js' 
const { SHOW_ALL, SHOW_QA, SHOW_RD } = JobTypeFilter 

function jobFilter( state = SHOW_ALL, action ) {
  switch ( action.type ) {
    case SET_JOB_TYPE_FILTER:
      return action.filter;
    default: 
      return state;
  } 
}


function jobTypes( state = [], action ) {
  switch (action.type) {
    case ADD_JOB:
      return [
        ...state,
        {
          name: action.job.name,
          type: action.job.type
        }
      ]
    case DELETE_JOB:
      return state.filter( item => item.name !== action.job.name );
    default:
      return state;
  }
}

const jobTypesApp = combineReducers({
  jobFilter,
  jobTypes
})

export default jobTypesApp;