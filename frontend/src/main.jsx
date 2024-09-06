import { createRouter, RouterProvider } from "@tanstack/react-router";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { routeTree } from "./routeTree.gen";
import { StrictMode } from "react";
import theme from "./theme";

const router = createRouter({ routeTree });

// Render the app
const rootElement = document.getElementById("root");

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </StrictMode>
  );
}
