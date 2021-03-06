import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="container app__container">
          <div className="row app__row">
            <div className="col-lg-3 ">
              <Sidebar />
            </div>
            <div className="col-lg-9 app__main-content">
              <Navbar />
              <Switch>
                <Route path="/" exact>
                  <About />
                </Route>
                {/* <Route path="/resume" exact>
                  <Resume />
                </Route> */}
                <Route path="/projects" exact>
                  <Projects />
                </Route>
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
