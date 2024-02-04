import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from "./Header";
import Body from "./Body";

const App = (
  <div>
    <Header />
    <Body />
    {/* <Footer /> */}
  </div>
);

const root = createRoot(document.getElementById("app"));
root.render(App);
