import { useState } from "react";

function App() {
  const [state, setState] = useState(0); // state
  console.log("Hi from App");
  return (
    // document.createElement, document.getElementById
    <button onClick={() => setState((state) => state + 1)}>
      {/* state updates (giving bank details to CA, after that react re renders(CA calculates taxes)) */}
      Counter is {state}
    </button>
  );
}

export default App;
