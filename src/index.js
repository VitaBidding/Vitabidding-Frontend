import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./service.worker.registration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
// 서비스 워커 등록
serviceWorkerRegistration.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
