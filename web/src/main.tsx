import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";

import AuthLayout from "./components/AuthLayout/index.tsx";
import GlobalStyle from "./global";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthLayout>
      <App />
    </AuthLayout>

    <GlobalStyle />
  </React.StrictMode>
);
