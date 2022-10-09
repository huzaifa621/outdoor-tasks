import { createRoot } from "react-dom/client";

import App from "./App";
import { AllTasksContextProvider } from "./Contexts/AllTasksProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AllTasksContextProvider>
    <App />
  </AllTasksContextProvider>
);
