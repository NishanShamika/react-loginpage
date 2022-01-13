import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loginform from "./component/loginform";
import Home from "./component/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginform />} exact />
        <Route path="/home" element={<Home />} exact />
      </Routes>
    </Router>
  );
}

export default App;
