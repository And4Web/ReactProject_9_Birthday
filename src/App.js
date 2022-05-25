import "./App.css";
import List from "./components/List";
import data from "./data";

function App() {
  return (
    <div className="App">
      <section className="container">
        <h1>{data.length} Birthday app</h1>
        <List people={data} />
      </section>
      <button onClick={() => console.log("clicked")}>Clear all</button>
      <button onClick={() => console.log("clicked 2nd")}>Add</button>
    </div>
  );
}

export default App;
