import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // declare variable using hooks .
  // Array Destructuring :: React Hooks

  const [list, selList] = useState([]);

  // Arrow Function
  const addNewHello = () => {
    //Array Clone
    const newList = [...list, "Hello World"];
    selList(newList);
    console.log(list);
  };
  return (
    <div>
      <h2>Working with events and list </h2>
      <input type="text" name="" id="" placeholder="Post Your Thought here" />
      <input type="button" value="Say Hello" onClick={addNewHello} />
      {list.map((item) => {
        return (
          <h3>
            {" "}
            {item}. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Pariatur non similique provident ea eius ad nemo blanditiis dolorum
            architecto eos.{" "}
          </h3>
        );
      })}
    </div>
  );
}

export default App;
