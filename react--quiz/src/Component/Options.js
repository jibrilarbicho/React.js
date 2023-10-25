import React from "react";

export default function Options({ question, dispatch, answer }) {
  const hasanswered = answer !== null;

  return (
    <div>
      {" "}
      <div className="options">
        {question.options.map((option, index) => (
          <button
            className={`btn btn-option ${answer === index ? "answer" : ""} ${
              hasanswered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payLoad: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
