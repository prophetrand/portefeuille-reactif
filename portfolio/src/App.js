import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import './App.css';

function App() {
  return (
    <div id="wrapper">
      <div id="content-wrap">
        <Router >
          <Header />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
          <Route exact path="*" component={Home} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;