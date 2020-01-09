import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./Components/pages/home"
import Projects from "./Components/pages/projects"
import About from "./Components/pages/about"
import Footer from "./Components/Footer/footer"
import Contact from "./Components/pages/contact"


function App() {
  return (
    <Router>
      <div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          {/* <Route exact path="/link" component={Links} />
          
          <Route component={NoMatch} /> */}
        </Switch>
      </div>
      <Footer />
    </Router>

  );
}

export default App;