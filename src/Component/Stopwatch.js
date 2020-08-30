import React, { Component } from "react";
import "../App.css";

class Stopwatch extends Component {
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

  componentDidUpdate(){
    let { timerTime } = this.state;
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    if(minutes === "05"){
      this.setState({isError: true, timerStart: 0, timerTime: 0})
      this.stopTimer();
    }
  }

  render() {
    const { timerTime, isError } = this.state;
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    return (
      <div className="stopwatch">
        <div className="stopwatch-display">
          <span id={isError ? "color-red": "color-default"}>{minutes} : {seconds}</span>
        </div>
        {this.state.timerOn === false && this.state.timerTime === 0 && (
          <button onClick={this.startTimer}>{isError ? "Reset" : "Start"}</button>
        )}
        {this.state.timerOn === true && (
          <button onClick={this.stopTimer}>Stop</button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <button onClick={this.resetTimer}>Reset</button>
        )}
      </div>
    );
  }
}

export default Stopwatch;
