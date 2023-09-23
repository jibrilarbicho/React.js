import { useState } from "react";
import "./index.css";
export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter() {
  const [count, setcount] = useState(0);
  const [step, setstep] = useState(1);
  const date = new Date("Aug 2 2023");
  date.setDate(date.getDate() + count);
  return (
    <div className="coun">
      <div className="buttons">
        <div>
          <button onClick={() => setstep((c) => c - 1)}>-</button>
          <span>step:{step}</span>
          <button onClick={() => setstep((c) => c + 1)}>+</button>
        </div>
        <div>
          <button onClick={() => setcount((c) => c - step)}>-</button>
          <span>Count:{count}</span>
          <button onClick={() => setcount((c) => c + step)}>+</button>
        </div>

        <p>
          <span>
            {count === 0
              ? "Today is"
              : count > 0
              ? `${count} days from Today is `
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </div>
  );
}
