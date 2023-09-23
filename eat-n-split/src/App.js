import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
export default function App() {
  const [showAddfriend, setshowAddfriend] = useState(false);
  const [friends, setfriends] = useState(initialFriends);
  const [selectedfriend, setselectedfriend] = useState(null);
  function handleShowaddfriend() {
    setshowAddfriend((show) => !show);
  }
  function handleaddfriend(friend) {
    setfriends((friend) => [...friends, friend]);
    setshowAddfriend(false);
  }
  function handleselection(friend) {
    setselectedfriend(selectedfriend?.id === friend.id ? null : friend);
    // setselectedfriend(friend);
    setshowAddfriend(false);
  }
  function handlesplitbill(value) {
    setfriends(
      friends.map(
        (friend) =>
          friend.id === selectedfriend.id
            ? { ...friend, balance: friend.balance + value }
            : { ...friend }
        //:friend
      )
    );
    setselectedfriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <Friendllist
          friends={friends}
          onselection={handleselection}
          selectedfriend={selectedfriend}
        />

        {showAddfriend && <FormAddFriend onaddfriend={handleaddfriend} />}
        <Button onClick={handleShowaddfriend}>
          {showAddfriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedfriend && (
        <FormsplitBill
          key={selectedfriend.id}
          selectedfriend={selectedfriend}
          onsplitbill={handlesplitbill}
        />
      )}
    </div>
  );
}
function Friendllist({ friends, onselection, selectedfriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onselection={onselection}
          selectedfriend={selectedfriend}
        />
      ))}
    </ul>
  );
}
function Friend({ friend, onselection, selectedfriend }) {
  const isSelected = selectedfriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button onClick={() => onselection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
function FormAddFriend({ onaddfriend }) {
  const [name, setname] = useState("");
  const [image, setimage] = useState("https://i.pravatar.cc/48?u=933372");
  function handlesubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();

    const newFriend = {
      name,
      id,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onaddfriend(newFriend);
    setname("");
    setimage("https://i.pravatar.cc/48?u=933372");
  }
  return (
    <form className="from-add-friend" onSubmit={handlesubmit}>
      <label>👫Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <label>📰Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setimage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
function FormsplitBill({ selectedfriend, onsplitbill }) {
  const [bill, setbill] = useState("");
  const [paidbyuser, setpaidbyuser] = useState("");
  const [whoispaying, setwhoispaying] = useState("");
  const paidbyFriend = bill ? bill - paidbyuser : "";
  function handlesubmit(e) {
    e.preventDefault();
    if (!bill || !paidbyuser) return;
    onsplitbill(whoispaying === "user" ? paidbyFriend : -paidbyuser);
  }
  return (
    <form className="form-split-bill" onSubmit={handlesubmit}>
      <h2>Split all bill with {selectedfriend.name}</h2>
      <label>💸Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setbill(Number(e.target.value))}
      />
      <label>🧍Your Expenses</label>
      <input
        type="text"
        value={paidbyuser}
        onChange={(e) =>
          setpaidbyuser(
            Number(e.target.value) > bill ? paidbyuser : Number(e.target.value)
          )
        }
      />
      <label> 👩‍❤️‍👩X's Expenses</label>
      <input type="text" disabled value={paidbyFriend} />
      <label> 😀Who is paying the bill ?</label>
      <select
        value={whoispaying}
        onChange={(e) => setwhoispaying(e.target.value)}
      >
        <option value="you">You</option>
        <option value="friend"> {selectedfriend.name}</option>
      </select>
      <Button>Split BIll</Button>
    </form>
  );
}
