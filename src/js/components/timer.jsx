import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

class Timer extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const momentTimer = moment.duration(this.props.timer);
    let minuteString = momentTimer.minutes().toString();
    minuteString = minuteString.length === 1 ? `0${minuteString}` : minuteString;
    let secondsString = momentTimer.seconds().toString();
    secondsString = secondsString.length === 1 ? `0${secondsString}` : secondsString;
    return (
      <div className='timer'>
        <div className='timer-title'>Timer: </div>
        <div className='time-left'>
          {minuteString}:{secondsString}
          <div className='play-button fa fa-play'></div>
        </div>
      </div>);
  }
}

export default connect(i=>i)(Timer );