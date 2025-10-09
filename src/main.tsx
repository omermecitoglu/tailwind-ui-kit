import "./main.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootDiv = document.createElement("div");
rootDiv.id = "app";
document.body.appendChild(rootDiv);
const root = createRoot(rootDiv);
root.render(<StrictMode><App /></StrictMode>);
