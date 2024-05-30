import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import drops from "../Section/card/index";
import CardList from "./CardList";
import BuyCards from "./CardList/Buycards";
import { Box, Divider, Flex, Heading, Spinner, Grid } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setArts } from "../../../redux/arts/artsSlicer";
import {} from "../../baseUrl/baseURL";

let buyCard = [];

function Section() {
  const [LoadingAb, setLoadingAb] = useState(true);

  const dispatch = useDispatch();
  dispatch(setArts(drops));
  const { arts } = useSelector((state) => state.arts);

  const addCardToBuyList = (cardData) => {
    buyCard.push(cardData);
    renderBuyCards();
  };

  const renderBuyCards = () => {
    const buyCardsContainer = document.querySelector(".list-buy-cards");
    buyCardsContainer.innerHTML = "";
    const root = ReactDOM.createRoot(buyCardsContainer);
    root.render(<BuyCards buyCard={buyCard} />);
  };

  useEffect(() => {
    const timerAbout = setTimeout(() => {
      setLoadingAb(false);
    }, 1000);

    return () => clearTimeout(timerAbout);
  }, []);

  return (
    <>
      {LoadingAb ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          boxShadow="1px 1px 2px blue.500"
          size="xl"
          mt="250px"
        />
      ) : (
        <Box
          className="body"
          p="20px"
          h="auto"
          mb="10px"
          // mt="20px"
          background=" linear-gradient(to left, #000046, #1cb5e0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        "
        >
          <Box className="main2">
            <Heading
              mt="16px"
              color="white"
              textAlign="center"
              textShadow="1px 1px 10px grey"
            >
              WithOut Using any State
            </Heading>

            <Flex justifyContent={"center"}>
              <Divider my={"3em"} border={"2px solid white"} />
            </Flex>
            <Grid
              templateColumns={{
                base: "repeat(1,1fr)",
                md: "repeat(2,1fr)",
                lg: "repeat(3,1fr)",
                xl: "repeat(4,1fr)",
              }}
            >
              <CardList drops={arts} addCardToBuyList={addCardToBuyList} />
            </Grid>
          </Box>
          <Box className="buy-cards">
            <Box>
              <Heading
                textAlign="center"
                m="4rem"
                color="white"
                textShadow="1px 1px 10px grey"
              >
                Buy Cards
              </Heading>
            </Box>
            <Divider m="16px" />
            <Box mt="26px">
              <Heading
                size="sl"
                textAlign="center"
                mb="80px"
                // mb={.}
              >
                No Items no show
              </Heading>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default Section;
