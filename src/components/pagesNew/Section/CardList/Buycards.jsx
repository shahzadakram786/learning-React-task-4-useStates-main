import React from "react";
import CardCom from "../card details";

function BuyCards({ buyCard, removeCard, addCardToBuyList }) {
  return (
    <>
      <div style={{ display: "flex", gap: "2rem", padding: "0 2rem" , flexWrap:"wrap"}}>
        {buyCard.map((item, index) => (
          <CardCom
            cardData={item}
            key={index}
            removeCard={removeCard}
            addCardToBuyList={addCardToBuyList}
          />
        ))}
      </div>
    </>
  );
}

export default BuyCards;
