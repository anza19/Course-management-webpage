import React from "react";
import HomePage from "./Homepage";
import AboutPage from "./AboutPage";
import CoursesPage from "./CoursesPage";
import Header from "./common/Header";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/courses" exact component={CoursesPage} />
      <Route path="/about" exact component={AboutPage} />
    </div>
  );
};

export default App;
