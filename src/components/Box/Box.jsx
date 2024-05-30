import { Suspense, useState } from "react";
// import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import "./Box.css";
import Input from "../inputComp/Input";
import CardAfterSave from "../aftersave/CardAfterSave";
import { Button } from "@chakra-ui/react";
// import axios from "axios";

const Box = ({
  title,
  handleNext,
  handlePrevious,
  setSaveAfter,
  saveAfter,
  titleOne,
  titleTwo,
  titleThree,
  titleFour,
}) => {
  const [input, setInput] = useState(false);
  const [newValue, setNewValue] = useState("");

  const handleClick = () => {
    setInput(true);
  };

  const handleSave = () => {
    console.log("tempName");
  };

  return (
    <>
      <div className="mainContainers">
        <div className="card">
          <div className="insideCard">
            <h1>{title}</h1>

            <button>' ' '</button>
          </div>
          <div className="line"></div>
          {input ? (
            <Input
              newValue={newValue}
              setInput={setInput}
              setNewValue={setNewValue}
              handleSave={handleSave}
              setSaveAfter={setSaveAfter}
            />
          ) : null}
          {saveAfter &&
            saveAfter.map((data, index) => {
              return (
                <CardAfterSave
                  key={index}
                  newValue={data}
                  currentList={saveAfter}
                  setSaveAfter={setSaveAfter}
                  CurrentIndex={index}
                  setInput={setInput}
                  title={title}
                  handleNext={handleNext}
                  handlePrevious={handlePrevious}
                  titleOne={titleOne}
                  titleTwo={titleTwo}
                  titleThree={titleThree}
                  titleFour={titleFour}
                />
              );
            })}
          <div className="addbuttondiv">
            <Button
              mt="15px"
              size="sm"
              color="blue.400"
              colorScheme="blue"
              variant="outline"
              onClick={handleClick}
            >
              + Add another Card
            </Button>
          </div>
        </div>
        {/* </Skeleton> */}
      </div>
    </>
  );
};

export default Box;
