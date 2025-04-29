import './App.css';
import React from 'react';

class App extends React.Component {

state={

  count:0
}

flag = null;

increment =()=>{
  
 this.flag=setInterval(() => {
    this.setState({count:this.state.count+1})
  }, 1000);
}
stop = () => {
  clearInterval(this.flag);
  this.flag = null;
};


reset = () => {
  this.stop(); 
  this.setState({ count: 0 });
};

  render(){

    return (
      <div>
        <span style={{fontSize:"40px"}}>Count {this.state.count}</span>
        <br />
        <button onClick={this.increment} style={{fontSize:"40px"}}>Start</button>
        <button onClick={this.stop} style={{fontSize:"40px"}}>Stop</button>
        <button onClick={this.reset} style={{fontSize:"40px"}}>Reset</button>
      </div>
    )
  }
}

export default App