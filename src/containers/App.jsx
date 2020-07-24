import React from "react";
import "./index.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "../components/home/Home";
import { About } from "../components/about/About";
import { Contact } from "../components/contact/Contact";
import { Blogs } from "../components/blogs/Blogs";
import { Assessment } from "../components/assessment/Assessment";
import { SignInUp } from "../components/signInUp/SignInUp";
import { Donation } from "../containers/donation/Donation";
import { NoMatch } from "../components/noMatch/NoMatch";
import { NavBar } from "../components/common/NavBar";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/assessment" component={Assessment} />
          <Route path="/donation" component={Donation} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/signInUp" component={SignInUp} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
