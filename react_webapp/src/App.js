import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./views/NavBar/NavBar";
import LandingPage from "./views/LandingPage/LandingPage";
import Footer from "./views/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <LandingPage />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
