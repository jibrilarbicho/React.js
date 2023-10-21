import React from "react";

export default function Start({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h1>Welcome to the react qiz</h1>
      <p>{numQuestions} questions to test your React mastery</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
}
