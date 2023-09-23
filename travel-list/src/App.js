import { useState } from "react";

export default function App() {
  const [items, setitems] = useState([]);

  function handleAdditems(item) {
    setitems((items) => [...items, item]);
  }
  function deleteItems(id) {
    setitems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleitems(id) {
    setitems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearList() {
    let confirm = window.confirm("Are You sure You want  to delete All Items");
    if (confirm) setitems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAdditems={handleAdditems} />
      <Packinglist
        items={items}
        deleteitem={deleteItems}
        toggle={handleToggleitems}
        clear={clearList}
      />
      <Stats items={items} />
    </div>
  );
}
function Logo() {
  return <h1> 🌴 Far Away 👜</h1>;
}

function Form({ onAdditems }) {
  const [description, setdescription] = useState("");
  const [quantity, setquantity] = useState(1);

  function handlesubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAdditems(newItem);
    setdescription("");
    setquantity(1);
  }
  return (
    <form className="add-form" onSubmit={handlesubmit}>
      <h3>What do you need for your 😍Trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setquantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
function Packinglist({ items, deleteitem, toggle, clear }) {
  const [sort, sortBy] = useState("input");
  let sorted;
  if (sort === "input") sorted = items;
  if (sort === "decsription")
    sorted = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sort === "packed")
    sorted = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sorted.map((item) => (
          <Item
            item={item}
            key={item.id}
            deleteitem={deleteitem}
            toggle={toggle}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sort} onChange={(e) => sortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="decsription">sort by description</option>
          <option value="packed">sort by packed status</option>
        </select>
        <button onClick={clear}>Clear List</button>
      </div>
    </div>
  );
}
function Item({ item, deleteitem, toggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => toggle(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteitem(item.id)}>❌</button>
    </li>
  );
}
function Stats({ items }) {
  const numitems = items.length;
  const numpacked = items.filter((ite) => ite.packed).length;
  const percentage = (numpacked / numitems) * 100;
  if (!items.length)
    return (
      <p className="stats">Start Adding some items to your packing list 🚀</p>
    );
  // if (numitems === 0)
  //   return (
  //     <p className="stats">Start Adding some items to your packing list 🚀</p>
  //   );
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to Go ✈️"
          : `👜 You have ${numitems} items on your list ,and you already packed 
        ${numpacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
