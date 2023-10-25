import React from "react";

export default function NextButton({ dispatch, answer, numQuestions, index }) {
  if (answer === null) return null;
  if (numQuestions < index - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "NextQuestion" })}
      >
        NextButton
      </button>
    );
  if (numQuestions === index - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finished
      </button>
    );
}
