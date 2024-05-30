import React, { useState } from "react";
import "./style.css";
import Navigation from "../../navigationBar/Navigation";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { Avatar, AvatarBadge } from "@chakra-ui/react"; // import { PiDotsNineBold } from "react-icons/pi";
import AfterAvatar from "./afterAvatar/AfterAvatar";
// import img1 from "../Header/imges/dp-transformed.png"
function Header() {
  const [AvatarOn, setAvatarOn] = useState(false);

  return (
    <>
      <Flex
        borderBottom="2px solid #1cb5e0"
        className="main_div"
        justifyContent="end"
        alignItems="center"
        gap="16px"
        background=" linear-gradient(to right, #c33764, #1d2671); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        "
        p="0 10px 0 10px"
      >
        <Navigation />

        <Avatar
          _hover={{ cursor: "pointer" }}
          _
          size="md"
          src="https://bit.ly/broken-link"
          bg="grey"
          onClick={() => {
            setAvatarOn(!AvatarOn);
          }}
          // src="https://media.licdn.com/dms/image/D4D03AQGskfzPEgOe5w/profile-displayphoto-shrink_200_200/0/1689354757691?e=1721260800&v=beta&t=JMeQfQs_L4kEFGRT50PcOW5o4KjhpZ32WuWA7D5NUbY"
        >
          {/* <AvatarBadge boxSize="1em" bg="green.500" /> */}
        </Avatar>
        {AvatarOn && <AfterAvatar />}
      </Flex>
    </>
  );
}

export default Header;
