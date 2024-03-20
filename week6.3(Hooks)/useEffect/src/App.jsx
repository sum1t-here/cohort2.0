import { useState, useEffect } from "react";

function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});

  console.log("hi there re-render");

  useEffect(function () {
    setTimeout(() => {
      setBankData({
        income: 1000,
      });
    }, 3000);

    setTimeout(() => {
      setExchangeData({
        returns: 1000,
      });
    }, 1000);
  }, []);

  const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

  return <div>Hi there your income tax returns {incomeTax}</div>;
}

export default App;
