import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import { GlobalStyle } from "./global";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GlobalStyle />
        <Home />
    </React.StrictMode>
);
