import React, {Component} from 'react';

import './App.css';

class Clock extends Component{
  constructor(props){
    super(props)
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }
  
  componentWillMount(){
    this.getTimeUntil(this.props.deadline);
  }
  
  componentDidMount(){
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }
  
  firstZero(num){
    if (num < 10){
      return '0' + num
    }
    return num
  }
  
  getTimeUntil(deadline){
    const time = Date.parse(deadline) - Date.parse(new Date());
    console.log('time', time);
    const seconds = Math.floor((time/1000)%60);
    const minutes = Math.floor((time/1000/60)%60);
    const hours = Math.floor(time/(1000*60*60)%24);
    const days = Math.floor(time/(1000*60*60*24));
    console.log('seconds', seconds, 'minutes', minutes, 'hours', hours, 'days', days);
    
    this.setState({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    })
    
  }

  render(){
    
    return(
      <div>
        <p>Days: {this.firstZero(this.state.days)}</p>
        <p>Hours: {this.firstZero(this.state.hours)}</p>
        <p>minutes: {this.firstZero(this.state.minutes)}</p>
        <p>Seconds: {this.firstZero(this.state.seconds)}</p>
      </div>
    )
  }

}


export default Clock
