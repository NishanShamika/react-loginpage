import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loginform from "./component/LoginForm";
import Home from "./component/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/" element={<Loginform />} />
      </Routes>
    </Router>
  );
}

export default App;
