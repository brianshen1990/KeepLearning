import React from 'react';

class CommonFallBack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pending: null
    }
  }
  componentDidCatch(err) {
    console.log("catch!")
    if (this.props.children.type ) {
      const thenable = this.props.children.type._result;
      this.setState({pending : thenable}, () => {
        thenable.then( (res) => {
          this.setState({ pending: null});
        }) 
      });
    }
  }
  render() {
    return this.state.pending ? <div>Loading because of catch</div> : this.props.children;
  }
}

export default CommonFallBack;