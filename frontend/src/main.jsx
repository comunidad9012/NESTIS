import { createRouter, RouterProvider } from "@tanstack/react-router";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import ReactDom from "react-dom/client";
import { routeTree } from "./routeTree.gen";
import { StrictMode } from "react";
import theme from "./theme";

ReactDom.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

const router = createRouter({ routeTree });

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);
