import { useCallback } from "react";
import { memo } from "react";
import { useEffect, useState } from "react";

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    setExchange1Data({
      returns: 1000,
    });
  }, []);

  useEffect(() => {
    setExchange2Data({
      returns: 1000,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setBankData({
        income: 100,
      });
    }, 5000);
  }, []);

  // useCallback is not about the amount of code
  // it is about not re-rendering a child component, if the function doesn't/hasn't need to change across re-renders

  const cryptoReturns = useCallback(
    function () {
      return exchange1Data.returns + exchange2Data.returns;
    },
    [exchange1Data, exchange2Data],
  );

  // memo -> skip re-rendering a component when its props are unchanged
  return (
    <div>
      <Child cryptoReturns={cryptoReturns} />
      <Dummy></Dummy>
    </div>
  );
}

const Dummy = memo(function () {
  return <div> Hi </div>;
});

const Child = memo(function ({ cryptoReturns }) {
  console.log("Component child re-rendered");
  return <div> Yor crypto returns are {cryptoReturns()}</div>;
});

export default App;
