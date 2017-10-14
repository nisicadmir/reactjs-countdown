import React, {Component} from 'react';

import Clock from './Clock';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'October 20, 2017',
      newDeadline: ''
    }
  }
  
  changeDeadline(){
    this.setState({
      deadline: this.refs.dateField.value
    })
  }
  
  render(){
    return(
    <div className="app">
      <h2>Countdown to {this.state.deadline}</h2>
      <Clock 
        deadline={this.state.deadline}
      />
      <input
        placeholder="ex: December 20, 2017"
        ref="dateField"
      />
      <button onClick={() => this.changeDeadline()}>Submit</button>
    </div>
    )
  }
}

export default App;