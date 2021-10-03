import React from "react";
import HomePage from "./Homepage";
import AboutPage from "./AboutPage";
import CoursesPage from "./CoursesPage";
import Header from "./common/Header";
import { Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
