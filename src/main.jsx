import React from "react";
import ReactDOM from "react-dom/client";
import Index from ".";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalStyle } from "./global";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GlobalStyle />
        <RouterProvider router={router} />
    </React.StrictMode>
);
