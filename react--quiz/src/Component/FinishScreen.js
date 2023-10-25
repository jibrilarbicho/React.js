import React from "react";

export default function FinishScreen({
  points,
  maxPossiblePoints,
  HighScore,
  dispatch,
}) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🥈";
  if (percentage >= 60 && percentage < 80) emoji = "🥉";
  if (percentage < 50) emoji = "👶";

  return (
    <div>
      <p className="result">
        <span>{emoji}</span>You Scored{" "}
        <strong>
          {points} out of {maxPossiblePoints}(Math.ceil({percentage}%)
        </strong>
      </p>
      <p className="highscore">(HighScore:{HighScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </div>
  );
}
