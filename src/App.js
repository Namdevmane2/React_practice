import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let list = ["hello", "Hero"];

  const addNewHello = () => {
    alert("add new Hello logic program here.....! ");
    list.push("hello");
    console.log(list);
  };
  return (
    <div>
      <h2>Working with events and list </h2>
      <input type="button" value="Say Hello" onClick={addNewHello} />
      {list.map((item) => {
        return <li> {item} </li>;
      })}
    </div>
  );
}

export default App;
