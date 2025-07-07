import React from "react";
import "./GuessTheTime.css";
import AnalogClock from "./AnalogClock.jsx";

const GuessTheTime = ({ currentQuestion, handleGuessAnswer, showFeedback }) => {
  return (
    <div className="guess-time-game">
      <h2 className="game-header">🕐 Guess the Time</h2>
      <div className="clock-display">
        <AnalogClock
          hours={currentQuestion.time.hours}
          minutes={currentQuestion.time.minutes}
          hourHandClass="hour-hand-guess-time"
        />
      </div>
      <div className="answer-options">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className="option-btn"
            onClick={() => handleGuessAnswer(index)}
            disabled={showFeedback !== ""}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GuessTheTime;
