import React from "react";
import "./style.css";

import { Box, Flex } from "@chakra-ui/react";

import { Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      borderTop="2px solid #1cb5e0"
      className="footer"
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      height="100px"
      // opacity="0.5"
      background="linear-gradient(to right, #c33764, #1d2671);
"
    >
      {" "}
      <Box className="pak">
        {" "}
        <Text color="white" p="1rem" size="md">
          Pakistan
        </Text>{" "}
      </Box>{" "}
      <Flex
        className="parent_att"
        borderTop="1px solid grey"
        justifyContent="space-between"
        p="1rem"
      >
        <Box className="child_one">
          <a href="#attr">About</a> <a href="#attr">Advertising</a>{" "}
          <a href="#attr">Business</a> <a href="#attr">How Search Works</a>{" "}
        </Box>
        <Box className="child_two">
          <a href="#attr">Privacy</a> <a href="#attr">Terms</a>{" "}
          <a href="#attr">Settings</a>
        </Box>
      </Flex>
    </Box>
  );
}

export default Footer;
