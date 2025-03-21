import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [eatenSushis, setEatenSushis] = useState([]);
  const [money, setMoney] = useState(100);

  useEffect(() => {
    fetch("http://localhost:3001/sushis")
      .then((r) => r.json())
      .then((sushis) => setSushis(sushis));
  }, []);

  function handleEatSushi(sushi) {
    if (money >= sushi.price) {
      setEatenSushis([...eatenSushis, sushi.id]);
      setMoney(money - sushi.price);
    }
  }

  return (
    <div className="app">
      <SushiContainer
        sushis={sushis}
        eatenSushis={eatenSushis}
        onEatSushi={handleEatSushi} />
      <Table plates={eatenSushis} money={money} />
    </div>
  );
}

export default App;
