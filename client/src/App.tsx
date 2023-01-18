import { useState } from "react";
import "./App.css";
import { Index } from "./public/Auth";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Index />
    </div>
  );
}

export default App;
