import React from "react";
import ReactDOM from "react-dom/client";
import router from "./routes/router";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AuthProviders from "./providers/AuthProviders";


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProviders>
    </React.StrictMode>
);

