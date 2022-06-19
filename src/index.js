import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";

const title = "Webpack React Setup";
console.log(title);

const root = createRoot(document.getElementById("root"));
root.render(<App />);
