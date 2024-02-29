import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UsersFormProvider from "./Components/Context/userFormContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UsersFormProvider>
        <App />
      </UsersFormProvider>
    </BrowserRouter>
  </React.StrictMode>
);
