import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ProductsProvider } from "./context/ProductsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </AuthProvider>
  </React.StrictMode>
);
