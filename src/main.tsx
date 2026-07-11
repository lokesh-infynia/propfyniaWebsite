import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { DeleteAccount } from "./components/DeleteAccount";
import "./styles.css";

const path = window.location.pathname;
const isPrivacyPolicy = path === "/privacy";
const isDeleteAccount = path === "/delete-account";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {isPrivacyPolicy ? <PrivacyPolicy /> : isDeleteAccount ? <DeleteAccount /> : <App />}
  </React.StrictMode>
);
