import React, { Component } from "react";
import "../App.css";

export default class Stopwatch extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    isError: false
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime,
      isError: false
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 60);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
  };

  defaultTimer = () => {
    this.setState({isError: false})
  }

  componentDidUpdate(){
    let { timerTime } = this.state;
    let minutes = Math.floor(timerTime / 60000) % 60;
    if(minutes === 5){
      this.setState({isError: true})
      this.stopTimer();
      this.resetTimer();
    }
  }

  render() {
    const { timerTime, isError, timerOn } = this.state;
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    return (
      <div className="stopwatch">
        <div className="stopwatch-display">
          <span id={isError ? "color-red": "color-default"}>{minutes} : {seconds}</span>
        </div>
        {timerOn ? 
          <button onClick={this.stopTimer}>Pause</button>
          :
          timerTime >= 0 &&
            <button onClick={isError ? this.defaultTimer: this.startTimer}>{isError ? "Reset" : "Start"}</button>
        }
      </div>
    );
  }
}
