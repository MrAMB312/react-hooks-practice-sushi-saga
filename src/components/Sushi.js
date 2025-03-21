import React from "react";

function Sushi({ sushi, onEatSushi, eaten }) {
  const { name, img_url, price } = sushi;

  return (
    <div className="sushi">
      <div className="plate" onClick={() => !eaten && onEatSushi(sushi)}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
