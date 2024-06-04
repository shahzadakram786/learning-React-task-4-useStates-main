import { useEffect, useState } from "react";
import Box from "../../components/Box/Box.jsx";
import axios from "axios";
// import Navigation from "../../components/navigationBar/Navigation.jsx";
// import Header from "../../components/pagesNew/Header/index.jsx";
import { Spinner, useMediaQuery } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

function Home({ handleCancel }) {
  const [titleOne, setTitleOne] = useState("Ux/Ui");
  const [titleTwo, setTitleTwo] = useState("FrontEnd");
  const [titleThree] = useState("BackEnd");
  const [titleFour, setTitleFour] = useState("FullStack");
  const [SaveOne, setSaveOne] = useState([]);
  const [saveTwo, setSaveTwo] = useState([]);
  const [saveThree, setSaveThree] = useState([]);
  const [saveFour, setSaveFour] = useState([]);
  const [Loading1, setIsloading1] = useState(true);
  // const [islargerthan800] = useMediaQuery("(min-width : 800px)");

  useEffect(() => {
    const timer2 = setTimeout(() => {
      axios
        .get("https://api.lumiplace.io/app.v1/api/getArticles")
        .then(function (response) {
          setSaveOne(response.data);
          setSaveTwo(response.data);
          setSaveThree(response.data);
          setSaveFour(response.data);
          setIsloading1(false);
        })
        .catch(function (error) {
          console.error("Error fetching data:", error);
          setIsloading1(false);
        });
    }, 1500);

    return () => clearTimeout(timer2);
  }, []);
  const handleNext = (CurrentIndex, currentList, newValue) => {
    const filterData = currentList.filter(
      (data, index) => index !== CurrentIndex
    );
    setSaveOne(filterData);
    if (currentList === SaveOne) {
      setSaveTwo((prev) => [...prev, newValue]);
    } else if (currentList === saveTwo) {
      setSaveTwo(filterData);
      setSaveThree((prev) => [...prev, newValue]);
    } else if (currentList === saveThree) {
      setSaveFour((prev) => [...prev, newValue]);
    }
    console.log(newValue);
  };

  const handlePrevious = () => {};

  return (
    <>
      {Loading1 ? (
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
        <Grid
          // background=" linear-gradient(to left, #000046, #1cb5e0)"
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
            xl: "repeat(4,1fr)",
          }}
          gap="2rem"
          mt="40px"
          mb="40px"
          border="2px solid black"

          // bg="red"
        >
          <Box
            handleCancel={handleCancel}
            title={titleOne}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            saveAfter={SaveOne}
            setSaveAfter={setSaveOne}
          />

          <Box
            title={titleTwo}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            saveAfter={saveTwo}
            setSaveAfter={setSaveTwo}
          />

          <Box
            title={titleThree}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            saveAfter={saveThree}
            setSaveAfter={setSaveThree}
          />

          <Box
            title={titleFour}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            saveAfter={saveFour}
            setSaveAfter={setSaveFour}
          />
        </Grid>
      )}
      {/* </Spinner> */}
    </>
  );
}

export default Home;
