import React from 'react';
import Reflux from 'reflux';

const NumActions = Reflux.createActions([
  "add",
  "minus",
  {
    minusAsync: {
      children: ['completed']
    }
  }
]);

NumActions.minusAsync.listen( function() {
  setTimeout(this.completed, 2000);
})

class NumStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      num: 0
    }; // <- set store's default state much like in React
    this.listenables = NumActions;
  }
  onAdd() {
    this.setState({
      num: (this.state.num + 1)
    })
  }
  onMinus() {
    this.setState({
      num: (this.state.num - 1)
    })
  }
  onMinusAsyncCompleted() {
    this.setState({
      num: (this.state.num - 1)
    })
  }
}

class MyComponent extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {}; // our store will add its own state to the component's
    this.store = NumStore; // <- just assign the store class itself
    this.clickAdd = this.clickAdd.bind(this);
    this.clickMinus = this.clickMinus.bind(this);
    this.clickMinusAsync = this.clickMinusAsync.bind(this);
  }

  clickAdd() {
    NumActions.add();
  }
  clickMinus() {
    NumActions.minus();
  }
  clickMinusAsync(){
    NumActions.minusAsync();
  }

  render() {
    return <div>
      <span> { this.state.num } </span>
      <br></br>
      <button onClick={this.clickAdd} >Add</button>
      <button onClick={this.clickMinus} >Minus</button>
      <button onClick={this.clickMinusAsync} >Minus Async</button>
    </div>
  }
}

function App() {
  return <React.Fragment>
    <MyComponent />
    <MyComponent />
  </React.Fragment>
}

export default App;