import React from 'react';

class App extends React.Component
{
  constructor(props) {
    super(props);
    console.log('집가고싶은');
  }

  componentDidCatch() {
    console.log("집 박고싶은");
  }
  state ={
    count: 0
  };

  
  add = () => {
    console.log('add');
    this.setState(current => ({count: current.count +1}));
  }
  
  minus = () => {
    console.log('minus');
    this.setState({count: this.state.count -1});
  }

  reset = () => {
    console.log('reset');
    this.setState({count: 0});
  }

 
  render() 
  {
  console.log('render');
  return ( 
  <div>
    <h1> Class Component {this.state.count} </h1>;
    <button onClick={this.add}> Add </button>
    <button onClick={this.minus}> Minus </button>
    <button onClick={this.reset}> reset </button>
  </div>
    );
  }
}



export default App;
