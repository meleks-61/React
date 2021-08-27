import React, { useState } from "react";

function Item({ card }) {
  const [showLogo, setshowLogo] = useState(true);

  return (
    <div className="card" onClick={() => setshowLogo(!showLogo)}>
      {showLogo ? (
        <>
          <img className="card-logo" src={card.img} alt="logo" />
          <h3 className="card-tittle">{card.name}</h3>
        </>
      ) : (
        <ul className="list">
          {card.options.map((optEl, i) => {
            return <li key={i}>{optEl}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
export default Item;
