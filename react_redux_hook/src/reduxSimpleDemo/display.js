import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './countStore/binders'

function display(props) {
  return <React.Fragment>
        <button onClick={props.increment}>Increase</button>
        <button onClick={props.decrement}>Decrease</button>
        <div>Store Value Display</div>
        <div>{ props.counter }</div>
    </React.Fragment>;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(display);
