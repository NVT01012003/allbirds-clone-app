import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { WindowSizeContextProvider } from "./contexts/windowSizeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <WindowSizeContextProvider>
        <App />
    </WindowSizeContextProvider>
);
