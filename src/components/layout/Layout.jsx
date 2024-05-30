import React from "react";
import Header from "../pagesNew/Header";
import Footer from "../pagesNew/Footer";
import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

const Layout = () => {
  return (
    <Flex direction="column">
      <Box
        as="header"
        position="fixed"
        top="0"
        left="0"
        width="100%"
        zIndex="1000"
        bg="white"
      >
        <Header />
      </Box>

      <Box as="main" Flex="1" mt="60px" mb="60px" h="auto">
        <Outlet mt="40px" mb="40px" />
      </Box>

      <Box
        as="footer"
        position="fixed"
        bottom="0"
        left="0"
        width="100%"
        zIndex="1000"
        // bg="white"
      >
        <Footer />
      </Box>
    </Flex>
  );
};

export default Layout;
