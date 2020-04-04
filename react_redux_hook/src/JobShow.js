import React, { useState }from 'react';
import { useSelector, connect, useDispatch } from 'react-redux'
// import JobTypeAppStore from 'syncStore/store.js';
import {addJob, deleteJob, setJobTypeFilter, JobTypeFilter} from './syncStore/actions.js'

const JobShow = (props) => {
  const [index, setIndex] = useState(0);

  const data = useSelector(state => state.jobTypes)
  const dispatch = useDispatch()
  
  const addOneJob = () => {
    dispatch( addJob({name: `Test_${props.name}_${index}`, type: 'RD'}) );
    setIndex(index+1);
  }

  return <div>
    <div>data: {JSON.stringify(data)}</div>
    <div>length: {data.length}</div>
    <button onClick={addOneJob}>Click to add</button>
  </div>
}

export default JobShow;