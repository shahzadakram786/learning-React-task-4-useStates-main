import { Box, Flex, Image, Heading, Avatar } from "@chakra-ui/react";
import React from "react";
import InputPass from "./inputPass/InputPass";

const AfterAvatar = () => {
  return (
    <Flex
      boxShadow="2px 2px 10px black"
      pos="absolute"
      top="75px"
      zIndex="5"
      borderRadius="0 0 25px 25px"
      p="10px"
      border="1px solid black"
      background="grey"
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap="10px"
    >
      <Box size="sm" mb="10px" mt="20px">
        <Image
          w="60px"
          h="30px"
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
        />
      </Box>
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Avatar src="https://bit.ly/broken-link" />
        <Heading color="white" size="md">
          Sign in
        </Heading>
        <Flex direction="column">
          {/*this is where i bring the inputs  */}
          <InputPass />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AfterAvatar;
