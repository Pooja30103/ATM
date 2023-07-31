import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Atm from "./Atm";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Atm />
  </StrictMode>
);
