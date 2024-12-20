import "./scss/app.scss";
import React from "react";
import Header from "./components/Header";

import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Home />
        <div className="content"></div>
      </div>
    </>
  );
}

export default App;
