import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}
function TipCalculator() {
  const [bill, setbill] = useState("");
  const [percentage1, setpercentage1] = useState(0);
  const [percentage2, setpercentage2] = useState(0);
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);
  function handlereset() {
    setbill("");
    setpercentage1(0);
    setpercentage2(0);
  }
  return (
    <div>
      <Billinput bill={bill} onsetbiil={setbill} />
      <Selectpercentage percentage={percentage1} onselect={setpercentage1}>
        How did you like the service
      </Selectpercentage>
      <Selectpercentage percentage={percentage2} onselect={setpercentage2}>
        How did your friend like the service
      </Selectpercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onreset={handlereset} />
        </>
      )}
    </div>
  );
}
function Billinput({ bill, onsetbiil }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onsetbiil(Number(e.target.value))}
      ></input>
    </div>
  );
}

function Selectpercentage({ children, percentage, onselect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onselect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5"> It was okay(5%)</option>
        <option value="10">It was Good (10%)</option>
        <option value="20">Absolutely Amazing(20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div>
      <h3>
        You pay {bill + tip} ({bill}+ {tip}tip)
      </h3>
    </div>
  );
}
function Reset({ onreset }) {
  return (
    <div>
      <button onClick={onreset}>Reset</button>
    </div>
  );
}
