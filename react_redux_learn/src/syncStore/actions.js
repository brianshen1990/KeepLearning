const JobTypeSample = {
  jobs: [
    {
      name: 'UI',
      type: 'RD'
    }, {
      name: 'Backend',
      type: 'RD'
    }, {
      name: 'Automation Test',
      type: 'QA'
    }
  ]
}

export const ADD_JOB = 'ADD_JOB'
export const DELETE_JOB = 'DELETE_JOB'
export const SET_JOB_TYPE_FILTER = 'SET_JOB_TYPE_FILTER'
export const JobTypeFilter = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_RD: 'SHOW_RD',
  SHOW_QA: 'SHOW_QA',
}
export function setJobTypeFilter(filter) {
  return { type: SET_JOB_TYPE_FILTER, filter }
}

export function addJob(job) {
  return {
    type: ADD_JOB,
    job
  }
}
export function deleteJob(job) {
  return {
    type: DELETE_JOB,
    job
  }
}
