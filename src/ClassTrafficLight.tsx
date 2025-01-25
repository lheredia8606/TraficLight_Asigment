import { Component } from "react";
import { increment } from "./utils";
interface ClassTrafficLightState {
  lightValue: number;
}

export class ClassTrafficLight extends Component<
  unknown,
  ClassTrafficLightState
> {
  state = {
    lightValue: 0,
  };
  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div
            className={`circle ${
              this.state.lightValue === 0 ? "red" : "black"
            }`}
          ></div>
          <div
            className={`circle ${
              this.state.lightValue === 2 ? "yellow" : "black"
            }`}
          ></div>
          <div
            className={`circle ${
              this.state.lightValue === 1 ? "green" : "black"
            }`}
          ></div>
        </div>
        <button
          className="next-state-button"
          onClick={() => {
            this.setState({ lightValue: increment(this.state.lightValue) });
          }}
        >
          Next State
        </button>
      </div>
    );
  }
}
