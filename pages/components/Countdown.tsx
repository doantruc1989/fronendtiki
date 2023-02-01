import React from "react";
import Countdown from "react-countdown";

const CountdownComp = () => {
  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="text-base md:text-xl md:ml-4 mx-1 text-white">
          <span className="bg-red-500 px-2 rounded-md ">0{hours}</span>
          <span className="mx-1 text-gray-800">:</span>
          <span className="bg-red-500 px-2 rounded-md ">{minutes}</span>
          <span className="mx-1 text-gray-800">:</span>
          <span className="bg-red-500 px-2 rounded-md ">{seconds}</span>
        </div>
      );
    }
  };
  return (
    <Countdown
      date={Date.now() + 1000 * 60 * 60 * 3}
      renderer={renderer}
    ></Countdown>
  );
};

export default CountdownComp;
