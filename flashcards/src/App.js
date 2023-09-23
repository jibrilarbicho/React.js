import { useState } from "react";

export default function App() {
  return (
    <div className="app">
      <Flashcards />
    </div>
  );
}
const questions = [
  {
    id: 1234,
    question: "What Language is React Based on?",
    Answer: "JavaScript",
  },
  {
    id: 1235,
    question: "What are the building blocks fo React App ?",
    Answer: "Components",
  },
  {
    id: 1236,
    question:
      "What is the name of the syntax we use to describe a UI i React ?",
    Answer: "JSx",
  },
  {
    id: 1237,
    question: "How to pass data from parent  to child  components ",
    Answer: "props",
  },
  {
    id: 1238,
    question: "How to give Components Memory ?",
    Answer: "useState Hook",
  },
];
function Flashcards() {
  let [selectedid, setselectedid] = useState("");
  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          onClick={() =>
            setselectedid(
              question.id !== selectedid ? (selectedid = question.id) : ""
            )
          }
          key={question.id}
          className={question.id === selectedid ? "selected" : ""}
        >
          <p>
            {question.id === selectedid ? question.Answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
