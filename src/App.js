import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [name] = useState("CDAC");
  let [counter] = useState(100);
  let [active] = useState(false);
  let [list] = useState(["delhi", "mumbai"]);
  let [std1] = useState({ name: "namdev" });
  return (
    <div>
      <h2>Learning to Declar StateFull variable</h2>
      <h2>String :: {name} </h2>
      <h2>Number :: {counter} </h2>
      <h2>List :: {list} </h2>
      <h2>object :: {JSON.stringify(std1)} </h2>
      <h2>object :: {std1.name} </h2>
    </div>
  );
}

export default App;
