import React from 'react';

export class Clock extends React.Component{
  static propTypes = {
    totalSeconds: React.PropTypes.number
  }  
  constructor(props) {
    super(props);
    this.state ={
      totalSeconds: 0
    }
    this.formatSeconds = this.formatSeconds.bind(this);
  }
  formatSeconds(totalSeconds) {
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds / 60);

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    return minutes + ':' + seconds;
  }
  render() {
    var {totalSeconds} = this.props;

    return (
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
};

module.exports = Clock;
