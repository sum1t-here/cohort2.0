import React, { useContext, useState } from 'react';
import { CountContext } from './Context';

function App() {
  const [count, setCount] = useState(0);
  // wrap anyone that wants to use the teleported value inside the provider
  return (
    <>
      <CountContext.Provider value={{ count, setCount }}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    </>
  );
}

function Count({ setCount }) {
  return (
    <>
      <CountRenderer />
      <Buttons setCount={setCount} />
    </>
  );
}

function CountRenderer() {
  const { count } = useContext(CountContext);
  return <>{count}</>;
}

function Buttons() {
  const { count, setCount } = useContext(CountContext);
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </>
  );
}

export default App;
