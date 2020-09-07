import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    //  var date = new Date();
    this.state = {
      date: new Date().toLocaleTimeString().split(".").join(":"),
      countDown: 100,
    };
  }

  componentDidMount() {
    //  var date = new Date();
    this.changeTime = setInterval(() => {
      this.setState((prevState) => ({
        date: new Date().toLocaleTimeString().split(".").join(":"),
        countDown: this.countDown(prevState),
      }));
    }, 1000);
  }

  componentWillUnmount() {
    this.render = () => null;
    clearInterval(this.changeTime);
  }

  render() {
    return (
      <div className="timer-wraper">
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td colSpan="2">sekarang jam : {this.state.date}</td>
              <td style={{ textAlign: "right" }} colSpan="1">
                hitung mundur: {this.state.countDown}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  countDown(prevState) {
    if (prevState.countDown === 0) {
      this.componentWillUnmount();
    } else {
      return prevState.countDown - 1;
    }
  }
}

export default Timer;
