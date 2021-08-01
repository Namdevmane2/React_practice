import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let name = "Namdev";
  let list = ["A", "w", "b", "c", "d", "e"];
  return (
    <div>
      <h2>Hello world</h2>
      {list.map((item) => {
        return <li> {item} </li>;
      })}
    </div>
  );
}

export default App;
