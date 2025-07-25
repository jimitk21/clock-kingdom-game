import React from "react";
import "./SetTheTime.css";
import InteractiveAnalogClock from "./InteractiveAnalogClock.jsx";

const SetTheTime = ({
  targetTime,
  clockHours,
  clockMinutes,
  setClockHours,
  setClockMinutes,
  checkClockAnswer,
  showFeedback,
}) => {
  return (
    <div className="set-clock-game">
      <h2 className="game-header">🎯 Set the Clock</h2>
      <InteractiveAnalogClock
        targetTime={targetTime}
        clockHours={clockHours}
        clockMinutes={clockMinutes}
        setClockHours={setClockHours}
        setClockMinutes={setClockMinutes}
        checkClockAnswer={checkClockAnswer}
      />
    </div>
  );
};

export default SetTheTime;
