import React from 'react';
import './index.css';
import LangDropdown from "../components/LangDropdown";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "../components/home/Home";
import { About } from "../components/about/About";
import { Contact } from "../components/contact/Contact";
import { Blogs } from "../components/blogs/Blogs";
import { PsychoAssess } from "../../src/containers/PsychoAssess/PsychoAssess";
import { SignInUp } from "../components/signInUp/SignInUp";
import { Donation } from "../containers/donation/Donation";
import { NoMatch } from "../components/noMatch/NoMatch";
import { NavBar } from "../components/common/NavBar";
import { useTranslation } from "react-i18next";


function App() {
  const { t, i18n } = useTranslation();
  return (
    <React.Fragment>
      <div className="App">
      {t('Welcome.1')}
      <LangDropdown/>
      </div>
      
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/psychoAssess" component={PsychoAssess} />
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
