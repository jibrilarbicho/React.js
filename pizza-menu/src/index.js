import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Menu() {
  //const pizzas=[];
  const pizzas = pizzaData;
  const num = pizzas.length;

  return (
    <div className="menu">
      <h2>Our menu</h2>
      {num > 0 ? (
        <>
          <p>
            Authentic Ethiopian Cuisine.6 creative dishes to choose from.all
            fromour stone oven,all organic,all delicious
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza
                name={pizza.name}
                PhotoName={pizza.photoName}
                ingredients={pizza.ingredients}
                soldOut={pizza.soldOut}
                price={pizza.price}
                key={pizza.name}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>We are stilll working with time Menu Please come back.</p>
      )}
      {/* <h2>Our menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        PhotoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        PhotoName="pizzas/funghi.jpg"
        price={12}
      /> */}
    </div>
  );
}
function Pizza(props) {
  let title = "this is Abbagar Reastaurant";
  // if (props.soldOut) return null;
  return (
    <li className={`pizza ${props.soldOut ? "sold-out" : ""}`}>
      <img src={props.PhotoName} alt={props.name}></img>
      <div>
        <h1>{props.name}</h1>
        <h3>{props.ingredients}</h3>
        <span>{props.soldOut ? "SOLD OUT" : props.price}</span>
      </div>
      <p>Tomato, mozarella, mushrooms, and onion</p>
    </li>
  );
}
function Header() {
  return (
    <header className="header">
      <h1
        style={{ color: "red", textTransform: "uppercase", fontSize: "48px" }}
      >
        Fast React Pizza CO.
      </h1>
    </header>
  );
}

function Footer() {
  const t = new Date().getHours();
  const openH = 12;
  const closeH = 22;
  const isopen = t >= openH && t <= closeH;
  // if (t >= openH && t <= closeH) {
  //   alert("We are open");
  // } else alert("we are closed");

  return (
    <footer className="footer">
      {isopen ? (
        <Order closeH={closeH} />
      ) : (
        <p>
          we are happy to welcome you between {openH}:00 and {closeH}:00
        </p>
      )}
    </footer>
  );
}
function Order(props) {
  return (
    <div className="order">
      <p>We are open until {props.closeH}.Come visit us or order Online </p>
      <button className="btn">Oder</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
