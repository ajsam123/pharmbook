import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router.tsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </StrictMode>
    ,
  </QueryClientProvider>,
);
