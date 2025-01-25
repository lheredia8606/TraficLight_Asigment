import { useState } from "react";
import { increment } from "./utils";

export const FunctionalTrafficLight = () => {
  const [lightValue, setLightValue] = useState(1);

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={`circle ${lightValue === 0 ? "red" : "black"}`}></div>
        <div
          className={`circle ${lightValue === 2 ? "yellow" : "black"}`}
        ></div>
        <div className={`circle ${lightValue === 1 ? "green" : "black"}`}></div>
      </div>
      <button
        className="next-state-button"
        onClick={() => {
          setLightValue(increment(lightValue));
        }}
      >
        Next State
      </button>
    </div>
  );
};
