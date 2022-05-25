import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <div className="App">
      <section className="container">
        <h1>{data.length} Birthday app</h1>
        <List people={people} />
      </section>
      <button onClick={() => setPeople([])}>Clear all</button>
      <button onClick={() => console.log("clicked 2nd")}>Add</button>
    </div>
  );
}

export default App;
