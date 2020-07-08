import { INCREMENT, DECREMENT } from './actions'

export const mapDispatchToProps = (dispatch) => { 
  return {
    increment: () => dispatch( INCREMENT ),
    decrement: () => dispatch( DECREMENT )
  }
}

export const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter
  }
}