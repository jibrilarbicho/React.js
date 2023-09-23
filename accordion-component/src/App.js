import { useState } from "react";

const faqs = [
  {
    title: "  What is Computer programming?",
    text: "Computer Programming is also known as programming or coding. Programming is a process which includes processes such as coding, maintaining, updating, debugging, writing, designing (algorithm), etc.",
  },
  {
    title: "  How does programming work ?  ",
    text: "Programming contains a set of instructions for the computer to perform different tasks. In fact, those instructions are executable commands, each having a different purpose. ",
  },
  {
    title: "  What is debugging?",
    text: "Debugging is the process of finding and removing errors in a program. In this process, the program is thoroughly checked for errors. Then errors are pointed out and debugged.",
  },
  {
    title: "  When a syntax error occurs?",
    text: "A syntax error occurs when the program violates one or more grammatical rules of the programming language. These errors are detected at compile time, i.e., when the translator (compiler or interpreter) attempts to translate the program.",
  },
];
export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem title={el.title} text={el.text} num={i} key={i} />
      ))}
    </div>
  );
}
function AccordionItem({ title, num, text }) {
  const [isopen, setopen] = useState(false);
  function handleToggle() {
    setopen((isopen) => !isopen);
  }
  return (
    <div className={`item ${isopen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isopen ? "-" : "+"}</p>

      {isopen && <div className="content-box">{text}</div>}
    </div>
  );
}
