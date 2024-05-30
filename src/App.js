// import logo from './logo.svg';
import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/routes";
import { Provider } from "react-redux";

import { ChakraProvider } from "@chakra-ui/react";
import store from "./store/store";

function App() {
    return ( <
        >
        <
        ChakraProvider >
        <
        Provider store = { store } >
        <
        RouterProvider router = { router }
        />{" "} <
        /Provider>{" "} <
        /ChakraProvider>{" "} <
        />
    );
}

export default App;