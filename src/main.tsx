import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TanstackQueryProvider from "./libs/tanstack-query/TanstackQueryProvider.tsx";
import TanstackRouterProvider from "./libs/tanstack-router/TanstackRouterProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TanstackQueryProvider>
      <TanstackRouterProvider />
    </TanstackQueryProvider>
  </StrictMode>
);
