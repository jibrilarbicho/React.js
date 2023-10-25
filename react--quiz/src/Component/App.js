import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import Start from "./Start";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataRecived":
      return { ...state, questions: action.payLoad, status: "ready" };
    case "DataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payLoad,

        points:
          action.payLoad === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "NextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };

    default:
      throw new Error("Action Unknown");
  }
}
export default function App() {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecived", payLoad: data }))
      .catch((err) => dispatch({ type: "DataFailed" }));
  }, []);

  return (
    <div>
      <Header />
      <Main>
        {status === "loading" && <Loader />}

        {status === "error" && <Error />}
        {status === "ready" && (
          <Start numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton dispatch={dispatch} answer={answer} />
          </>
        )}
      </Main>
    </div>
  );
}
