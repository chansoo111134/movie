import React from 'react';

class App extends React.Component{
 state = {
  isLoading: true,
  movies: [],
 }

 componentDidmount(){
  setTimeout(() => {
  this.setState({isLoading: false});
 }, 3000);
 }


render() {
  const {isLoading} = this.state;
  return(
    <div>{isLoading ? 'Loading...' : 'We are ready'}</div>
  )
}
}
export default App;
