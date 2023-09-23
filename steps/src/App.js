import { useState } from "react";

const messages = ["Learn React🛞", "Apply for jobs👜", "Invest new Income💵"];

export default function App() {
  let [step, setstep] = useState(1);
  const [isOPen, setopen] = useState(true);
  function handlePrevious() {
    if (step > 1) setstep((prevCount) => prevCount - 1);
  }
  function handleNext() {
    if (step < 3) setstep((prevCount) => prevCount + 1);
  }
  return (
    <div>
      <button className="close" onClick={(isopen) => setopen(!isOPen)}>
        &times;
      </button>
      {isOPen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            {/* <Button
              bg="#7950f2"
              color="#fff"
              onClick={handlePrevious}
              text="Previous"
              emoji="👈"
            /> */}
            <Button bg="#7950f2" color="#fff" onClick={handlePrevious}>
              👈 Previous
            </Button>
            <Button bg="#7950f2" color="#fff" onClick={handleNext}>
              {" "}
              Next 👉
            </Button>

            {/* <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => handlePrevious()}
            >
              Previuos
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
}
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step:{step}</h3>
      {children}
    </div>
  );
}
function Button({ bg, textColor, onClick, children }) {
  return (
    <button style={{ backgroundColor: bg, color: textColor }} onClick={onClick}>
      {children}
    </button>
  );
}
