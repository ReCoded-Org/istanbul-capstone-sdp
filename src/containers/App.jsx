import React from "react";
import "./index.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "../components/home/Home";
import PsychoAssess from "../../src/containers/PsychoAssess/PsychoAssess";
import About from "../components/about/About";
import { Contact } from "../components/contact/Contact";
import Blogs from "../components/blogs/Blogs";
import { SignInUp } from "../components/signInUp/SignInUp";
import { Donation } from "../containers/donation/Donation";
import { NoMatch } from "../components/noMatch/NoMatch";
import { NavBar } from "../components/common/NavBar";
import { SingleBlogPage } from "../components/singleBlogPage/SingleBlogPage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/psycho-assess" component={PsychoAssess} />
          <Route path="/donation" component={Donation} />
          <Route exact path="/blogs" component={Blogs} />
          <Route path="/signinup" component={SignInUp} />
          <Route path="/blogs/:blogid" component={SingleBlogPage} />
          <Route path="/:id/blogs/:blogid" component={SingleBlogPage} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
