import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
const skills = [
  {
    skill: "HTML+CSS",
    level: "Advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "Advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web-Desidn",
    level: "Advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Gt & Github",
    level: "Intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "Advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "Beginner",
    color: "#EF3B00",
  },
];
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="ji.jpg" alt="jibril" />;
}
function Intro() {
  return (
    <div>
      <h1>Jibril Arbicho</h1>
      <p>
        Full-Stck Web Developer and teacher at ABJ Tube. when not coding or
        preparing the course i like to play Bord Games,to cook(and eat) or to
        just enjoy the Poartuguese sun at the beach
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skillList">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}

      {/* <Skill skill="React" emoji="💪" color="#123456" rad="10px" />
      <Skill skill="HTML+CSS" emoji="💪" color="orangered" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Svelte" emoji="💫" color="orange" />
      <Skill skill="Laravel" emoji="🌺" color="yellow" />
      <Skill skill="Rubby" emoji="✍️" color="orange" /> */}
    </div>
  );
}
//Destructuring props
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "Advanced" && "💪"}
        {level === "Intermediate" && "🤙"}
        {level === "Beginner" && "🙋‍♂️"}
      </span>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
