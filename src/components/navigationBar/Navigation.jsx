import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import { Tabs, TabList, Tab } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <nav className="navDiv">
      <ul>
        <li>
          <Tabs>
            <TabList>
              <Tab>
                <Link className="link" to="/home">
                  Home
                </Link>
              </Tab>
              <Tab>
                <Link className="link" to="about">
                  About
                </Link>
              </Tab>
              <Tab>
                <Link className="link" href="#Gmail">
                  Gmail
                </Link>
              </Tab>

              <Tab>
                <Link className="link" href="#Images">
                  Images
                </Link>
              </Tab>
            </TabList>
          </Tabs>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
