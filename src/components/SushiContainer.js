import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, eatenSushis, onEatSushi }) {
  const [index, setIndex] = useState(0);

  const visibleSushis = sushis.slice(index, index + 4);

  function handleMoreClick() {
    setIndex((prevIndex) => (prevIndex + 4));
  }

  return (
    <div className="belt">
      {visibleSushis.map((sushi) => (
        <Sushi 
          key={sushi.id}
          sushi={sushi}
          eaten={eatenSushis.includes(sushi.id)}
          onEatSushi={onEatSushi}
           />
      ))}
      <MoreButton onClick={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;
