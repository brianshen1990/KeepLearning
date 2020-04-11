import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types'
import { connect, ReactReduxContext } from 'react-redux'
import { addJob, deleteJob, setJobTypeFilter, JobTypeFilter} from './syncStore/actions.js'

const _JobShow  = ( { data, name, onAddJob} ) =>  {
  return <div>
      <div>data: {JSON.stringify(data)}</div>
      <div>length: {data.length}</div>
      <button onClick={ (e) => { e.preventDefault(); onAddJob(Math.floor( Math.random() * 100 ))}}>Click to add</button>
    </div>
}

_JobShow.prototype = {
  data: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  onAddJob: PropTypes.func.isRequired
}


const mapStateToProps = (state, ownProps) => {
  return {
    data: state.jobTypes
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddJob: (_name) => {
      dispatch(addJob({
        name: `${ownProps.name} - ${_name}`,
        type: 'QA'
      }))
    }
  }
}

const _connect = ( _mapStateToProps, _mapDispatchToProps ) => {
  // return a function
  return (_comp) => {
    // a function components
    const NewCompType = (params) => {
      // get Store 
      const { store } = useContext(ReactReduxContext);
      const initProps = { ...params, ..._mapDispatchToProps(store.dispatch, params), ..._mapStateToProps(store.getState(), params) };
      const [ props, setProps ] = useState(initProps);
      // Subscribe 
      store.subscribe( () => {  
         setProps({ ...params, ..._mapDispatchToProps(store.dispatch, params), ..._mapStateToProps(store.getState(), params) });
      });
      return _comp(props);
    }
    return NewCompType;      
  }
}
const JobShow = _connect(mapStateToProps, mapDispatchToProps)(_JobShow);




export default JobShow;