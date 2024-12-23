import "./scss/app.scss";
import React from "react";
import Header from "./components/Header";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Routes>
       <Route path='/' element={<Home />} / >
        </Routes>
        
        <div className="content"></div>
      </div>
    </>
  );
}

export default App;
