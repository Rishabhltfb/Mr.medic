import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./views/NavBar/NavBar";
import LandingPage from "./views/LandingPage/LandingPage";
import Discover from "./views/Discover/Discover";
import Footer from "./views/Footer/Footer";
import Login from "./views/Login/Login";
import Signup from './views/Signup/Signup'
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
