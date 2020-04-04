import JobTypeAppStore from './store.js';
import {addJob, deleteJob, setJobTypeFilter, JobTypeFilter} from './actions.js'

console.log ( JobTypeAppStore.getState() );

const unsubscribe = JobTypeAppStore.subscribe(() => console.log(JobTypeAppStore.getState()))

JobTypeAppStore.dispatch(addJob({name: 'UI', type: 'RD'}))
JobTypeAppStore.dispatch(addJob({name: 'Backend', type: 'RD'}))
JobTypeAppStore.dispatch(addJob({name: 'Automation', type: 'QA'}))
JobTypeAppStore.dispatch(deleteJob({name: 'UI', type: 'QA'}))
JobTypeAppStore.dispatch(setJobTypeFilter(JobTypeFilter.SHOW_QA))

unsubscribe()