import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import "./styles.css";

const isPrivacyPolicy = window.location.pathname === "/privacy";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {isPrivacyPolicy ? <PrivacyPolicy /> : <App />}
  </React.StrictMode>
);
