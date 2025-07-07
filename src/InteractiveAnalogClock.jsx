import React from "react";
import AnalogClock from "./AnalogClock.jsx";

const InteractiveAnalogClock = ({
  targetTime,
  clockHours,
  clockMinutes,
  setClockHours,
  setClockMinutes,
  checkClockAnswer,
}) => {
  const handleHourUp = () => {
    setClockHours((prev) => (prev === 12 ? 1 : prev + 1));
  };
  const handleHourDown = () => {
    setClockHours((prev) => (prev === 1 ? 12 : prev - 1));
  };
  const handleMinuteUp = () => {
    setClockMinutes((prev) => (prev + 5) % 60);
  };
  const handleMinuteDown = () => {
    setClockMinutes((prev) => (prev === 0 ? 55 : prev - 5));
  };
  return (
    <div className="interactive-clock-container">
      <div className="target-time">
        Set the clock to:{" "}
        <span className="time-display">
          {String(targetTime.hours).padStart(2, "0")}:
          {String(targetTime.minutes).padStart(2, "0")}
        </span>
      </div>
      <div className="clock-game-layout">
        <div className="clock-section">
          <AnalogClock
            hours={clockHours}
            minutes={clockMinutes}
            hourHandClass="hour-hand-set-clock"
          />
        </div>
        <div className="controls-section">
          <div className="clock-controls">
            <div className="current-time-display">
              Current: {String(clockHours).padStart(2, "0")}:
              {String(clockMinutes).padStart(2, "0")}
            </div>
            <div className="control-buttons">
              <div className="hour-controls">
                <button className="control-btn hour-btn" onClick={handleHourUp}>
                  ⬆️ Hour +1
                </button>
                <button
                  className="control-btn hour-btn"
                  onClick={handleHourDown}
                >
                  ⬇️ Hour -1
                </button>
              </div>
              <div className="minute-controls">
                <button
                  className="control-btn minute-btn"
                  onClick={handleMinuteUp}
                >
                  ⬆️ Minute +5
                </button>
                <button
                  className="control-btn minute-btn"
                  onClick={handleMinuteDown}
                >
                  ⬇️ Minute -5
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="check-answer-btn" onClick={checkClockAnswer}>
        ✨ Check My Answer ✨
      </button>
    </div>
  );
};

export default InteractiveAnalogClock;
