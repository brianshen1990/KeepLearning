
const init = { 
  counter : 0
};

function counter(state = init, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: ++state.counter }
    case 'DECREMENT':
      return { ...state, counter: --state.counter }
    default:
      return state
  }
}

export default counter;