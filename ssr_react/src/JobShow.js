import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addJob } from './syncStore/actions.js'

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
const JobShow = connect(mapStateToProps, mapDispatchToProps)(_JobShow);

export default JobShow;