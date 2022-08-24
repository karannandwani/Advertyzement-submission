import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Datalayer } from "./Datalayer/Datalayer";
import reducer, { initialState } from "./Datalayer/Reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Datalayer initialState={initialState} reducer={reducer}>
      <App />
    </Datalayer>
  </React.StrictMode>
);

reportWebVitals();
