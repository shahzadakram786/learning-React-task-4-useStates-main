import React from "react";
import CardCom from "../card details";
import { Grid } from "@chakra-ui/react";

function CardList({ drops, addCardToBuyList }) {
  return (
    <>
      <Grid
        // w="100%"
        gap="26px"
        templateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
          xl: "repeat(5,1fr)",
        }}
      >
        {drops.map((item, index) => {
          return (
            <CardCom
              cardData={item}
              key={index}
              addCardToBuyList={addCardToBuyList}
            />
          );
        })}
      </Grid>
    </>
  );
}

export default CardList;
