import "./travel.css";
import React from "react";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];
const TravelList = () => {
  return (
    <div className="app">
      <Logo />
      <Form />

      <PackingList />
      <Stats />
    </div>
  );
};

export default TravelList;

function Logo() {
  return <h1>🌴Far away 💼</h1>;
}

function Form() {
  return (
    <form className="add-form">
      <h3>What you need for your trip?</h3>
      <select name="" id="">
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num}>{num}</option>
        ))}
      </select>
      <input type="text" placeholder="item.." />
      <button>Add</button>
    </form>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>
        ? "You got everything! Ready to go ✈️" : ` 💼 You have X on your list,
        and you already packed `
      </em>
    </footer>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <>
      <li>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.description}
          <br />
          quantity: {item.quantity}
        </span>
        <button>❌</button>
      </li>
    </>
  );
}
